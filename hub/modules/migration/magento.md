# Migration Magento

Les modules de migration proposent des points API vous permettant de conserver vos appels inchangés lors d'une migration depuis Magento 2.x.

## Module Stock

Il inclut les points suivants :

- `V1/stockItems/lowStock/` : [Obtenir tous les articles avec un stock "inférieur à"](https://devdocs.magento.com/redoc/2.2/#tag/stockItemslowStock) \[Expérimental\]
- `V1/stockItems/` : Fonctionnalité supplémentaire commune à de nombreuses extensions et permettant de mettre à jour les stocks des articles

### Gestion du stock

```text
GET /V1/stockItems/{productSku}
```
vous permet de récupérer le stock d'un article
```text
{

    "item_id": 0,
    "product_id": 0,
    "stock_id": 0,
    "qty": 0,
    "is_in_stock": true,
    "is_qty_decimal": true,
    "show_default_notification_message": true,
    "use_config_min_qty": true,
    "min_qty": 0,
    "use_config_min_sale_qty": 0,
    "min_sale_qty": 0,
    "use_config_max_sale_qty": true,
    "max_sale_qty": 0,
    "use_config_backorders": true,
    "backorders": 0,
    "use_config_notify_stock_qty": true,
    "notify_stock_qty": 0,
    "use_config_qty_increments": true,
    "qty_increments": 0,
    "use_config_enable_qty_inc": true,
    "enable_qty_increments": true,
    "use_config_manage_stock": true,
    "manage_stock": true,
    "low_stock_date": "string",
    "is_decimal_divided": true,
    "stock_status_changed_auto": 0,
}
```

Certaines données sont figées, soit parce que cette notion n'est pas reprise dans Alatzion, soit parce que le mode de fonctionnement diffère :
- `use_config_notify_stock_qty` , `notify_stock_qty` & `low_stock_date` : les notifications de "stock bas" sont gérés dans la partie "approvisionnement" et suivent des règles spécifiques
- `use_config_enable_qty_inc` & `enable_qty_increments` : bien que gérée, la notion "d'unité commandable", n'est pas disponible au travers de l'API Magento
- `stock_status_changed_auto` : toujours à `true` 

> [!WARNING]
> Dans nos solutions, l'identifant d'article est un Guid. Les identifants fournis dans les différents points retournant un item_id ne doit pas être utilisé en dehors des APIs de migration Magento.

#### Différences notables avec l'API Magento

TBD.

## Module Produits

Ce module vous permet d'obtenir ou de définir une partie des informations produits en utilisants le formalisme de Magento.

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

#### Utiliser le module

Si vous souhaitez déployer par vous même le module (par exemple sur un environnement de test), vous pouvez :

- soit utiliser les cmdlets powershell pour déployer le module sur un serveur Windows ou Linux exécutant Altazion Hub Server

```Powershell
Get-AltazionHubModule Altazion.Hub.Magento.Products | Deploy-AltazionHubModule -Server localhost
```

La configuration et les connexions seront automatiquement récupérées depuis les paramètres du serveur.

- soit utilliser le container `altazion/hub-migration-magento-products`([lien docker hub](https://hub.docker.com/r/altazion/hub-migration-magento-products))

## Module Commande