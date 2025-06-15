## <span id='creerordretransfertstock'>Créer un ordre de transfert de stock</span>

Créé un ordre de transfert de stock

Url :`[POST] api/stocks/transfert/creer`

Paramètres : 

- en tant que body, un objet TransfertStockByEmplacements : Un objet de type TransfertStockByEmplacements

Type de retour : `Guid`

Type(s) de données :

```csharp
class TransfertStockByEmplacements
{
	string NumeroDocument { get; set; }
	System.Guid IDEmplacementOrigine { get; set; }
	System.Guid IDEmplacementDestination { get; set; }
	CPointSoftware.Equihira.Business.Logistique.StocksBllEx+LigneTransfert[] LignesTransfert { get; set; }
	string Raison { get; set; }
	bool ValidationAuto { get; set; }
}

class LigneTransfert
{
	System.Guid ArticleGuid { get; set; }
	decimal Quantite { get; set; }
}

```

