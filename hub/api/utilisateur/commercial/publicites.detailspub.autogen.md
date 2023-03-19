## <span id='detailspub'>Obtenir les détails d'une publicité (classique)</span>

Récupère les détails d'une opération publicitaire utilisant le module 'classique'

Url :`[GET] api/commercial/opecom/publicite/{opeGuid:guid}/base`

Paramètres : 

- **opeGuid** (System.Guid) : L'identifiant de la publicité

Type de retour : `PubliciteData`

Type(s) de données :

```csharp
class PubliciteData
{
	bool EstValide { get; set; }
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

