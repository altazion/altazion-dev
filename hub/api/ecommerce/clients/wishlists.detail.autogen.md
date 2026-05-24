## <span id='detail'>Obtient le détail d'une wishlist par son identifiant</span>

Obtient le détail d'une wishlist

Url :`[GET] /api/wishlist/nui/list?id={liste_guid}`

Paramètres : 

- **liste_guid** : L'identifiant de la wishlist

Type(s) de données :

```csharp
class WishlistDetails
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	WishlistLigne[] Lignes { get; set; }
}

```

