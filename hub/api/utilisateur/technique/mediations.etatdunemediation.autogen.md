## <span id='etatdunemediation'>Obtenir l'état d'une médiation</span>

Récupère l'état d'une médiation

Url :`[GET] api/mediations/{mediationGuid:guid}/status`

Paramètres : 

- **mediationGuid** (System.Guid) : L'identifiant de la médiation

Type de retour : `MediationStatus`

Type(s) de données :

```csharp
class MediationStatus
{
	string DefinitionLibelle { get; set; }
	Guid? DefinitionStandardGuid { get; set; }
	System.Guid DefinitionGuid { get; set; }
	System.Guid MediationGuid { get; set; }
	DateTime Debut { get; set; }
	string Etat { get; set; }
	string EtatDetails { get; set; }
	System.Boolean? IsCompleted { get; set; }
	GestomWebApi.Technique.MediationsController+MediationMessage[] Messages { get; set; }
}

class MediationMessage
{
	DateTimeOffset Date { get; set; }
	string Message { get; set; }
	GestomWebApi.Technique.MediationsController+MediationMessageKind Kind { get; set; }
}

enum MediationMessageKind
{
	Information, // =0
	Error, // =1
}

```

