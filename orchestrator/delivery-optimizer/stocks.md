# Récupération des stocks et de la quantité maximale commandable

## Généralités

Cette fonctionnalité permet de connaître le détail des stocks disponibles pour un ou plusieurs articles dans toutes les origines de stocks non saturés. Seuls sont comptabilisés les stocks supérieurs à 0. Un objet ou un tableau d'objets de type __StockQuery__ formaté en JSON contenant les détails de la recherche à effectuer doit être fourni dans le body de la requête API.

Celui-ci doit contenir l'un des trois champs suivant pour être valide :

 - Le Guid de l'article, __artId__ (préférablement)
 - La référence de l'article, __artRef__
 - La clef primaire de l'article, __artPk__

Le champ __orderId__ correspond à l'identifiant (Guid) d'une commande. S'il est renseigné, les stocks déjà reservés sur l'article par cette commande ne seront pas déduis afin de ne pas fausser le résultat du calcul de stock. Ce champ est à renseigner dès que le client final à l'origine de la requête a commencé un panier ou une commande.

## Limitation du calcul de stock à certaines origines de stocks

L'objet __StockQuery__ permet de limiter la recherche des stocks à certaines origines de stock :
- En fournissant une liste de codes d'origines où comptabiliser le stock dans le champ __shipFrom__ (Exemple : ["FRA:FRN:EVIAN", "FRA:MAG:0001"]). De cette façon, seul ces deux origines de stocks seront retenues pour le calcul des stocks, les autres seront ignorés.
- En fournissant une préfix des origines où comptabiliser le stock dans le champ __prefix__ (Exemple : "FRA" ou "FRA:MAG"). Dans le cas où l'on renseigne le préfix avec "FRA" par exemple, seules les origines de stocks françaises seront retenues pour le calcul des stocks. Si l'on renseigne "FRA:MAG" (MAG = Magasin), cette fois, seuls les magasins français seront utilisés pour comptabiliser les stocks.

## Impact de la configuration de l'utilisateur du DO sur le calcul des stocks

À noter que __maxQuantity.maxOrderable__ peut varier en fonction de la configuration du module DO du tenant. Le champ __SFSConfig.maxOrderableType__ associé au tenant est une énumération qui définie le comportement à adopter par l'algorithme.

 - __MINIMUM__ : Correspond au stock de l'origine de stock où il est le plus faible
 - __MAXIMUM__ : Correspond au stock de l'origine de stock où il est le plus élevé
 - __TOP70PCT__ : Prend 70% du stock de l'origine de stock où il est le plus élevé

##  Obtenir les stocks pour un article
__POST : {tenantId}/stocks__

### Cas d'utilisations

- Arrivée sur une fiche produit
- Obtention des stocks d'un article avant ajout au panier

Il s'agit d'un appel API léger et très performant. 

__ATTENTION :__ Si vous avez besoin d'obtenir les stocks de plusieurs articles, nous vous conseillons d'utiliser l'appel __multiple-stocks__ décrit plus bas. Il est conçu pour ce cas de figure et sera par conséquent beaucoup plus rapide à s'exécuter que de multiples appels au point __stocks__.

### Exemple d'un appel API

Le body suivant contient un objet de type __StockQuery__. Celui-ci correspond à une demande de stocks pour l'article dont le Guid est "4128d10e-1594-42a7-8c79-bde5181a20f5" en ignorant les stocks déduits pour la commande ou le panier dont le Guid est "3fa85f64-5717-4562-b3fc-2c963f66afa6".

```json
{
  "artId": "4128d10e-1594-42a7-8c79-bde5181a20f5",
  "orderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

### Réponse du DO

En retour la fonction va renvoyer un objet de type __StockResponse__.

```json
{
  "maxQty": {
    "available": 1847,
    "maxOrderable": 26,
    "code": "FRA:MAG:0700",
    "reason": "Quantité disponible restante"
  },
  "stocksDetails": null
}
```
Cette réponse contient l'objet __maxQty__ qui dispose des champs suivants :
 - __available__ : la somme de tous les stocks disponibles
 - __maxOrderable__ : la quantité maximum commandable en une fois
 - __code__ : l'origine de stock à laquelle correspond la quantité obtenue dans le champ __maxOrderable__
 - __reason__ : une explication sur la quantité obtenue dans le champ __maxOrderable__ et le choix de l'origine de stocks __code__. Ici il s'agit de la quantité disponible restante dans l'origine de stock "FRA:MAG:0700"

##  Obtenir les stocks pour plusieurs articles
__POST : {tenantId}/multiple-stocks__

### Cas d'utilisations

- Disposer des stocks disponibles dans la descente produits

### Exemple d'un appel API

Le body suivant contient un tableau d'objets de type __StockQuery__.

```json
[
  {
    "artId": "4128d10e-1594-42a7-8c79-bde5181a20f5",
    "orderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  {
    "artId": "ddace66f-52c5-4530-bcf8-4af4a6002182",
    "orderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  {
    "artId": "b618e1a1-587b-4e7e-b87b-6ec891073bb9",
    "orderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
]
```

### Réponse du DO

En retour la fonction va renvoyer un __dictionnaire__ avec le Guid de chaque article en clef et l'objet de type __StockResponse__ correspondant en valeur.

__ATTENTION__ : les __artId__ fournis dans le body de la requête API n'existant pas en base ne sont pas renvoyés dans la réponse de l'appel. Il est donc important de tester si la clef existe dans la réponse dans votre code avant d'utiliser la valeur.

Ici l'__artId__ "b618e1a1-587b-4e7e-b87b-6ec891073bb9" figurant en 3ème position du tableau de la requête n'existe pas en base, il n'apparaît donc pas dans la réponse :

```json
{
  "ddace66f-52c5-4530-bcf8-4af4a6002182": {
    "maxQty": {
      "available": 641,
      "maxOrderable": 47,
      "reason": "Quantité disponible restante",
      "code": "FRA:WEB:CENTRALE"
    },
    "stocksDetails": null
  },
  "4128d10e-1594-42a7-8c79-bde5181a20f5": {
    "maxQty": {
      "available": 2101,
      "maxOrderable": 264,
      "reason": "Quantité disponible restante",
      "code": "FRA:WEB:CENTRALE"
    },
    "stocksDetails": null
  }
}
```