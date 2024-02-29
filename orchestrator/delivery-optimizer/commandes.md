# Gestion des commandes

## Ajout/Mise à jour d'une commande

__POST : {tenantId}/order__

Cette fonction reçoit un objet de type __Order__ et l'ajoute en base si elle n'existe pas ou la modifie si elle existe en patchant les __Articles__ et __StockOrigins__ concernés.

### Exemple d'appel API

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

### Réponse du serveur

La méthode renvoie un booléen pour indiquer le succès de l'opération.

## Suppression d'une commande

__DELETE : {tenantId}/order/byid/{idCommande}__

Supprime une commande par son Guid. Cette méthode est typiquement utilisée lorsqu'un client décide de supprimer un panier en cours ou que le panier expire sur le site.

La méthode renvoie un booléen pour indiquer le succès de l'opération.

## Suppression d'une commande par code d'emplacement

__DELETE : {tenantId}/order/byid/{idCommande}/code/{code}__

Lorsqu'une expédition est effectuée par un emplacement il est nécessaire de supprimer la partie de la commande associée à cet emplacement afin d'en réduire la saturation. Pour cela on passe le tenantId, l'id de la commande ainsi que le code de l'emplacement.

Il est également judicieux d'utiliser cette méthode pour supprimer une commande de type e-resa (avec retrait en magasin) puisse que l'intégralité de la commande est expédiée par un emplacement magasin dont on connait le code.

La méthode renvoie un booléen pour indiquer le succès de l'opération.

## Récupération d'une commande par son Id

__GET : {tenantId}/order/{orderId}__

Permet de reconstituer une commande ayant été enregistrée en base dans les __Articles__ et __StockOrigins__. Cette méthode est par définition non optimale et doit être utilisée à des fins de tests ou de vérifications manuelles.