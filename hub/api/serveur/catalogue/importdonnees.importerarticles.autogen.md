## <span id='importerarticles'>Importer des articles</span>

Envoie une liste d'article dans les tables d'imports

Url :`[POST] app/catalogue/import`

Paramètres : 

- en tant que body, un objet ArticleImportData[] : Les articles à importer sous forme d'un tableau de ArticleImportData

Type de retour : `int`

Type(s) de données :

```csharp
class ArticleImportData
{
	string ExternalId { get; set; }
	string Reference { get; set; }
	string Libelle { get; set; }
	string Marque { get; set; }
	string Description { get; set; }
	GestomWebApi.Catalogue.CatalogImporterController+ArticleImportImageData[] Images { get; set; }
	Dictionary<System.String,System.String> Proprietes { get; set; }
	GestomWebApi.Catalogue.CatalogImporterController+ArticleImportDimensionsData Dimensions { get; set; }
}

class ArticleImportImageData
{
	string Url { get; set; }
	string UrlImagette { get; set; }
}

class ArticleImportDimensionsData
{
	decimal PoidsEnG { get; set; }
	decimal HauteurEnCm { get; set; }
	decimal ProfondeurEnCm { get; set; }
	decimal LargeurEnCm { get; set; }
}

```

