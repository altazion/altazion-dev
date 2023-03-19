## <span id='deconnexion'>Deconnecter la session active</span>

Deconnecte la session active (efface le panier, et deconnecte l'utilisateur)

Url :`[GET] v2/cart/logout`

Paramètres : 

- Cette url n'accepte aucun paramètre

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

