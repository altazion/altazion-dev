# Cycle de vie des données

Afin d’utiliser le module, des données concernant les articles et les origines de stocks doivent être synchronisées avec vos composants. Les données sur les articles et les origines de stocks doivent ainsi être récupérées depuis votre base et formatées avant être envoyées au module Delivery Optimizer (DO) en format JSON. 

Les sources d’approvisionnement disponibles dans les outils OMS d’Altazion permettent de configurer avec précision l’export des Articles et StocksOrigins vers le module et d’automatiser la procédure.

La gestion des données nécessite le droit OMS.

Il existe de nombreux points API couvrant les besoins en CRUD des StockOrigins et Articles dont les fonctions sont détaillées dans le swagger. Toutefois les points expliqués ci-dessous sont les plus importants à implémenter pour garantir le fonctionnement du module.

## Import total des StockOrigins et des Articles dans le module

Ces points API sont la principale source de données du module DO et sont indispensables à son bon fonctionnement. Cet import a pour effet d’exécuter une transaction supprimant toutes les données de la raison juridique concernée avant d’insérer les nouvelles données passées en format JSON.

Il est recommandé :
- De réaliser les imports d’Articles et de StockOrigins à la suite
- D’automatiser l’import de données durant une heure de faible utilisation du module (la nuit par exemple)
- De disposer de méthodes robustes d’export de vos données depuis vos composants vers le module DO si vous n’utilisez pas la solution Altazion
- D’utiliser l’import total avec parcimonie pour limiter l’impact sur les performances, en particulier si vous disposer d’un gros volume de données à importer
- De mettre à jour/rajouter des données via les points API d’upsert décrits plus bas plutôt que de réimporter systématiquement toutes les données

L'import total des données en base se fait via les points API suivants : 

__POST : {tenantId}/stock-origins/importfull__

Ce point API permet l'import des origines de stock dans la base via un tableau d'objets StockOrigin passé dans le body en format JSON.

__POST : {tenantId}/articles/importfull__

Ce point API permet l'import des articles dans la base via un tableau d'objets Article passé dans le body en format JSON.

Ces points API sont utilisés par les sources d'approvisionnement d'Altazion pour envoyer les données calculées vers Delivery Optimizer.

Si vous utilisez Unified Stock les stocks (liste de __ArticleStock__) ne sont pas envoyées par les Sources d'Approvisionnement mais par le module de traitement des stocks plus tard dans le processus via le point API "Mise à jour des stocks dans les Articles" détaillé plus bas.

## Upsert des StockOrigins et des Articles dans le module

En complément des imports totaux qui nettoient la base avant d’insérer les données importées, il est possible de pousser des fichiers de mise à jour des Articles et StockOrigins. Ces points API servent à mettre à jour les éléments déjà en base et à ajouter ceux contenu dans le JSON qui ne s’y trouvaient pas auparavant (upsert).

__PUT : {tenantId}/stock-origins__

Ce point API permet l’upsert des origines de stock dans la base via un tableau d'objets __StockOrigin__ passé dans le body en format JSON.

__PUT : {tenantId}/articles__

Ce point API permet l'upsert des articles dans la base via un tableau d'objets __Article__ passé dans le body en format JSON.

Ces points API sont utilisés par les Sources d'Approvisionnement pour envoyer les disponibilités recalculées au long de la journée lorsque vous n'utilisez pas Unified Stock.

## Mise à jour des stocks dans les Articles

Ce point API permet de remplacer les stocks de plusieurs articles. Pour cela il est nécessaire de passer un dictionnaire contenant la référence de l'article en clef et sa liste d'__ArticleStock__ en valeur dans le body de la requête. Ce dictionnaire devra être formaté en JSON.

__PATCH : {tenantId}/articles/artstocks__

Le point est disponible dans la partie Articles du swagger :

![SwaggerUI du point API de remplacement des stocks](img/ArtStocksSwaggerUI.png)

Cette fonctionnalité API est utilisée par Unified Stock pour l'envoie des disponibilités recalculées en temps réel à Delivery Optimizer après la réception de stock mis à jour.