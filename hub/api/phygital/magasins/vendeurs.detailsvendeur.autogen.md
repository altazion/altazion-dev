## <span id='detailsvendeur'>Obtenir les détails d'un vendeur</span>

Récupère le détail d'un vendeur

Url :`[GET] v2/vendors/{guid:guid}`

Paramètres : 

- **guid** (System.Guid) : L'identifiant du vendeur

Type de retour : `VendorDetails`

Type(s) de données :

```csharp
class VendorDetails
{
	System.Guid Guid { get; set; }
	string Name { get; set; }
	string Email { get; set; }
	string Telephone { get; set; }
	string Rayon { get; set; }
}

```
