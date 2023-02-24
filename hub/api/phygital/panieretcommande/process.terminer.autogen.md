## <span id='terminer'>Finaliser une commande</span>

Valide une commande

Url :`[GET] v2/process/terminer?mode={mode:string}`

Paramètres : 

- **mode** (string) : A ne pas renseigner, prévu pour usage interne

Type de retour : `CommandeTermine`

Type(s) de données :

```csharp
class CommandeTermine
{
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.LignePanier[] Articles { get; set; }
	string MessageConfirmation { get; set; }
	System.Guid ClientGuid { get; set; }
	decimal MontantTTC { get; set; }
	string MontantTTCFormate { get; set; }
	decimal MontantTTCRestant { get; set; }
	string MontantTTCRestantFormate { get; set; }
	System.Guid ModeLivraisonGuid { get; set; }
	string ModeLivraison { get; set; }
	decimal ModeLivraisonMontantTTC { get; set; }
	DateTime DateLivraisonPrevue { get; set; }
	bool DemandeAdresseLivraison { get; set; }
	bool DemandePointLivraison { get; set; }
	bool EstLivraisonMagasin { get; set; }
	string NomDestinataire { get; set; }
	bool EstValidable { get; set; }
	bool EstTerminee { get; set; }
	string NumeroCommande { get; set; }
	System.Guid GuidCommande { get; set; }
	System.String[] Tags { get; set; }
	CreoIgnem.Phygital.Tools.AdresseClientProcess AdresseLivraison { get; set; }
	CreoIgnem.Phygital.Tools.AdresseClientProcess AdresseFacturation { get; set; }
	CreoIgnem.Phygital.Tools.PointLivraisonDetailProcess PointLivraisonAdresse { get; set; }
	CreoIgnem.Phygital.Tools.ReglementProcess[] Reglements { get; set; }
}

class LignePanier
{
	CPointSoftware.Equihira.Common.MetaTypeArticle TypeArticle { get; set; }
	string Identifiant { get; set; }
	string IdentifiantLigneParent { get; set; }
	string Libelle { get; set; }
	string Reference { get; set; }
	System.Guid ArticleGuid { get; set; }
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
	string PctPromo { get; set; }
	Guid? MagasinGuid { get; set; }
	string Groupe { get; set; }
	bool NonModifiable { get; set; }
	System.String[] AttributsDifferentiants { get; set; }
	System.String[] DonneesPersonnalisees { get; set; }
	System.String[] DetailsFraisAnnexes { get; set; }
	System.Boolean? DisponibleMagasin { get; set; }
	decimal? QuantiteDisponibleMagasin { get; set; }
	System.Boolean? DisponibleCentrale { get; set; }
	decimal? QuantiteDisponibleCentrale { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.GroupeArticlesAssocies[] GroupesArticlesAssocies { get; set; }
}

class AdresseClientProcess
{
	System.Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Prenom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
	string CP { get; set; }
	string PayPk { get; set; }
	string Region { get; set; }
	string Email { get; set; }
}

class PointLivraisonDetailProcess
{
	CreoIgnem.Phygital.Tools.PointLivraisonHoraireProcess[] Horaires { get; set; }
	string Commentaires { get; set; }
	System.Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string CP { get; set; }
	string Email { get; set; }
	string Indication { get; set; }
	System.String[] Services { get; set; }
	CreoIgnem.Phygital.Tools.GeoLocalisationPointLivraisonProcess Localisation { get; set; }
	bool EstActif { get; set; }
}

class ReglementProcess
{
	System.Guid Guid { get; set; }
	string Reference { get; set; }
	System.Guid ModeReglementGuid { get; set; }
	decimal Montant { get; set; }
	bool EstValide { get; set; }
}

```
