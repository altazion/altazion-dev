## <span id='unservicemagasin'>Récupérer un service magasin</span>

Récupère un service magasin

Url :`[GET] api/magasins/services/{svc_pk}`

Paramètres : 

- **svc_pk** (int)

Type de retour : `ServiceMagasin`

Type(s) de données :

```csharp
class ServiceMagasin
{
	int Pk { get; set; }
	string Libelle { get; set; }
	string UrlIcone { get; set; }
	string UrlDescription { get; set; }
	string TypeService { get; set; }
}

```
