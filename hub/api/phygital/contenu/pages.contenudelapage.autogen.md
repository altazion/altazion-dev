## <span id='contenudelapage'>Obtenir le contenu d'une page</span>

Obtient le contenu d'une page personnalisée.

Url :`[GET] v2/content-manager/pages/{pageGuid:guid}`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `PageDetails`

Type(s) de données :

```csharp
class PageDetails
{
	Dictionary<System.String,System.String> Contenu { get; set; }
	System.Guid[] ProduitsAssocies { get; set; }
	Guid? VitrineAssociee { get; set; }
	string ContenuFallback { get; set; }
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
