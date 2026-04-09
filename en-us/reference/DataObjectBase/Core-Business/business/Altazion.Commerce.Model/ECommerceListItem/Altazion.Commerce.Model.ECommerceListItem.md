## ECommerceListItem

The ECommerceListItem class represents an item line in an e-commerce list, corresponding to a product added to the list with a desired quantity and a realized quantity.

Public properties:
- Guid: Unique identifier of the list line.
- ListGuid: Unique identifier of the list this line belongs to.
- ProductGuid: Unique identifier of the product associated with this line.
- Quantity: Desired quantity for this product (decimal).
- QuantityRealized: Quantity already fulfilled (purchased or gifted) for this product (decimal).
- IsArchived: Indicates whether the line is archived (boolean).

This class performs data validation to ensure identifiers are not empty, quantities are not negative, and realized quantity does not exceed desired quantity.

### TypeScript class
```typescript
interface ECommerceListItem {
  Guid: string; // Unique identifier of the list line
  ListGuid: string; // Unique identifier of the list
  ProductGuid: string; // Unique identifier of the product
  Quantity: number; // Desired quantity for the product
  QuantityRealized: number; // Realized quantity for the product
  IsArchived: boolean; // Whether the line is archived
}
```