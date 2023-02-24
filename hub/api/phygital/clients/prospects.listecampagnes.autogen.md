## <span id='listecampagnes'>Récupère la liste des campagnes actives</span>

Récupère la liste des campagnes actives

Url :`[GET] v2/customers/prospects/campagnes`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `CampagneData[]`

Type(s) de données :

```csharp
class CampagneData
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	DateTime? DateDebut { get; set; }
	DateTime? DateFin { get; set; }
	string LibelleRecruteur { get; set; }
}

```
