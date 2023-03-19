## <span id='liste'>Obtenir la liste des pages de contenu personnalisé</span>

Récupère la liste des pages de contenu personnalisé.

Url :`[GET] v2/content-manager/pages`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `PageData[]`

Type(s) de données :

```csharp
class PageData
{
	System.Guid Guid { get; set; }
	string Titre { get; set; }
	string Path { get; set; }
	string Description { get; set; }
	System.Guid TemplateGuid { get; set; }
	System.Guid DestinationGuid { get; set; }
	System.String[] CapacitesRequises { get; set; }
	bool EstPublique { get; set; }
}

```

