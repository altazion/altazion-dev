## StorePricingBase

The StorePricingBase class represents a product pricing in a store, including prices and validity periods.

Public properties:
- StartDate : DateTime - Start date of the price validity.
- EndDate : DateTime - End date of the price validity.
- PriceExcludingTax : decimal - Unit price excluding tax.
- PriceIncludingTax : decimal - Unit price including tax.
- ReferencePriceIncludingTax : decimal? - Reference price including tax (strikethrough price), optional.
- ReferencePriceExcludingTax : decimal? - Reference price excluding tax (strikethrough price), optional.
- IsPromotion : bool - Indicates if the price is promotional.
- IsLocalOverride : bool - Indicates if the price is a local override (specific to the store).
- Timestamp : byte[] - Timestamp for last modification (optimistic concurrency).
- StoreGuid : Guid? - Unique identifier of the store (optional, null for global price).


### TypeScript class
```typescript
interface StorePricingBase {
  StartDate: Date;
  EndDate: Date;
  PriceExcludingTax: number;
  PriceIncludingTax: number;
  ReferencePriceIncludingTax?: number | null;
  ReferencePriceExcludingTax?: number | null;
  IsPromotion: boolean;
  IsLocalOverride: boolean;
  Timestamp: Uint8Array | null;
  StoreGuid?: string | null;
}
```