## <span id='listeadrlivraison'>Liste des adresses de livraison</span>

Obtient les adresses de livraison associées au compte client.

Url :`[GET] /api/process/nui/?action=getadresseslivraison`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type(s) de données :

```csharp
class AdresseClientProcess
{
	Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
	string CP { get; set; }
	string Email { get; set; }
}

```

