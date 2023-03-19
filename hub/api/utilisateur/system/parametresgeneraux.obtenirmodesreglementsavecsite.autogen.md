## <span id='obtenirmodesreglementsavecsite'>Obtenir la liste des modes de réglements avec site</span>

Récupère la liste des modes réglements avec site

Url :`[GET] api/financier/reglements/modes/parsite?idsite={idsite:System.Int32?}&estactif={estactif:System.Boolean?}`

Paramètres : 

- **idsite** (System.Int32?) : L'id du site à rechercher
- **estactif** (System.Boolean?) : Rechercher uniquement dans les sites actifs

Type de retour : `ModeReglementAvecSite[]`

Type(s) de données :

```csharp
class ModeReglementAvecSite
{
	int SiteId { get; set; }
	bool EstActif { get; set; }
	decimal MontantCommandeMini { get; set; }
	decimal MontantCommandeMaxi { get; set; }
	System.Guid Guid { get; set; }
	string Nom { get; set; }
	CPointSoftware.Equihira.Common.TypeReglement Type { get; set; }
	int PrestataireId { get; set; }
	bool EstPrincipal { get; set; }
	byte Priorite { get; set; }
	string Classe { get; set; }
	string ClefMarchand { get; set; }
	bool EstModifiable { get; set; }
	string ChaineComplementaire { get; set; }
	bool EstRRR { get; set; }
	System.Byte[] File1 { get; set; }
	System.Byte[] File2 { get; set; }
	int Delai { get; set; }
	bool EstDispoClicknMortar { get; set; }
	bool EstDispoEcommerce { get; set; }
	bool EstDispoPos { get; set; }
	bool EstDispoGc { get; set; }
	bool EstDispoMarketplace { get; set; }
}

enum TypeReglement
{
	NonRenseigne, // =0
	Cheque, // =1
	CB, // =2
	CBMultiple, // =3
	Virement, // =4
	Traite, // =5
	MouvementCompta, // =6
	PaiementDirectFournisseur, // =7
	ChequesCadeaux, // =8
	Especes, // =9
	DevisesEtrangeres, // =10
	AvanceParAssocie, // =11
	SurEnCours, // =12
	BonsAchats, // =13
	GesteCommercial, // =14
	TitreRestaurant, // =15
	TitreVacances, // =16
	Prelevement, // =17
}

```

