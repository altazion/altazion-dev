# Utiliser les fonctionnalités du module
Outre les fonctions de CRUD et d’import des StockOrigins et d’Articles, le module Delivery Optimizer (DO) dispose du contrôleur ShipFromStore permettant d’utiliser les fonctionnalités décrites ci-dessous.

## Récupération des stocks et de la quantité maximale commandable pour un article
__POST : {tenantId}/stocks__

Cette fonction permet de connaître le détail des stocks disponibles pour un article dans tous les emplacements. Seuls sont comptabilisés les stocks supérieurs à 0 des emplacements participants au DO n'étant pas saturés. Dans le cas d'articles DO avec des limitations de stocks (ou le champ Article. ForcedOrigins contient 1 ou plusieurs codes de StockOrigins), seuls ces emplacements sont comptabilisés. Un objet de type StockQuery contenant les détails de la recherche à effectuer doit être fourni ainsi que le tenantId.

L'objet StockQuery permet de limiter la recherche des stocks à certains emplacements :
- En fournissant la liste des codes d'emplacements où comptabiliser le stock dans ShipFrom (Exemple : ["FRA:FRN:EVIAN", "FRA:MAG:0001"]
- En fournissant le préfix des emplacements où comptabiliser le stock dans Prefix (Exemple : "FRA")

En retour la fonction va renvoyer un objet de type StockResponse.

À noter que StockResponse.MaxQuantity.MaxOrderable peut varier en fonction de la configuration du module DO du tenant. Le champs SFSConfig.MaxOrderableType associé au tenant défini le comportement à adopter par l'algorithme.

## Traitement du panier et détermination par l'algorithme de la meilleure répartition d'expédition

__POST : {tenantId}/cart__

### Fonctionnement de l'algorithme

Cette fonction reçoit un objet de type Cart (un panier d'articles, en format JSON passé dans le body de la requête) et détermine la meilleure répartition d'expédition pour ce panier. Comme pour les autres objets d'entrées et de sorties du DO, son schéma détaillé est disponible dans le swagger du module.

Pour commencer, différents traitements s'exécutent afin de déterminer par quelles origines de stocks chacuns des articles contenus dans l'objet Cart peuvent être expédié. Si un ou plusieurs article ne peut être expédié par aucune origine de stock à la fin de tous les traitements, alors le panier est considéré comme non expédiable et le calcul de la répartition ne peut pas avoir lieux. Les lignes panier non expédiables sont renvoyés dans la liste SFSResponse.NonShippable. 

Si le Cart en entrée possède le champ ExcludeSplitComputation positionné à true (dans le cas où l'on souhaite juste savoir si tout le panier est expédiable) alors le calcul de répartition n'est pas effectué.

Autrement, une fois toutes les possibilités d'envois récupérées un algorithme génère toutes les combinaisons de répartitions possibles. Afin de choisir la répartition proposant les envois les plus pertinents on applique ensuite une liste de critères de tri.

Actuellement les critères sont les suivants par ordre d'importance :
- Le minimum d'expéditions possibles
- La somme des priorités des StockOrigins choisis
- La distance moyenne la plus faible entre les origines de stocks (emplacements d'expédition) et le client

Une fois ce tri réalisé l'algorithme sélectionne la répartition la plus pertinente. La fonction renvoie finalement un objet de type SFSResponse dont la structure est expliquée en détail dans le swagger.

### Limitation des envois à certaines origines de stocks (emplacements d'expéditions)

L'objet Cart permet également de limiter le calcul de répartitions à certaines origines de stocks :

- En fournissant la liste des codes de StockOrigins où comptabiliser le stock dans ShipFrom (Exemple : ["FRA:FRN:EVIAN", "FRA:MAG:0001"]. De cette façon, seul ces deux origines de stocks seront retenus pour le calcul de répartitions, les autres seront ignorés.
- En fournissant le préfix des emplacements où comptabiliser le stock dans Prefix (Exemple : "FRA" ou "FRA:MAG"). Dans le cas où l'on renseigne le préfix avec "FRA" par exemple, seuls les origines de stocks françaises seront retenues pour le calcul de répartitions. Si l'on renseigne "FRA:MAG", cette fois, seuls les magasins français seront retenus pour le calcul de répartions.

### Ajout de détails pour simplifié le débogage et l'intégration du calcul de répartitions

Si l'objet Cart en entrée possède un champ IsDebug à true, l'algorithme va également fournir les 5 meilleures expéditions suivantes résultant au même nombre d'expéditions. Elles seront renvoyées dans la liste SFSResponse.NextReps. Un dictionnaire contenant le détail des stocks disponibles des articles du panier pour chaque emplacement est également fourni. Il est déconseillé de laisser ce champ à true en production.

### Simulation d'une commande

Si l'objet Cart en entrée a IsSimulated à true alors la commande n'est pas ajoutée après le calcul de la répartition. Autrement la commande est ajoutée si le champ OrderType contenu dans le Panier en entrée n'est pas null.

## Ajout/Mise à jour d'une commande

__POST : {tenantId}/order__

Cette fonction reçoit un objet de type Order et l'ajoute en base si elle n'existe pas ou la modifie si elle existe en patchant les Articles et StockOrigins concernés.

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

Permet de reconstituer une commande ayant été enregistrée en base dans les Articles et StockOrigins. Cette méthode est par définition non optimale et doit être utilisée à des fins de tests ou de vérifications manuelles.
