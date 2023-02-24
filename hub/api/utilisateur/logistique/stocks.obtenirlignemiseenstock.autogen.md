## <span id='obtenirlignemiseenstock'>Obtenir une ligne de mise en stock</span>

Obtient une ligne de mise en stock

Url :`[GET] api/stocks/misesenstock/ligne/{IDMiseEnStock}`

Paramètres : 

- **IDMiseEnStock** (System.Guid) : L'ID de la mise en stock à récupérer

Type de retour : `LigneEntree`

Type(s) de données :

```csharp
class LigneEntree
{
	System.Guid Id { get; set; }
	string Type { get; set; }
	System.Guid IdEntree { get; set; }
	System.Guid IdStock { get; set; }
	System.Guid ArticleId { get; set; }
	Guid? IdLigneCommandeFournisseur { get; set; }
	decimal Quantite { get; set; }
	decimal? PrixUnitaire { get; set; }
	decimal? FraisAnnexesUnitaires { get; set; }
}

```
