# Sécurisation du module
## Redirection automatique vers HTTPS
Le module SFS n'écoute qu'en HTTPS et redirige automatiquement les appels HTTP vers un port HTTPS. Si aucun port HTTPS n’est disponible, l’application ne peut pas démarrer.
## Authentification
Le serveur API repose sur une authentification BASIC (user:password) à passer dans les headers de chaque appel. Le champ user correspond au nom d’un utilisateur pour une raison juridique. L’authentification permet de limiter la portée des appels à la seul raison juridique concernée ainsi qu’aux seuls droits disponibles pour l’utilisateur.
## Notion de droits utilisateurs
En fonction de son droit, un utilisateur du module SFS ne pourra pas accéder aux mêmes fonctionnalités du module. Actuellement on compte deux droits :
- OMS, qui donne l’accès complet aux points API du module. Comme son nom l’indique, ce droit a vocation à être utilisé par votre OMS.
- COMMERCE, qui donne l’accès aux disponibilités d’un article ainsi qu’à la gestion des paniers. Ce droit a vocation à être utilisé par votre site e-commerce.
