# Module Operator pour Kubernetes

>[!Warning]
Les modules décrits dans cette page ne sont disponibles que pour nos clients utilisant la solution déployée en mode "Isolé sur Azure"

## Altazion Operator

Le module operator est automatiquement déployé lors de l'installation de la solution en mode "Isolée".

### Configuration du module

Les variables d'environnement suivantes doivent être définies pour que le module soit opérationnel :

|Nom|Optionnel ?|Description|
|---|:---:|---|
|AZURE_APPCONFIG||Chaine de connexion à la configuration centralisée sur Azure AppConfiguration|
|LOKI_SERVER|X|Url du serveur Loki pour l'envoi des logs de progression des modules|
|LOKI_USER|X|Nom d'utilisateur pour Loki|
|LOKI_PASSWORD|X|Mot de passe pour LOKI|

Ces différentes valeurs sont définies dans le fichier de déploiement de la solution et stockés sous forme de _Secrets_ dans Kubernetes.

### Commandes supportées

Le module n'accepte aucune commande.

## Altazion.Operator.Companion

Ce module permet de remonter des informations globales pour faciliter le monitoring et la détection d'anomalies dans le déploiement. Il permet, par exemple :

- de suivre l'état des commandes et ordres de préparation
- de surveiller les différentes files de traitements asynchrones

### Configuration du module

En utilisant les variables d'environnement suivantes, vous pourrez configurer le module :

|Nom|Optionnel ?|Description|
|---|:---:|---|
|AZURE_APPCONFIG||Chaine de connexion à la configuration centralisée sur Azure AppConfiguration|
|AZURE_APPCONFIG_ENV|X|Si vous positionnez une valeur, celle-ci sera utilisée en tant que critère "label" pour les chaines de connexion|

Si vous avez des traitements personnalisés, vous pouvez ajouter la variable d'environnement suivante pour ajouter vos files ServiceBus à la remontée des informations

|Nom|Optionnel ?|Description|
|---|:---:|---|
|HUBCOMPANION_ADD_SERVICEBUS|X|Une liste, séparée par des virgules de clef de configuration dans Azure AppConfig qui poitent chacune sur une chaine de connexion Service Bus|

### Commandes supportées

Le module n'accepte aucune commande.