## <span id='deconnexion'>Déconnexion</span>

Déconnecte le client actuellement connecté

Url :`[GET] /api/cart/nui/?action=logout`

Paramètres : 

- Cette url n'accepte aucun paramètre

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

class LignePanier
{
	MetaTypeArticle TypeArticle { get; set; }
	string Identifiant { get; set; }
	string IdentifiantLigneParent { get; set; }
	string Libelle { get; set; }
	string Reference { get; set; }
	Guid ArticleGuid { get; set; }
	decimal Quantite { get; set; }
	string GroupePanier { get; set; }
	decimal PuOriginalHT { get; set; }
	decimal PuOriginalTTC { get; set; }
	decimal PuFinalTTC { get; set; }
	decimal PuFinalHT { get; set; }
	decimal RemiseHT { get; set; }
	decimal RemiseTTC { get; set; }
	string ImageUrl { get; set; }
	bool LigneMiseAJour { get; set; }
	string Marque { get; set; }
	string PrixFormate { get; set; }
	string PrixOriginalFormate { get; set; }
	string RemiseFormatee { get; set; }
	Guid? MagasinGuid { get; set; }
	string Groupe { get; set; }
	bool NonModifiable { get; set; }
	String[] AttributsDifferentiants { get; set; }
	String[] DonneesPersonnalisees { get; set; }
	String[] DetailsFraisAnnexes { get; set; }
	bool? DisponibleMagasin { get; set; }
	bool? DisponibleCentrale { get; set; }
}

enum MetaTypeArticle
{
	Produit, // =0
	FraisDePort, // =1
	Avantages, // =2
	Services, // =3
	Loyers, // =4
	Lot, // =5
	Financier, // =6
	Taxe, // =7
	LicenceEtBrevet, // =8
}

class ErreurPanier
{
	GraviteErreurPanier Gravite { get; }
	string Message { get; set; }
	bool EstBloquante { get; set; }
	string MessageCorrection { get; set; }
	string UrlCorrection { get; set; }
	bool EstRedirectionAutomatique { get; set; }
}

enum GraviteErreurPanier
{
	Warning, // =0
	Erreur, // =1
}

class PanierGroupe
{
	string Code { get; set; }
	string Libelle { get; set; }
	string Details { get; set; }
	string TypeProcessAssocie { get; set; }
	bool EstExterne { get; set; }
}

```

