## <span id='listedestypes'>Obtenir les types de devices</span>

Récupère la liste des types de devices pour un tenant

Url :`[GET] api/partners/saas/tenants/{tenantId:int}/devicestypes?kind={kind:string}`

Paramètres : 

- **tenantId** (int) : L'identifiant du tenant
- **kind** (string) : Le meta-type (Caisse, ecran DigitalSignage, etc.)

Type de retour : `TypeDevice[]`

Type(s) de données :

```csharp
class TypeDevice
{
	System.Guid Guid { get; set; }
	string Label { get; set; }
	CPointSoftware.Equihira.Business.PointOfSale.PosteTypeEcran Kind { get; set; }
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
