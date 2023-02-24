## <span id='listercoupons'>Lister les coupons</span>

Obtient la liste des coupons actifs pour un mode de règlement et pour le client connecté

Url :`[GET] v2/process/reglement/modes/{modeGuid:guid}/coupons`

Paramètres : 

- **modeGuid** (System.Guid) : L'identifiant du mode de règlement

Type de retour : `AvantageClient[]`

Type(s) de données :

```csharp
class AvantageClient
{
	System.Guid Guid { get; set; }
	string Reference { get; set; }
	bool EstUtilisable { get; set; }
	string Libelle { get; set; }
	string Conditions { get; set; }
	string LimitesArticles { get; set; }
	string Groupe { get; set; }
	bool EstUtilise { get; set; }
	decimal Montant { get; set; }
	decimal MontantOriginal { get; set; }
	bool EstLimiteArticle { get; set; }
	DateTime DateMaxUtilisation { get; set; }
	DateTime DateMinUtilisation { get; set; }
	string TypeBlocage { get; set; }
	Guid? IdBlocage { get; set; }
	DateTime? DateBlocage { get; set; }
	CPointSoftware.Equihira.Extensibility.Process.EtatAvantageClient Etat { get; set; }
	Guid? IdClient { get; set; }
}

enum EtatAvantageClient
{
	Available, // =0
	Used, // =1
	InvalidDates, // =2
	NotAvailable, // =3
}

```
