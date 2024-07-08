# Règles métier Delivery Optimizer

## Notion de priorité
Certaines origines de stocks sont plus indiquées que d'autres pour expédier des commandes. C'est notamment le cas d'entrepôts spécialisés ou de grands magasins. Il est ainsi possible de définir un indice de priorité pour chaque emplacement afin d'encourager les expéditions depuis ces derniers.

Dans le cas où vous utilisez les outils Altazion cette option est configurable depuis votre gestion commerciale.
## Notion de saturation ##

### Définition ###
Lorsqu'un StockOrigin dispose déjà de beaucoup de commandes à traiter il peut être saturé. Chaque StockOrigin dispose d'une capacité de traitement (__StockOrigin.MaxCapacity__) qui lorsqu'elle est dépassée ne permet plus à l'origine de stocks d'accepter de nouvelles commandes (OrderType.Cart, OrderType.Order) et entraine son exclusion de l'algorithme de répartition.

Les commandes et les paniers augmentent la saturation des StockOrigins de respectivement 5 et 1 point. Le nombre de PointsMax peut-être décidé en fonction de la nature du StockOrigin (magasin, fournisseur, entrepôt, etc..), ou encore sur d'autres critères telle que la taille ou la capacité logistique de traitement des commandes par exemple.

Dans le cas où vous utiliser les outils Altazion cette option est configurable depuis votre gestion commerciale.

La durée durant laquelle les OrderType.Cart (paniers en cours) sont comptabilisés pour le calcul de la saturation est paramétrable via le champ __CartLifeSpan__ de l'objet __SFSConfig__ du tenant associé.

Les commande de type OrderType.ExternalOrder n'affectent pas la saturation.

Lorsque qu'une commande est traitée celle-ci est supprimée du StockOrigin et libère ainsi des capacités de traitement.

### Points API de vérification de saturation ###

Ces points API sont utiles si vous remarquez qu'un ou plusieurs StockOrigins ne peuvent plus prendre de commandes ou pour obtenir des informations générales sur l'état de leurs activités.

#### Vérification de la saturation d'un StockOrigin ####
Il est possible de vérifier la saturation d'un StockOrigin via le point API suivant :

__GET : {tenantId}/stock_origins/code/{code}/saturation__

Le point est disponible dans la partie StockOrigins du swagger :

![SwaggerUI du point API de saturation](img/SaturationSwaggerUI.png)

Si le StockOrigin n'existe pas le point API renvoie une erreur 404. Autrement un objet de type __StockOriginSaturationInfo__ est renvoyé (le schéma complet de l'objet est disponible dans le swagger).

Voici un exemple avec le StockOrigin FRA:WEB:CENTRALE :

![Réponse du point API de saturation](img/SaturationResponse.png)

L'objet __StockOriginSaturationInfo__ obtenu en réponse contient des données statistiques facilement interprétables. Par exemple, à la lecture des données de réponse, on constate ici que le StockOrigin n'est pas saturé et que sa saturation est de 3.01%. Sa capacité maximum est de 100 000 points parmis lesquels 3012 points de capacité sont utilisés par 102 paniers (102 points car un panier vaut 1 point) et 582 commandes (2910 points car une commande vaut 5 points). Sa capacité restante est de 96988 points (100 000 - 3012).

#### Vérification de la saturation de tous les StockOrigins ####

Delivery Optimizer dispose d'un point API permettant d'obtenir un diagnostique complet de la saturation de l'ensemble de vos StockOrigins. Ce point est par exemple très utile lors de périodes de fortes activités. Il peut vous permettre d'anticiper l'éventuel saturation globale de vos StockOrigins et d'ainsi éviter la paralysie de votre activité.

__GET : {tenantId}/stock_origins/saturation__

Le point est disponible dans la partie StockOrigins du swagger :

![SwaggerUI du point API de saturation global](img/GlobalSaturationSwaggerUI.png)

Un objet de type __StockOriginsGeneralSaturation__ est obtenu en réponse de cet appel :

![Réponse du point API de saturation global](img/GlobalSaturationResponse.png)

Il contient les champs suivants :
- __saturated__ : Le nombre de StockOrigins saturés.
- __notSaturated__ : Le nombre de StocksOrigins non saturés.
- __total__ : Le nombre total de StocksOrigins.
- __globalSaturationRate__ : Le pourcentage de StockOrigins saturés.
- __saturatedStockOrigins__ : Une listes contenant le code des StocksOrigins saturés.
- __details__ : Un tableau de __StockOriginSaturationInfo__ contenant l'état de saturation de tous les StockOrigins en commençant par les StockOrigins saturés.
