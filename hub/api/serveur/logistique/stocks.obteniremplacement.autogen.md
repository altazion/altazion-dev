## <span id='obteniremplacement'>Obtenir un emplacement</span>

Récupère un emplacement par son ID

Url :`[GET] api/stocks/emplacements/{id}`

Paramètres : 

- **id** (System.Guid) : L'id de l'emplacement à rechercher

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

