## <span id='listeencours'>Récupérer les factures en cours</span>

Récupère la liste des factures 'en cours'

Url :`[GET] api/ventes/factures/encours?avecLigne={avecLigne:bool}`

Paramètres : 

- **avecLigne** (bool) : inclure les lignes de factures

Type de retour : `FactureData[]`

Type(s) de données :

```csharp
class FactureData
{
	CPointSoftware.Equihira.Common.LigneFacture[] Lignes { get; set; }
	string DownloadUrl { get; set; }
	DateTime Date { get; set; }
	string Numero { get; set; }
	decimal Id { get; set; }
	decimal MontantTTC { get; set; }
	decimal MontantHT { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string CodePostal { get; set; }
	string Ville { get; set; }
	string Pays { get; set; }
	int ClientID { get; set; }
	decimal MontantRestant { get; set; }
	DateTime? DateEcheance { get; set; }
	string Origine { get; set; }
	bool EstReglee { get; }
	bool EstEnRetard { get; }
	string ReferencesClient { get; set; }
	string MessageEtat { get; }
	CPointSoftware.Equihira.Common.EtatReglement EtatReglement { get; }
}

class LigneFacture
{
	decimal Id { get; set; }
	decimal FactureId { get; set; }
	long ArticleId { get; set; }
	string ArticleLibelle { get; set; }
	string ArticleCommentaires { get; set; }
	decimal Quantite { get; set; }
	decimal PuHt { get; set; }
	decimal PuTtc { get; set; }
}

enum EtatReglement
{
	Depose, // =0
	Regle, // =1
	PartiellementRegle, // =2
	EcheanceInconnue, // =3
	PlusDe30j, // =4
	Sous30j, // =5
	Sous14j, // =6
	Sous7j, // =7
	Sous3j, // =8
	Immediat, // =9
	EnRetard, // =10
	EnErreur, // =11
	Confirme, // =12
	Recu, // =13
}

```

