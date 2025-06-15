## <span id='obtenirstockarticleparemplacement'>Obtenir le stock d'un article dans un emplacement</span>

Obtient le stock d'un article dans un emplacement

Url :`[GET] api/stocks/articles/id/{idArticle}/emplacement/{idEmplacement}`

Paramètres : 

- **idArticle** (System.Guid) : ID de l'article
- **idEmplacement** (System.Guid) : ID de l'emplacement

Type de retour : `Stock`

Type(s) de données :

```csharp
class Stock
{
	System.Guid Id { get; set; }
	System.Guid ArticleId { get; set; }
	DateTimeOffset DateEntree { get; set; }
	decimal? PrixUnitaire { get; set; }
	decimal? Quantite { get; set; }
	bool EstDispo { get; set; }
	decimal QuantiteReservee { get; set; }
	decimal QuantiteReelle { get; set; }
	System.Guid IdEmplacement { get; set; }
	string LibelleEmplacement { get; set; }
	System.Guid IdDepot { get; set; }
	string LibelleDepot { get; set; }
}

```

