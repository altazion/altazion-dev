## <span id='listedestinations'>Obtenir la liste des destinations des opérations com.</span>

Récupère la liste des destinations

Url :`[GET] api/commercial/destinations`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `Destination[]`

Type(s) de données :

```csharp
class Destination
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Type { get; set; }
	Guid? GroupeAnimationGuid { get; set; }
	System.Int32? SiteId { get; set; }
}

```
