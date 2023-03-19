## <span id='obtenirconfig'>Obtenir la configuration du catalogue</span>

Récupère les infos de configuration du catalogue.

Url :`[GET] api/catalogue/config`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `CatalogueConfig`

Type(s) de données :

```csharp
class CatalogueConfig
{
	string SiteName { get; set; }
	GestomWebApi.Catalogue.ArticlesController+AttributeData[] Attributes { get; set; }
	GestomWebApi.Catalogue.ArticlesController+LanguageData[] Languages { get; set; }
	GestomWebApi.Catalogue.ArticlesController+TagDescriptionData[] Tags { get; set; }
}

class AttributeData
{
	string Name { get; set; }
	string Group { get; set; }
	string Id { get; set; }
	GestomWebApi.Catalogue.ArticlesController+AttributeType Type { get; set; }
}

enum AttributeType
{
	Boolean, // =0
	Text, // =1
	Number, // =2
	Date, // =3
	Url, // =4
}

class LanguageData
{
	bool IsDefault { get; set; }
	string CultureCode { get; set; }
	string Label { get; set; }
	int CatalogId { get; set; }
}

class TagDescriptionData
{
	string Title { get; set; }
	System.Guid LabelGuid { get; set; }
	bool IsOldTag { get; set; }
	GestomWebApi.Catalogue.ArticlesController+TagValueData[] Values { get; set; }
}

class TagValueData
{
	string TextData { get; set; }
	System.Guid ValueGuid { get; set; }
	string HtmlData { get; set; }
	string ImageUrl { get; set; }
	string ColorData { get; set; }
}

```

