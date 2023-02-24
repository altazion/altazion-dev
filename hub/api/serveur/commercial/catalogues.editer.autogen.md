## <span id='editer'>Modifier les détails d'un catalogue interactif</span>

Met à jour les détails d'un catalogue interactif

Url :`[POST] app/commercial/opecom/catalogue`

Paramètres : 

- en tant que body, un objet OpeCatalogue : Le catalogue à modifier

Type de retour : `bool`

Type(s) de données :

```csharp
class OpeCatalogue
{
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

class OpeCataloguePageItem
{
	System.Guid ArticleGuid { get; set; }
	string ArticleLibelle { get; set; }
	decimal Pertinence { get; set; }
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
