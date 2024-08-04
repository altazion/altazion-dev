## <span id='preparation'>Obtenir un bon de prépa</span>

Obtient le détail d'un bon de préparation

Url :`[GET] api/logistique/preparation/{bonprepaNum}`

Paramètres : 

- **bonprepaNum** (string)

Url :`[GET] api/logistique/preparation/{bprGuid:guid}`

Paramètres : 

- **bprGuid** (System.Guid)

Type de retour : `BonPreparationComplet`

Type(s) de données :

```csharp
class BonPreparationComplet
{
	GestomWebApi.Logistique.PreparationController+BonPreparationComplet+LivraisonInfos Livraison { get; set; }
	GestomWebApi.Logistique.PreparationController+BonPreparationComplet+Col InfosColis { get; set; }
	GestomWebApi.Logistique.PreparationController+BonPreparationComplet+AdresseInfos Facturation { get; set; }
	System.Guid Guid { get; set; }
	string Numero { get; set; }
	DateTime DateCreation { get; set; }
	decimal MontantCommande { get; set; }
	string Etat { get; set; }
	bool EstValide { get; set; }
	bool EstDeclenchee { get; set; }
	bool EstEncours { get; set; }
	bool EstTermine { get; set; }
	bool EstAnnule { get; set; }
	GestomWebApi.Logistique.PreparationController+LigneBonPreparation[] Lignes { get; set; }
	System.Guid CliGuid { get; set; }
	string CliNom { get; set; }
	string CliEmail { get; set; }
	string CliCP { get; set; }
	System.Guid BonCommandeGuid { get; set; }
}

class LivraisonInfos
{
	System.Guid GuidModeLivraison { get; set; }
	string LibelleModeLivraison { get; set; }
	int PrestaPk { get; set; }
	GestomWebApi.Logistique.PreparationController+BonPreparationComplet+AdresseInfos AdresseInfos { get; set; }
}

class AdresseInfos
{
	string Code { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string CodePostal { get; set; }
	string Ville { get; set; }
}

class Col
{
	int NbColis { get; set; }
	GestomWebApi.Logistique.PreparationController+BonPreparationComplet+Colis[] LesColis { get; set; }
}

class Colis
{
	string Numero { get; set; }
	int PkTransporteur { get; set; }
	string LibelleTransporteur { get; set; }
}

class LigneBonPreparation
{
	System.Guid Guid { get; set; }
	long ArticleId { get; set; }
	string Reference { get; set; }
	string Libelle { get; set; }
	decimal Pu { get; set; }
	decimal QteCommandeOriginelle { get; set; }
	decimal QteAnnonce { get; set; }
	decimal QtePreparee { get; set; }
	decimal QteCommandeAPreparee { get; set; }
	Guid? GuidArticle { get; set; }
	string Ref { get; set; }
	string UrlGestcom { get; set; }
}

```

