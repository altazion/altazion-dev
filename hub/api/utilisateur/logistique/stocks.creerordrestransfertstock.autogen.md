## <span id='creerordrestransfertstock'>Créer des ordres de transfert de stock</span>

Créé des ordres de transfert de stock

Url :`[POST] api/stocks/transferts/creer`

Paramètres : 

- en tant que body, un objet TransfertStockByEmplacements[] : Une liste d'objets de type TransfertStockByEmplacements

Type de retour : `Guid[]`

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

```

