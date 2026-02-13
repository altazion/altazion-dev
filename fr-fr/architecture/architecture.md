# Architecture Logique - Plateforme Altazion SaaS

> Documentation de l'architecture fonctionnelle et logique de la plateforme Altazion SaaS.

---

## Vue d'ensemble

Cette plateforme déploie une solution SaaS complète pour la gestion retail, e-commerce et supply chain. L'architecture est organisée en **3 suites applicatives** principales supportées par des **services de données** et des **outils transverses**.

## Architecture Logique - Niveau 1 : Applications Métier

```mermaid
graph TB
    subgraph "🏢 OFFICE SUITE"
        OM[Office Main]
        OPIM[Office PIM]
        OERP[Office ERP]
        ORET[Office Retail]
        OCONT[Office Content]
        OCOM[Office Commerce]
    end

    subgraph "🚚 SUPPLY CHAIN SUITE"
        OMAIN[Orchestrator Main]
        DELIV[Delivery Optimizer]
        USTOCK[Unified Stock]
    end

    subgraph "🛒 ECOMMERCE SUITE"
        CENG[Commerce Engine]
        CSIGN[Commerce Signage]
        CSERV[Commerce Server]
    end

    subgraph "🔄 BATCHS"
        BOM[Office Main Batchs]
        BPIM[Office PIM Batchs]
        BCONT[Office Content Batchs]
        BERP[Office ERP Batchs]
        BCOM[Office Commerce Batchs]
        BRET[Office Retail Batchs<br/>💤 Prévu ultérieurement]
        BORCH[Orchestrator Batchs]
        BOMS[Orchestrator OMS Batchs]
    end

    style OM fill:#2196F3,stroke:#1976D2,color:#fff
    style OPIM fill:#2196F3,stroke:#1976D2,color:#fff
    style OERP fill:#2196F3,stroke:#1976D2,color:#fff
    style ORET fill:#2196F3,stroke:#1976D2,color:#fff
    style OCONT fill:#2196F3,stroke:#1976D2,color:#fff
    style OCOM fill:#2196F3,stroke:#1976D2,color:#fff
    
    style OMAIN fill:#00BCD4,stroke:#0097A7,color:#fff
    style DELIV fill:#00BCD4,stroke:#0097A7,color:#fff
    style USTOCK fill:#00BCD4,stroke:#0097A7,color:#fff
    
    style CENG fill:#9C27B0,stroke:#7B1FA2,color:#fff
    style CSIGN fill:#9C27B0,stroke:#7B1FA2,color:#fff
    style CSERV fill:#9C27B0,stroke:#7B1FA2,color:#fff
    
    style BRET fill:#BDBDBD,stroke:#757575,color:#fff
```

![Vue générale](schema-general.png)

---

## Architecture Logique - Niveau 2 : Support & Infrastructure

### Vue Générale


```mermaid
graph TB
    subgraph "💾 BASES DE DONNÉES"
        MONGO[(MongoDB vCore)]
        REDIS[(Redis Enterprise)]
        SQL[(SQL Server)]
    end

    subgraph "🛠️ OUTILS DE SUPPORT ALTAZION"
        NOTIF[Service de Notification]
        CACHE[Service Gestion Cache]
    end

    subgraph "🏢 OFFICE SUITE"
        OM[Office Main]
        OPIM[Office PIM]
        OERP[Office ERP]
        ORET[Office Retail]
        OCONT[Office Content]
        OCOM[Office Commerce]
    end

    subgraph "🚚 SUPPLY CHAIN"
        OMAIN[Orchestrator Main]
        DELIV[Delivery Optimizer]
        USTOCK[Unified Stock]
    end

    subgraph "🛒 ECOMMERCE"
        CENG[Commerce Engine]
        CSIGN[Commerce Signage]
        CSERV[Commerce Server]
    end

    %% Connexions SQL Server
    OM -->|Principal| SQL
    OPIM --> SQL
    OERP --> SQL
    ORET --> SQL
    OCONT --> SQL
    OCOM --> SQL
    OMAIN --> SQL
    CENG -->|Principal| SQL
    CSIGN --> SQL
    CSERV --> SQL

    %% Connexions MongoDB
    OM -->|Certaines données| MONGO
    OCONT --> MONGO
    DELIV -->|Données| MONGO
    CENG -->|Paniers| MONGO
    CSERV --> MONGO

    %% Connexions Redis
    OM -->|Chat/IA| REDIS
    DELIV -->|Cache| REDIS
    USTOCK -->|Cache| REDIS
    CENG -->|Sessions| REDIS
    CSIGN --> REDIS

    %% Appels API inter-composants
    USTOCK -->|Appel API| DELIV
    CENG -->|Appel API| DELIV

    %% Style des bases de données
    style MONGO fill:#4DB33D,stroke:#3E8E2E,color:#fff
    style REDIS fill:#DC382D,stroke:#B02A21,color:#fff
    style SQL fill:#0078D4,stroke:#005A9E,color:#fff
    
    style NOTIF fill:#FF6F00,stroke:#E65100,color:#fff
    style CACHE fill:#FF6F00,stroke:#E65100,color:#fff
```



---

### Vue Office Suite

```mermaid
graph TB
    subgraph "💾 BASES DE DONNÉES"
        MONGO[(MongoDB vCore)]
        REDIS[(Redis Enterprise)]
        SQL[(SQL Server)]
    end

    subgraph "🏢 OFFICE SUITE"
        OM[Office Main]
        OPIM[Office PIM]
        OERP[Office ERP]
        ORET[Office Retail]
        OCONT[Office Content]
        OCOM[Office Commerce]
    end

    %% Connexions SQL Server
    OM -->|Principal| SQL
    OPIM -->|Principal| SQL
    OERP -->|Principal| SQL
    ORET -->|Principal| SQL
    OCONT -->|Secondaire| SQL
    OCOM -->|Principal| SQL

    %% Connexions MongoDB
    OM -->|Certaines données| MONGO
    OPIM -->|DPP - Infos produits avancées| MONGO
    OCONT -->|Principal| MONGO

    %% Connexions Redis
    OM -->|Chat/IA| REDIS

    %% Style des applications Office
    style OM fill:#2196F3,stroke:#1976D2,color:#fff
    style OPIM fill:#2196F3,stroke:#1976D2,color:#fff
    style OERP fill:#2196F3,stroke:#1976D2,color:#fff
    style ORET fill:#2196F3,stroke:#1976D2,color:#fff
    style OCONT fill:#2196F3,stroke:#1976D2,color:#fff
    style OCOM fill:#2196F3,stroke:#1976D2,color:#fff
    
    %% Style des bases de données
    style MONGO fill:#4DB33D,stroke:#3E8E2E,color:#fff
    style REDIS fill:#DC382D,stroke:#B02A21,color:#fff
    style SQL fill:#0078D4,stroke:#005A9E,color:#fff
```

![Vue office](vue-office.png)
---

### Vue Supply Chain Suite

```mermaid
graph TB
    subgraph "💾 BASES DE DONNÉES"
        MONGO[(MongoDB vCore)]
        REDIS[(Redis Enterprise)]
        SQL[(SQL Server)]
    end

    subgraph "🚚 SUPPLY CHAIN SUITE"
        OMAIN[Orchestrator Main]
        DELIV[Delivery Optimizer]
        USTOCK[Unified Stock]
    end

    %% Connexions SQL Server
    OMAIN -->|Principal| SQL
    
    %% Connexions MongoDB
    DELIV -->|Données principales| MONGO
    
    %% Connexions Redis
    DELIV -->|Cache| REDIS
    USTOCK -->|Cache principal| REDIS
    
    %% Appels API inter-composants
    USTOCK -->|Appel API| DELIV

    %% Style des applications Supply Chain
    style OMAIN fill:#00BCD4,stroke:#0097A7,color:#fff
    style DELIV fill:#00BCD4,stroke:#0097A7,color:#fff
    style USTOCK fill:#00BCD4,stroke:#0097A7,color:#fff
    
    %% Style des bases de données
    style MONGO fill:#4DB33D,stroke:#3E8E2E,color:#fff
    style REDIS fill:#DC382D,stroke:#B02A21,color:#fff
    style SQL fill:#0078D4,stroke:#005A9E,color:#fff
```

![Vue office](vue-orchestrator.png)

---

### Vue ECommerce Suite

```mermaid
graph TB
    subgraph "💾 BASES DE DONNÉES"
        MONGO[(MongoDB vCore)]
        REDIS[(Redis Enterprise)]
        SQL[(SQL Server)]
    end
    
    subgraph "🚚 SUPPLY CHAIN"
        DELIV[Delivery Optimizer]
    end

    subgraph "🛒 ECOMMERCE SUITE"
        CENG[Commerce Engine]
        CSIGN[Commerce Signage]
        CSERV[Commerce Server]
    end

    %% Connexions SQL Server
    CENG -->|Principal| SQL
    CSIGN -->|Principal| SQL
    CSERV -->|Principal| SQL

    %% Connexions MongoDB
    CENG -->|Paniers| MONGO
    CSERV -->|Données secondaires| MONGO

    %% Connexions Redis
    CENG -->|Sessions| REDIS
    CSIGN -->|Cache| REDIS
    
    %% Appels API inter-composants
    CENG -->|Appel API| DELIV

    %% Style des applications ECommerce
    style CENG fill:#9C27B0,stroke:#7B1FA2,color:#fff
    style CSIGN fill:#9C27B0,stroke:#7B1FA2,color:#fff
    style CSERV fill:#9C27B0,stroke:#7B1FA2,color:#fff
    
    %% Style Supply Chain (référencé)
    style DELIV fill:#00BCD4,stroke:#0097A7,color:#fff
    
    %% Style des bases de données
    style MONGO fill:#4DB33D,stroke:#3E8E2E,color:#fff
    style REDIS fill:#DC382D,stroke:#B02A21,color:#fff
    style SQL fill:#0078D4,stroke:#005A9E,color:#fff
```
![Vue office](vue-commerce.png)
---

## Détail des Composants

### Office Suite (Back-Office)

| Composant | Description | Image Docker | Dépendances |
|-----------|-------------|--------------|-------------|
| **Office Main** | Point d'entrée principal du back-office | `altazion-office-main` | SQL (principal), MongoDB (certaines données), Redis (chat/IA) |
| **Office PIM** | Gestion des articles et catalogue produits | `altazion-office-pim` | SQL Server, MongoDB (infos produits avancées : DPP) |
| **Office ERP** | Gestion de l'entreprise (finances, RH, etc.) | `altazion-office-erp` | SQL Server |
| **Office Retail** | Back-office pour la gestion des magasins | `altazion-office-retail` | SQL Server |
| **Office Content** | Gestion du contenu headless (CMS) | `altazion-office-content` | SQL Server, MongoDB (données principales) |
| **Office Commerce** | Back-office pour le e-commerce | `altazion-office-commerce` | SQL Server |

**Batchs associés :** Office Main Batchs, Office PIM Batchs, Office Content Batchs, Office ERP Batchs, Office Commerce Batchs, Office Retail Batchs *(prévu ultérieurement)*

---

### Supply Chain Suite (Orchestration Logistique)

| Composant | Description | Image Docker | Dépendances |
|-----------|-------------|--------------|-------------|
| **Orchestrator Main** | Back-office logistique et orchestration principale | `altazion/orchestrator-main` | SQL Server |
| **Delivery Optimizer** | Optimisation des livraisons et routage | `altazion/delivery-optimizer` | MongoDB vCore, Redis Enterprise |
| **Unified Stock** | Gestion unifiée des stocks multicanaux | `altazion/oms-unifiedstock` | Redis Enterprise, Delivery Optimizer (API) |

**Batchs associés :** Orchestrator Batchs (pour les 3 composants), Orchestrator OMS Batchs (progression commandes/bons de préparation)

---

### ECommerce Suite (Front-End Commerce)

| Composant | Description | Image Docker | Dépendances |
|-----------|-------------|--------------|-------------|
| **Commerce Engine** | Moteur e-commerce headless (API) | `altazion-commerce-engine` | SQL Server, MongoDB (paniers), Redis (sessions), Delivery Optimizer (API) |
| **Commerce Signage** | Vente sur devices digitaux en magasin (bornes, affichage) | | SQL Server, Redis |
| **Commerce Server** | Couche de rendu côté serveur (SSR) | | SQL Server, MongoDB |

**Batchs associés :** Aucun prévu pour l'instant

---

### Bases de Données & Cache

| Service | Usage | Composants utilisateurs |
|---------|-------|-------------------------|
| **MongoDB vCore** | Stockage NoSQL pour paniers, certaines données | Delivery Optimizer, Office Main, Office Content, Commerce Engine, Commerce Server |
| **Redis Enterprise** | Cache haute performance, sessions, chat/IA | Unified Stock, Delivery Optimizer, Office Main (chat/IA), Commerce Engine (sessions), Commerce Signage |
| **SQL Server** | Base de données transverse principale | Presque tous les composants Office, Supply Chain et ECommerce |

---

### Outils de Support Altazion

| Outil | Description | Image Docker | Dépendances |
|-------|-------------|--------------|-------------|
| **Service de Notification** | Gestion des notifications de changement (type Service Bus/Kafka/NATS) | `altazion-internal-notifapp` | |
| **Service Gestion Cache** | Gestion centralisée du cache Redis | `altazion-redis-cachetools` | Redis Enterprise, SQL Server |

---


### Déploiement K8S

Les composants suivants ont besoin d'être accèdés par des utilisateurs externes : 

- Tout Office-*
- Orchestrator-Main

Les composants suivants ont besoin d'un ingress avec protection contre DDOS :

- Commerce Engine
- Commerce Signage

Ces composants peuvent avoir un ingress "semi privé" :

- Unified Stocks
- Delivery Optimizer
- altazion-internal-notifapp
- altazion-redis-cachetools



*Documentation logique maintenue par l'équipe DevOps Altazion*
*Dernière mise à jour : 13 février 2026*

