## <span id='definitionsliste'>Récupère les définitions de todos</span>

Récupère les définitions de todos

Url :`[GET] api/system/todos/definitions?mobile={mobile:bool}`

Paramètres : 

- **mobile** (bool) : Uniquement pour application mobile ?

Type de retour : `DefinitionTodo[]`

Type(s) de données :

```csharp
class DefinitionTodo
{
	System.Guid Guid { get; set; }
	int RjsId { get; set; }
	System.Guid MessageGuid { get; set; }
	bool RemiseAUnGroupe { get; set; }
	Guid? GrpGuid { get; set; }
	System.Guid Uxid { get; set; }
	string Parametre { get; set; }
	string ClasseBatch { get; set; }
	string ClasseInteractive { get; set; }
	bool Ignore { get; set; }
	string Libelle { get; set; }
	bool PourMobile { get; set; }
	string Details { get; set; }
	string Categorie { get; set; }
	bool LimiterAuContexte { get; set; }
	string Options { get; set; }
}

```

