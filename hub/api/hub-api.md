# APIs du module HUB

Les api de notre module Hub sont disponibles sur :

*   https://api.simplement-e.com
*   https://api.server.commerce-hub.io
*   sur le port 8000 sur un [serveur local magasin](/fr-fr/administration/storeserver/)
*   selon votre configuration sur une installation OnPremise

## APIs Utilisateurs et APIs Serveurs

Il existe deux types de points APIs :

*   les points "Utilisateurs", destinés à être utilisé dans le contexte d'un utilisateurs : tous les appels que vous réaliserez sur ces points doivent être authentifié avec un compte utilisateur valide, au travers d'une clef API personnelle.
*   les points "Serveurs", destinés à des communications de serveur à serveur : tous les appels sont réalisées en tant que compte d'application partenaires

De nombreux points sont disponibles dans les deux modes, parfois avec quelques différences entre la version "Utilisateurs" et la version "Serveurs".

## Authentification

L'authentification sur les APIs d'Altazion Hub peut être réalisée de deux façons :

- au travers d'une authentification BASIC, il vous faudra alors sécuriser vos appels au moyen d'une connexion HTTPS (à une exception près, détaillée ci-après). Cette méthode est à privilégier si vous avez des développements très simples, déployés dans un environnement dont vous matrisez la sécurité
- au travers d'un jeton de type oAuth2.

### Authentification BASIC

C'est probablement le processus le plus simple : il vous suffit d'ajouter un header d'authentification, reprenant les identifiants de clefs APIs utilisateur ou application d'extensibilité.

La création de ces identifiants se fait dans Altazion Office :

- dans l'espace _Mes options_ > _Mes clefs APIs_ pour les identifiants Utilisateurs
- dans _Paramètres_, sous _Applications d'extensibilité_ pour les identifiants Serveurs

Vous pouvez ensuite utiliser toutes les APIs Altazion Hub, en utilisant ces identifiants, par exemple :

Curl : 
```bash
curl --user user:pwd https://api.altazion.com/api/security/users/me
```

.net (C#)
```csharp
using(var cli = new WebClient())
{
    string id = Convert.ToBase64String(Encoding.ASCII.GetBytes("user:pwd"));
    cli.Headers.Add(HttpRequestHeader.Authorization, "Basic " + id);
    string ret = cli.DownloadString("https://api.altazion.com/api/security/users/me");
    Console.WriteLine(ret);
}
```

### Authentification oAuth2

Bien que l'autorisation par jeton soit plus complexe à mettre en oeuvre, elle présente plusieurs intérêts :

- une meilleure sécurité : le header d'authentification a une durée limitée, si un utilisateur malveillant venait à l'intercepter, il n'aurait qu'un temps réduit pour pouvoir l'utiliser
- un protocole d'échange des informations d'identité standardisé et utilisé par de nombreuses sociétés (Google, Microsoft, Facebook, Sonos, etc.)
- la possibilité de ne demander qu'un jeu réduit d'autorisation pour des cas d'utilisations spécifiques
- une meilleure visibilité, pour l'utilisateur final, des autorisations qu'il accorde à une application tierce
- la possibilité de développer une application tierce pouvant etre partagée entre plusieurs _tenants_.

>![WARNING]
>

## Autorisations