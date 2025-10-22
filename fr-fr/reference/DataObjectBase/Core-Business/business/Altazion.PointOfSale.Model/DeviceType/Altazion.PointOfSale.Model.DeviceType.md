## DeviceType

La classe DeviceType représente un type ou profil de device (comme une caisse, une borne, une tablette, etc.) avec sa configuration technique et logicielle spécifique. 

Propriétés publiques :
- Guid : Identifiant unique du type de device.
- Label : Libellé du type de device.
- IsEquihiraCompatible : Indique si le type de device est compatible avec Equihira (ancien système).
- ScreenMode : Mode d'écran du device (par exemple "FULL", "DUAL").
- IsArchived : Indique si ce type de device est archivé.
- LastUpdate : Date et heure de dernière mise à jour du type de device.
- ApplicationVersion : Version de l'application recommandée pour ce type de device.
- MonitoringXml : Configuration de monitoring sous forme XML.
- CrossChannelOrderType : Type de commandes cross-canal supportées par ce device.
- ConfigurationJson : Configuration JSON spécifique à ce type de device.
- DeviceModelId : Identifiant optionnel du modèle de device matériel associé.
- Stack : Stack technologique utilisée par le device (ex : "OfficeRails", "Windows", "Android").
- Orientation : Orientation de l'écran du device (ex: "portrait", "landscape").

### D�claration TypeScript
```typescript
interface DeviceType {
  Guid: string; // Unique identifier for the device type (GUID)
  Label: string; // Label of the device type
  IsEquihiraCompatible: boolean; // Compatibility with Equihira system
  ScreenMode: string; // Screen mode (e.g., FULL, DUAL)
  IsArchived: boolean; // Whether the type is archived
  LastUpdate: string; // Date/time string for last update
  ApplicationVersion: string; // Recommended app version
  MonitoringXml: string; // Monitoring configuration in XML
  CrossChannelOrderType: string; // Type of cross-channel orders supported
  ConfigurationJson: string; // Device type JSON configuration
  DeviceModelId?: string; // Optional GUID of associated hardware model
  Stack: string; // Technology stack
  Orientation: string; // Screen orientation
}
```