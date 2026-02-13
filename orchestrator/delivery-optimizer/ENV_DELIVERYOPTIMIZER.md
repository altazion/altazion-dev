# Variables d'environnement - Altazion Orchestrator - Delivery Optimizer

Ce document liste toutes les variables d'environnement utilisées par l'application.

## Convention de nommage

Les variables d'environnement peuvent remplacer les paramètres d'Azure App Configuration :
- Comparaison sans casse (case-insensitive)
- Le caractère `_` (underscore) dans la variable d'environnement correspond au `:` (deux-points) dans Azure App Configuration

Exemple : `ALTAZIONDELIVERYOPTIMIZER_COSMOSDBCONNECTIONSTRING` correspond à `AltazionDeliveryOptimizer:CosmosDBConnectionString`

---

## Variables d'environnement

### `ALTAZION_SFS_CONFIG_USER`

- __Type :__ `string`
- __Obligatoire :__ Oui
- __Description :__ Nom d'utilisateur pour l'authentification Basic Auth sur les endpoints de configuration des tenants (`/api/v1/tenants/{tenantId}/ *`)

**ATTENTION** Cette option ne peut pas être définie via une configuration Azure App Configuration, elle doit forcément être passée via une variable d'environnement.

### `ALTAZION_SFS_CONFIG_PSW`

- __Type :__ `string`
- __Obligatoire :__ Oui
- __Description :__ Mot de passe pour l'authentification Basic Auth sur les endpoints de configuration des tenants (`/api/v1/tenants/{tenantId}/ *`)

**ATTENTION** Cette option ne peut pas être définie via une configuration Azure App Configuration, elle doit forcément être passée via une variable d'environnement.

### `ALTAZIONDELIVERYOPTIMIZER_COSMOSDBCONNECTIONSTRING`

- __Type :__ `string`
- __Obligatoire :__ Non (future normalisation des noms de variables)
- __Équivalent Azure App Config :__ `AltazionDeliveryOptimizer:CosmosDBConnectionString`
- __Fallback :__ `AltazionSFS:CosmosDBConnectionString` 
- __Description :__ Chaîne de connexion à la base de données MongoDB ou Azure CosmosDB (API MongoDB)
- __Détection du type :__
  - Si contient `"mongo.cosmos.azure.com"` : CosmosDB RU (Request Units)
  - Sinon : MongoDB classique (compatible CosmosDB vCore)

### `ALTAZIONSFS_COSMOSDBCONNECTIONSTRING`

- __Type :__ `string`
- __Obligatoire :__ Oui 
- __Équivalent Azure App Config :__ `AltazionSFS:CosmosDBConnectionString`
- __Description :__ Chaîne de connexion à la base de données MongoDB ou Azure CosmosDB (API MongoDB)
- __Détection du type :__
  - Si contient `"mongo.cosmos.azure.com"` : CosmosDB RU (Request Units)
  - Sinon : MongoDB classique (compatible CosmosDB vCore)

### `ALTAZION_SFS_NOSHARDING`

- __Type :__ `bool` (`true` ou `false`)
- __Obligatoire :__ Non
- __Valeur par défaut :__ `false`
- __Description :__ Désactive le sharding (partitionnement) pour les collections MongoDB classiques
- __Note :__ N'a aucun effet sur les bases CosmosDB RU, uniquement sur MongoDB classique et CosmosDB vCore

**ATTENTION** Cette option ne peut pas être définie via une configuration Azure App Configuration, elle doit forcément être passée via une variable d'environnement.

### `ALTAZIONDELIVERYOPTIMIZER_REDISCONNECTIONSTRING`

- __Type :__ `string`
- __Obligatoire :__ Oui
- __Équivalent Azure App Config :__ `AltazionDeliveryOptimizer:RedisConnectionString`
- __Description :__ Chaîne de connexion au cache Redis / Azure Cache for Redis
- __Configuration Redis :__
  - Database utilisée : `2`
  - Timeout sync/async : 30 000 ms
  - Compression : ZStandard, Snappy, Zlib
  - Admin mode : Activé
- __Important :__ Pour Azure Cache for Redis, configurer le paramètre `notify-keyspace-events` à `KEx`

### `AZURE_APPCONFIG`

- __Type :__ `string`
- __Format :__ `Endpoint=https://{nom}.azconfig.io;Id={id};Secret={secret}`
- __Obligatoire :__ Recommandé en production
- __Description :__ Chaîne de connexion à Azure App Configuration
- __Fonction :__ Permet de centraliser toutes les configurations de l'application dans Azure App Configuration


**ATTENTION** Cette option ne peut pas être définie via une configuration Azure App Configuration, elle doit forcément être passée via une variable d'environnement.

### `AZURE_APPCONFIG_ENV`

- __Type :__ `string`
- __Obligatoire :__ Non
- __Valeur par défaut :__ `"DEBUG"`
- __Description :__ Environnement cible pour Azure App Configuration (détermine le label à charger)
- __Valeurs :__
  - `PROD`, `PRODUCTION`, `MAIN`, `SAAS` → Convertie en `"PRODUCTION"`
  - Autres valeurs → Conservées en MAJUSCULES

**ATTENTION** Cette option ne peut pas être définie via une configuration Azure App Configuration, elle doit forcément être passée via une variable d'environnement.

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
- __Note :__ Permet de tracer les opérations dans les classes


---

## Résumé

| Variable | Type | Obligatoire | Équivalent App Config |
|----------|------|-------------|----------------------|
| `ALTAZION_SFS_CONFIG_USER` | string | Oui | - |
| `ALTAZION_SFS_CONFIG_PSW` | string | Oui | - |
| `ALTAZIONDELIVERYOPTIMIZER_COSMOSDBCONNECTIONSTRING` | string | Oui | `AltazionDeliveryOptimizer:CosmosDBConnectionString` |
| `ALTAZIONSFS_COSMOSDBCONNECTIONSTRING` | string | Non (déprécié) | `AltazionSFS:CosmosDBConnectionString` |
| `ALTAZION_SFS_NOSHARDING` | bool | Non | - |
| `ALTAZIONDELIVERYOPTIMIZER_REDISCONNECTIONSTRING` | string | Oui | `AltazionDeliveryOptimizer:RedisConnectionString` |
| `AZURE_APPCONFIG` | string | Recommandé | - |
| `AZURE_APPCONFIG_ENV` | string | Non | - |

---

__Dernière mise à jour :__ 15 Oct. 2025
