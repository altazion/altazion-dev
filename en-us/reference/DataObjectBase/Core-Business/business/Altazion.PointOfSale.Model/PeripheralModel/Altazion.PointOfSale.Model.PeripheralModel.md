## PeripheralModel

Represents a peripheral device model used in point of sale systems, such as a printer, barcode scanner, payment terminal, cash drawer, or display.

Public properties:
- Guid: Unique identifier of the peripheral device model.
- ManufacturerId: Identifier of the device's manufacturer.
- Label: Name of the peripheral model, e.g., "Oxhoo TP85 Printer".
- Type: Type of peripheral device, e.g., "Printer", "Scanner", "PaymentTerminal", "CashDrawer", "Display".
- CompatibleOperatingSystems: List of compatible operating systems, separated by commas (e.g., "WINDOWS,LINUX,ANDROID").
- OfficeRailsProviderClass: Provider class for Office/Rails.
- WindowsShellProviderClass: Provider class for the Windows Shell.
- HardwareConfigurationJson: JSON configuration describing the hardware specifications and communication parameters.

### TypeScript class
```typescript
interface PeripheralModel {
  Guid: string; // Unique identifier of the peripheral device model (GUID)
  ManufacturerId: string; // Identifier of the manufacturer (GUID)
  Label: string | null; // Name/label of the peripheral model
  Type: string | null; // Type of peripheral device
  CompatibleOperatingSystems: string | null; // Compatible operating systems, comma-separated
  OfficeRailsProviderClass: string | null; // Provider class for Office/Rails
  WindowsShellProviderClass: string | null; // Provider class for Windows Shell
  HardwareConfigurationJson: string | null; // JSON configuration of hardware
}
```