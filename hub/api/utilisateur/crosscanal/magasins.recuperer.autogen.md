## <span id='recuperer'>Récupére la liste de tous les magasins</span>

Récupère tous les magasins

Url :`[GET] api/parametres/magasins?uniquementCrossCanal={uniquementCrossCanal:bool}`

Paramètres : 

- **uniquementCrossCanal** (bool)

Type de retour : `MagasinBase[]`

Type(s) de données :

```csharp
class MagasinBase
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	string CodePostal { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string AdressesIP { get; set; }
	string Telephone { get; set; }
	string Fax { get; set; }
	string Email { get; set; }
	string Pays { get; set; }
	bool ActifPourCrossCanal { get; set; }
}

```

