## <span id='editerpub'>Modifier les détails d'une publicité (classique)</span>

Met à jour les détails d'une opération publicitaire utilisant le module de présentation 'classique'

Url :`[POST] app/commercial/opecom/publicite/base`

Paramètres : 

- en tant que body, un objet Publicite : La publicité à modifier

Type de retour : `bool`

Type(s) de données :

```csharp
class Publicite
{
	System.Guid Guid { get; set; }
	DateTime DateDebut { get; set; }
	DateTime DateFin { get; set; }
	string Libelle { get; set; }
	string TypeOpe { get; set; }
	GestomWebApi.Commercial.OpeCommController+PubliciteItem[] Items { get; set; }
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

