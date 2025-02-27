# Historique des mouvements de stock

## Généralités

Le module de traitement des stocks de Unified Stock permet de conserver un historique des stocks reçus depuis les sources d'approvisionnement ou des modules d'intégrations de stocks en les enregistrant dans un stream REDIS sur la base __DB1__. Cet historique permet de garder une trace temporaire des opérations dans Unified Stock et peut-être interrogé afin d'être stocké à long terme ou à des fins de diagnostic.

__Attention :__ l'historique est réinitialisé à chaque fois que le cache REDIS est vidé, il ne s'agit donc pas d'une solution de stockage à long terme.

Cette historisation est automatique et se fait sur réception de nouvelles données de stocks depuis les sources d'approvisionnement, les modules d'intégrations de stocks ou encore les APIs.

Les mouvements de stocks enregistrés dans le stream contiennent :
- La date de l'enregistrement précise à la milliseconde dans REDIS. __Attention, il ne s'agit pas de la date où le mouvement a eu lieu dans l'emplacement.__
- Le rang d'enregistrement. Si plusieurs mouvements sont sauvegardés durant la même milliseconde, cela permet de les classer par ordre d'enregistrement.
- La référence de l'article.
- Le code de l'emplacement.
- Le type d'emplacement.
- La quantité disponible en stock.

__Attention__, seuls les changements de quantités en stocks qui parviennent au module d'intégration des stocks sont effectivement enregistrés.

Dans le cadre de l'exécution des sources d'approvisionnement, seul les stocks considérés comme __valides__ sont envoyés à Unified Stock. De plus la configuration de l'option __UnifiedStockIncludeIgnoredStocks__ influe également sur le nombre de stocks envoyés à US. Pour plus d'information, consultez les sections de documentation dédiées.

De plus si vous constatez des disparités entre les mouvements de stocks dans vos emplacements et ceux historisés par Unified Stock en journée, cela peut indiquer un disfonctionnement de vos modules d'intégrations de stocks spécifiques.

## Point API principaux

Le module de traitement des stocks dispose d'APIs permettant d'interroger l'historique des mouvements de stocks.

![Interface SwaggerUi StockMovements](img/SwaggerUIStockMovements.png)

### Ajout d'entrées dans l'historique

Comme expliqué plus haut, l'historisation des données se fait automatiquement sur réception de nouveaux stocks. Pour insérer des nouveaux stocks dans Unified Stock, consultez la documentation sur les APIs du module de traitement de stocks.

### Lire l'historique entre deux dates

__POST : {tenantId}/stocks/movements/dates__

![SwaggerUi historique entre deux dates](img/GetStockMovementsDates.png)

