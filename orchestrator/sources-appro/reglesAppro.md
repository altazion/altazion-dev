# Règles d'approvisionnement

## Généralités

### Définition

Une source d'appro permet de définir des règles pour savoir quel(s) stock(s) sont pris en compte pour chaque article.

Chaque règle concerne un des types de stocks suivant :
- Un stock __“propre”__ géré par vous-même
- Un stock __“fournisseur”__ pour du drop shipping
- Un stock __“magasin”__ pour du retrait OU pour du Ship From Store
- Un stock __“partenaire”__ pour, par exemple, un vendeur marketplace

Une source d'approvisionnement doit au moins contenir une règle d'approvisionnement pour être valide.

### Sélection des stocks

Les règles d'appro disposent de paramètres servant à la sélection des stocks concernés par la règle :

- __Le Rang__, permet d'indiquer l'ordre croissant d'exécution des règles. L'ordre d'exécution des règles est important car un stock ne peut être affecté que par une seule règle. Si deux règles affectent le même stock, seule la première exécutée sera prise en compte.
- __Le code pays__, pour sélectionner toutes les origines de stock d'un pays en particulier, peut être null si l'on souhaite cibler les origines de tous les pays disponibles.
- __Le booléen__ indiquant si les commandes sont réservées par défaut.

Il est possible de définir plusieurs règles d’approvisionnement pour chaque type de stock. Ces règles sont exécutées selon leur __rang__ (1 puis 2, puis 3, etc..). Lorsqu’un magasin, un fournisseur ou un entrepôt est associé à une règle d’approvisionnement, il n’est plus pris en compte par les règles suivantes. Ainsi, chaque entité n’est concernée que par la première règle applicable selon l’ordre de priorité défini.

Par exemple : vous gérez des magasins de tailles différentes, sous des enseignes différentes, vous pouvez définir les règles suivantes :

- Rang 1 : Les magasins d'une liste fixes "magasins de centre ville", contient 10 magasins et ne prend pas en compte les produits de grande taille, puis ignore les stocks < 3
- Rang 2 : Les magasins franchisés de votre enseigne A, pour lesquels les stocks < 5 sont ignorés
- Rang 3 : Les magasins de l'enseigne A, pour lesquels les stocks < 3 sont ignorés
- Rang 4 : les magasins de toutes les enseignes, pour lesquels les stocks < 2 sont ignorés.

Le fonctionnement sera le suivant :

1. Si un magasin est à la fois dans les "centres villes", un franchisé et de l'enseigne A, seule la règle de Rang 1 sera prise compte.
2. Un magasin franchisé de l'enseigne A sera pris en compte dans la règle de rang 2
3. Un magasin succursale de l'enseigne A sera pris en compte dans la règle de rang 3
4. Un magasin de l'enseigne B, verra la règle de rang 4 appliqué


### Calcul des disponibilités

Chaque règle peut également disposer de traitements spécifiques à exécuter avant d'effectuer les calculs ci-dessous. Consultez la page dédiée aux traitements pour plus d'information.

Enfin, les règles sont pourvues de paramètres ajustables pour le calcul des disponibilités finales qui sont exécutés dans l'ordre suivant :
- __Le Pourcentage Disponible__ permet d'indiquer le pourcentage du stock total d'un article à rendre disponible (s'il est à 0, le calcul de la règle est ignoré). Obligatoire
- __Le Seuil de Quantité Disponible__ qui représente le seuil de quantité minimum à respecter pour le rendre tous les stocks d'un article disponible. On effectue ainsi la somme des stocks par articles et on vérifie qu'elle est supérieure ou égale au seuil. Optionnel
- __Le Nombre Minimum d'Origines de Stocks__, il s'agit du nombre minimum d'origines de stocks (magasins, dépôts, fournisseurs, etc.) qui doit rester après exécution de tous les traitements de la règle. En dessous de ce nombre, l'article complet est ignoré. Optionnel

En fonction du type d'exécution de la source d'approvisionnement, le calcul des disponibilités peut avoir lieu en base de données ou alors être transmis à Unified Stock.

## Exécution des règles d'approvisionnement

Les règles sont traitées en deux temps durant l'exécution des sources d'approvisionnement. On commence par importer les stocks liés à chaque règle en respectant l'ordre des rangs (voir phase d'import des données dans le traitement de la source d'appro).

Une fois cela terminé on réitère sur chaque règle afin d'exécuter les traitements spécifiques (voir page dédiée) et finalement procéder ou non à l'exécution du calcul des disponibilités.
Le diagramme de flux ci-dessous détaille les étapes d'exécution d'une règle d'approvisionnement après la phase d'import des stocks :

![Diagramme de flux règle d'approvisionnement](img/ExecutionRegleAppro.png)

## Spécificités des règles "Magasins"

### Critères de sélection des magasins

Les règles magasins disposent de plusieurs critères qui leur sont spécifiques et qui servent à sélectionner et stocks et les magasins concernées par la règle :
- __L'identifiant de Zone Magasin__ permettant de sélectionner les magasins d'une zone en particulier. Peut être null si on souhaite cibler toutes les zones magasins.
- __Le Type de Magasin__, permettant de sélectionner les magasin affilié et franchisé ou les magasins intégré. Peut être null si l'on souhaite cibler tous les types de magasins.
- __L'identifiant d'Enseigne de Magasin__, permettant de sélectionner les magasins appartenant à une enseigne en particulier. Peut être null si on souhaite cibler toutes les enseignes magasins.

À noter que ces critères peuvent se combiner, vous pouvez par exemple sélectionner les magasins intégrés dans une zone spécifique en France. Il est également possible de n'utiliser aucun critère pour cibler tous vos magasins.

### Sélection/exclusion des magasins via les liaisons de la règle d'approvisionnement

Chaque règle magasin peut disposer d'une liste de magasins liés permettant, en fonction du type de liaison, d'inclure ou d'exclure uniquement les magasins de cette liste du calcul de la règle d'approvisionnement. Autrement dit, vous pouvez choisir d'inclure uniquement les magasins liés à la règle ou de sélectionner tous les magasins sauf ceux liés à la règle.

Cette liste est optionnelle et ne se cumule pas avec les autres critères de sélections décrits plus haut.

### Règle "ramasse-miettes"
Dans tous les cas il est nécessaire que la dernière règle magasin cible tous les magasins afin de faire office de "ramasse-miettes" et de traiter les magasins non inclus dans les précédentes règles. Si vous ne souhaitez pas traiter le stock des magasins restant, il suffit de passer le pourcentage de disponibilité à 0 pour cette règle et elle sera ignorée.

## Spécificités des règles "Fournisseurs"

### Critères de sélection des fournisseurs
Tout comme les règles magasins, les règles fournisseurs disposent de champs spécifiques servant à limiter les stocks concernés par la règle :

- __Top Fournisseurs__, il représente les X premiers fournisseurs de chaque stock à prendre en compte pour le calcul des stocks. Ces derniers sont classés par leur priorité. Peut être null si l'on souhaite sélectionner tous les fournisseurs.

### Sélection/exclusion des fournisseurs via les liaisons de la règle d'approvisionnement

Chaque règle fournisseur peut disposer d'une liste de fournisseurs liés permettant, en fonction du type de liaison, d'inclure ou d'exclure uniquement les fournisseurs de cette liste du calcul de la règle d'approvisionnement. Autrement dit, vous pouvez choisir d'inclure uniquement les fournisseurs liés à la règle ou de sélectionner tous les fournisseurs sauf ceux liés à la règle.

Cette liste est optionnelle et ne se cumule pas avec les autres critères de sélections décrits plus haut.

## Spécificités des règles "Sur Stocks"

### Critères de sélection des stocks
Les règles sur stocks disposent également de champs spécifiques servant à limiter les stocks concernés par la règle :

- __L'id du dépôt concerné__. Il sert à limiter les calculs à un dépôt en particulier. S'il est null alors tous les dépôts sont concernés.