## AssociatedProduct

The `AssociatedProduct` class represents information describing an associated product related to a main product within a catalog.

Public properties:
- `MainProductGuid`: unique identifier (GUID) of the main product.
- `AssociatedProductGuid`: unique identifier (GUID) of the associated (secondary) product.
- `AssociationKind`: string indicating the type of association between products (e.g., complementary, accessory), limited to 10 characters.
- `QuantityByMainUnit`: quantity of the secondary product per unit of the main product; must be strictly positive.
- `Reason`: business rationale for the association, explanatory text, limited to 250 characters.
- `Importance`: integer indicating the relative importance of the association.

The class includes validation ensuring required identifiers are set, string length constraints are respected, and quantity is positive. The primary key is a composite of `MainProductGuid`, `AssociatedProductGuid`, and `AssociationKind`.

This class is mapped to the SQL table `catalog_articles_associes` in the schema `Catalog`.

### TypeScript class
```typescript
interface AssociatedProduct {
  MainProductGuid: string; // GUID of the main product
  AssociatedProductGuid: string; // GUID of the associated product
  AssociationKind: string | null; // Type of association (max 10 chars)
  QuantityByMainUnit: number; // Quantity of associated product per unit of main product
  Reason: string | null; // Business reason for the association (max 250 chars)
  Importance: number; // Relative importance of the association
}
```