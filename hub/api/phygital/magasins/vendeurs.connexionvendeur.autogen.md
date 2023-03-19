## <span id='connexionvendeur'>Connecter un vendeur</span>

Connecte un vendeur sur le device actif

Url :`[POST] v2/vendors/login`

Paramètres : 

- en tant que body, un objet VendorLogin : Les identifiants du vendeur (cf. remarques)

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

class VendorLogin
{
	string Username { get; set; }
	string Password { get; set; }
}

```

