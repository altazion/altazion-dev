## <span id='obtenirmiseenstockencours'>Obtenir les mises en stock en cours</span>

Obtient un ordre de mise en stock

Url :`[GET] api/stocks/misesenstock/encours`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `MiseEnStockFull[]`

Type(s) de données :

```csharp
class MiseEnStockFull
{
	GestomWebApi.Logistique.StockController+StockEntree StockEntree { get; set; }
	GestomWebApi.Logistique.StockController+LigneEntree[] LignesEntree { get; set; }
}

```
