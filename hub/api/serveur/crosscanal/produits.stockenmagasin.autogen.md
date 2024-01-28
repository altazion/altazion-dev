## <span id='stockenmagasin'>Vérifier le stock d'un ensemble de produits dans tous les magasins</span>

Récupère le stock d'un ensemble de produits dans tous les magasins.

Url :`[POST] app/crosscanal/stocks/dispos/guids`

Paramètres : 

- en tant que body, un objet Guid[] : La liste des guids à vérifier
- en tant que body, un objet String[] : La liste des références à vérifier

Url :`[POST] app/crosscanal/stocks/dispos`

Paramètres : 

- en tant que body, un objet Guid[] : La liste des guids à vérifier
- en tant que body, un objet String[] : La liste des références à vérifier

Type de retour : `RechercheStockMagasins[]`

Type(s) de données :

```csharp
class RechercheStockMagasins
{
	string MagasinCode { get; set; }
	System.Guid MagasinGuid { get; set; }
	string MagasinLibelle { get; set; }
	string MagasinCP { get; set; }
	GestomWebApi.CrossCanal.StocksForAppController+RechercheStockMagasinsDetails[] Produits { get; set; }
}

class RechercheStockMagasinsDetails
{
	string ArticleReference { get; set; }
	System.Guid ArticleGuid { get; set; }
	bool EstDisponible { get; set; }
	decimal Quantite { get; set; }
}

```

