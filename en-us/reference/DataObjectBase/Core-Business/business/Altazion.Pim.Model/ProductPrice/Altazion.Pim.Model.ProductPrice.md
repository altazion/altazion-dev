## ProductPrice

The ProductPrice class represents a pricing condition for a product within a pricing grid. It allows defining the normal and promotional prices of a product according to different pricing grids.

Public properties:
- Id: Unique identifier of the pricing condition (Guid).
- ProductGuid: Unique identifier of the product (Guid).
- PricingGridGuid: Unique identifier of the pricing grid (Guid).
- VariantGuid: Optional unique identifier of the variant (Guid?).
- PriceWOTax: Unit price excluding tax (decimal).
- Price: Unit price including tax (decimal).
- DiscountedPriceWOTax: Optional promotional price excluding tax (decimal?).
- DiscountedPrice: Optional promotional price including tax (decimal?).
- DiscountStartDate: Optional promotion start date (DateTimeOffset?).
- DiscountEndDate: Optional promotion end date (DateTimeOffset?).

The class also includes methods to initialize its properties from a data row, validate the data (checking for non-empty IDs and non-negative prices), and return a string representation of the pricing condition.

### TypeScript class
```typescript
interface ProductPrice {
  Id: string; // GUID representing unique identifier of the pricing condition
  ProductGuid: string; // GUID representing unique identifier of the product
  PricingGridGuid: string; // GUID for pricing grid
  VariantGuid?: string | null; // Optional GUID for variant
  PriceWOTax: number; // price without tax
  Price: number; // price including tax
  DiscountedPriceWOTax?: number | null; // optional discounted price without tax
  DiscountedPrice?: number | null; // optional discounted price including tax
  DiscountStartDate?: string | null; // optional ISO date string for promo start
  DiscountEndDate?: string | null; // optional ISO date string for promo end
}
```