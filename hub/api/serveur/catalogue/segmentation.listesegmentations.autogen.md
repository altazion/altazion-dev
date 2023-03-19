## <span id='listesegmentations'>Obtenir toutes les segmentations</span>

Récupère la liste de toutes les segmentations

Url :`[GET] app/catalogue/segmentations/all?type={type:string}`

Paramètres : 

- **type** (string) : Type de segmentations à récupérer

Type de retour : `SegmentationData[]`

Type(s) de données :

```csharp
class SegmentationData
{
	long Id { get; set; }
	System.Int64? ParentId { get; set; }
	string Libelle { get; set; }
}

```

