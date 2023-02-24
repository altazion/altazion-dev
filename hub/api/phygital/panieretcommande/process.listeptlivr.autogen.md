## <span id='listeptlivr'>Obtenir liste points livraison</span>

Obtenir la liste des points de livraison pour un mode

Url :`[GET] v2/process/livraison/relais/{mlvGuid:guid}/{cp}?ville={ville:string}&pays={pays:string}`

Paramètres : 

- **mlvGuid** (System.Guid)
- **cp** (string)
- **ville** (string)
- **pays** (string)

Type de retour : `PointLivraisonProcess[]`

Type(s) de données :

```csharp
class PointLivraisonProcess
{
	System.Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string CP { get; set; }
	string Email { get; set; }
	string Indication { get; set; }
	System.String[] Services { get; set; }
	CreoIgnem.Phygital.Tools.GeoLocalisationPointLivraisonProcess Localisation { get; set; }
	bool EstActif { get; set; }
}

class GeoLocalisationPointLivraisonProcess
{
	decimal Lattitude { get; set; }
	decimal Longitude { get; set; }
}

```
