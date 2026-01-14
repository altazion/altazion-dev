## DeviceType

Represents a device type or profile (such as a cash register, kiosk, tablet, etc.) with its technical and software configuration.

Public properties:
- Guid: Unique identifier of the device type.
- Label: Name of the device type.
- IsEquihiraCompatible: Indicates if the device type is compatible with Equihira (legacy system).
- ScreenMode: Screen mode of the device (e.g., "FULL", "DUAL").
- IsArchived: Indicates whether this device type is archived.
- LastUpdate: Date and time of the last update of the device type.
- ApplicationVersion: Recommended application version for this device type.
- MonitoringXml: Monitoring configuration in XML format.
- CrossChannelOrderType: Type of cross-channel orders supported by this device.
- ConfigurationJson: JSON configuration of the device type.
- DeviceModelId: Identifier of the associated hardware device model (nullable).
- Stack: Technology stack of the device (e.g., "OfficeRails", "Windows", "Android").
- Orientation: Screen orientation (e.g., "portrait", "landscape").

### TypeScript class
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