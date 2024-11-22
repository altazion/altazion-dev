# Présentation du produit

## Généralités

Unified Stock (US) est l'un des composant principaux d'Orchestrator, l'OMS d'Altazion. Il s'agit d'une suite d'applications à déployer dans votre système d'information qui vous permet de bénéficier des stocks en temps réel pour l'ensemble de vos origines de stock et de vos canaux de ventes.

Unified Stock est conçu pour fonctionner avec les Sources d'Approvisionnement et Delivery Optimizer, il est donc indispensable d'utiliser l'ensemble de ces produits pour bénéficier des stocks en temps réel.

## Architecture et intégration de Unified Stock

Le produit Unified Stock est composé de plusieurs blocs ainsi que d'une base de données.

### Module de traitement des stocks
Il s'agit d'un serveur API conçu pour réceptionner vos mouvements de stocks ainsi que les caractéristiques des stocks issu des sources d'approvisionnement afin de recalculer les disponibilités en temps réel.
Ce premier bloc comporte un module de traitement des stocks et de traitements périodiques (batchs). Il repose également sur l'utilisation des sources d'approvisionnement et de Delivery Optimizer pour son fonctionnement.

### Module d'intégration (parsage) des flux de stocks
Cette partie spécifique sert à interfacer vos flux de stocks avec le module de traitement des stocks de Unified Stock afin qu'ils respectent le standard d'Altazion. Concrétement, il s'agit d'un module dédié à faire de l'échange de données informatisées (EDI).

Le fonctionnement des flux de stock étant unique pour chaque client, n'hésitez pas à vous rapprocher d'Altazion Services pour le développement de ce module.

Afin de tester l'intégration de Unified Stock à vos outils, Altazion propose un module d'intégration des flux de stocks basé sur le parsage de fichiers aux formats Excel (xls, xlsx). Pour plus d'information sur ce module, consultez la page de documentation dédiée.

### Base de données REDIS

