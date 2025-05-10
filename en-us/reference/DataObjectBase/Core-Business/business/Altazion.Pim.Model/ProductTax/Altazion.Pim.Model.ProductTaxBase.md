## ProductTaxBase

Class representing a tax associated with a product with its basic information.

Public properties:
- Guid: Unique identifier of the tax (type Guid).
- TaxeDefinitionGuid: Unique identifier of the tax definition (type Guid).
- Amount: Amount of the tax (type decimal).

This class inherits from DataObjectBase, it implements the GetKey() method which returns the unique key of the object, here the unique identifier of the tax (Guid). It also initializes its properties from a DataRow using the FromDataRow method.

### TypeScript class
```typescript
interface ProductTaxBase {
  Guid: string; // Unique identifier of the tax (UUID string)
  TaxeDefinitionGuid: string; // Unique identifier of the tax definition (UUID string)
  Amount: number; // Amount of the tax
}
```