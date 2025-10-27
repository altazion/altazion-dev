## PeripheralModel

Représente un modèle de périphérique utilisé dans le point de vente, par exemple une imprimante, un lecteur code-barres, un terminal de paiement, un tiroir-caisse ou un affichage.

Propriétés publiques :
- Guid : Identifiant unique du modèle de périphérique.
- ManufacturerId : Identifiant du constructeur/fabricant du périphérique.
- Label : Libellé du modèle de périphérique, par exemple "Imprimante Oxhoo TP85".
- Type : Type de périphérique, par exemple "Printer", "Scanner", "PaymentTerminal", "CashDrawer", "Display".
- CompatibleOperatingSystems : Liste des systèmes d'exploitation compatibles, séparés par des virgules (exemple : "WINDOWS,LINUX,ANDROID").
- OfficeRailsProviderClass : Classe du fournisseur pour Office/Rails.
- WindowsShellProviderClass : Classe du fournisseur pour le Shell Windows.
- HardwareConfigurationJson : Configuration JSON du matériel décrivant les spécifications techniques et les paramètres de communication.

### D�claration TypeScript
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