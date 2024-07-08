# Gestion des commandes

## Ajout/Mise à jour d'une commande

__POST : {tenantId}/order__

Cette fonction reçoit un objet de type __Order__ (en format JSON dans le body de la requête) et l'ajoute en base si elle n'existe pas ou la __redéfini entièrement__ si elle existe en patchant les __Articles__ et __StockOrigins__ concernés.

### Exemple d'appel API

L'exemple ci-dessous décrit l'objet __Order__ à passer dans le body et les champs qu'il contient. Tous les champs sont __obligatoires__

```json
{
  "orderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "type": "Order",
  "details": [
    {
      "code": "FRA:MAG:0125",
      "artGuid": "c420a0b0-fd50-446a-b2e0-18ab3bf4c460",
      "qty": 1
    },
    {
      "code": "FRA:MAG:0953",
      "artGuid": "4128d10e-1594-42a7-8c79-bde5181a20f5",
      "qty": 2
    }
  ]
}
```
Le champ __orderId__ contient le Guid de la commande et __type__ contient le type de commande (Order, Cart ou ExternalOrder).
Le contenu de la commande se trouve dans le champ __details__. Il s'agit d'un tableau de __OrderDetail__ structuré comme ceci :
 - __code__ qui correspond au code de l'origine de stock qui traitera l'article
 - __artGuid__, l'identifiant unique de l'article à traiter
 - __qty__, la quantité d'article à expédier


### Réponse du serveur

La méthode renvoie un booléen pour indiquer le succès de l'opération.

## Suppression d'une commande

__DELETE : {tenantId}/order/byid/{idCommande}__

Supprime une commande par son Guid. Cette méthode est typiquement utilisée lorsqu'un client décide de supprimer un panier en cours ou que le panier expire sur le site.

La méthode renvoie un booléen pour indiquer le succès de l'opération.

## Suppression d'une commande par code d'origine de stock

__DELETE : {tenantId}/order/byid/{idCommande}/code/{code}__

Lorsqu'une expédition est effectuée par une origine de stock il est nécessaire de supprimer la partie de la commande associée à cet emplacement (__OrderDetail__) afin d'en réduire la saturation. Pour cela on passe le tenantId, l'id de la commande ainsi que le code de l'origine de stock.

Il est également judicieux d'utiliser cette méthode pour supprimer une commande de type e-resa (avec retrait en magasin) puisse que l'intégralité de la commande est expédiée par une origine de stock magasin dont on connait le code.

La méthode renvoie un booléen pour indiquer le succès de l'opération.

## Récupération d'une commande par son Id

__GET : {tenantId}/order/{orderId}__

Permet d'obtenir un objet __Order__ décrivant l'état actuel d'une commande ou d'un panier ayant été enregistrée en base dans les __Articles__ et __StockOrigins__. L'état d'une commande varie au fur et à mesure que les __OrderDetail__ qui la compose sont expédiés.