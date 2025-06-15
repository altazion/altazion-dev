## <span id='obtenirdepots'>Obtenir la liste des dépôts</span>

Récupère la liste des dépôts

Url :`[GET] api/stocks/depots?inclureArchive={inclureArchive:System.Boolean?}`

Paramètres : 

- **inclureArchive** (System.Boolean?) : Inclure ou non les dépôts archivés

Type de retour : `Depot[]`

Type(s) de données :

```csharp
class Depot
{
	bool EstArchive { get; set; }
	GestomWebApi.Logistique.StockController+Emplacement[] Emplacements { get; set; }
	System.Guid ID { get; set; }
	string Nom { get; set; }
}

class Emplacement
{
	bool EstArchive { get; set; }
	Guid? ZonePreparationGuid { get; set; }
	System.Guid ID { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	System.Guid IdDepot { get; set; }
}

```

