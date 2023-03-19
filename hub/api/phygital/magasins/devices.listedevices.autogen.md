## <span id='listedevices'>Liste des devices</span>

Obtient la liste des devices du magasin associé au device

Url :`[GET] v2/sys/devices/list`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `Device[]`

Type(s) de données :

```csharp
class Device
{
	System.Guid Guid { get; set; }
	string Name { get; set; }
	string TypeDevice { get; set; }
	string ConnexionID { get; set; }
	string Status { get; set; }
	string StatusFormate { get; set; }
	DateTime? LastPing { get; set; }
	string LastPingFormate { get; set; }
	string CurrentApp { get; set; }
	string CurrentStatus { get; set; }
	string CurrentTheme { get; set; }
}

```

