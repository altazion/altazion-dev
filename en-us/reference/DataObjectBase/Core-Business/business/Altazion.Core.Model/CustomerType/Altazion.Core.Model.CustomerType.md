## CustomerType

The CustomerType class represents a customer type with its specifications and metadata. It includes the following properties:

- Id (int): Unique identifier of the customer type.
- Label (string): Label of the customer type.
- MetaType (string): Metadata indicating the customer type (for example, consumer or company).
- CanUseInvoicableElements (bool): Indicates whether the customer type can use invoicable elements.
- IsActive (bool): Indicates whether the customer type is active.
- EUSpecifics (CustomerType.EUSpecifications): European Union-specific specifications for the customer type.

The class also defines the following constants for MetaType:

- MetaUndefined = "N": Undefined customer type.
- MetaTypeConsumer = "I": Consumer customer type.
- MetaTypeEntreprise = "E": Company customer type.

The nested EUSpecifications class represents EU-specific details and contains:

- SalesAccountId (string): Identifier of the associated sales account.

This class manages customer types with data validations and supports specific metadata.

### TypeScript class
```typescript
interface CustomerType {
  Id: number;
  Label: string;
  MetaType: string;
  CanUseInvoicableElements: boolean;
  IsActive: boolean;
  EUSpecifics?: CustomerTypeEUSpecifications;
}

interface CustomerTypeEUSpecifications {
  SalesAccountId?: string;
}

// Constants representing MetaType values
const MetaUndefined = "N";
const MetaTypeConsumer = "I";
const MetaTypeEntreprise = "E";
```