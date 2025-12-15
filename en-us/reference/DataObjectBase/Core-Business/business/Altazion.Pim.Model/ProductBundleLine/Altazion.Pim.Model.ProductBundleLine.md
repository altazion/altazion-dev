## ProductBundleLine

The ProductBundleLine class represents a line item of a promotional bundle, i.e., a product component of the bundle. It includes the following properties:

- Guid: Unique identifier of the line.
- BundleGuid: Identifier of the parent bundle, foreign key to ProductBundle.
- ProductGuid: Identifier of the product that makes up the bundle.
- Quantity: Quantity of the product within the bundle, must be greater than zero.

Validations ensure that all identifiers are set (not Guid.Empty) and that the quantity is positive.

### TypeScript class
```typescript
interface ProductBundleLine {
  Guid: string; // Unique identifier of the line (UUID string)
  BundleGuid: string; // Identifier of the parent bundle (UUID string)
  ProductGuid: string; // Identifier of the product composing the bundle (UUID string)
  Quantity: number; // Quantity of the product in the bundle, must be > 0
}
```