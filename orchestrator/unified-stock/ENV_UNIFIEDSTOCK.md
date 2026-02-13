# Variables d'environnement - Altazion Orchestrator - Unified Stock

Ce document liste toutes les variables d'environnement utilisées par l'application.

## Convention de nommage

Les variables d'environnement peuvent remplacer les paramètres d'Azure App Configuration :
- Comparaison sans casse (case-insensitive)
- Le caractère `_` (underscore) dans la variable d'environnement correspond au `:` (deux-points) dans Azure App Configuration

Exemple : `ALTAZIONUNIFIEDSTOCK_REDISCONNECTIONSTRING` correspond à `AltazionUnifiedStock:RedisConnectionString`

---

## Variables d'environnement

### `ALTAZION_UNIFIED_STOCK_USER`

- __Type :__ `string`
- __Obligatoire :__ Oui
- __Description :__ Nom d'utilisateur pour l'authentification Basic Auth sur tous les endpoints de l'API Unified Stock
- __Note :__ Utilisée pour sécuriser l'accès aux contrôleurs protégés par l'attribut `[UnifiedStockAuthorize]`

**ATTENTION** Cette option ne peut pas être définie via une configuration Azure App Configuration, elle doit forcément être passée via une variable d'environnement.

### `ALTAZION_UNIFIED_STOCK_PSW`

- __Type :__ `string`
- __Obligatoire :__ Oui
- __Description :__ Mot de passe pour l'authentification Basic Auth sur tous les endpoints de l'API Unified Stock
- __Note :__ Utilisée pour sécuriser l'accès aux contrôleurs protégés par l'attribut `[UnifiedStockAuthorize]`

**ATTENTION** Cette option ne peut pas être définie via une configuration Azure App Configuration, elle doit forcément être passée via une variable d'environnement.

### `ALTAZIONUNIFIEDSTOCK_REDISCONNECTIONSTRING`

- __Type :__ `string`
- __Obligatoire :__ Oui
- __Équivalent Azure App Config :__ `AltazionUnifiedStock:RedisConnectionString`
- __Description :__ Chaîne de connexion au cache Redis / Azure Cache for Redis pour stocker les stocks en mémoire
- __Configuration Redis :__
  - Timeout sync/async : 30 000 ms
  - Admin mode : Activé
  - Batch size : 20 000 (ou 6 000 si localhost)
- __Note :__ Redis est utilisé pour stocker :
  - Les stocks en mémoire (`InMemoryInventory`)
  - Les règles d'approvisionnement (`InMemorySupplyRule`)
  - Les sources d'approvisionnement (`InMemorySupplySource`)
  - Les codes Delivery Optimizer
  - Les entrepôts et zones de stockage

### `ALTAZION_UNIFIED_STOCK_CATALOG_ARTS_DISPOS_QUEUE`

- __Type :__ `string`
- __Obligatoire :__ Recommandé (sinon les disponibilités ne sont pas remontées en base SQL)
- __Équivalent Azure App Config :__ `Altazion:Unified_Stock:Catalog_Arts_Dispos_Queue`
- __Description :__ Nom de la file Azure Service Bus pour remonter les disponibilités d'articles calculées vers la base de données SQL
- __Format des messages :__ JSON contenant un dictionnaire de `Guid` (source d'appro) et de `CatalogArtDispo[]`
- __Batch size :__ 4 000 disponibilités par message
- __Note :__ Si la variable n'est pas définie, un message d'erreur est tracé mais l'application continue de fonctionner (sans remontée en base SQL)

### `ALTAZION_JOBSANDEVENTSSERVICEBUSCONNECTIONSTRING`

- __Type :__ `string`
- __Obligatoire :__ Oui (si remontée des disponibilités activée)
- __Équivalent Azure App Config :__ `Altazion:JobsAndEventsServiceBusConnectionString`
- __Description :__ Chaîne de connexion à Azure Service Bus pour la gestion des files de messages (jobs et événements)
- __Fonctions :__
  - Création automatique des queues si elles n'existent pas
  - Envoi de messages avec retry (3 tentatives)
  - Configuration des queues : `LockDuration` = 5 minutes
- __Note :__ Utilisée pour communiquer avec d'autres modules Altazion (notamment pour la remontée des disponibilités en base SQL)

### `ALTAZION_MAINSQLDBCONNECTIONSTRING`

- __Type :__ `string`
- __Obligatoire :__ Oui (pour les batchs)
- __Équivalent Azure App Config :__ `Altazion:MainSqlDbConnectionString`
- __Description :__ Chaîne de connexion à la base de données SQL Server principale d'Altazion
- __Note :__ Utilisée par les batchs pour synchroniser les données entre Redis et SQL Server

---

## Variables communes à tous les projets Altazion

Ces variables sont partagées par tous les modules de la plateforme Altazion (Unified Stock, Delivery Optimizer, etc.).

### `AZURE_APPCONFIG`

- __Type :__ `string`
- __Format :__ `Endpoint=https://{nom}.azconfig.io;Id={id};Secret={secret}`
- __Obligatoire :__ Recommandé en production
- __Scope :__ **Commun à tous les projets Altazion**
- __Description :__ Chaîne de connexion à Azure App Configuration pour centraliser toutes les configurations de l'application
- __Fonction :__ 
  - Permet de charger dynamiquement les configurations depuis Azure App Configuration
  - Évite de stocker les configurations sensibles dans les fichiers de code ou de configuration
  - Facilite la gestion multi-environnements (DEV, TEST, PROD)
- __Exemples de valeurs :__
  - **Environnement ALTAZION** : `Endpoint=https://creo-ignem.azconfig.io;Id=2-l9-s0:XrwxRJeuaBEATAKJ40dF;Secret=...`
  - **Environnement KJ (Kurt & Jacquie)** : `Endpoint=https://appcs-ecom-common-frc.azconfig.io;Id=gJCh;Secret=...`
- __Note :__ Si cette variable n'est pas configurée, seules les variables d'environnement locales seront utilisées

**ATTENTION** Cette option ne peut pas être définie via une configuration Azure App Configuration, elle doit forcément être passée via une variable d'environnement.

### `AZURE_APPCONFIG_ENV`

- __Type :__ `string`
- __Obligatoire :__ Non
- __Valeur par défaut :__ `"DEBUG"` (si non spécifié)
- __Scope :__ **Commun à tous les projets Altazion**
- __Description :__ Environnement cible pour Azure App Configuration (détermine le label à charger dans Azure App Configuration)
- __Valeurs courantes :__
  - `DEV`, `DEVELOPMENT` → Environnement de développement
  - `TEST` → Environnement de test/recette
  - `EDITOR` → Environnement d'édition (pré-production)
  - `PROD`, `PRODUCTION`, `MAIN`, `SAAS` → Environnement de production (normalisé en `PRODUCTION`)
- __Mécanisme :__
  - Azure App Configuration stocke les configurations avec des labels (tags)
  - Cette variable détermine quel label charger (ex: toutes les configs avec le label `DEV`)
  - Permet d'avoir une seule instance Azure App Configuration pour plusieurs environnements
- __Note :__ La valeur est automatiquement normalisée : `PROD`, `PRODUCTION`, `MAIN`, `SAAS` → `PRODUCTION`


**ATTENTION** Cette option ne peut pas être définie via une configuration Azure App Configuration, elle doit forcément être passée via une variable d'environnement.

### `CATALOG_ARTS_DISPOS_QUEUE`

- __Type :__ `string`
- __Obligatoire :__ Non (alias de `ALTAZION_UNIFIED_STOCK_CATALOG_ARTS_DISPOS_QUEUE`)
- __Description :__ Variable alternative pour spécifier le nom de la file de remontée des disponibilités
- __Note :__ Visible dans `launchSettings.json` pour le profil `KJ-PROD`, mais l'application utilise principalement `ALTAZION_UNIFIED_STOCK_CATALOG_ARTS_DISPOS_QUEUE`

---

## Variables pour OpenTelemetry (Observabilité)

Les variables suivantes sont utilisées pour la télémétrie et les traces distribuées :

### `OTEL_LOGS_EXPORTER`

- __Type :__ `string`
- __Obligatoire :__ Non
- __Valeur recommandée :__ `otlp`
- __Description :__ Type d'exporteur pour les logs OpenTelemetry

### `OTEL_TRACES_EXPORTER`

- __Type :__ `string`
- __Obligatoire :__ Non
- __Valeur recommandée :__ `otlp`
- __Description :__ Type d'exporteur pour les traces OpenTelemetry

### `OTEL_METRICS_EXPORTER`

- __Type :__ `string`
- __Obligatoire :__ Non
- __Valeur recommandée :__ `otlp`
- __Description :__ Type d'exporteur pour les métriques OpenTelemetry

### `OTEL_ALTAZION_TRACES_ENABLED`

- __Type :__ `bool` (`True` ou `False`)
- __Obligatoire :__ Non
- __Valeur recommandée :__ `True`
- __Description :__ Active ou désactive les traces Altazion

### `OTEL_ALTAZION_TRACES_SOURCES`

- __Type :__ `string`
- __Obligatoire :__ Non
- __Valeur recommandée :__ `Altazion.*`
- __Description :__ Pattern pour filtrer les sources de traces à capturer
- __Note :__ Permet de tracer les opérations dans les classes `MovementsBll`, `SupplySourcesBll`, `AzureServiceBusHelper`, `HttpClientHelper`, etc.


---

## Résumé

| Variable | Type | Obligatoire | Équivalent App Config | Scope |
|----------|------|-------------|----------------------|-------|
| `ALTAZION_UNIFIED_STOCK_USER` | string | Oui | - | Unified Stock |
| `ALTAZION_UNIFIED_STOCK_PSW` | string | Oui | - | Unified Stock |
| `ALTAZIONUNIFIEDSTOCK_REDISCONNECTIONSTRING` | string | Oui | `AltazionUnifiedStock:RedisConnectionString` | Unified Stock |
| `ALTAZION_UNIFIED_STOCK_CATALOG_ARTS_DISPOS_QUEUE` | string | Recommandé | `Altazion:Unified_Stock:Catalog_Arts_Dispos_Queue` | Unified Stock |
| `ALTAZION_JOBSANDEVENTSSERVICEBUSCONNECTIONSTRING` | string | Oui* | `Altazion:JobsAndEventsServiceBusConnectionString` | Unified Stock |
| `ALTAZION_MAINSQLDBCONNECTIONSTRING` | string | Oui** | `Altazion:MainSqlDbConnectionString` | Unified Stock |
| `AZURE_APPCONFIG` | string | Recommandé | - | **Tous les projets Altazion** |
| `AZURE_APPCONFIG_ENV` | string | Non | - | **Tous les projets Altazion** |
| `OTEL_LOGS_EXPORTER` | string | Non | - | Tous les projets Altazion |
| `OTEL_TRACES_EXPORTER` | string | Non | - | Tous les projets Altazion |
| `OTEL_METRICS_EXPORTER` | string | Non | - | Tous les projets Altazion |
| `OTEL_ALTAZION_TRACES_ENABLED` | bool | Non | - | Tous les projets Altazion |
| `OTEL_ALTAZION_TRACES_SOURCES` | string | Non | - | Tous les projets Altazion |

\* Obligatoire si remontée des disponibilités activée  
\*\* Obligatoire pour les batchs uniquement

---

## Architecture de Unified Stock

### Composants principaux

1. **API Web** (`Altazion.Orchestrator.UnifiedStock.Web`)
   - Exposition des endpoints REST pour :
     - Mouvements de stocks (entrées, sorties, transferts)
     - Gestion des sources d'approvisionnement
     - Gestion des règles d'approvisionnement
     - Gestion des entrepôts et zones de stockage
     - Consultation des stocks en mémoire

2. **Business Logic** (`Altazion.Orchestrator.UnifiedStock.Business`)
   - `MovementsBll` : Gestion des mouvements de stocks (entrées, sorties, transferts)
   - `SupplySourcesBll` : Calcul et envoi des disponibilités vers Delivery Optimizer
   - `RedisHelper` : Gestion de la connexion Redis et des opérations en mémoire
   - `AzureServiceBusHelper` : Envoi des messages vers Azure Service Bus
   - `HttpClientHelper` : Communication avec Delivery Optimizer

3. **Batchs** (`Altazion.Orchestrator.UnifiedStock.Batchs`)
   - `SyncImStocksToDbTaskChain` : Synchronisation des stocks Redis vers SQL
   - `MajSourceApproTaskChain` : Mise à jour des sources d'approvisionnement

### Flux de données

```
Sources externes → Unified Stock (Redis) → Calcul des disponibilités → {Delivery Optimizer, Base SQL}
```

1. **Réception des stocks** : Les stocks arrivent depuis des sources d'approvisionnement externes
2. **Stockage en mémoire** : Les stocks sont stockés dans Redis avec leurs règles d'approvisionnement
3. **Calcul des disponibilités** : Application des règles (pourcentages, seuils, min/max)
4. **Distribution** :
   - Vers **Delivery Optimizer** : Stocks calculés par origine pour optimisation des livraisons
   - Vers **Base SQL** : Disponibilités agrégées par canal de vente (via Azure Service Bus)

---

__Dernière mise à jour :__ 18 Jan. 2025
