## DeviceModel

Class representing a hardware device model (examples: "Borne KC50 Zebra", "iPad Pro 12.9").

Public properties:
- Guid: Unique identifier of the device model.
- ManufacturerId: Identifier of the device's manufacturer.
- Label: Name/label of the device model.
- Type: Type of device (e.g., "Borne", "Cash Register", "Tablet", "Smartphone").
- CompatibleOperatingSystems: List of compatible operating systems separated by commas (e.g., "WINDOWS,LINUX,ANDROID").
- OfficeRailsProviderClass: Provider class for Office/Rails.
- WindowsShellProviderClass: Provider class for Windows Shell.
- HardwareConfigurationJson: JSON configuration of the hardware, including technical specifications and capabilities.

### TypeScript class
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