## <span id='ajouter'>Ajouter un article dans le panier</span>

Ajoute un article au panier

Url :`[GET] v2/cart/add/{reference}/local?associe1={associe1:string}&associe2={associe2:string}&associe3={associe3:string}&associe4={associe4:string}&associe5={associe5:string}`

Paramètres : 

- **reference** (string) : La référence du produit à ajouter
- **associe1** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier
- **associe2** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier
- **associe3** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier
- **associe4** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier
- **associe5** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier

Url :`[GET] v2/cart/add/{reference}/web?associe1={associe1:string}&associe2={associe2:string}&associe3={associe3:string}&associe4={associe4:string}&associe5={associe5:string}&all={all:bool}`

Paramètres : 

- **reference** (string) : La référence du produit à ajouter
- **associe1** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier
- **associe2** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier
- **associe3** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier
- **associe4** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier
- **associe5** (string) : La référence d'un produit associé OU un type d'association à ajouter au panier
- **all** (bool)

Type de retour : `Panier`

Type(s) de données :

```csharp
class Panier
{
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.LignePanier[] Lignes { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.LignePanier FraisPort { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.LignePanier[] Avantages { get; set; }
	bool EstValidable { get; set; }
	bool DemandeFraisPort { get; set; }
	string DestinationPrevueCodePostal { get; set; }
	string DestinationPrevueCodePays { get; set; }
	CPointSoftware.Equihira.Extensibility.ECommerce.ErreurPanier ErreurPanier { get; set; }
	string Incitation { get; set; }
	string ModeLivraisonIdentifiant { get; set; }
	bool ModeLivraisonEstPointRetrait { get; set; }
	System.Guid ClientGuid { get; set; }
	string ClientNom { get; set; }
	bool EstClientConnecte { get; set; }
	decimal MontantTTCAvecMagasin { get; set; }
	string MontantTTCAvecMagasinFormate { get; set; }
	decimal MontantTTC { get; set; }
	string MontantTTCFormate { get; set; }
	string ProcessAPrivilegier { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.PanierGroupe[] Groupes { get; set; }
	string CodeAvantageActif { get; set; }
	decimal TotalRemisePromos { get; set; }
}

```
