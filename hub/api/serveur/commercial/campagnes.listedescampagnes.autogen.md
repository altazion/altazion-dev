## <span id='listedescampagnes'>Obtenir les campagnes actives</span>

Récupère le liste des campagnes actives

Url :`[GET] app/commercial/campagnes`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `CampagnesData[]`

Type(s) de données :

```csharp
class CampagnesData
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Type { get; set; }
	string TypeLibelle { get; set; }
}

```
