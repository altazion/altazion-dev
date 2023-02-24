## <span id='detailsselection'>Obtenir le détail d'une sélection</span>

Récupère le détail d'une sélection.

Url :`[GET] app/catalogue/selections/{guid:Guid}/content`

Paramètres : 

- **guid** (System.Guid) : Identifiant de la vitrine

Type de retour : `VitrineContentData`

Type(s) de données :

```csharp
class VitrineContentData
{
	GestomWebApi.Catalogue.SelectionsController+ArticleDetailDansVitrineData[] Articles { get; set; }
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	string Groupe { get; set; }
	bool EstAutomatique { get; set; }
	Guid? CampagneAssocieeGuid { get; set; }
}

class ArticleDetailDansVitrineData
{
	string ArticleLibelle { get; set; }
	System.Guid ArticleGuid { get; set; }
	decimal Pertinence { get; set; }
}

```
