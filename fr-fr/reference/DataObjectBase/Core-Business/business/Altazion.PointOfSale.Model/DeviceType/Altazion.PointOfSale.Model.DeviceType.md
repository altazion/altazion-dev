## DeviceType

Représente un type ou profil de device (comme une caisse, borne, tablette, etc.) avec sa configuration technique et logicielle.

Propriétés publiques :
- Guid : Identifiant unique du type de device.
- Label : Libellé du type de device.
- IsEquihiraCompatible : Indique si le type de device est compatible avec Equihira (ancien système).
- ScreenMode : Mode d'écran du device (par exemple "FULL", "DUAL").
- IsArchived : Indique si ce type de device est archivé.
- LastUpdate : Date et heure de la dernière mise à jour du type de device.
- ApplicationVersion : Version de l'application recommandée pour ce type de device.
- MonitoringXml : Configuration de monitoring au format XML.
- CrossChannelOrderType : Type de commandes cross-canal supportées par ce device.
- ConfigurationJson : Configuration JSON du type de device.
- DeviceModelId : Identifiant du modèle matériel associé (nullable).
- Stack : Stack technologique du device (par exemple "OfficeRails", "Windows", "Android").
- Orientation : Orientation de l'écran (par exemple "portrait", "landscape").

### D�claration TypeScript
```typescript
export interface DeviceType {
  Guid: string; // Unique identifier of the device type (UUID as string)
  Label: string | null;
  IsEquihiraCompatible: boolean;
  ScreenMode: string | null;
  IsArchived: boolean;
  LastUpdate: string; // DateTimeOffset as ISO string
  ApplicationVersion: string | null;
  MonitoringXml: string | null;
  CrossChannelOrderType: string | null;
  ConfigurationJson: string | null;
  DeviceModelId?: string | null; // nullable UUID
  Stack: string | null;
  Orientation: string | null;
}
```