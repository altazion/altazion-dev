## StoreStock

The StoreStock class represents the stock of an item in a specific store. It includes the following properties:

- Guid: Unique identifier of the stock.
- StoreGuid: Identifier of the store.
- ProductGuid: Identifier of the product.
- ProductVariantGuid: Optional identifier of the product variant.
- LastUpdateDate: Date of the last stock update.
- Quantity: Available quantity (actual stock quantity minus withdrawn quantities).
- UnitPrice: Unit price of the product in this store.
- IsAvailable: Indicates if the stock is available for sale.
- IsInStore: Indicates if the stock is physically present in the store.
- ReservedQuantity: Quantity reserved for ongoing orders.
- AvailabilityThreshold: Threshold quantity for availability.
- ActualQuantity: Actual quantity in stock (before withdrawal).
- WithdrawnQuantity: Withdrawn quantity (reserved, damaged, etc.).
- AvailabilityCode: Custom availability code (optional).

This class maps to database fields and performs basic validation such as no negative values for quantities or prices.

### TypeScript class
```typescript
interface StoreStock {
  Guid: string; // Unique identifier of the stock (GUID format)
  StoreGuid: string; // Store identifier (GUID format)
  ProductGuid: string; // Product identifier (GUID format)
  ProductVariantGuid?: string | null; // Optional product variant identifier (GUID format)
  LastUpdateDate: string; // DateTime string representing last update date
  Quantity?: number | null; // Available quantity
  UnitPrice?: number | null; // Unit price in store
  IsAvailable: boolean; // Stock availability flag
  IsInStore: boolean; // Physical presence flag
  ReservedQuantity?: number | null; // Reserved quantity
  AvailabilityThreshold?: number | null; // Minimum quantity threshold
  ActualQuantity?: number | null; // Actual stock quantity
  WithdrawnQuantity?: number | null; // Withdrawn quantity
  AvailabilityCode?: string | null; // Custom availability code
}
```