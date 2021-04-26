# Compiler et déployer votre spécifique

## Solution SaaS

Le déploiement de votre solution est totalement libre quand à son hébergement et les conditions dans lesquelles vous administrez vos outils. Veillez seulement à ce que votre applicatif soit en mesure de se connecter sur les adresses et ports suivants :

|Protocole|Port(s)|Serveur distant|
|---|---|---
|https|443|api.altazion.com|
|https|443|e-serversync-ns.servicebus.windows.net|
|https|443|http-intake.logs.datadoghq.eu|

L'accès à `http-intake.logs.datadoghq.eu` peut être ignoré si vous n'avez pas activé le module de centralisation des traces.

## Solution OnPrem

Le déploiement de votre solution OnPrem peut se faire au travers de 3 outils, en fonction de votre environnement :

* votre applicatif seul, installé par vos soins.
* Docker ou Kubernetes
* Altazion Hub Server

### Applicatif seul

Si vous déployez votre applicatif de façon autonome, vous n'aurez besoin que de vous assurer de la bonne connexion à la base de données et aux autres services applicatifs. En utilisant la classe `ConfigurationRedirectionHelper` dans votre code, votre applicatif bénéficie automatiquement de la configuration centralisée.

### Docker ou Kubernetes



### Altazion Hub Server
