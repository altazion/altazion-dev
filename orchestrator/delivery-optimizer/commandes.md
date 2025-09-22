# Gestion des commandes

## Synchronisation périodique interne des commandes avec MongoDB

Les commandes stockées dans REDIS doivent être régulièrement synchronisées avec MongoDB afin de garantir la persistance des données.
Pour cela Delivery Optimizer déclenche un batch de synchronisation toutes les dix minutes. Celui-ci va, pour chaque raison juridique (tenant) exécuter les opérations suivantes :

- Regarder si sa __ConfigDo.enableInternalOrderSync__ est positionnée à true, si non, le traitement s'arrête pour se tenant et le batch passe au tenant suivant.
- Récupérer les commandes en cours sur REDIS.
- Enregistrer ces commandes dans MongoDB.

Vous pouvez désactiver cette synchronisation automatique en positionnant __ConfigDo.enableInternalOrderSync__ à false.

## Upsert (Ajout/Mise à jour) d'une commande

__POST : {tenantId}/order__

Cette fonction reçoit un objet de type __Order__ (en format JSON dans le body de la requête) et l'ajoute en base si elle n'existe pas ou la __redéfini entièrement__ si elle existe.

### Exemple d'appel API

L'exemple ci-dessous décrit l'objet __Order__ à passer dans le body et les champs qu'il contient. Tous les champs excepté __expiresAt__ sont __obligatoires__

```json
{
  "orderId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "tenantId": 0,
  "lastUpdated": "2025-09-22T10:01:20.624Z",
  "expiresAt": "2025-09-23T11:01:20.624Z",
  "type": "Order",
  "lines": [
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
Le champ __orderId__ contient le Guid de la commande, __tenantId__ l'identifiant du client. __type__ correspond au le type de commande (Order, Cart ou ExternalOrder). __lastUpdated__ indique la dernière date de modification de la commande et __expiresAt__ (optionnel) sa date d'expiration si elle est renseignée.
Le contenu de la commande se trouve dans le champ __lines__. Il s'agit d'un tableau de __OrderLine__ structuré comme ceci :
 - __code__ qui correspond au code de l'origine de stock qui traitera l'article
 - __artGuid__, l'identifiant unique de l'article à traiter
 - __qty__, la quantité d'article à expédier


### Réponse du serveur

La méthode renvoie un booléen : True si la commande a été ajoutée, false si elle existait déjà et a été modifiée

## Replacement de toutes les commandes

__PUT : {tenantId}/orders__

Cette fonction reçoit un tableau d'objets de type __Order__ (en format JSON dans le body de la requête). Elle permet de remplacer __toutes__ les commandes contenues dans les bases Redis et Mongo par celles envoyées dans le body.

## Suppression d'une commande

__DELETE : {tenantId}/order/byid/{idCommande}__

Supprime une commande par son Guid. Cette méthode est typiquement utilisée lorsqu'un client décide de supprimer un panier en cours ou que le panier expire sur le site.

La méthode renvoie un booléen : True si la commande a été trouvée et supprimée, false si elle n'existe pas en base.

## Suppression d'une commande par code d'origine de stock

__DELETE : {tenantId}/order/byid/{idCommande}/code/{code}__

Lorsqu'une expédition est effectuée par une origine de stock il est nécessaire de supprimer la partie de la commande associée à cet emplacement (__OrderLine__) afin d'en réduire la saturation. Pour cela on passe le tenantId, l'id de la commande ainsi que le code de l'origine de stock.

Il est également judicieux d'utiliser cette méthode pour supprimer une commande de type e-resa (avec retrait en magasin) puisse que l'intégralité de la commande est expédiée par une origine de stock magasin dont on connait le code. À noter qu'une commande qui ne contient plus aucune ligne est supprimée.

La méthode renvoie un booléen : True si la commande a été trouvée et que les lignes ont été supprimées, false si elle n'existe pas en base.

## Récupération d'une commande par son Id

__GET : {tenantId}/order/{orderId}__

Permet d'obtenir un objet __Order__ décrivant l'état actuel d'une commande ou d'un panier ayant été enregistrée en base dans les __Articles__ et __StockOrigins__. L'état d'une commande varie au fur et à mesure que les __OrderLine__ qui la compose sont expédiés.