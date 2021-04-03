# Migration Magento

## Module Stock

## Module Prix 

Le module `Altazion.Hub.Magento.Products` inclut des points API vous permettant de conserver vos appels inchangés lors d'une migration depuis Magento 2.x.

Il inclut les points suivants :

* `V1/products/base-prices-information` : [obtenir les informations de prix "hors promo" pour des articles](https://devdocs.magento.com/redoc/2.2/#tag/productsbase-prices)
* `V1/products/base-prices` : [modifier le prix "hors promo" d'un ensemble de produit sur un ensemble de canaux de ventes e-commerce](https://devdocs.magento.com/redoc/2.2/#tag/productsbase-prices-information)
* `V1/products/special-price-information` : [obtenir les informations de prix promotionnels pour un ensemble d'article](https://devdocs.magento.com/redoc/2.2/#tag/productsspecial-price-information)
* `V1/products/special-price` : [modifier le prix promotionnel (et les dates) d'un ensemble de produit sur un ensemble de canaux de ventes e-commerce](https://devdocs.magento.com/redoc/2.2/#tag/productsspecial-price)
* `V1/products/special-price-delete` : [supprime le prix promotionnel pour un ensemble de produits.](https://devdocs.magento.com/redoc/2.2/#tag/productsspecial-price-delete)

### Gestion des prix de base

```text
POST /V1/products/base-prices-information
{ 
    "skus":[
        "ref1",
        "ref2"
    ]
}
```
vous permet de récupérer les prix de bases
```text
[
    {
        "price": 14.85,
        "store_id": 1,
        "sku": "ref1"
    },
    {
        "price": 14.02,
        "store_id": 2,
        "sku": "ref2"
    },
    {
        "price": 13.21,
        "store_id": 1,
        "sku": "ref2"
    }
    ...
]
```

Pour chaque article, vous aurez en retour une ligne pour chaque canal de vente  e-commerce (pour chaque site) configuré. Les articles non publiés, archivés ou en élaboration sont retournés par cette API. Les articles dont le mode _utilisable sur Internet_ n'est pas activé sont ignorés.

```text
POST /V1/products/base-prices-information
{ 
    "skus":[
        "ref1",
        "ref2"
    ]
}
```
modifie les prix de base des articles
```text
[]
```
ou en cas d'erreurs :
```text
[
    {
        "message": "Invalid attribute %fieldName = %fieldValue. SKU not found.",
        "parameters": [
            "SKU",
            "INEXISTANT"
        ]
    },
    {
        "message": "Requested store is not found. Row ID: SKU = INEXISTANT, Store ID: 7",
        "parameters": [
            null,
            "7"
        ]
    }
]
```

Si toutes les modifications de prix ont pu être validées, vous recevrez en retour un tableau vide. Vous pouvez aussi recevoir une ou plusieurs erreurs pour chaque produits.

|erreurs|
|---|
|`Requested store is not found. Row ID: SKU = ------, Store ID: -` : le magasin n'existe pas|
|`Invalid attribute %fieldName = %fieldValue. -------` : la référence n'est pas reconnue|

#### Différences notables avec l'API Magento

* lorsque votre JSON est invalide, vous recevrez un message provenant du framework .net vous expliquant les anomalies
* si votre JSON ne correspond pas au bon format (mais qu'il reste un JSON valide), le message d'erreur en http 400 est plus générique que celui de Magento
* le message lors d'une erreur sur le SKU contient une information supplémentaire pour préciser le problème

## Module Commande