# Présentation du module de traitement des stocks

## Généralités

### Définition

Le module de traitement des stocks se présente sous forme d’un serveur API à déployer dans votre solution. Il a vocation à être appelé les autres composants de l'OMS tel que les sources d'approvisionnement ou les modules d'intégration des flux de stock.

Lorsque vous utilisez Unified Stock, le module de traitement des stocks est considéré comme le référentiel des stocks. C'est à dire qu'il dispose, via sa base REDIS, des informations les plus à jour sur les stocks et les sources d'approvisionnement.

Outre ses fonctions d'agrégateur de stock, ce module sert également à recalculer les disponibilités à chaque réception de mouvement de stock depuis un module d'intégration de flux de stocks ou après le calcul des sources d'approvisionnement. Une fois ces disponibilités recalculées, elles sont envoyées à Delivery Optimizer et transmises à une file de messages pour enregistrement asynchrone dans la base de données SQL principale.

### Déploiement
Le module Altazion de traitement des stocks est distribué sous forme d’un container Docker et peut ainsi être déployé facilement sur tous les environnements compatibles. Il expose le port 8080 par défaut. Pour vérifier son bon déploiement il est possible de se rendre sur l’URL du module qui devrait renvoyer la page suivante.

![Page d'accueil Module DO](img/USWelcomePage.png)

À partir de là, il est possible de cliquer sur les boutons de la section « Tools » afin de se rendre sur les pages correspondantes.

### Fonctionnement en HTTPS
Le module Unified Stock de traitement des stocks n'écoute qu'en HTTPS et n'accepte pas les appels HTTP. Si aucun port HTTPS n’est disponible ou si le certificat n'est pas/plus valide, l’application ne pourra pas fonctionner correctement. 

### Swagger
Le serveur API exporte un swagger respectant la norme OpenAPI 3.0.1 à l’adresse "/swagger/v1/swagger.json"

Il dispose également d'une interface web SwaggerUI permettant de facilement tester les points API disponibles ainsi que de consulter le détail des objets en entrée/sortie. Cette interface est disponible à l’adresse "/swagger". Enfin il permet également de consulter le détail, les définitions et la structure de tous les objets que vous pourriez être amené à manipuler en utilisant le module.

![Interface SwaggerUi permettant de tester les points API](img/SwaggerUI.png)

## Stockage des données

### Présentation

Le module de traitement des stocks a vocation à recevoir les données nécessaires au calcul des disponibilités depuis les sources d'approvisionnements et les modules de d'intégrations des flux de stocks.

Il est ainsi amené à stocker la version la plus récente des données suivante dans la __DB0__ du cache REDIS :

- Les stocks
- Les sources d'approvisionnements
- Les règles d'approvisionnements
- Les codes magasins et leur équivalent DeliveryOptimizer

Dans cette base, la valeur d'une donnée est écrasée à la réception d'une nouvelle valeur. Il n'est donc pas possible de récupérer les anciennes valeurs des données.

Toutefois le module de traitement des stocks historise également les valeurs des données dans la base __DB1__ de REDIS. À l'heure actuelle, cette fonctionnalité n'est implémentée que pour les stocks. Pour plus d'information sur l'historisation des stocks, consultez la page de documentation dédiée.

### Stocks

Chaque stock manipulé par le module de traitement est partagé en deux entités, les informations d'approvisionnement et les quantités de stocks. Si un stock ne possède pas ces deux entités, il sera exclu des algorithmes de calcul de disponibilités.

#### Information d'approvisionnement

Chaque stock (combinaison origine de stock/article) dispose d'informations issues directement de l'exécution des sources d'approvisionnement, à savoir :
- À quelle règle appartient le stock
- Si le stock est ignoré par un traitement
- Si le stock possède une quantité minimale à atteindre pour être pris en compte
- Si le stock possède une quantité maximale à ne pas dépasser pour être pris en compte

Ces informations sont envoyées à Unified Stock à la fin de l'exécution des sources d'approvisionnement.

#### Quantités de stocks

La seconde entité est composée de toutes les différentes quantités de stocks :
- Les stocks disponibles
- Les stocks retirés
- Les stocks totaux (stocks disponible + stocks retirés)

Ces informations sont mises à jour en temps réel grâce aux stocks reçus depuis les modules d'intégration des flux de stock.

Ils peuvent également être mis à jour depuis les sources d'approvisionnement si vous avez choisi de considérer ces dernières comme une source fiable de stocks.

## Point API principaux

Outre des points API servant à interagir avec les données présentes dans REDIS, le module de traitement des stocks dispose de trois point API principaux trouvables dans la partie "Unified Stock" du swagger.

### Calcul complet des disponibilités à la réception d'un résultat de Source d'Approvisionnement

__POST : {tenantId}/unified-stock/supply-source__

Cette méthode permet d'enregistrer les résultats de l'exécution d'une source d'approvisionnement dans la base REDIS de Unified Stock. Elle exécute un calcul complet des disponibilités sur les stocks reçus en parallèle avant d'envoyer le résultat à Delivery Optimizer. Les disponibilités sont également envoyées vers la file de message pour enregistrement asynchrone dans la base de données SQL.

Un status code 200 "OK" est renvoyé après son exécution.

Pour plus d'informations sur le traitement d'exécution des sources d'approvisionnement dans le cadre de Unified Stock, consultez la page de documentation dédiée.

### Calcul partiel des disponibilités sur réception de stock à jour

__POST : {tenantId}/unified-stock/stock_parser__

Cette méthode permet d'enregistrer les stocks à jour reçu d'un module d'intégration de flux de stock dans la base REDIS. Il fois cela fait, elle exécute un calcul des disponibilités sur les nouveaux stocks avant d'envoyer le résultat à Delivery Optimizer. Les disponibilités sont également envoyées vers la file de message pour enregistrement asynchrone dans la base de données SQL.

Un status code 200 "OK" est renvoyé après son exécution.

Le diagramme de séquence ci-dessous décrit le processus complet :

![Diagramme de séquence stock parser](img/DiagrammeSequenceStockParser.png)

### Calcul complet des sources d'approvisionnement basé sur les stocks de US

__GET : {tenantId}/unified-stock/compute_all__

Ce dernier point API permet d'effectue un calcul des disponibilités des stocks sur toutes les sources d'approvisionnement présentes dans Unified Stock. Les disponibilités sont envoyées à Delivery Optimizer et vers la file de message pour enregistrement asynchrone dans la base de données SQL. Ce point API peut être appelé afin de réinitialiser toutes vos disponibilités en vous basant sur les stocks contenus dans Unified Stock.

Un status code 200 "OK" est renvoyé après son exécution.

Le diagramme de séquence ci-dessous décrit le processus complet :

![Diagramme de séquence compute all](img/DiagrammeSequenceComputeAll.png)

## Processus de calcul des disponibilités par Unified Stock

### Récupération des données sur lesquelles effectuer le calcul

Pour exécuter le calcul des disponibilités, le module de traitement des stocks a besoin des données de stocks et de sources d'approvisionnement. Celles-ci peuvent venir de l'extérieur ou de la base REDIS en fonction de quel point API parmi ceux détaillés plus haut est appelé.

Une fois ces données récupérées, le calcul des disponibilités s'exécute en deux phases : une phase de préparation des données et une phase de calcul sur ces données.

### Préparation des données

Cette première phase permet de filtrer et de trier les données afin de ne disposer que des stocks et des informations d'approvisionnement pertinentes au calcul des disponibilités.
Elle exécute les opérations de nettoyage et de classification suivantes :

![Phase de préparation des données](img/DisposPreparation.png)

Une fois cette étape de préparation des données terminées, le calcul des disponibilités peut commencer.

### Calcul des disponibilités

Cette seconde phase se décompose en plusieurs étapes successives permettant d'obtenir les disponibilités à envoyer dans la file et dans Delivery Optimizer.

![Phase de calcul des disponibilités](img/DisposCalcul.png)