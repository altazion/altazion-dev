## <span id='detailsconnecte'>Obtenir les détails du vendeur connecté sur le device</span>

Récupère les détails du vendeur connecté sur le device

Url :`[GET] v2/vendors/me`

Paramètres : 

- Cette url n'accepte aucun paramètre

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

