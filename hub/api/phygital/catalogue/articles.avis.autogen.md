## <span id='avis'>Obtenir les avis clients sur un produits</span>

Récupère les avis d'un articles

Url :`[GET] v2/catalogue/get/{reference}/reviews`

Paramètres : 

- **reference** (string)

Url :`[GET] v2/catalogue/get/{reference}/reviews?articleGuid={articleGuid:System.Guid}`

Paramètres : 

- **reference** (string)
- **articleGuid** (System.Guid)

Type de retour : `AvisClient[]`

Type(s) de données :

```csharp
class AvisClient
{
	System.Guid Guid { get; set; }
	System.Guid ArticleGuid { get; set; }
	string Nom { get; set; }
	string Message { get; set; }
	Guid? ClientGuid { get; set; }
	string Email { get; set; }
	bool EstValide { get; set; }
	DateTime Date { get; set; }
	decimal Note { get; set; }
}

```
