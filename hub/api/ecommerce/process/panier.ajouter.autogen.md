## <span id='ajouter'>Ajouter</span>

Ajoute un article dans le panier

Url :`[GET] /api/cart/nui/?action=add&reference={reference}&associermag={associermag}`

Paramètres : 

- **associermag** : true pour ajouter au panier e-resa, false pour le panier principal
- **reference** : reference du produit à ajouter

Type(s) de données :

```csharp
class Panier
{
	LignePanier[] Lignes { get; set; }
	LignePanier FraisPort { get; set; }
	LignePanier[] Avantages { get; set; }
	bool EstValidable { get; set; }
	bool DemandeFraisPort { get; set; }
	string DestinationPrevueCodePostal { get; set; }
	string DestinationPrevueCodePays { get; set; }
	ErreurPanier ErreurPanier { get; set; }
	string Incitation { get; set; }
	string ModeLivraisonIdentifiant { get; set; }
	bool ModeLivraisonEstPointRetrait { get; set; }
	Guid ClientGuid { get; set; }
	string ClientNom { get; set; }
	bool EstClientConnecte { get; set; }
	decimal MontantTTCAvecMagasin { get; set; }
	string MontantTTCAvecMagasinFormate { get; set; }
	decimal MontantTTC { get; set; }
	string MontantTTCFormate { get; set; }
	string ProcessAPrivilegier { get; set; }
	PanierGroupe[] Groupes { get; set; }
	string CodeAvantageActif { get; set; }
}

```

