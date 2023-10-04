# Règles métier SFS
## Notion de priorité
Certains emplacements sont plus indiqués que d'autres pour expédier des commandes. C'est notamment le cas d'entrepôts spécialisés ou de grands magasins. Il est ainsi possible de définir un indice de priorité pour chaque emplacement afin d'encourager les expéditions depuis ces derniers.

Dans le cas où vous utiliser les outils Altazion cette option est configurable depuis votre gestion commerciale.
## Notion de saturation
Lorsqu'un StockOrigin dispose déjà de beaucoup de commandes à traiter il peut être saturé. Chaque StockOrigin dispose d'une capacité de traitement (StockOrigin.MaxCapacity) qui lorsqu'elle est dépassée ne permet plus à l'emplacement d'accepter de nouvelles commandes (OrderType.Cart, OrderType.Order) et entraine son exclusion de l'algorithme de répartition.

Les commandes et les paniers augmentent la saturation des StockOrigins de respectivement 5 et 1 point. Le nombre de PointsMax peut-être décidé en fonction de la nature du StockOrigin (magasin, fournisseur, entrepôt, etc..), ou encore sur d'autres critères telle que la taille ou la capacité logistique de traitement des commandes par exemple.

Dans le cas où vous utiliser les outils Altazion cette option est configurable depuis votre gestion commerciale.

La durée durant laquelle les OrderType.Cart (paniers en cours) sont comptabilisés pour le calcul de la saturation est paramétrable via le champ CartLifeSpan de l'objet SFSConfig du tenant associé.

Les commande de type OrderType.ExternalOrder n'affectent pas la saturation.

Lorsque qu'une commande est traitée celle-ci est supprimée du StockOrigin et libère ainsi des capacités de traitement.
