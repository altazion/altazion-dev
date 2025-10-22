## DeviceModel

Classe représentant un modèle matériel de device (exemples : "Borne KC50 Zebra", "iPad Pro 12.9").

Propriétés publiques :
- Guid : Identifiant unique du modèle de device.
- ManufacturerId : Identifiant du constructeur/fabricant du device.
- Label : Libellé du modèle de device.
- Type : Type de device (par exemple : "Borne", "Caisse", "Tablette", "Smartphone").
- CompatibleOperatingSystems : Liste des systèmes d'exploitation utilisables, séparés par des virgules (exemple : "WINDOWS,LINUX,ANDROID").
- OfficeRailsProviderClass : Classe du fournisseur pour Office/Rails.
- WindowsShellProviderClass : Classe du fournisseur pour le Shell Windows.
- HardwareConfigurationJson : Configuration JSON du matériel, incluant les spécifications techniques, capacités, etc.

### D�claration TypeScript
```typescript
interface DeviceModel {
  Guid: string; // Unique identifier of the device model (GUID)
  ManufacturerId: string; // Identifier of the device's manufacturer (GUID)
  Label: string | null; // Label/name of the device model
  Type: string | null; // Type of device (e.g., "Borne", "Cash Register", "Tablet", "Smartphone")
  CompatibleOperatingSystems: string | null; // Compatible OS list, comma separated (e.g., "WINDOWS,LINUX,ANDROID")
  OfficeRailsProviderClass: string | null; // Provider class for Office/Rails
  WindowsShellProviderClass: string | null; // Provider class for Windows Shell
  HardwareConfigurationJson: string | null; // JSON configuration with technical specifications etc.
}
```