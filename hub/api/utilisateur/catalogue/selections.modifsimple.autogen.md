## <span id='modifsimple'>Modifier une selection</span>

Modifier une selection.

Url :`[POST] api/catalogue/selections?data={data:GestomWebApi.Catalogue.SelectionsController+VitrineEditData}`

Paramètres : 

- **data** (GestomWebApi.Catalogue.SelectionsController+VitrineEditData) : Le détail de la vitrine

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

class VitrineEditData
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	string Groupe { get; set; }
	Guid? CampagneAssocieeGuid { get; set; }
	GestomWebApi.Catalogue.SelectionsController+ArticleDansVitrineData[] Articles { get; set; }
}

class ArticleDansVitrineData
{
	System.Guid ArticleGuid { get; set; }
	decimal Pertinence { get; set; }
}

```

