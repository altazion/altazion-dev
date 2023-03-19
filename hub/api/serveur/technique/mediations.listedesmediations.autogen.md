## <span id='listedesmediations'>Récupère la liste des médiation</span>

Récupère la liste des instances de médiations entre deux dates

Url :`[GET] app/mediations/status?minDate={minDate:DateTime?}&maxDate={maxDate:DateTime?}&definitionGuid={definitionGuid:Guid?}`

Paramètres : 

- **minDate** (DateTime?) : La date de début de la recherche
- **maxDate** (DateTime?) : La date de fin de la recherche
- **definitionGuid** (Guid?) : L'identifiant de la définition

Type de retour : `MediationStatus[]`

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

```

