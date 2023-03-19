## <span id='marques'>Obtenir les marques</span>

Récupère les marques.

Url :`[GET] v2/catalogue/marques`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `FacetData[]`

Type(s) de données :

```csharp
class FacetData
{
	string Name { get; set; }
	string Groupe { get; set; }
	string Id { get; set; }
	bool IsArborescent { get; set; }
	CreoIgnem.Phygital.Tools.FacetKind Kind { get; set; }
	CreoIgnem.Phygital.Tools.FacetValueData[] Values { get; set; }
}

enum FacetKind
{
	DistinctValue, // =0
	Range, // =1
	Booleean, // =2
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

```

