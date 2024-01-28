## <span id='ajouterstockretire'>Ajouter une ligne de stock retiré</span>

Remplace les stocks retirés dans un magasin pour un article

Url :`[POST] api/stocks/retires`

Paramètres : 

- en tant que body, un objet AjoutStockRetire : Les informations sur la ligne de stock à retirer
- en tant que body, un objet PatchStockRetire[] : Les lignes de stocks retirés à remplacer

Url :`[PATCH] api/stocks/retires/magasin/{idMagasin}/article/{idArticle}`

Paramètres : 

- en tant que body, un objet AjoutStockRetire : Les informations sur la ligne de stock à retirer
- **idMagasin** (System.Guid) : L'ID du magasin
- **idArticle** (System.Guid) : L'ID d'article
- en tant que body, un objet PatchStockRetire[] : Les lignes de stocks retirés à remplacer

Type de retour : `Guid[]`

Type(s) de données :

```csharp
class AjoutStockRetire
{
	System.Guid IdArticle { get; set; }
	System.Guid IdMagasin { get; set; }
	decimal Quantite { get; set; }
	string Libelle { get; set; }
	System.DateTimeOffset? DateDebut { get; set; }
	System.DateTimeOffset? DateFin { get; set; }
}

class PatchStockRetire
{
	decimal Quantite { get; set; }
	string Libelle { get; set; }
	System.DateTimeOffset? DateDebut { get; set; }
	System.DateTimeOffset? DateFin { get; set; }
}

```

