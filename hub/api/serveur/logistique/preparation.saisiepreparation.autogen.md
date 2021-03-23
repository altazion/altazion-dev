## <span id='saisiepreparation'>Enregistrer la préparation</span>

Enregistre la préparation d'un bon de préparation

Url :`[POST] api/logistique/preparation/prepa/{bonprepaGuid:guid}`

Paramètres : 

- **bonprepaGuid** (Guid) : L'identifiant du bon de préparation
- en tant que body, un objet PreparationBonPreparation : Le contenu de la préparation

Url :`[POST] api/logistique/preparation/prepa/{bonprepaNum}`

Paramètres : 

- en tant que body, un objet PreparationBonPreparation : Le contenu de la préparation
- **bonprepaNum** (string) : Le numéro du bon de préparation

Type de retour : `BonPreparation`

Type(s) de données :

```csharp
class BonPreparation
{
	Guid Guid { get; set; }
	string Numero { get; set; }
	DateTime DateCreation { get; set; }
	decimal MontantCommande { get; set; }
	string Etat { get; set; }
	bool EstValide { get; set; }
	bool EstDeclenchee { get; set; }
	bool EstEncours { get; set; }
	bool EstTermine { get; set; }
	bool EstAnnule { get; set; }
	LigneBonPreparation[] Lignes { get; set; }
	Guid CliGuid { get; set; }
	string CliNom { get; set; }
	string CliEmail { get; set; }
	string CliCP { get; set; }
}

class PreparationBonPreparation
{
	LigneExpeditionBonPreparation[] Lignes { get; set; }
	bool EstPartielle { get; set; }
}

class LigneExpeditionBonPreparation
{
	Guid? Guid { get; set; }
	string Reference { get; set; }
	decimal QtePreparee { get; set; }
	decimal? QteExpediee { get; set; }
}

```
