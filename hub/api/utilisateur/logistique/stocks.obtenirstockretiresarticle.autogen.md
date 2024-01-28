## <span id='obtenirstockretiresarticle'>Obtenir les stocks retirés d'un article</span>

Obtient les stocks retirés d'un article pour tous les magasins

Url :`[GET] api/stocks/retires/article/{idArticle}`

Paramètres : 

- **idArticle** (System.Guid) : L'ID d'article

Type de retour : `StockRetire[]`

Type(s) de données :

```csharp
class StockRetire
{
	System.Guid Id { get; set; }
	System.Guid IdUtilisateur { get; set; }
	DateTimeOffset DateMiseAJour { get; set; }
	System.Guid IdArticle { get; set; }
	System.Guid IdMagasin { get; set; }
	decimal Quantite { get; set; }
	string Libelle { get; set; }
	System.DateTimeOffset? DateDebut { get; set; }
	System.DateTimeOffset? DateFin { get; set; }
}

```

