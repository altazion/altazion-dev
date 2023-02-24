## <span id='ajouterurlsecondaire'>Ajouter une url secondaire</span>

Ajoute une url secondaire pour un site

Url :`[PUT] api/ecommerce/sites/{idSite}/urls`

Paramètres : 

- **idSite** (int)
- en tant que body, un objet SiteUrlChange

Type de retour : `SiteWebData`

Type(s) de données :

```csharp
class SiteWebData
{
	GestomWebApi.Ventes.ECommerceController+SiteWebUrl[] UrlSecondaires { get; set; }
	string Code { get; set; }
	int Id { get; set; }
	string Libelle { get; set; }
	string Theme { get; set; }
	string CssTheme { get; set; }
	string MasterPage { get; set; }
	int RjsId { get; set; }
	int SegmentRacineId { get; set; }
	System.Int32? DefaultNewsletterId { get; set; }
	string UrlPrincipale { get; set; }
	string TelephoneServiceClient { get; set; }
	string EmailServiceClient { get; set; }
	string HorairesServiceClient { get; set; }
	string DefaultCP { get; set; }
	string DefaultPaysPk { get; set; }
	string DefaultCulture { get; set; }
	Guid? DefaultDevise { get; set; }
	System.Int32? SiteParentId { get; set; }
	Guid? VitrineTopVentesGuid { get; set; }
	Guid? VitrineHomeGuid { get; set; }
	Guid? VitrineNouveautesGuid { get; set; }
	bool EstEcommerce { get; set; }
	bool EstEnProduction { get; set; }
	System.Guid ZonePreparationParDefautGuid { get; set; }
	string Description { get; set; }
	string Titre { get; set; }
	bool EstBlog { get; set; }
	bool EstPrive { get; set; }
	string RootSearchPath { get; set; }
	string RootProductPath { get; set; }
	string RootPath { get; set; }
	Guid? ThemeGuid { get; set; }
	bool UtiliseMobilePages { get; set; }
	string MobileTheme { get; set; }
}

class SiteUrlChange
{
	string Url { get; set; }
	string Role { get; set; }
	Guid? MagasinGuid { get; set; }
}

```
