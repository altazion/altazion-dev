## <span id='rechercher'>Rechercher magasins à proximité</span>

Récupère la liste des magasins à proximité.

Url :`[GET] app/magasins/recherche/{pay_pk}/{zip}`

Paramètres : 

- **pay_pk** (string) : Le code (ISO 3) pays où effectuer la recherche
- **zip** (string) : Le code postal du lieu de recherche

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

```

