## PeripheralModel

This class represents a peripheral model related to the Point of Sale system. It describes a specific peripheral model such as a printer, barcode scanner, payment terminal, cash drawer, or display.

Public properties:

- Guid: Unique identifier of the peripheral model.
- ManufacturerId: Identifier of the peripheral's manufacturer.
- Label: The display name or label of the peripheral model.
- Type: Peripheral type (e.g., "Printer", "Scanner", "PaymentTerminal", "CashDrawer", "Display").
- CompatibleOperatingSystems: List of compatible operating systems, separated by commas (e.g., "WINDOWS,LINUX,ANDROID").
- OfficeRailsProviderClass: Provider class name for Office/Rails integration.
- WindowsShellProviderClass: Provider class name for Windows Shell integration.
- HardwareConfigurationJson: JSON configuration of the hardware including technical specs and communication parameters.

### TypeScript class
```typescript
interface PeripheralModel {
  Guid: string; // Unique identifier of the peripheral model
  ManufacturerId: string; // Manufacturer's unique identifier
  Label: string | null; // Label or name of the peripheral model
  Type: string | null; // Type of peripheral (e.g., Printer, Scanner)
  CompatibleOperatingSystems: string | null; // Comma-separated list of OS compatibility
  OfficeRailsProviderClass: string | null; // Provider class for Office/Rails
  WindowsShellProviderClass: string | null; // Provider class for Windows Shell
  HardwareConfigurationJson: string | null; // JSON string of hardware configuration
}
```