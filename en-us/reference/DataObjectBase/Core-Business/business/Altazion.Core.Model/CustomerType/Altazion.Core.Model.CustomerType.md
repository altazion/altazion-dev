## CustomerType

The CustomerType class represents a customer type with its specifications and metadata. It includes the following properties:
- Id (int): Unique identifier of the customer type.
- Label (string): The label of the customer type.
- MetaType (string): Metadata indicating the type of customer, e.g., consumer or business.
- CanUseInvoicableElements (bool): Indicates if the customer type can use invoicable elements.
- IsActive (bool): Indicates if the customer type is active.
- EUSpecifics (EUSpecifications): EU-specific specifications for the customer type, encapsulated in a nested class.

The class also defines three constants representing metadata for customer types:
- MetaUndefined: value "N", undefined customer type.
- MetaTypeConsumer: value "I", consumer type.
- MetaTypeEntreprise: value "E", business type.

The nested EUSpecifications class includes the property:
- SalesAccountId (string): Identifier of the associated sales account, EU-specific.

### TypeScript class
```typescript
interface CustomerType {
  Id: number; // Unique identifier of the customer type
  Label: string; // Label of the customer type
  MetaType: string; // Metadata indicating the customer type
  CanUseInvoicableElements: boolean; // Indicates if invoicable elements can be used
  IsActive: boolean; // Indicates if the customer type is active
  EUSpecifics?: CustomerType.EUSpecifications; // EU-specific specifications
}

namespace CustomerType {
  export interface EUSpecifications {
    SalesAccountId?: string; // Associated sales account identifier
  }

  export const MetaUndefined = "N";
  export const MetaTypeConsumer = "I";
  export const MetaTypeEntreprise = "E";
}
```