## ProductPrice

The ProductPrice class represents a pricing condition for a product within a pricing grid. It allows defining both normal and promotional prices for a product according to various pricing grids.

Public properties:

- Id (Guid): Unique identifier of the pricing condition.
- ProductGuid (Guid): Unique identifier of the associated product.
- PricingGridGuid (Guid): Unique identifier of the pricing grid.
- VariantGuid (Guid?): Unique identifier of the product variant (optional).
- PriceWOTax (decimal): Unit price excluding tax.
- Price (decimal): Unit price including tax.
- DiscountedPriceWOTax (decimal?): Promotional price excluding tax (optional).
- DiscountedPrice (decimal?): Promotional price including tax (optional).
- DiscountStartDate (DateTime?): Promotion start date (optional).
- DiscountEndDate (DateTime?): Promotion end date (optional).

The class also includes validations to ensure identifiers are not empty, prices are not negative, and the promotion start date is not after the end date.

The ToString method returns a simplified description of the pricing condition in the format "Product [ProductGuid] - [Price]".

### TypeScript class
```typescript
interface ProductPrice {
  Id: string; // GUID
  ProductGuid: string; // GUID
  PricingGridGuid: string; // GUID
  VariantGuid?: string | null; // GUID optionnel
  PriceWOTax: number;
  Price: number;
  DiscountedPriceWOTax?: number | null;
  DiscountedPrice?: number | null;
  DiscountStartDate?: string | null; // ISO date string
  DiscountEndDate?: string | null; // ISO date string
}
```