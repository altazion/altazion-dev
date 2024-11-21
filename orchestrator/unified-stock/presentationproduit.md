# Présentation du produit

## Généralités

Unified Stock (US) est l'un des composant principaux d'Orchestrator, l'OMS d'Altazion. Il s'agit d'une suite d'applications à déployer dans votre système d'information qui vous permet de bénéficier des stocks en temps réel pour l'ensemble de vos origines de stock.

Unified Stock est conçu pour fonctionner avec les Sources d'Approvisionnement et Delivery Optimizer, il est donc indispensable d'utiliser l'ensemble de ces produits pour bénéficier des stocks en temps réel.

## Architecture et intégration de Unified Stock

Le produit Unified Stock est composé de deux blocs ainsi que d'une base de données.

### Partie standard
Ce premier bloc comporte un module de traitement des stocks et de traitements périodiques (batchs). Il repose également sur l'utilisation des sources d'approvisionnement et de Delivery Optimizer pour son fonctionnement.

### Partie spécifique
Une partie spécifique, servant à interfacer vos flux de stocks avec le module Unified Stock. Cette partie est spécifique à chaque client. Pour le développement de cette partie spécifique n'hésitez pas à vous rapprocher d'Altazion Services.

Afin de tester l'intégration de Unified Stock à vos outils, Altazion propose un module de traitement des flux de stocks capable de parser des fichiers aux formats Excel (xls, xlsx). Pour plus d'information sur ce module, consultez la page de documentation dédiée.

### Base de données REDIS

