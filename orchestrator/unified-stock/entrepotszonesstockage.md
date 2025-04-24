# Entrepôts et de zone de stockage

## Généralités

Unified Stock regroupe les différents endroits contenant du stock (magasins, dépôts, etc.) sous une notion commune nommée "Entrepôts" (__Warehouses__ en anglais). Ces entrepôts peuvent posséder une ou plusieurs zones de stockage (__Storage Zones__).

De cette façon, un magasin est considéré par Unified Stock comme un entrepôt et sa surface de vente comme une première zone de stockage. Il peut, par exemple, également disposer d'une remise qui sera sa seconde zone de stockage.

Un dépôt sera également considéré comme un entrepôt et ses différents emplacements comme des zones de stockage. On peut par exemple avoir une zone réservée à la préparation colis (picking), une seconde pour le service après-vente ou encore une autre réservée au stockage à plus long terme.

## Modèle d'objet et règles métier

Chaque entrepôt (Warehouse) dispose d'un identifiant de type Guid (noté __id__) et d'un code court unique (noté __code__). Deux entrepôts ne peuvent pas avoir le même identifiant ou le même code.

De plus chaque zone de stockage (Storage Zone) possède également un identifiant de type Guid (noté __id__) et un code court (noté __code__). Deux zones de stockage du même type ne peuvent pas avoir le même identifiant ou le même code.

Pour être valide, un entrepôt doit posséder au moins une zone de stockage.

### Particularités des entrepôts de type Magasin

- Un magasin possède par défaut une zone de stockage correspondant à sa surface de vente.
- L'identifiant unique de cette zone est par défaut identifique à l'identifiant de l'entrepôt (du magasin).
- Le code de cette zone est par défaut égal au code de l'entrepôt (du magasin) auquel on a ajouté le suffixe "SV" pour "Surface de Vente". Ainsi si le code du magasin est "0001" alors le code de la zone de stockage correspondant à sa surface de vente sera "0001SV".

## Gestion des entrepôts dans Unified Stock

### Synchronisation des entrepôts en base SQL avec Unified Stock

Un traitement entièrement géré par Altazion synchronise automatiquement les différents entrepôts paramétrés dans la base principale (magasins, dépôts, etc.) avec Unified Stock.

### Récupération des entrepôts depuis Unified Stock

Le module de traitement des stocks de Unified Stock permet de récupérer les entrepôts via des points API. Tous les points API sont détaillés dans le swagger et sont accompagnés d'une définition de l'objet __Warehouse__ de retour.

![Interface SwaggerUi inventory](img/SwaggerUIWarehouses.png)

Ces points sont accessibles via l'URL de base suivante :

{UrlDeUnifiedStock}/{votreRaisonJuridique}/warehouses

Cette URL est à compléter en fonction de vos besoin :

- __/all__ en __GET__: permet d'obtenir tous les entrepôts disponibles dans Unified Stock. Retourne un tableau de __Warehouse__ en format JSON.
- __/{warehouseGuid}__ en __GET__ : permet de récupérer un entrepôt en remplaçant {warehouseGuid} par l'identifiant de l'entrepôts en question. Retourne un objet __Warehouse__ en format JSON.
- __multiple__ en __POST__ : permet d'obtenir plusieurs entrepôts en fournissant un tableau au format JSON contenant les identifiants des entrepôts à récupérer. Retourne un tableau de __Warehouse__ en format JSON.

Ainsi une url complète pour un client ayant accès au site "altazion-unifiedstocks.net", dont la raison juridique est "1" et qui souhaite obtenir tous les entrepôts sera :

https://altazion-unifiedstocks.net/1/warehouses/all