## <span id='obtenirmodesreglements'>Obtenir la liste des modes de réglements</span>

Récupère la liste des modes de réglements actifs

Url :`[GET] api/financier/reglements/modes?type={type:CPointSoftware.Equihira.Common.TypeReglement?}`

Paramètres : 

- **type** (CPointSoftware.Equihira.Common.TypeReglement?) : Le type de mode de réglement à rechercher

Type de retour : `ModeReglement[]`

Type(s) de données :

```csharp
class ModeReglement
{
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
