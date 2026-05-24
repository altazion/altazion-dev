## <span id='liste'>Obtient les wishlist du client</span>

Obtient toutes les wishlists (non archivées) du client connecté

Url :`[GET] /api/wishlist/nui/list`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type(s) de données :

```csharp
class WishlistData
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
}

```

