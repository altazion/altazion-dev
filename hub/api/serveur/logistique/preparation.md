# Préparation

[!include[saisiepreparation](preparation.saisiepreparation.autogen.md)]

[!include[expedition](preparation.expedition.autogen.md)]

## Remarques (préparation & expédition)

Sauf précisions contraires dues à une configuration spécifique, vous pouvez appeler ces points api à plusieurs occasions :

1) lors de la préparation de la commande vous pouvez appeler au choix, le point API de **saisie de préparation** OU le **point d'expédition** (en ajoutant uniquement les `Lignes` et en ne précisant que la quantité préparée sur celles-ci). Le bon de prépa sera alors amené à l'étape "Préparé". 

2) lors de **l'expédition**, en précisant les `Lignes` avec la quantité expédiée ainsi que, si cela est disponible, les `Colis` et les `PiecesComptables`. Le bon de préparation sera alors terminé.

Vous pouvez, bien entendu, combiner les deux appels en un seul si vous réalisez les deux opérations en même temps. Nous vous invitons par contre à ne pas faire plusieurs appels pour chaque étape. Si vous devez néanmoins faire des appels multiples à la phase 1 veillez à bien préciser à chaque appel la quantité TOTALE préparée : chaque appel remplacera le précédent.

A noter que si la mise à jour du bon de préparation se fait en temps réel, les traitements de progression de l'OMS seront réalisés en asynchrones. Les quantités sont donc appliquées immédiatement, mais l'état du bon de préparation n'est potentiellement mis à jour qu'après quelques instants.

Pour recevoir une notification sur la progression du bon de préparation, vous devez vous enregistrer en tant que [gestionnaire d'évènement ou de notification](https://www.altazion.dev/office/extensibility/events/logistique/preparation.html). 

En cas d'erreur, le point API vous renverra :

|Code HTTP|Signification|
|---|---|
|400|Le format du body JSON en entrée est invalide|
|404|L'identifiant du bon de préparation est invalide, ou le bon de préparation est introuvable|
|405|Le bon de préparation est dans un état ne permettant pas cette modification|
|409|Le bon de préparation a déjà été terminé|
|422|Les données sont incohérentes (vous avez par exemple déclaré une expédition de plus de produits que contenu dans le bon de préparation)|











































































[!include[preparation](preparation.preparation.autogen.md)]



























































