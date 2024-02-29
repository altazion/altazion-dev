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

### Exemple d'appel API

Le JSON suivant contient décrit l'objet __Cart__ à passer dans le body de l'appel API.

```json
{
  "articles": [
    {
      "artRef": "000700",
      "qty": 2
    },
    {
      "artGuid": "c420a0b0-fd50-446a-b2e0-18ab3bf4c460",
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
  "orderType": "Cart"
}
```
Le champ __Cart.articles__ est obligatoire car il contient les différentes lignes du panier (__CartLine__). Pour qu'une ligne soit valide, l'un des champs __artGuid__ ou __artRef__ doit être renseigné ainsi que le champ __qty__ correspondant à la quantité de l'article commandé.

Le champ __shippingAddress__ contient les coordonnées du client et doit également être renseigné.
Enfin, il est nécessaire de renseigner à la fois le Guid de la commande via le champ __orderId__ ainsi que son type (__Cart__ ou __Order__) dans le champ __orderType__.

### Réponse du serveur

L'objet de réponse __SFSResponse__ se présente de la façon suivante :

```json
{
    "simulated": false,
    "nonShippable": null,
    "otherSuggestedShipments": null,
    "totalPriority": 100,
    "avgDistance": 0,
    "splits": [
        {
            "code": "FRA:MAG:0125",
            "articles": {
                "c420a0b0-fd50-446a-b2e0-18ab3bf4c460": {
                    "reason": "Normal Module",
                    "qty": 1
                },
                "4128d10e-1594-42a7-8c79-bde5181a20f5": {
                    "reason": "Normal Module",
                    "qty": 2
                }
            },
            "priority": 50,
            "coordinates": null
        }
    ],
    "stockDetails": null
}
```

## Limitation des envois à certaines origines de stocks

L'objet Cart permet également de limiter le calcul de répartitions à certaines origines de stocks :

- En fournissant la liste des codes de StockOrigins dans le champs __shipFrom__ (Exemple : ["FRA:FRN:EVIAN", "FRA:MAG:0001"]). De cette façon, seul ces deux origines de stocks seront retenues pour le calcul de répartitions, les autres seront ignorés.
- En fournissant le préfix des StockOrigins où comptabiliser le stock dans __prefix__ (Exemple : "FRA" ou "FRA:MAG"). Dans le cas où l'on renseigne le préfix avec "FRA" par exemple, seules les origines de stocks françaises seront retenues pour le calcul de répartitions. Si l'on renseigne "FRA:MAG", cette fois, seuls les magasins français seront retenus pour le calcul de répartions.

## Simulation d'une commande

Si l'objet __Cart__ en entrée a __isSimulated__ à true alors la commande n'est pas ajoutée après le calcul de la répartition. Autrement la commande est ajoutée si les champ __orderType__ et __orderId__ contenus dans le __Cart__ en entrée ne sont pas null.

Simuler une commande peut être utile si cette dernière possède des contraintes d'expéditions particulières telle que la nécessité d'être expédiée depuis une seule origine de stocks par exemple.

## Ajout de détails pour simplifier le débogage et l'intégration du calcul de répartitions

Si l'objet __Cart__ en entrée possède le champ __isDebug__ à true, l'algorithme va également fournir les 5 meilleures expéditions suivantes résultant au même nombre d'expéditions. Elles seront renvoyées dans la liste __SFSResponse.nextReps__. Un dictionnaire contenant le détail des stocks disponibles des articles du panier pour chaque origine de stocks est également fourni. Il est déconseillé de laisser ce champ à true en production.
