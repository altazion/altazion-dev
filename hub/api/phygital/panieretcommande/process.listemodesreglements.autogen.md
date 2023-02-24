## <span id='listemodesreglements'>Obtenir les modes de règlements</span>

Obtient les différents modes de règlement

Url :`[GET] v2/process/reglement/modes?devices={devices:string}`

Paramètres : 

- **devices** (string) : Liste des codes des devices disponibles sur l'écran interactif, séparés par des espaces, virgules ou point-virgules

Type de retour : `ModeReglementProcess[]`

Type(s) de données :

```csharp
class ModeReglementProcess
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	bool AvecDetails { get; set; }
	bool AvecCoupons { get; set; }
	string ModuleLocal { get; set; }
	string XmlData { get; set; }
	CPointSoftware.Equihira.Common.TypeReglement TypeReglement { get; set; }
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
