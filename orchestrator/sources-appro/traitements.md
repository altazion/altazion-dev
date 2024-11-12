# Traitements de règles d'approvisionnement

## Généralités

### Définition

Une règle d'approvisionnement peut contenir un ou plusieurs traitements qui vont permettre d'agir sur les stocks concernés par la règle. Ces derniers impactent les stocks de plusieurs façons et permettent de :

 - __Ignorer des stocks__ sous certaines conditions (prix, type d'article, présence dans une vitrine, etc..)
 - __Fixer un stock minimum__ à atteindre pour être pris en compte (exemple : ne pas tenir compte des stocks dont les quantités sont inférieures à 2 exemplaires)
 - __Fixer un stock maximum__ à ne pas dépasser pour être pris en compte (exemple : ne pas tenir compte des stocks dont les quantités sont supérieures à 300)

### Fonctionnement des traitements

Comme pour les règles, les traitements sont exécutés par ordre croissant de leur rang. L'ordre dans lequel vous choisissez vos traitements est donc important et impacte le résultat final.

Pour fonctionner la plupart des traitements doivent être configurés, par exemple le traitement supprimant les stocks d'articles dont le prix est inférieur à un certain nombre nécessite que vous indiquiez le montant en question.

## Utiliser les traitements

### Traitements standards Altazion

Altazion dispose d'une liste de traitements standards permettant de couvrir la plupart des besoins des clients :

| Classe du traitement | Type de préparation | Configuration | Cas d'utilisation |
| -------------------- | ------------------- | ------------- | ----------------- |
| TraitementAttributBooleen.cs | - | Guid AttributDefinitionPk | Ignore les articles dont un attribut booléen est à true |
| TraitementPrixMag.cs | Magasin | decimal Prix | Ignore les stocks magasin d'un article si son prix est inférieur à un certain nombre |
| TraitementPrixMagPromo.cs | Magasin | - | Ignore les stocks magasin d'un article si son prix magasin est actuellement en promo |
| TraitementPrixMagSupWeb.cs | Magasin | int SitePk | Ignore les stocks magasins des articles dont le prix magasin est supérieur au prix web |
| TraitementPrixWeb.cs | - | decimal Prix, int SitePk | Ignore les articles dont le prix web est inférieur à un certain nombre |
| TraitementPrixWebPromo.cs | Magasin | int SitePk | Ignore les stocks magasin d'un article si son prix WEB est en promo |
| TraitementQteMinMax.cs | - | decimal? QteMin, decimal? QteMax| Compléte les quantités minimum et maximum des stocks concernées |
| TraitementVitrine.cs | - | Guid VitrineId | Ignore les stocks de tous les articles se trouvant dans une vitrine dont le GUID est passé en paramètre |

### Traitements spécifiques client

Dans le cas où les traitements standards ne répondent pas à votre besoin, il est possible de créer des traitements spécifiques. En effet tous les traitements héritent de la classe abstraite Altazion.Core.Extensibility.Logistique.TraitementSourceAppro.cs disponible dans le package NuGet d'extensibilité d'Altazion.

Contactez Altazion Services pour plus d'informations concernant la création de traitements spécifiques à vos besoins.
