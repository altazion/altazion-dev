## DeviceType

The DeviceType class represents a device type or profile (such as a cash register, kiosk, or tablet) along with its technical and software configuration.

Public properties:

- Guid: Unique identifier of the device type.
- Label: Descriptive label of the device type.
- IsEquihiraCompatible: Indicates if the device type is compatible with the old Equihira system.
- ScreenMode: Screen mode of the device (e.g., "FULL", "DUAL").
- IsArchived: Indicates if this device type is archived.
- LastUpdate: Date and time of the last update of the device type.
- ApplicationVersion: Recommended application version for this device type.
- MonitoringXml: Monitoring configuration in XML format.
- CrossChannelOrderType: Type of cross-channel orders supported by this device.
- ConfigurationJson: Device type configuration in JSON format.
- DeviceModelId: Identifier of the associated hardware device model, if any.
- Stack: Technological stack of the device (e.g., "OfficeRails", "Windows", "Android").
- Orientation: Screen orientation (e.g., "portrait", "landscape").

### TypeScript class
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