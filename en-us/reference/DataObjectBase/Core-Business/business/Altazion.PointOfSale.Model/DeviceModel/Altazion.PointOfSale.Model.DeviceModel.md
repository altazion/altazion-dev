## DeviceModel

The DeviceModel class represents a hardware model of a device, such as a specific kiosk or tablet.

Public properties:
- Guid: Unique identifier of the device model.
- ManufacturerId: Identifier of the device manufacturer.
- Label: Display name of the device model (e.g., "Borne KC50 Zebra", "iPad Pro 12.9").
- Type: Device type (for example, "Kiosk", "Cash register", "Tablet", "Smartphone").
- CompatibleOperatingSystems: Comma-separated string listing compatible operating systems (e.g., "WINDOWS,LINUX,ANDROID").
- OfficeRailsProviderClass: Provider class for Office/Rails.
- WindowsShellProviderClass: Provider class for Windows shell.
- HardwareConfigurationJson: JSON configuration of the hardware including technical specifications and capabilities.

This class inherits from DataObjectBase and is able to initialize its properties from a DataRow by mapping columns to properties. The unique key of the object is the Guid.

The ToString() method returns the Label to provide a string representation.

### TypeScript class
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