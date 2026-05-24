## <span id='partagere-mail'>Créé une nouvelle wishlist</span>

Partage une wishlist par e-mail

Url :`[GET] /api/wishlist/nui/shareasemail?id={liste_guid}&emails={emails}`

Paramètres : 

- **liste_guid** : L'identifiant de la wishlist
- **emails** : Liste des emails, séparés par des virgules ou des espaces

Type(s) de données :

```csharp
class String
{
	Char Chars { get; }
	int Length { get; }
}

```

