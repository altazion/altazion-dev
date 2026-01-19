## PartnerProduct

This class represents the association between a product and a commercial partner (reseller, marketplace, store). It includes the following properties:

- ArticleGuid: unique identifier of the product.
- PartnerGuid: unique identifier of the partner.
- IsAvailable: indicates if the product is available at this partner.
- Url: URL of the product page at the partner (max 500 characters).
- PartnerReference: product reference used by the partner (max 50 characters).
- UnitPriceExcludingTax: unit price excluding tax.
- UnitPriceIncludingTax: unit price including tax.
- PromoUnitPriceExcludingTax: promotional unit price excluding tax (optional).
- PromoUnitPriceIncludingTax: promotional unit price including tax (optional).
- PromoStartDate: start date of the promotion (optional).
- PromoEndDate: end date of the promotion (optional).
- AvailableQuantity: quantity available at the partner (optional).
- ReservedQuantity: quantity reserved at the partner (optional).
- SupplyQuantity: quantity in supply at the partner (optional).
- IsArchived: indicates if this association is archived.
- MaxDeliveryDelay: maximum delivery delay in days (optional).

Methods allow checking if a promotion is currently active, obtaining the current price (including or excluding tax), and calculating the net available quantity at the partner.

### TypeScript class
```typescript
interface PartnerProduct {
  ArticleGuid: string; // GUID of the product
  PartnerGuid: string; // GUID of the partner
  IsAvailable: boolean;
  Url: string | null;
  PartnerReference: string | null;
  UnitPriceExcludingTax: number;
  UnitPriceIncludingTax: number;
  PromoUnitPriceExcludingTax?: number | null;
  PromoUnitPriceIncludingTax?: number | null;
  PromoStartDate?: string | null; // ISO string date
  PromoEndDate?: string | null; // ISO string date
  AvailableQuantity?: number | null;
  ReservedQuantity?: number | null;
  SupplyQuantity?: number | null;
  IsArchived: boolean;
  MaxDeliveryDelay?: number | null;
}
```