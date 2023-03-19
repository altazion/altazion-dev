## <span id='expedition'>Expédier un bon de prépa</span>

Enregistre la préparation et l'expédition d'un bon de préparation

Url :`[POST] api/logistique/preparation/expe/{bonprepaGuid:guid}`

Paramètres : 

- **bonprepaGuid** (System.Guid) : L'identifiant du bon de préparation
- en tant que body, un objet ExpeditionBonPreparation : Le contenu de la préparation

Url :`[POST] api/logistique/preparation/expe/{bonprepaNum}`

Paramètres : 

- en tant que body, un objet ExpeditionBonPreparation : Le contenu de la préparation
- **bonprepaNum** (string) : Le numéro du bon de préparation

Type de retour : `BonPreparation`

Type(s) de données :

```csharp
class BonPreparation
{
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
}

class LigneBonPreparation
{
	System.Guid Guid { get; set; }
	string Reference { get; set; }
	string Libelle { get; set; }
	decimal Pu { get; set; }
	decimal QteCommandeOriginelle { get; set; }
	decimal QteAnnonce { get; set; }
	decimal QtePreparee { get; set; }
	decimal QteCommandeAPreparee { get; set; }
}

class ExpeditionBonPreparation
{
	GestomWebApi.Logistique.PreparationController+LigneExpeditionBonPreparation[] Lignes { get; set; }
	GestomWebApi.Logistique.PreparationController+Colis[] Colis { get; set; }
	GestomWebApi.Logistique.PreparationController+PieceComptable[] PieceComptable { get; set; }
}

class LigneExpeditionBonPreparation
{
	Guid? Guid { get; set; }
	string Reference { get; set; }
	decimal QtePreparee { get; set; }
	decimal? QteExpediee { get; set; }
}

class Colis
{
	Guid? ModeLivraisonGuid { get; set; }
	string ModeLivraisonCode { get; set; }
	string Numero { get; set; }
	DateTime DateExpedition { get; set; }
	string UrlSuivi { get; set; }
}

class PieceComptable
{
	string Type { get; set; }
	string Numero { get; set; }
	string Url { get; set; }
}

```

