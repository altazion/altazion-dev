## <span id='configuration'>Obtenir la confguration du device</span>

Récupère la configuration du device actif.

Url :`[GET] v2/device`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `DeviceConfigData`

Type(s) de données :

```csharp
class DeviceConfigData
{
	PhygitalSite.Systeme.DeviceController+SiteWebData SiteAssocie { get; set; }
	PhygitalSite.Systeme.DeviceController+MagasinData MagasinAssocie { get; set; }
	System.Guid DeviceGuid { get; set; }
	string DeviceName { get; set; }
	string IP { get; set; }
	string XmlConfig { get; set; }
	string MetaType { get; set; }
	string ServerVersion { get; set; }
	System.String[] ModulesInstalles { get; set; }
	Dictionary<System.String,System.String> Options { get; set; }
	string ProductKey { get; set; }
	PhygitalSite.Systeme.DeviceController+AnimationGroupData AnimationGroup { get; set; }
	PhygitalSite.Systeme.DeviceController+ProcessDataConfig OrderProcessConfig { get; set; }
	CPointSoftware.ECommerce.Tools.ECommerceServer+PaysVentesInfo[] PaysVentes { get; set; }
	CPointSoftware.ECommerce.Tools.ECommerceServer+ModuleClass[] ServerModulesClasses { get; set; }
}

class SiteWebData
{
	string Nom { get; set; }
	string RootUrl { get; set; }
}

class MagasinData
{
	string Nom { get; set; }
	System.Guid Guid { get; set; }
	string Code { get; set; }
	string MessageAccueil { get; set; }
	string Responsable { get; set; }
	string Telephone { get; set; }
	string Email { get; set; }
	string UrlPersonnalisee { get; set; }
	decimal? Longitude { get; set; }
	decimal? Latitude { get; set; }
	string Adresse { get; set; }
	string CodePostal { get; set; }
	string CodePays { get; set; }
	string Ville { get; set; }
	string MessageHoraires { get; set; }
	PhygitalSite.Systeme.DeviceController+MagasinHoraireData[] Horaires { get; set; }
}

class MagasinHoraireData
{
	string Jour { get; set; }
	string Horaires { get; set; }
}

class AnimationGroupData
{
	string Libelle { get; set; }
	System.Guid Guid { get; set; }
}

class ProcessDataConfig
{
	PhygitalSite.Systeme.DeviceController+ProcessKind DefaultProcessKind { get; set; }
	string CustomProcessKind { get; set; }
	PhygitalSite.Systeme.DeviceController+ProcessWebHook[] PostValidationWebhooks { get; set; }
	PhygitalSite.Systeme.DeviceController+ProcessWebHook[] ReceiptWebHooks { get; set; }
}

enum ProcessKind
{
	Anonymous, // =0
	Guest, // =1
	NameOnly, // =2
	Full, // =3
	Custom, // =4
}

class ProcessWebHook
{
	string Url { get; set; }
	string DataPlayloadType { get; set; }
}

class PaysVentesInfo
{
	string PayPk { get; set; }
	string Libelle { get; set; }
	string CodePostalRegex { get; set; }
	string CodePostalNonAcceptesRegex { get; set; }
	string TelRegex { get; set; }
	string MobileRegex { get; set; }
}

class ModuleClass
{
	string Kind { get; set; }
	string ClassName { get; set; }
}

```

