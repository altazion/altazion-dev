## <span id='obtenirlivraison'>Obtenir les modes de livraisons possibles</span>

Récupère les modes de livraison possibles pour le panier actif

Url :`[GET] v2/cart/livraisonspossibles`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `ChoixModeLivraison[]`

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
	string DateEstimeeFormate { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.TypeDestinationLivraison TypeDestination { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.TypeServiceLivraison TypeService { get; set; }
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
