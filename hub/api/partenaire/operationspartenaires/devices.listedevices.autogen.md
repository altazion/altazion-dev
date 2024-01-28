## <span id='listedevices'>Obtenir tous les devices</span>

Récupère la liste des devices pour un tenant

Url :`[GET] api/partners/saas/tenants/{tenantId:int}/devices`

Paramètres : 

- **tenantId** (int) : L'identifiant du tenant

Type de retour : `DeviceData[]`

Type(s) de données :

```csharp
class DeviceData
{
	System.Guid Guid { get; set; }
	string Name { get; set; }
	string StoreName { get; set; }
	string StoreCode { get; set; }
	Guid? StoreGuid { get; set; }
	CPointSoftware.Equihira.Business.PointOfSale.PosteTypeEcran Kind { get; set; }
	string DeviceCode { get; set; }
	int RjsId { get; set; }
}

enum PosteTypeEcran
{
	Caisse, // =0
	CaisseCentrale, // =1
	Borne, // =2
	DigitalSignage, // =3
	Tablet, // =4
	ClientDevice, // =5
}

```

