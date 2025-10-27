## DeviceModel

La classe DeviceModel représente un modèle matériel de device, tel qu'une borne ou une tablette spécifique.

Propriétés publiques :
- Guid : Identifiant unique du modèle de device.
- ManufacturerId : Identifiant du constructeur/fabricant du device.
- Label : Libellé du modèle de device (exemple : "Borne KC50 Zebra", "iPad Pro 12.9").
- Type : Type de device (par exemple : "Borne", "Caisse", "Tablette", "Smartphone").
- CompatibleOperatingSystems : Liste au format chaîne des systèmes d'exploitation compatibles, séparés par des virgules (exemple : "WINDOWS,LINUX,ANDROID").
- OfficeRailsProviderClass : Classe du fournisseur pour Office/Rails.
- WindowsShellProviderClass : Classe du fournisseur pour le Shell Windows.
- HardwareConfigurationJson : Configuration JSON du matériel, contenant les spécifications techniques et les capacités du device.

Cette classe hérite de DataObjectBase et permet de charger les données depuis une DataRow en mappant les colonnes correspondantes aux propriétés. La clé unique de l'objet est le Guid.

Une méthode ToString() renvoie le libellé du modèle pour une représentation en chaîne.

### D�claration TypeScript
```typescript
interface DeviceModel {
  Guid: string; // Unique identifier for the device model (GUID)
  ManufacturerId: string; // Identifier for the manufacturer (GUID)
  Label: string; // Display name of the device model
  Type: string; // Type of device (e.g., "Kiosk", "Cash register", "Tablet", "Smartphone")
  CompatibleOperatingSystems: string; // Comma-separated list of compatible OS (e.g., "WINDOWS,LINUX,ANDROID")
  OfficeRailsProviderClass: string; // Provider class for Office/Rails
  WindowsShellProviderClass: string; // Provider class for Windows Shell
  HardwareConfigurationJson: string; // JSON configuration describing hardware specifications and capabilities
}
```