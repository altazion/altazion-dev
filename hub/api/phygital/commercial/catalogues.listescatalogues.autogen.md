## <span id='listescatalogues'>Obtenir la liste des catalogues interactifs</span>

Récupère la liste des catalogues interactifs

Url :`[GET] v2/animation/catalogue/list`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `OpeCatalogueBase[]`

Type(s) de données :

```csharp
class OpeCatalogueBase
{
	string Libelle { get; set; }
	System.Guid Guid { get; set; }
	string TypeOpe { get; set; }
	DateTime DateDebut { get; set; }
	DateTime DateFin { get; set; }
}

```

