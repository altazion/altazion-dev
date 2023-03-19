## <span id='creationreglement'>Création Règlement</span>

Cet évènement est déclenché lors de la création d'un règlement

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : NouveauReglement
 - **Classe de données** : ReglementCreeEventData

Type(s) de données :

```csharp
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

class FactureData
{
	decimal FacPk { get; set; }
	string Numero { get; set; }
	DateTime Date { get; set; }
	decimal Montant { get; set; }
	decimal MontantAffecte { get; set; }
}

class ReglementCreeEventData
{
	decimal RegPk { get; set; }
	DateTime Date { get; set; }
	decimal Montant { get; set; }
	TypeReglement Type { get; set; }
	CPointSoftware.Equihira.Business.Clients.ReglementsBll+FactureData[] Factures { get; set; }
}

```
