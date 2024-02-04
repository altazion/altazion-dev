## <span id='obtenir'>Obtenir un magasin</span>

Récupère les évènements Cross Canaux non archivés

Url :`[GET] app/magasins/{code}`

Paramètres : 

- **code** (string) : Le code du magasin

Url :`[GET] app/parametres/magasins/storeserver/{code}`

Paramètres : 

- **code** (string) : Le code du magasin

Url :`[GET] ?typeMagasin={typeMagasin:string}&payPk={payPk:string}&codePostal={codePostal:string}`

Paramètres : 

- **typeMagasin** (string)
- **payPk** (string)
- **codePostal** (string)

Url :`[GET] app/magasins/{guid:Guid}`

Paramètres : 

- **guid** (System.Guid) : L'identifiant du magasin

Url :`[GET] app/magasins/{magasin_guid:Guid}/evenements`

Paramètres : 

- **magasin_guid** (System.Guid) : L'identifiant du magasin

Url :`[GET] app/magasins/evenements/crosscanal?date1={date1:DateTime?}&date2={date2:DateTime?}`

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

class MagasinStoreServer
{
	System.Guid Guid { get; set; }
	int RjsId { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	string CodePostal { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
}

class MagasinCoordonnees
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Adresse { get; set; }
	string CodePostal { get; set; }
	string Ville { get; set; }
	string CodePays { get; set; }
	string Telephone { get; set; }
	string CodeMagasin { get; set; }
	string EmailMagasin { get; set; }
}

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

class EvenementMagasin
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Description { get; set; }
	GestomWebApi.PointOfSale.MagasinsController+EvenementCrossCanalBase InfoEventCrossCanal { get; set; }
}

class EvenementCrossCanalBase
{
	System.Guid Guid { get; set; }
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
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Url { get; set; }
	DateTime Date { get; set; }
	string Message { get; set; }
}

```

