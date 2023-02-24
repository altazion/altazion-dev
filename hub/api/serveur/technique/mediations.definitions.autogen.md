## <span id='definitions'>Obtenir la liste des définitions</span>

Récupère la liste des définitions de médiations existantes.

Url :`[GET] app/mediations/definitions`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `MediationDefinition[]`

Type(s) de données :

```csharp
class MediationDefinition
{
	System.Guid Guid { get; set; }
	string Label { get; set; }
	DateTime? LastRun { get; set; }
	string LastRunResult { get; set; }
	string LastRunStatus { get; set; }
}

```
