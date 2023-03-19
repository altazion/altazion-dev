## <span id='obtenirsegmentation'>Obtenir une segmentations</span>

Récupère une segmentation et ses filles

Url :`[GET] api/catalogue/segmentations/{segPk:int}`

Paramètres : 

- **segPk** (int) : L'identifiant de la segmentation

Type de retour : `SegmentationDataDetails`

Type(s) de données :

```csharp
class SegmentationDataDetails
{
	long Id { get; set; }
	System.Int64? ParentId { get; set; }
	string Libelle { get; set; }
	GestomWebApi.Catalogue.SegmentationsController+SegmentationDataDetails[] SousCategories { get; set; }
}

```

