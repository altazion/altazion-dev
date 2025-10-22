## DeviceType

The DeviceType class represents a type or profile of device (such as a cash register, kiosk, tablet, etc.) with its specific technical and software configuration.

Public properties:
- Guid: Unique identifier for the device type.
- Label: Label or name of the device type.
- IsEquihiraCompatible: Indicates if the device type is compatible with Equihira (an older system).
- ScreenMode: Screen mode of the device (e.g. "FULL", "DUAL").
- IsArchived: Indicates whether this device type is archived.
- LastUpdate: Date and time of the last update to the device type.
- ApplicationVersion: Recommended application version for this device type.
- MonitoringXml: Monitoring configuration in XML format.
- CrossChannelOrderType: Type of cross-channel orders supported by the device.
- ConfigurationJson: JSON configuration specific to this device type.
- DeviceModelId: Optional identifier of the associated hardware device model.
- Stack: Technological stack used by the device (e.g., "OfficeRails", "Windows", "Android").
- Orientation: Screen orientation of the device (e.g., "portrait", "landscape").

### TypeScript class
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