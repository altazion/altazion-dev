## PartnerProduct

The PartnerProduct class represents the association of a product with a commercial partner (reseller, marketplace, store).

Public properties:
- ArticleGuid: Unique identifier of the product.
- PartnerGuid: Unique identifier of the partner.
- IsAvailable: Indicates if the product is available from this partner.
- Url: URL of the product page at the partner (max 500 characters).
- PartnerReference: Product reference used by the partner (max 50 characters).
- UnitPriceExcludingTax: Unit price excluding tax.
- UnitPriceIncludingTax: Unit price including all taxes.
- PromoUnitPriceExcludingTax: Promotional unit price excluding tax (optional).
- PromoUnitPriceIncludingTax: Promotional unit price including all taxes (optional).
- PromoStartDate: Promotion start date (optional).
- PromoEndDate: Promotion end date (optional).
- AvailableQuantity: Quantity available at the partner (optional).
- ReservedQuantity: Quantity reserved at the partner (optional).
- SupplyQuantity: Quantity currently being supplied to the partner (optional).
- IsArchived: Indicates if this association is archived.
- MaxDeliveryDelay: Maximum delivery delay in days (optional).

The class also provides methods to check active promotions, get the current price (including or excluding tax), and calculate the net available quantity.

### TypeScript class
```typescript
interface PartnerProduct {
  ArticleGuid: string; // GUID of the article
  PartnerGuid: string; // GUID of the partner
  IsAvailable: boolean;
  Url: string | null;
  PartnerReference: string | null;
  UnitPriceExcludingTax: number;
  UnitPriceIncludingTax: number;
  PromoUnitPriceExcludingTax?: number | null;
  PromoUnitPriceIncludingTax?: number | null;
  PromoStartDate?: Date | null;
  PromoEndDate?: Date | null;
  AvailableQuantity?: number | null;
  ReservedQuantity?: number | null;
  SupplyQuantity?: number | null;
  IsArchived: boolean;
  MaxDeliveryDelay?: number | null;
}
```