## <span id='suggestionsrecherche'>Obtenir des suggestions de recherche</span>

Obtient des suggestions de recherche

Url :`[GET] v2/catalogue/search/suggest?q={q:string}`

Paramètres : 

- **q** (string) : Les différents mots clefs saisis

Url :`[GET] v2/catalogue/search/partialRef?q={q:string}`

Paramètres : 

- **q** (string) : Les différents mots clefs saisis

Url :`[POST] v2/catalogue/search/suggest`

Paramètres : 

- en tant que body, un objet String[] : Les différents mots clefs saisis

Type de retour : `CatalogSearchSuggestionWithRef[]`

Type(s) de données :

```csharp
class CatalogSearchSuggestionWithRef
{
	string Ref { get; set; }
	bool DisponibleCommande { get; set; }
	bool DisponibleMagasin { get; set; }
	bool DisponibleCentrale { get; set; }
	string Label { get; set; }
	CreoIgnem.Phygital.Tools.SuggestionType Type { get; set; }
	string Id { get; set; }
	string ImageUrl { get; set; }
	decimal? PrixFinal { get; set; }
	decimal? PrixBarre { get; set; }
}

enum SuggestionType
{
	Segment, // =0
	Brand, // =1
	Facet, // =2
	Product, // =3
	Store, // =4
}

```
