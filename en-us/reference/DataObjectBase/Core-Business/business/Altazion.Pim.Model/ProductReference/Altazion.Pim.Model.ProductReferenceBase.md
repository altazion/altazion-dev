## ProductReferenceBase

Class representing a product reference with its basic information.

Public properties:
- Reference: string representing the product reference.
- Kind: string indicating the type or category of the reference.
- IsMainReference: boolean indicating whether this reference is the main reference of the product.

This class inherits from DataObjectBase. It provides a GetKey method returning a unique key composed of the kind and the reference, and a FromDataRow method which initializes properties from a DataRow.

### TypeScript class
```typescript
interface ProductReferenceBase {
  Reference: string | null;
  Kind: string | null;
  IsMainReference: boolean;
}
```