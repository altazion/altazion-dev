## <span id='obtenirstocksarticle'>Obtenir les stocks d'un article</span>

Obtient les stocks d'un article

Url :`[GET] api/stocks/articles/ref/{articleRef}`

Paramètres : 

- **articleRef** (string) : Référence de l'article

Url :`[GET] api/stocks/articles/id/{idArticle}`

Paramètres : 

- **idArticle** (System.Guid) : ID de l'article

Type de retour : `Stock[]`

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

