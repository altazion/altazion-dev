## <span id='ajouterligne'>Ajoute un article dans une wishlist</span>

Ajoute un article dans une wishlist

Url :`[GET] /api/wishlist/nui/add?id={liste_guid}&article={art_guid}&qte={quantite}`

Paramètres : 

- **liste_guid** : L'identifiant de la wishlist
- **art_guid** : L'identifiant de l'article
- **quantite** : Quantite de l'article (par défaut : 1)

Type(s) de données :

```csharp
class WishlistDetails
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	WishlistLigne[] Lignes { get; set; }
}

```

