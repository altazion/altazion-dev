## <span id='obtenirordremiseenstock'>Obtenir un ordre de mise en stock</span>

Obtient un ordre de mise en stock

Url :`[GET] api/stocks/misesenstock/{IDMiseEnStock}`

Paramètres : 

- **IDMiseEnStock** (System.Guid) : L'ID de la mise en stock à récupérer

Type de retour : `MiseEnStockFull`

Type(s) de données :

```csharp
class MiseEnStockFull
{
	GestomWebApi.Logistique.StockController+StockEntree StockEntree { get; set; }
	GestomWebApi.Logistique.StockController+LigneEntree[] LignesEntree { get; set; }
}

class StockEntree
{
	System.Guid Id { get; set; }
	DateTime Date { get; set; }
	string Libelle { get; set; }
	bool EstConfirme { get; set; }
	bool EstTermine { get; set; }
	string Type { get; set; }
	Guid? IdUtilisateur { get; set; }
	string Commentaire { get; set; }
}

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
