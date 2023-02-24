## <span id='obteniremplacement'>Obtenir un emplacement</span>

Récupère un emplacement par son ID

Url :`[GET] api/stocks/emplacements/{id}`

Paramètres : 

- **id** (int) : L'id de l'emplacement à rechercher

Type de retour : `Emplacement`

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
