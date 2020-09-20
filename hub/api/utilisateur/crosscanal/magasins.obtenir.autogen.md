## <span id='obtenir'>Obtenir un magasin</span>

Récupère les évènements Cross Canaux non archivés

Url :`[GET] api/parametres/magasins/{code}`

Paramètres : 

- **code** (string) : Le code du magasin

Url :`[GET] api/parametres/magasins/{guid:Guid}`

Paramètres : 

- **guid** (Guid) : L'identifiant du magasin

Url :`[GET] api/magasins/{magasin_guid:Guid}/evenements`

Paramètres : 

- **magasin_guid** (Guid) : L'identifiant du magasin

Url :`[GET] api/magasins/evenements/crosscanal?date1={date1:DateTime?}&date2={date2:DateTime?}`

Paramètres : 

- **date1** (DateTime?)
- **date2** (DateTime?)

Type de retour : `EvenementCrossCanal[]`

Type(s) de données :

```csharp
class MagasinInfo
{
	CPointSoftware.Equihira.Common.MagasinInfo+Horaire[] Horaires { get; set; }
	CPointSoftware.Equihira.Common.MagasinInfo+Service[] Services { get; set; }
	decimal Lattitude { get; set; }
	decimal Longitude { get; set; }
	Guid Guid { get; set; }
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

class MagasinBase
{
	Guid Guid { get; set; }
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

class EvenementMagasin
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Description { get; set; }
	EvenementCrossCanalBase InfoEventCrossCanal { get; set; }
}

class EvenementCrossCanalBase
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Url { get; set; }
	DateTime Date { get; set; }
	string Message { get; set; }
}

class EvenementCrossCanal
{
	string Categorie { get; set; }
	string Descriptif { get; set; }
	bool ObligatoirePourIntegres { get; set; }
	bool ObligatoirePourAffilies { get; set; }
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Url { get; set; }
	DateTime Date { get; set; }
	string Message { get; set; }
}

```
