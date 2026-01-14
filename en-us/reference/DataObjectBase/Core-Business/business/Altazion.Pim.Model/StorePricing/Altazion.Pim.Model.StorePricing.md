## StorePricing

The StorePricing class represents product pricing in a store with a unique identifier.

Public properties:

- Guid: Unique identifier of the pricing.
- ProductGuid: Unique identifier of the product.
- StoreGuid: Unique identifier of the store (optional, null means global price for all stores).
- StartDate: Start date of the price validity period.
- EndDate: End date of the price validity period.
- PriceExcludingTax: Unit price excluding taxes.
- PriceIncludingTax: Unit price including all taxes.
- ReferencePriceIncludingTax: Reference price including taxes (crossed-out price), optional.
- ReferencePriceExcludingTax: Reference price excluding taxes, optional.
- IsPromotion: Indicates whether this price is a promotional price.
- IsLocalOverride: Indicates whether this price is a local override specific to the store.
- Timestamp: Timestamp of last modification for optimistic concurrency control.

The class inherits from StorePricingBase, which itself inherits from DataObjectBase. Validation ensures the validity period is correct (EndDate >= StartDate). The unique identifier of the pricing is used as the object's key.

Data can be initialized from a DataRow to facilitate loading from a database.


### TypeScript class
```typescript
interface StorePricing {
  Guid: string; // Unique identifier of the pricing (UUID string)
  ProductGuid: string; // Unique identifier of the product (UUID string)
  StoreGuid?: string | null; // Unique identifier of the store (UUID string), optional, null means global price
  StartDate: string; // Start date of the price validity period in ISO 8601 format
  EndDate: string; // End date of the price validity period in ISO 8601 format
  PriceExcludingTax: number; // Unit price excluding tax
  PriceIncludingTax: number; // Unit price including tax
  ReferencePriceIncludingTax?: number | null; // Reference price including tax (optional)
  ReferencePriceExcludingTax?: number | null; // Reference price excluding tax (optional)
  IsPromotion: boolean; // Whether price is promotional
  IsLocalOverride: boolean; // Whether price is a local override
  Timestamp?: Uint8Array | null; // Timestamp of last modification
}
```