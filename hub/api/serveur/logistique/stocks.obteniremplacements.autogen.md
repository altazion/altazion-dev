## <span id='obteniremplacements'>Obtenir la liste des emplacements</span>

Récupère la liste des emplacements

Url :`[GET] api/stocks/emplacements?inclureArchive={inclureArchive:System.Boolean?}`

Paramètres : 

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

