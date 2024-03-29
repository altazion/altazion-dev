# Migration Magento - Module produits

Le module API Products permet de réaliser des opérations sur les articles en utilisant le formalisme des appels API vers Magento 2.X.

## Stocks

Ces points API incluent les fonctionnalités suivantes :

- `V1/stockItems/{productSku}` : Obtenir les infos de stock d'un article [(doc magento)](https://devdocs.magento.com/redoc/2.2/#tag/stockItemsproductSku)
- `V1/stockItems/lowStock/` : Obtenir tous les articles avec un stock "inférieur à" [(doc magento)](https://devdocs.magento.com/redoc/2.2/#tag/stockItemslowStock) \[Expérimental\]
- `V1/stockItems/depot/{depotId}` : Point API suivant un formalisme Magento et permettant de définir le stock propre d'un produit
- `V1/stockItems/external/{supplierId}` : Point API suivant un formalisme Magento et permettant de définir le stock externalisé (drop shipping, ou préparation sur stock du groupe) d'un produit

### Gestion du stock

```text
GET /V1/stockItems/{productSku}
```
vous permet de récupérer le stock d'un article
```text
{

    "item_id": 14741,
    "product_id": 14741,
    "stock_id": 1,
    "qty": 13,
    "is_in_stock": true,
    "is_qty_decimal": false,
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
    "is_decimal_divided": false,
    "stock_status_changed_auto": 0,
}
```

Certaines données sont figées, soit parce que cette notion n'est pas reprise dans Alatzion, soit parce que le mode de fonctionnement diffère :
- `use_config_notify_stock_qty` , `notify_stock_qty` & `low_stock_date` : les notifications de "stock bas" sont gérés dans la partie "approvisionnement" et suivent des règles spécifiques
- `use_config_enable_qty_inc` & `enable_qty_increments` : bien que gérée, la notion "d'unité commandable", n'est pas disponible au travers de l'API Magento
- `stock_status_changed_auto` : toujours à `0` 

> [!NOTE]
> Dans nos solutions, l'identifant d'article est un Guid. Les identifants fournis dans les différents points retournant un item_id ne doit pas être utilisé en dehors des APIs de migration Magento.
>
> Le stock retourné pour ce point API correspond à la somme de tous les stocks pour les zones de préparation activées pour le e-commerce.


```text
POST /V1/stockItems/depot/{depotId}
{ 
    "stockItems":[
        {
            "sku":"ref1",
            "qty":3 
        },
        {
            "sku":"ref2",
            "qty":3 
        }
        ...
    ]
}
```
modifie les stocks des articles dans le dépot donné
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
    }
]
```

|erreurs|
|---|
|`Invalid attribute %fieldName = %fieldValue. -------` : la référence n'est pas reconnue|
|`SKU ----- id not configured to be in a depot` : le produit n'est pas en mode "stocké"|


```text
POST /V1/stockItems/external/{supplierId}
{ 
    "stockItems":[
        {
            "sku":"ref1",
            "qty":3 
        },
        {
            "sku":"ref2",
            "qty":3 
        }
        ...
    ]
}
```
modifie les stocks des articles pour le fournisseur donné
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
    }
]
```

|erreurs|
|---|
|`Invalid attribute %fieldName = %fieldValue. -------` : la référence n'est pas reconnue|
|`SKU ---- id not associated with supplier ---` : le produit n'est associé à ce fournisseur|

### Différences notables avec l'API Magento

* Le point api d'obtention des informations produits présente des spécificités (cf. ci-dessus) dues aux différences entre Magento et Altazion.
* Des points API supplémentaires, respectant le formalisme général de Magento ont été ajoutés pour gérer les stocks en dépot ou les stocks des fournisseurs.

> [!NOTE]
> Vous pouvez désactiver les erreurs de type "produits inconnus" et/ou "non associés à ...".
>
> Pour cela, ajoutez un paramètre `ignoreUnknownRefs=true` aux appels, par exemple `/V1/stockItems/depot/147?ignoreUnknownRefs=true`

## Module Prix

Ce module vous permet d'obtenir ou de définir une partie des informations produits en utilisants le formalisme de Magento.

Il inclut les points suivants :

* `V1/products/base-prices-information` : obtenir les informations de prix "hors promo" pour des articles [(doc magento)](https://devdocs.magento.com/redoc/2.2/#tag/productsbase-prices)
* `V1/products/base-prices` : modifier le prix "hors promo" d'un ensemble de produit sur un ensemble de canaux de ventes e-commerce [(doc magento)](https://devdocs.magento.com/redoc/2.2/#tag/productsbase-prices-information)
* `V1/products/special-price-information` : obtenir les informations de prix promotionnels pour un ensemble d'article [(doc magento)](https://devdocs.magento.com/redoc/2.2/#tag/productsspecial-price-information)
* `V1/products/special-price` : modifier le prix promotionnel (et les dates) d'un ensemble de produit sur un ensemble de canaux de ventes e-commerce [(doc magento)](https://devdocs.magento.com/redoc/2.2/#tag/productsspecial-price)
* `V1/products/special-price-delete` : supprime le prix promotionnel pour un ensemble de produits. [(doc magento)](https://devdocs.magento.com/redoc/2.2/#tag/productsspecial-price-delete)

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

> [!NOTE]
> Vous pouvez définir des prix sur un article qui est encore en cours de création (ou qui n'a pas encore été importé si vous utilisez les échanges EDI avec un système tiers) : les informations de prix seront conservées et appliquées lorsque cette référence sera validée/importée.
>
> Pour cela, ajoutez un paramètre `ignoreUnknownRefs=true` aux appels, par exemple `/V1/products/base-prices?ignoreUnknownRefs=true`

```text
POST /V1/products/base-prices
 
{
  "prices": [
    {
      "price": 14.02,
      "store_id": 1,
      "sku": "ref1"
    },
    {
      "price": 14.02,
      "store_id": 1,
      "sku": "ref2"
    }
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

Si toutes les modifications de prix ont pu être validées, vous recevrez en retour un tableau vide. Vous pouvez aussi recevoir une ou plusieurs erreurs pour chaque produits. Tous les changements de prix valides sont pris en compte, même si votre flux comporte des erreurs : seuls les enregistrements invalides seront ignorés.

|erreurs|
|---|
|`Requested store is not found. Row ID: SKU = ------, Store ID: -` : le magasin n'existe pas|
|`Invalid attribute %fieldName = %fieldValue. -------` : la référence n'est pas reconnue ou le prix est invalide ( < 0 par exemple)|

### Gestion des prix spéciaux

La gestion des prix spéciaux est directement connectée à la gestion des prix promotionnel par canal de vente dans nos solutions. Ces points API permettront donc de mettre à jour les informations de prix promotionnel pour les sites ecommerce. 

> [!NOTE]
> Les prix promos expirent automatiquement dans les 2 jours suivants la date de leur fin d'applications, vous n'avez pas besoin de réaliser un appel API pour traiter les promotions expirées.
>
> Vous pouvez définir des prix promos sur un article qui est encore en cours de création (ou qui n'a pas encore été importé si vous utilisez les échanges EDI avec un système tiers) : les informations de prix seront conservées et appliquées lorsque cette référence sera validée/importée.
>
> Pour cela, ajoutez un paramètre `ignoreUnknownRefs=true` aux appels, par exemple `/V1/products/base-prices?ignoreUnknownRefs=true`

> [!WARNING]
> Attention, les prix spéciaux définit par ce point API peuvent être "surchargés" par d'autres conditions tarifaires, comme par exemple une grille de tarif.


```text
POST /V1/products/special-price-information
{ 
    "skus":[
        "ref1",
        "ref2"
    ]
}
```
vous permet de récupérer les prix "promos"
```text
[
     {
        "price": 12.00,
        "store_id": 1,
        "sku": "ref1",
        "price_from": "2017-06-05 00:00:00",
        "price_to": "2029-06-16 23:59:00"
    },
    {
        "price": 12.10,
        "store_id": 2,
        "sku": "ref1",
        "price_from": "2017-06-20 00:00:00",
        "price_to": "2028-02-03 23:59:00"
    },
]
```

Vous récupérerez un item pour chaque prix promo défini pour un canal de vente e-commerce. Si un article n'a pas de prix promotionnel, il ne sera pas présent dans le flux de retour.


|erreurs|
|---|
|`Requested store is not found. Row ID: SKU = ------, Store ID: -` : le magasin n'existe pas|
|`Invalid attribute %fieldName = %fieldValue. -------` : la référence n'est pas reconnue ou le prix est invalide ( < 0 par exemple)|
|`Invalid date range for special-price.` : la plage de date est invalide (date de début < date de fin par exemple)|

```text
POST /V1/products/special-price
 
{
  "prices": [
    {
      "price": 11.00,
      "store_id": 1,
      "sku": "ref1",
      "price_from":"2020-01-01 00:00:00",
      "price_tp":"2040-01-01 00:00:00",
    }
  ]
}
```
modifie les prix promotionnels d'un ensemble de produits
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


```text
POST /V1/products/special-price-delete
 
{
  "prices": [
    {
      "store_id": 1,
      "sku": "ref1",
    }
  ]
}
```
retire les prix promotionnels sur toutes les références fournies
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



### Différences notables avec l'API Magento

* lorsque votre JSON est invalide, vous recevrez un message provenant du framework .net vous expliquant les anomalies
* si votre JSON ne correspond pas au bon format (mais qu'il reste un JSON valide), le message d'erreur en http 400 est plus générique que celui de Magento
* le message lors d'une erreur sur le SKU contient une information supplémentaire pour préciser le problème
* lors de l'utilisation d'un special-price, les plages de dates invalides sont retournées comme des erreurs.
* les prix spéciaux expirés sont nettoyés de façon régulière des tables et peuvent donc ne plus être retourné par le point `special-price-information` quelques heures après la fin de leur période d'application.

> [!WARNING]
> Attention, les prix que vous importez par ce module ne sont pas appliqués en temps réel : un décalage de quelques secondes est à prendre en compte après l'envoi de données via un point API pour voir les données modifiées dans Altazion Office ou dans Altazion Commerce.
>
> Les points API sont, eux, par contre synchronisés de façon à fournir un résultat cohérent si vous appelez (par exemple) `base-prices-information` après avoir envoyé des données à `base-prices`.

## Utiliser le module

Si vous souhaitez déployer par vous même le module (par exemple sur un environnement de test), vous pouvez :

- soit utiliser les cmdlets powershell pour déployer le module sur un serveur Windows ou Linux exécutant Altazion Hub Server

```Powershell
Get-AltazionHubModule Altazion.Hub.Magento.Products | Deploy-AltazionHubModule -Server localhost
```

La configuration et les connexions seront automatiquement récupérées depuis les paramètres du serveur.

- soit utilliser le container `altazion/hub-migration-magento-products`([lien docker hub](https://hub.docker.com/r/altazion/hub-migration-magento-products))
