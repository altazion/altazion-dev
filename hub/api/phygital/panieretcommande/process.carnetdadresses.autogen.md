## <span id='carnetdadresses'>Obtenir la liste des adresses</span>

Obtient la liste des adresses du client

Url :`[GET] v2/process/client/adresses`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `AdresseClientProcess[]`

Type(s) de données :

```csharp
class AdresseClientProcess
{
	System.Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Prenom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
	string CP { get; set; }
	string PayPk { get; set; }
	string Region { get; set; }
	string Email { get; set; }
}

```
