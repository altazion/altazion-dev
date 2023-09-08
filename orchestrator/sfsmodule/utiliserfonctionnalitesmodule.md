# Utiliser les fonctionnalités du module
Outre les fonctions de CRUD et d’import des StockOrigins et d’Articles, le module SFS dispose du contrôleur ShipFromStore permettant d’utiliser les fonctionnalités décrites ci-dessous.

## Récupération des stocks et de la quantité maximale commandable pour un article
__POST : {tenantId}/stocks__

Cette fonction permet de connaître le détail des stocks disponibles pour un article dans tous les emplacements. Seuls sont comptabilisés les stocks supérieurs à 0 des emplacements participants au SFS n'étant pas saturés. Dans le cas d'articles SFS avec des limitations de stocks (ou le champ Article. ForcedOrigins contient 1 ou plusieurs codes de StockOrigins), seuls ces emplacements sont comptabilisés. Un objet de type StockQuery contenant les détails de la recherche à effectuer doit être fourni ainsi que le tenantId.

L'objet StockQuery permet de limiter la recherche des stocks à certains emplacements :
- En fournissant la liste des codes d'emplacements où comptabiliser le stock dans ShipFrom (Exemple : ["FRA:FRN:EVIAN", "FRA:MAG:0001"]
- En fournissant le préfix des emplacements où comptabiliser le stock dans Prefix (Exemple : "FRA")

En retour la fonction va renvoyer un objet de type StockResponse.

À noter que StockResponse.MaxQuantity.MaxOrderable peut varier en fonction de la configuration du module SFS du tenant. Le champs SFSConfig.MaxOrderableType associé au tenant défini le comportement à adopter par l'algorithme.

## Traitement du panier et détermination par l'algorithme de la meilleure répartition d'expédition

__POST : {tenantId}/cart__

Cette fonction reçoit un objet de type Cart (un panier d'articles) et détermine la meilleure répartition d'expédition pour ce panier.

S'il reste des articles dans le panier à la fin de tous les traitements le panier est considéré comme non expédiables et les lignes panier concernées sont renvoyés dans la liste SFSResponse.NonShippable. Dans ce cas le calcul de la répartition n'a pas lieux.

Si le Cart en entrée a ExcludeSplitComputation à true (dans le cas où l'on souhaite juste savoir si tout le panier est expédiable) alors le calcul de répartition n'est pas effectué.

Autrement, une fois toutes les possibilités d'envoi récupérées on génère toutes les combinaisons de répartitions possibles. Afin de choisir la plus pertinente on applique ensuite une liste de critères de tri.

Actuellement les critères sont les suivants par ordre d'importance :
- Le minimum d'expéditions possibles
- La somme des priorités des StockOrigins choisis
- La distance moyenne la plus faible entre les emplacements d'expédition et le client

Une fois ce tri réalisé on sélectionne la première répartition de la liste qui doit également être la plus pertinente. La fonction renvoie finalement un objet de type SFSResponse.

L'objet Cart permet de limiter le calcul de répartitions à certaines origines de stocks :

- En fournissant la liste des codes de StockOrigins où comptabiliser le stock dans ShipFrom (Exemple : ["FRA:FRN:EVIAN", "FRA:MAG:0001"].
- En fournissant le préfix des emplacements où comptabiliser le stock dans Prefix (Exemple : "FRA")

Si l'objet Cart en entrée possède un champ IsDebug à true, l'algorithme va également fournir les 5 meilleures expéditions suivantes résultant au même nombre d'expéditions. Elles seront renvoyées dans la liste SFSResponse.NextReps. Un dictionnaire contenant le détail des stocks disponibles des articles du panier pour chaque emplacement est également fourni. Il est déconseillé de laisser ce champ à true en production.

Si l'objet Cart en entrée a IsSimulated à true alors la commande n'est pas ajoutée après le calcul de la répartition. Autrement la commande est ajoutée si le champ OrdeType contenu dans le Panier en entrée n'est pas null.
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
