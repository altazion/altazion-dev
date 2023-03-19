## <span id='detailspubxml'>Obtenir les détails d'une publicité XML</span>

Récupère les détails d'une opération publicitaire utilisant le templating XML

Url :`[GET] app/commercial/opecom/publicite/{opeGuid:guid}/xml`

Paramètres : 

- **opeGuid** (System.Guid) : L'identifiant de la publicité

Type de retour : `PubliciteXmlData`

Type(s) de données :

```csharp
class PubliciteXmlData
{
	GestomWebApi.Commercial.OpeCommController+PubliciteXmlTemplateData[] Templates { get; set; }
	bool EstValide { get; set; }
	System.Guid Guid { get; set; }
	DateTime DateDebut { get; set; }
	DateTime DateFin { get; set; }
	string Libelle { get; set; }
	string TypeOpe { get; set; }
	GestomWebApi.Commercial.OpeCommController+PubliciteXmlItem[] Items { get; set; }
}

class PubliciteXmlTemplateData
{
	string TemplateCode { get; set; }
	string Libelle { get; set; }
	GestomWebApi.Commercial.OpeCommController+PubliciteXmlParametre[] Parametres { get; set; }
	GestomWebApi.Commercial.OpeCommController+PubliciteXmlItem NewElement { get; set; }
}

class PubliciteXmlParametre
{
	string Nom { get; set; }
	string Type { get; set; }
}

class PubliciteXmlItem
{
	string TemplateCode { get; set; }
	GestomWebApi.Commercial.OpeCommController+PubliciteXmlVariable[] Variables { get; set; }
}

class PubliciteXmlVariable
{
	string Nom { get; set; }
	string Valeur { get; set; }
	string TypeValeur { get; set; }
}

```

