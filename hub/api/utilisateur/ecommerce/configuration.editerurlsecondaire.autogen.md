## <span id='editerurlsecondaire'>Modifier une url secondaire</span>

Modifie une url secondaire pour un site

Url :`[POST] api/ecommerce/sites/{idSite}/urls/{idUrl:int}`

Paramètres : 

- **idSite** (int)
- **idUrl** (int)
- en tant que body, un objet SiteUrlChange

Url :`[DELETE] api/ecommerce/sites/{idSite}/urls/{idUrl:int}`

Paramètres : 

- **idSite** (int)
- **idUrl** (int)

Type de retour : `bool`

Type(s) de données :

```csharp
class SiteUrlChange
{
	string Url { get; set; }
	string Role { get; set; }
	Guid? MagasinGuid { get; set; }
}

```

