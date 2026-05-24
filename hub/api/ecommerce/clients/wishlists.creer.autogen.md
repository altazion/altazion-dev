## <span id='creer'>Créé une nouvelle wishlist</span>

Créé une nouvelle wishlist

Url :`[GET] /api/wishlist/nui/new?libelle={libelle}`

Paramètres : 

- **libelle** : Libellé de la wishlist

Type(s) de données :

```csharp
class WishlistData
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
}

```

