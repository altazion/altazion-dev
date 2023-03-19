## <span id='configurationcatalogue'>Configuration catalogue</span>

Obtient la configuration du catalogue

Url :`[GET] v2/catalogue`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `CatalogueConfig`

Type(s) de données :

```csharp
class CatalogueConfig
{
	string SiteName { get; set; }
	CreoIgnem.Phygital.Tools.FacetValueData[] Categories { get; set; }
	CreoIgnem.Phygital.Tools.FacetData[] Facets { get; set; }
	CreoIgnem.Phygital.Tools.AttributeData[] Attributes { get; set; }
	Dictionary<System.String,System.String> Options { get; set; }
	CreoIgnem.Phygital.Tools.SortData[] SortCriteria { get; set; }
	CreoIgnem.Phygital.Tools.LanguageData[] Languages { get; set; }
	CreoIgnem.Phygital.Tools.TagDescriptionData[] Tags { get; set; }
	CreoIgnem.Phygital.Tools.AssociationTypeData[] AssociationTypes { get; set; }
	CreoIgnem.Phygital.Tools.PreparationTypeData[] PreparationTypes { get; set; }
}

class FacetValueData
{
	string Name { get; set; }
	string SearchFacetValue { get; set; }
	string Id { get; set; }
	int SignificanceLevel { get; set; }
	string ImageUrl { get; set; }
	string ImageUrlBig { get; set; }
	System.Int32? Count { get; set; }
	CreoIgnem.Phygital.Tools.FacetValueData[] SubValues { get; set; }
}

class FacetData
{
	string Name { get; set; }
	string Groupe { get; set; }
	string Id { get; set; }
	bool IsArborescent { get; set; }
	CreoIgnem.Phygital.Tools.FacetKind Kind { get; set; }
	CreoIgnem.Phygital.Tools.FacetValueData[] Values { get; set; }
}

class AttributeData
{
	string Name { get; set; }
	string Group { get; set; }
	string Id { get; set; }
	CreoIgnem.Phygital.Tools.AttributeType Type { get; set; }
	bool IsInstanceSpecific { get; set; }
}

enum AttributeType
{
	Boolean, // =0
	Text, // =1
	Number, // =2
	Date, // =3
	Url, // =4
}

class SortData
{
	string Code { get; set; }
	bool AllowSort { get; set; }
	string Label { get; set; }
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
	CreoIgnem.Phygital.Tools.TagValueData[] Values { get; set; }
}

class TagValueData
{
	string TextData { get; set; }
	System.Guid ValueGuid { get; set; }
	string HtmlData { get; set; }
	string ImageUrl { get; set; }
	string ColorData { get; set; }
}

class AssociationTypeData
{
	string Code { get; set; }
	string Label { get; set; }
	bool AutoAdd { get; set; }
}

class PreparationTypeData
{
	string Code { get; set; }
	string Libelle { get; set; }
	string LibellePublic { get; set; }
	string Caracteristique { get; set; }
	System.Int32? DelaiLivraison { get; set; }
	string Description { get; set; }
}

```

