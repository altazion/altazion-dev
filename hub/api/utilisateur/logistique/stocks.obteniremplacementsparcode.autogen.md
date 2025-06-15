## <span id='obteniremplacementsparcode'>Obtenir un emplacement par son code</span>

Récupère un emplacements par son code

Url :`[GET] api/stocks/emplacements/code/{code}`

Paramètres : 

- **code** (string) : L'id de l'emplacement à rechercher

Type de retour : `Emplacement`

Type(s) de données :

```csharp
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

