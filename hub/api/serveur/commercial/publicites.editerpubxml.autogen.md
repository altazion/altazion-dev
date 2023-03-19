## <span id='editerpubxml'>Modifier les détails d'une publicité XML</span>

Met à jour les détails d'une opération publicitaire utilisant le templating XML

Url :`[POST] app/commercial/opecom/publicite/xml`

Paramètres : 

- en tant que body, un objet PubliciteXml : La publicité à modifier

Type de retour : `bool`

Type(s) de données :

```csharp
class PubliciteXml
{
	System.Guid Guid { get; set; }
	DateTime DateDebut { get; set; }
	DateTime DateFin { get; set; }
	string Libelle { get; set; }
	string TypeOpe { get; set; }
	GestomWebApi.Commercial.OpeCommController+PubliciteXmlItem[] Items { get; set; }
}

class PubliciteXmlItem
{
	string TemplateCode { get; set; }
	GestomWebApi.Commercial.OpeCommController+PubliciteXmlVariable[] Variables { get; set; }
}

```

