## ProductAssociationType

The ProductAssociationType class represents a product association type, allowing the definition of semantic links such as accessories or complementary products.

Public properties:
- Id (Guid): Unique identifier (GUID) for the association type.
- Code (string): Unique code identifying the association type.
- IsAutomatic (bool): Indicates whether associations of this type are created automatically.
- Label (string): Descriptive label for the association type.
- MainProductTypeId (short?): Identifier of the main product type associated (nullable).

This class includes data validation to ensure that:
- Id is not empty.
- Code is required and does not exceed 10 characters.
- Label is required and does not exceed 500 characters.

### TypeScript class
```typescript
interface ProductAssociationType {
  /** Unique identifier (GUID) of the association type */
  Id: string; // GUID as string
  /** Unique code identifying the association type */
  Code: string;
  /** Indicates if associations of this type are created automatically */
  IsAutomatic: boolean;
  /** Descriptive label of the association type */
  Label: string;
  /** Identifier of the main product type associated - nullable */
  MainProductTypeId?: number;
}
```