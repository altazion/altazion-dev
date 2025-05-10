## ProductReference

The ProductReference class represents a product reference with a unique identifier. It inherits the basic information from ProductReferenceBase.

Public properties:
- ProductGuid: Unique identifier (Guid) of the product associated with this reference.
- Reference: Product reference (inherited).
- Kind: Type or category of the reference (inherited).
- IsMainReference: Indicates if this reference is the main product reference (bool, inherited).

### TypeScript class
```typescript
interface ProductReference {
  /** Unique identifier of the product associated with this reference */
  ProductGuid: string; // Guid as string
  /** Product reference */
  Reference: string | null;
  /** Type or category of the reference */
  Kind: string | null;
  /** Indicates if this reference is the main product reference */
  IsMainReference: boolean;
}
```