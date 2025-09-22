# Traitement du panier et détermination par l'algorithme de la meilleure répartition d'expéditions

__POST : {tenantId}/cart__

## Fonctionnement de l'algorithme

Cette fonction reçoit un objet de type __Cart__ (un panier d'articles, en format JSON passé dans le body de la requête) et détermine la meilleure répartition d'expéditions pour ce panier. Comme pour les autres objets d'entrées et de sorties du DO, son schéma détaillé est disponible dans le swagger du module.

Pour commencer, différents traitements s'exécutent afin de déterminer par quelles origines de stocks chacuns des articles contenus dans l'objet __Cart__ peuvent être expédiés. Si un ou plusieurs article ne peut être expédié par aucune origine de stock à la fin de tous les traitements, alors le panier est considéré comme non expédiable et le calcul de la répartition ne peut pas avoir lieux. Les lignes panier non expédiables sont renvoyés dans la liste __SFSResponse.nonShippable__. 

Si le __Cart__ en entrée possède le champ __excludeSplitComputation__ positionné à true (dans le cas où l'on souhaite juste savoir si tout le panier est expédiable) alors le calcul de répartition n'est pas effectué.

Autrement, une fois toutes les possibilités d'envois récupérées l'algorithme génère les combinaisons de répartitions possibles. Afin de choisir la répartition proposant les envois les plus pertinents on applique ensuite une liste de critères de tri.

Actuellement les critères sont les suivants, par ordre d'importance :
- Le minimum d'expéditions possibles
- La somme des priorités des __StockOrigins__ choisis
- La distance moyenne la plus faible entre les origines de stocks (emplacements d'expédition) et le client. Les coordonnées du client doivent être renseignées dans __Cart.shippingAddress__.

Une fois ce tri réalisé l'algorithme sélectionne la répartition la plus pertinente. La fonction renvoie finalement un objet de type __SFSResponse__ dont la structure est expliquée en détail dans le swagger.

## Exemple d'appel API

Le JSON suivant contient décrit l'objet __Cart__ à passer dans le body de l'appel API.

```json
{
  "articles": [
    {
      "artRef": "106780",
      "qty": 2
    },
    {
      "artRef": "236497",
      "qty": 1
    },
    {
      "artRef": "907330",
      "qty": 3
    },
    {
      "artRef": "924406",
      "qty": 1
    }
  ],
  "shippingAddress": {
    "lat": 48.86,
    "long": 2.34,
    "countryCode": "FRA",
    "zipCode": "00300"
  },
  "orderId": "f02ee9d2-99e6-489d-a490-734e73dd4828",
  "orderType": "Order"
}
```
Le champ __Cart.articles__ est obligatoire car il contient les différentes lignes du panier (__CartLine__). Pour qu'une ligne soit valide, l'un des champs __artGuid__ (le plus performant) ou __artRef__ (à limiter à des fins de tests) doit être renseigné ainsi que le champ __qty__ correspondant à la quantité de l'article commandé.

Le champ __shippingAddress__ contient les coordonnées du client et doit également être renseigné.
Enfin, il est nécessaire de renseigner à la fois le Guid de la commande via le champ __orderId__ ainsi que son type (__Cart__ ou __Order__) dans le champ __orderType__.

## Réponse du serveur

L'objet de réponse __SFSResponse__ se présente de la façon suivante :

```json
{
    "totalPriority": 150,
    "avgDistance": 98129.72166408185,
    "splits": [
        {
            "code": "FRA:MAG:0107",
            "articles": {
                "71ba9615-99fd-4524-aabf-8f83b463c7ce": {
                    "reason": "Normal Module",
                    "qty": 3
                }
            },
            "priority": 0,
            "coordinates": {
                "lat": 46.97035,
                "long": -1.33243
            }
        },
        {
            "code": "FRA:WEB:CENTRALE",
            "articles": {
                "fc4d7bee-ec31-4103-8175-979b2b4fa847": {
                    "reason": "Normal Module",
                    "qty": 2
                },
                "e3e90221-2d01-4d66-be16-5a2419bd84a9": {
                    "reason": "Normal Module",
                    "qty": 1
                },
                "03f3a22d-46ee-4a27-b45f-bf83f9f8c6ae": {
                    "reason": "Normal Module",
                    "qty": 1
                }
            },
            "priority": 50,
            "coordinates": null
        }
    ]
}
```
La répartition optimale est contenu dans le champ __splits__ de la réponse. Il s'agit d'un tableau de __ShipmentSplit__ contenant les expéditions à effectuer par les origines de stocks selectionnées. L'objectif premier du DeliveryOptimizer est de minimiser la taille de se tableau pour limiter le nombre d'expédition.

Un __ShipmentSplit__ contient les informations suivantes :
 - __code__, qui correspond au code de l'origine de stock sélectionnée
 - __articles__, qui contient un dictionnaire avec en clef le Guid de l'article et en valeur le champ __reason__ fournissant des informations sur le traitement à l'origine du résultat et le champ __qty__ contenant la quantités d'articles à expédier.
 - __priority__, contient à titre informatif la priorité de l'origine de stock, plus elle est élevée, plus cette origine sera prioritaire de le calcul de répartition.
 - __coordinates__, contient à titre informatif les coordonnées de l'origine de stock.

L'objet contient également deux champs justifiants le choix de cette répartition :
 - __totalPriority__, qui est la somme des priorités de chaque origine de stock pondérée par le nombre d'articles expédiés. L'objectif secondaire du DO est de maximiser ce nombre.
 - __avgDistance__, qui représente la distance moyenne des origines de stock pondérée par le nombre d'articles expédiés. L'objectif tertiaire du DO est de minimiser ce nombre.


## Limitation des envois à certaines origines de stocks

L'objet Cart permet également de limiter le calcul de répartitions à certaines origines de stocks :

- En fournissant la liste des codes de StockOrigins dans le champs __shipFrom__ (Exemple : ["FRA:FRN:EVIAN", "FRA:MAG:0001"]). De cette façon, seul ces deux origines de stocks seront retenues pour le calcul de répartitions, les autres seront ignorés.
- En fournissant le préfix des StockOrigins où comptabiliser le stock dans __prefix__ (Exemple : "FRA" ou "FRA:MAG"). Dans le cas où l'on renseigne le préfix avec "FRA" par exemple, seules les origines de stocks françaises seront retenues pour le calcul de répartitions. Si l'on renseigne "FRA:MAG", cette fois, seuls les magasins français seront retenus pour le calcul de répartions.

## Simulation d'une commande

Si l'objet __Cart__ en entrée a __isSimulated__ à true alors la commande n'est pas ajoutée après le calcul de la répartition. Autrement la commande est ajoutée si les champ __orderType__ et __orderId__ contenus dans le __Cart__ en entrée ne sont pas null.

Simuler une commande peut être utile si cette dernière possède des contraintes d'expéditions particulières telle que la nécessité d'être expédiée depuis une seule origine de stocks par exemple.
