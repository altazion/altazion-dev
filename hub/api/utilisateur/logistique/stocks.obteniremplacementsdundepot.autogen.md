## <span id='obteniremplacementsdundepot'>Obtenir les emplacements d'un dépôt</span>

Récupère les emplacements d'un dépôt

Url :`[GET] api/stocks/depots/{id}/emplacements?inclureArchive={inclureArchive:System.Boolean?}`

Paramètres : 

- **id** (int) : L'id du dépôts dont on souhaite récupérer les emplacements
- **inclureArchive** (System.Boolean?) : Inclure ou non les emplacements archivés

Type de retour : `Emplacement[]`

Type(s) de données :

```csharp
class Emplacement
{
	bool EstArchive { get; set; }
	Guid? ZonePreparationGuid { get; set; }
	int ID { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	int IdDepot { get; set; }
}

```

