## <span id='depuisarticle'>Obtenir les catalogues contenant un article.</span>

Récupère les catalogues interactifs dont fait partie un article

Url :`[GET] v2/animation/catalogue/fromproduct/{artGuid:guid}`

Paramètres : 

- **artGuid** (Guid) : L'identifiant de l'article

Type de retour : `OpeCatalogueContainer[]`

Type(s) de données :

```csharp
class OpeCatalogueContainer
{
	Guid CatalogueGuid { get; set; }
	string CatalogueLibelle { get; set; }
	DateTime DateDebut { get; set; }
	DateTime DateFin { get; set; }
	Guid EtapeGuid { get; set; }
	int EtapeOrder { get; set; }
}

```
