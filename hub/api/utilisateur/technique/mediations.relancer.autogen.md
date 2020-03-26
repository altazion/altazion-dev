## <span id='relancer'>Relancer une médiation</span>

Relance une médiation.

Url :`[GET] api/mediations/{mediationGuid:guid}/restart`

Paramètres : 

- **mediationGuid** (Guid) : L'identifiant de la médiation

Type de retour : `MediationStatus`

Type(s) de données :

```csharp
class MediationStatus
{
	string DefinitionLibelle { get; set; }
	Guid? DefinitionStandardGuid { get; set; }
	Guid DefinitionGuid { get; set; }
	Guid MediationGuid { get; set; }
	DateTime Debut { get; set; }
	string Etat { get; set; }
	string EtatDetails { get; set; }
	System.Boolean? IsCompleted { get; set; }
	GestomWebApi.Technique.MediationsController+MediationMessage[] Messages { get; set; }
}

```
