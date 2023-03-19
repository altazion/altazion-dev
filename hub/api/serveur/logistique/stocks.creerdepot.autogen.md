## <span id='creerdepot'>Créer un nouveau dépôt</span>

Créé un nouveau dépôt

Url :`[POST] api/stocks/depots`

Paramètres : 

- en tant que body, un objet NewDepot : Le dépot à créer

Type de retour : `Depot`

Type(s) de données :

```csharp
class Depot
{
	bool EstArchive { get; set; }
	GestomWebApi.Logistique.StockController+Emplacement[] Emplacements { get; set; }
	int ID { get; set; }
	string Nom { get; set; }
}

class NewDepot
{
	string Nom { get; set; }
}

```

