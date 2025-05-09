## CustomerType

The **CustomerType** class represents a customer type with various properties and metadata.

### Public Properties:
- `Id` (int): Unique identifier for the customer type.
- `Label` (string): Label of the customer type.
- `MetaType` (string): Metadata indicating the customer type (e.g., consumer, company).
- `IsActive` (bool): Indicates if the customer type is active.
- `CanUseInvoicableElements` (bool): Indicates if the customer type can use invoicable elements.
- `EUSpecifics` (EUSpecifications): European Union specific specifications associated with the customer type.

### Constants (metadata):
- `MetaUndefined = "N"`: Undefined customer type.
- `MetaTypeConsumer = "I"`: Consumer customer type.
- `MetaTypeEntreprise = "E"`: Company customer type.

### Nested class **EUSpecifications** :
- Represents the specific EU specifications for a customer type.
- Public property:
  - `SalesAccountId` (string): Identifier of the associated sales account.

This class is used to clearly define the different customer types in the system with their main attributes and allows adding EU-specific details.

### TypeScript class
```json
interface EUSpecifications {
  /** Identifier of the associated sales account */
  SalesAccountId?: string | null;
}

interface CustomerType {
  /** Unique identifier of the customer type */
  Id: number;

  /** Label of the customer type */
  Label: string;

  /** Metadata indicating the customer type (e.g., consumer, company) */
  MetaType: string;

  /** Indicates if the customer type is active */
  IsActive: boolean;

  /** Indicates if the customer type can use invoicable elements */
  CanUseInvoicableElements: boolean;

  /** European Union specific specifications associated with the customer type */
  EUSpecifics?: EUSpecifications;

  /** Constants for metadata */
  MetaUndefined?: string; // "N"
  MetaTypeConsumer?: string; // "I"
  MetaTypeEntreprise?: string; // "E"
}
```