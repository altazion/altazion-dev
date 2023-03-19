## <span id='connexionclient'>Connexion d'un client</span>

Connecte un client sur le site.

Url :`[POST] app/crosscanal/commandes/{siteId:int}/clients/connexion`

Paramètres : 

- **siteId** (int) : L'identifiant du site
- en tant que body, un objet LogClient : L'identifiant et le mdp du client

Url :`[POST] app/crosscanal/commandes/{siteId:int}/clients/connexion/byguid/{clientGuid:guid}`

Paramètres : 

- **siteId** (int) : L'identifiant du site
- en tant que body, un objet LogClient : L'identifiant et le mdp du client
- **clientGuid** (System.Guid) : L'identifiant du client

Type de retour : `InfoBaseClient`

Type(s) de données :

```csharp
class InfoBaseClient
{
	System.Guid Guid { get; set; }
	string Nom { get; set; }
	string Email { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
}

class LogClient
{
	string Email { get; set; }
	string PassWord { get; set; }
}

```

