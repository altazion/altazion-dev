## <span id='obtenirunemarque'>Obtenir une marque</span>

Obtient les informations d'une marque

Url :`[GET] app/catalogue/marques/{marqueId:long}`

Paramètres : 

- **marqueId** (int) : L'identifiant de la marque

Type de retour : `MarqueData`

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

