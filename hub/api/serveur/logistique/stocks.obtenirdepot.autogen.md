## <span id='obtenirdepot'>Obtenir un dépôt</span>

Récupère un dépôt par son ID

Url :`[GET] api/stocks/depots/{id}`

Paramètres : 

- **id** (System.Guid) : L'id du dépôt à récuperer

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

```

