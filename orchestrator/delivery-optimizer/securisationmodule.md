# Sécurisation du module

## Fonctionnement en HTTPS
Le module Delivery Optimizer (DO) n'écoute qu'en HTTPS et n'accepte pas les appels HTTP. Si aucun port HTTPS n’est disponible ou si le certificat n'est pas/plus valide, l’application ne pourra pas fonctionner correctement. 

## Authentification
Le serveur API repose sur une authentification BASIC (user:password) à passer dans les headers de chaque appel. Le champ user correspond au nom d’un utilisateur pour une raison juridique. L’authentification permet de limiter la portée des appels à la seul raison juridique concernée ainsi qu’aux seuls droits disponibles pour l’utilisateur. Si vous utilisez le produit Orchestrator Unified Stock et le moteur E-Commerce d'Altazion l'authentification est automatiquement gérée dans le code standard. 

## Notion de droits utilisateurs
En fonction de son droit, un utilisateur du module DO ne pourra pas accéder aux mêmes fonctionnalités du module. Actuellement on compte deux droits :
- __OMS__, qui donne l’accès complet aux points API du module. Comme son nom l’indique, ce droit a vocation à être utilisé par votre OMS.
- __COMMERCE__, qui donne l’accès aux disponibilités d’un article ainsi qu’à la gestion des paniers. Ce droit a vocation à être utilisé par votre site e-commerce.

## Super admin

Un compte utilisateur spécifique est requis si vous déployez Delivery Optimizer sur vos propres serveurs. Il sera définit via [deux variables d'environnement](ENV_DELIVERYOPTIMIZER.md) :

- ALTAZION_SFS_CONFIG_USER
- ALTAZION_SFS_CONFIG_PSW