## <span id='details'>Obtenir les détails d'un catalogue interactif</span>

Récupère les détails d'un catalogue interactif

Url :`[GET] api/commercial/opecom/catalogue/{opeGuid:guid}`

Paramètres : 

- **opeGuid** (System.Guid) : L'identifiant du catalogue

Type de retour : `OpeCatalogueData`

Type(s) de données :

```csharp
class OpeCatalogueData
{
	bool EstValide { get; set; }
	string Libelle { get; set; }
	System.Guid Guid { get; set; }
	string TypeOpe { get; set; }
	DateTime DateDebut { get; set; }
	DateTime DateFin { get; set; }
	CPointSoftware.Equihira.Business.Crm.TypeOperationCatalogue+OpeCataloguePageCustom[] Pages { get; set; }
	GestomWebApi.Commercial.OpeCommController+PubliciteItem[] Publicites { get; set; }
}

class OpeCataloguePageCustom
{
	CPointSoftware.Equihira.Business.Crm.TypeOperationCatalogue+OpeCataloguePageItem[] Items { get; set; }
	string CustomXmlData { get; set; }
	string ImageUrl { get; set; }
	string CriteresUrl { get; set; }
	string Title { get; set; }
}

class PubliciteItem
{
	string Emplacement { get; set; }
	string ImageUrl { get; set; }
	string DestinationUrl { get; set; }
	string Contexte { get; set; }
	System.Int32? Largeur { get; set; }
	System.Int32? Hauteur { get; set; }
	string Titre { get; set; }
	string TypeMime { get; set; }
}

```
