## PeripheralModel

Cette classe représente un modèle de périphérique lié au Point de Vente. Elle permet de décrire un modèle spécifique de périphérique tel qu'une imprimante, un lecteur code-barres, un terminal de paiement, un tiroir-caisse, ou un écran.

Propriétés publiques :

- Guid : Identifiant unique du modèle de périphérique.
- ManufacturerId : Identifiant du constructeur ou fabricant du périphérique.
- Label : Libellé du modèle de périphérique, affiché comme nom ou description.
- Type : Type du périphérique (par exemple : "Printer", "Scanner", "PaymentTerminal", "CashDrawer", "Display").
- CompatibleOperatingSystems : Liste des systèmes d'exploitation compatibles avec ce modèle, séparés par des virgules (exemple : "WINDOWS,LINUX,ANDROID").
- OfficeRailsProviderClass : Nom de la classe fournisseur utilisée pour Office/Rails.
- WindowsShellProviderClass : Nom de la classe fournisseur utilisée par le Shell Windows.
- HardwareConfigurationJson : Configuration matérielle sous forme JSON contenant les spécifications techniques ou paramètres de communication.

### D�claration TypeScript
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