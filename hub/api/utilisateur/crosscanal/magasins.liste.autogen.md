## <span id='liste'>Obtenir la liste des magasins</span>

Récupère la liste des magasins non archivés.

Url :`[GET] api/magasins?uniquementCrossCanal={uniquementCrossCanal:bool}`

Paramètres : 

- **uniquementCrossCanal** (bool) : True pour ne récupérer que les magasins participant au programmes cross-canaux

Type de retour : `MagasinInfo[]`

Type(s) de données :

```csharp
class MagasinInfo
{
	CPointSoftware.Equihira.Common.MagasinInfo+Horaire[] Horaires { get; set; }
	CPointSoftware.Equihira.Common.MagasinInfo+Service[] Services { get; set; }
	decimal Lattitude { get; set; }
	decimal Longitude { get; set; }
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

class Horaire
{
	string Jour { get; set; }
	bool Ouvert { get; set; }
	System.TimeSpan Ouverture { get; set; }
	System.TimeSpan? FermertureMidi { get; set; }
	System.TimeSpan? ReouvertureMidi { get; set; }
	System.TimeSpan Fermeture { get; set; }
}

class Service
{
	string Libelle { get; set; }
	string IconeUrl { get; set; }
	string DescriptionUrl { get; set; }
}

```

