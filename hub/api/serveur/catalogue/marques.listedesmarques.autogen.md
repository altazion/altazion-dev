## <span id='listedesmarques'>Obtenir toutes les marques</span>

Récupère la liste de toutes les marques

Url :`[GET] app/catalogue/marques/all`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `MarqueData[]`

Type(s) de données :

```csharp
class MarqueData
{
	int Id { get; set; }
	string Libelle { get; set; }
	string CommentairesInternes { get; set; }
	string DescriptionPublique { get; set; }
	string UrlPerso { get; set; }
	bool EstMarqueInterne { get; set; }
	int Importance { get; set; }
}

```

