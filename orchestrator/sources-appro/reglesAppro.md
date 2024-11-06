# Règles d'approvisionnement

## Généralités

Une source d'appro permet de définir des règles pour savoir quel(s) stock(s) sont pris en compte pour chaque article.

Chaque règle concerne un des types de stocks suivant :
- Un stock “propre” géré
- Un stock “fournisseur” pour du drop shipping
- Un stock “magasin” pour du retrait OU pour du Ship From Store
- Un stock “partenaire” pour, par exemple, un vendeur marketplace

Une source d'approvisionnement doit au moins contenir une règle d'approvisionnement pour être valide.

Les règles d'appro disposent de paramètres servant à la sélection des stocks concernés par la règle :

- Le Rang, permet d'indiquer l'ordre croissant d'exécution des règles. L'ordre d'exécution des règles est important car un stock ne peut être affecté que par une seule règle. Si deux règles affecte le même stock, seule la première exécutée sera prise en compte.
- La code pays, pour sélectionner toutes les origines de stock d'un pays en particulier, peut être null si l'on souhaite cibler les origines de tous les pays disponibles.
- Le booléen indiquant si les commandes sont réservées par défaut.

Chaque règle peut également disposer de traitements spécifiques à exécuter, voir page dédiée pour plus d'information.

Enfin, les règles sont pourvues de paramètres ajustables pour le calcul des disponibilités finales :
- Le Pourcentage Dispo permet d'indiquer le pourcentage du stock total d'un article à rendre disponible (s'il est à 0, le calcul de la règle est ignorée). Obligatoire
- Le Seuil Quantité Dispo qui représente le seuil de quantité minimum à respecter pour le rendre les stocks d'un article disponible. La somme des stocks par articles doit être supérieur ou égale au seuil. Optionnel
- Le Nombre Minimum d'Eléments, il s'agit du nombre minimum d'emplacement de stocks qui doit rester après exécution de toutes les détails de règles. En dessous de ce nombre, l'article complet est ignoré. Optionnel

## Exécution des règles d'approvisionnement

Les règles d'approvisionnements sont traitées en trois temps :
- L'import des stocks concernés par la règle
- L'exécution des traitements de la règle (voir page dédiée)
- Le calcul des disponibilités

Le diagramme de flux ci-dessous décrit les étapes d'exécution d'une règle d'approvisionnement :

![Diagramme de flux règle d'approvisionnement](img/ExecutionRegleAppro.png)

## Spécificités des règles Magasin

### Critères de sélection des magasins

Les règles magasins disposent de plusieurs critères qui leur sont spécifiques et qui servent à sélectionner et stocks et les magasins concernées par la règle :
- L'identifiant de Zone Magasin permettant de sélectionner les magasins d'une zone en particulier, peut être null si on souhaite cibler toutes les zones magasins.
- Le Type de Magasin, permettant de sélectionner les magasin affilié et franchisé ou les magasin intégré, peut être null si l'on souhaite cibler tous les types de magasins.

À noter que ces critères peuvent se combiner, permettant par exemple à l'utilisateur de sélectionner les magasins intégrés dans une zone spécifique en France. Il est également possible de ne sélectionner aucun critère pour cibler tous les magasins du client.

### Sélection/exclusion des magasins via les liaisons de la règle d'approvisionnement


