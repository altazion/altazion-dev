## <span id='modifierdepot'>Modifier un dépôt</span>

Modifie un dépôt

Url :`[PUT] api/stocks/depots`

Paramètres : 

- en tant que body, un objet UpdateDepot : Le dépot à modifier

Type de retour : `Depot`

Type(s) de données :

```csharp
class Depot
{
	bool EstArchive { get; set; }
	GestomWebApi.Logistique.StockController+Emplacement[] Emplacements { get; set; }
	System.Guid ID { get; set; }
	string Nom { get; set; }
}

class UpdateDepot
{
	System.Guid ID { get; set; }
	string Nom { get; set; }
}

```

