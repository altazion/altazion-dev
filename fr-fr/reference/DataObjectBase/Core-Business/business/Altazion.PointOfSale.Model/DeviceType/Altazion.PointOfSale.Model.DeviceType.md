## DeviceType

La classe DeviceType représente un type ou profil de device (comme une caisse, une borne ou une tablette) avec sa configuration technique et logicielle.

Propriétés publiques :

- Guid : Identifiant unique du type de device.
- Label : Libellé descriptif du type de device.
- IsEquihiraCompatible : Indique si ce type de device est compatible avec l'ancien système Equihira.
- ScreenMode : Mode d'écran utilisé par le device (par exemple "FULL" ou "DUAL").
- IsArchived : Indique si ce type de device est archivé.
- LastUpdate : Date et heure de la dernière mise à jour du type.
- ApplicationVersion : Version de l'application recommandée pour ce type de device.
- MonitoringXml : Configuration de monitoring au format XML.
- CrossChannelOrderType : Type de commandes cross-canal prises en charge par ce device.
- ConfigurationJson : Configuration du type de device en format JSON.
- DeviceModelId : Identifiant du modèle matériel associé, s'il y en a un.
- Stack : Stack technologique utilisée par le device (ex : "OfficeRails", "Windows", "Android").
- Orientation : Orientation de l'écran (par exemple "portrait" ou "landscape").

### D�claration TypeScript
```typescript
export interface DeviceType {
  Guid: string; // Unique identifier of the device type (GUID as string)
  Label: string | null; // Descriptive label of the device type
  IsEquihiraCompatible: boolean; // Compatibility with Equihira system
  ScreenMode: string | null; // Screen mode like "FULL", "DUAL"
  IsArchived: boolean; // Whether the device type is archived
  LastUpdate: string; // Last update date as ISO string
  ApplicationVersion: string | null; // Recommended app version
  MonitoringXml: string | null; // Monitoring configuration in XML format
  CrossChannelOrderType: string | null; // Cross-channel order type supported
  ConfigurationJson: string | null; // Configuration in JSON format
  DeviceModelId?: string | null; // Optional hardware device model ID (GUID as string)
  Stack: string | null; // Technology stack
  Orientation: string | null; // Screen orientation like "portrait" or "landscape"
}
```