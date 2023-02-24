## <span id='modesdereglements'>Liste des modes de réglement</span>

Retourne les modes de règlements possibles.

Url :`[GET] app/crosscanal/commandes/{siteId:int}/modesreglements`

Paramètres : 

- **siteId** (int) : L'identifiant du site

Type de retour : `ModeReglement[]`

Type(s) de données :

```csharp
class ModeReglement
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	CPointSoftware.Equihira.Common.TypeReglement Type { get; set; }
	bool EstPrincipal { get; set; }
	int Priorite { get; set; }
	bool EstModifiable { get; set; }
	bool AvecDetail { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+ModeReglementDetail[] ListeDetail { get; set; }
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

class ModeReglementDetail
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string CompteCompta { get; set; }
}

```
