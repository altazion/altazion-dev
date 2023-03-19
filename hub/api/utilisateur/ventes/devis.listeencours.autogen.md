## <span id='listeencours'>Récupérer les devis en cours</span>

Récupère la liste des devis 'en cours'

Url :`[GET] api/ventes/devis/encours?avecLigne={avecLigne:bool}`

Paramètres : 

- **avecLigne** (bool) : inclure les lignes de devis

Type de retour : `Devis[]`

Type(s) de données :

```csharp
class Devis
{
	CPointSoftware.Equihira.Common.LigneDevis[] Lignes { get; set; }
	string NumeroComplet { get; }
	System.Int32? Revision { get; set; }
	string Etat { get; set; }
	string EtatDetaille { get; }
	DateTime? DateMaxValidite { get; set; }
	string Numero { get; set; }
	decimal Id { get; set; }
	decimal MontantTTC { get; set; }
	decimal MontantHT { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string CodePostal { get; set; }
	string Ville { get; set; }
	string Pays { get; set; }
	System.Int32? ClientID { get; set; }
	bool EstLieAClientOuProspect { get; }
	string Email { get; set; }
	DateTime Date { get; set; }
	string Libelle { get; set; }
	string SourceAcceptation { get; set; }
	DateTime? DateAcceptation { get; set; }
	bool EstAccepte { get; }
}

class LigneDevis
{
	decimal Id { get; set; }
	CPointSoftware.Equihira.Common.MetaTypeArticle TypeLigne { get; set; }
	decimal DevisId { get; set; }
	long ArticleId { get; set; }
	string ArticleLibelle { get; set; }
	string ArticleCommentaires { get; set; }
	decimal Quantite { get; set; }
	decimal PuHt { get; set; }
	decimal PuTtc { get; set; }
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

```

