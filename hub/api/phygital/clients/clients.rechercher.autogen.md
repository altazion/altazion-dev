## <span id='rechercher'>Rechercher un client ou un prospect</span>

Recherche un client / un prospect

Url :`[GET] v2/customers/search/{searchstring}`

Paramètres : 

- **searchstring** (string) : L'élement à chercher

Url :`[GET] v2/customers/search/{searchstring}/{type}`

Paramètres : 

- **searchstring** (string) : L'élement à chercher
- **type** (string) : Le type de recherche ('client' pour limiter aux clients, 'prospect' pour limiter au prospect ou null pour tous)

Type de retour : `ClientProspectSearchResult[]`

Type(s) de données :

```csharp
class ClientProspectSearchResult
{
	string Civilite { get; set; }
	string Nom { get; set; }
	System.Guid Guid { get; set; }
	string Type { get; set; }
	string Email { get; set; }
	string CodePostal { get; set; }
	string Ville { get; set; }
}

```
