## <span id='rechercherapide'>Rechercher rapide</span>

Lance un quick search sur les articles.

Url :`[GET] app/catalogue/search/quick?critere={critere:string}&nb={nb:int}`

Paramètres : 

- **critere** (string) : Chaine a rechercher
- **nb** (int) : Nombre max de réponse (25 par défaut)

Type de retour : `SearchResult[]`

Type(s) de données :

```csharp
class SearchResult
{
	string Libelle { get; set; }
	string Complement { get; set; }
	string Id { get; set; }
	string Code { get; set; }
	string Namespace { get; set; }
	string Categorie { get; set; }
	string LibelleCategorie { get; set; }
}

```

