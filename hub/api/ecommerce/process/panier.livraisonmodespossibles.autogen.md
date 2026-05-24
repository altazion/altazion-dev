## <span id='livraisonmodespossibles'>Obtenir les modes de livraisons utilisables</span>

Obtient la liste des modes de livraisons possibles

Url :`[GET] /api/cart/nui/?action=getmodeslivraison`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type(s) de données :

```csharp
class ChoixModeLivraison
{
	string Identifiant { get; set; }
	bool EstPointLivraison { get; set; }
	string Transporteur { get; set; }
	string Reference { get; set; }
	decimal PuHT { get; set; }
	decimal PuTTC { get; set; }
	decimal PuHorsRemiseHT { get; set; }
	decimal PuHorsRemiseTTC { get; set; }
	decimal RemiseHT { get; set; }
	decimal RemiseTTC { get; set; }
	string PrixFormate { get; set; }
	string PrixOriginalFormate { get; set; }
	string RemiseFormatee { get; set; }
	DateTime DateEstimee { get; set; }
	TypeDestinationLivraison TypeDestination { get; set; }
	TypeServiceLivraison TypeService { get; set; }
	bool EstActif { get; set; }
}

enum TypeDestinationLivraison
{
	AdresseClient, // =0
	PointLivraison, // =1
	Magasin, // =2
}

enum TypeServiceLivraison
{
	Standard, // =0
	Express, // =1
	Coursier, // =2
}

```

