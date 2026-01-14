## StoreStock

The StoreStock class represents the stock of an item in a specific store.

Public properties:
- Guid: Unique identifier of the stock.
- StoreGuid: Identifier of the store where the stock is located.
- ProductGuid: Identifier of the stocked product.
- ProductVariantGuid: Optional identifier of the product variant.
- LastUpdateDate: Date of the last stock update.
- Quantity: Available quantity (actual quantity minus withdrawn quantity).
- UnitPrice: Unit price of the product in this store.
- IsAvailable: Indicates if the stock is available for sale.
- IsInStore: Indicates if the stock is physically present in the store.
- ReservedQuantity: Quantity reserved for ongoing orders.
- AvailabilityThreshold: Minimum quantity threshold before the stock is considered unavailable.
- ActualQuantity: Actual stock quantity before withdrawals.
- WithdrawnQuantity: Quantity withdrawn from stock (reserved, damaged items, etc.).
- AvailabilityCode: Optional custom availability code.

### TypeScript class
```typescript
interface StoreStock {
  Guid: string; // Unique identifier of the stock
  StoreGuid: string; // Identifier of the store
  ProductGuid: string; // Identifier of the product
  ProductVariantGuid?: string | null; // Optional product variant identifier
  LastUpdateDate: string; // DateTimeOffset as ISO string
  Quantity?: number | null; // Available quantity
  UnitPrice?: number | null; // Unit price
  IsAvailable: boolean; // Availability status
  IsInStore: boolean; // Physical presence in store
  ReservedQuantity?: number | null; // Reserved quantity
  AvailabilityThreshold?: number | null; // Minimum availability threshold
  ActualQuantity?: number | null; // Actual stock quantity
  WithdrawnQuantity?: number | null; // Withdrawn quantity
  AvailabilityCode?: string | null; // Custom availability code
}
```