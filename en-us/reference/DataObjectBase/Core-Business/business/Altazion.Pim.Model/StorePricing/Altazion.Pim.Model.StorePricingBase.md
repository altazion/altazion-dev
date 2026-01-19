## StorePricingBase

The StorePricingBase class represents product pricing in a store, including prices and validity periods.

Public properties:
- StartDate : DateTimeOffset - Start date of the price validity.
- EndDate : DateTimeOffset - End date of the price validity.
- PriceExcludingTax : decimal - Unit price excluding tax.
- PriceIncludingTax : decimal - Unit price including tax.
- ReferencePriceIncludingTax : decimal? - Reference price including tax (strikethrough price), optional.
- ReferencePriceExcludingTax : decimal? - Reference price excluding tax (strikethrough price), optional.
- IsPromotion : bool - Indicates if this price is a promotion.
- IsLocalOverride : bool - Indicates if this price is a local override (specific to the store).
- Timestamp : byte[] - Last modification timestamp for optimistic concurrency.
- StoreGuid : Guid? - Unique identifier of the store (optional, null means global price).

This class also contains protected methods to initialize properties from a DataRow and to validate pricing data (for example, checking EndDate is not earlier than StartDate).

### TypeScript class
```typescript
interface StorePricingBase {
  StartDate: string; // DateTimeOffset represented as ISO string
  EndDate: string;
  PriceExcludingTax: number;
  PriceIncludingTax: number;
  ReferencePriceIncludingTax?: number | null;
  ReferencePriceExcludingTax?: number | null;
  IsPromotion: boolean;
  IsLocalOverride: boolean;
  Timestamp?: Uint8Array | null;
  StoreGuid?: string | null; // GUID as string
}
```