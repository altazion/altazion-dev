## PurchaseOrderLine

This class represents a purchase order line containing detailed information about the product, pricing, and quantities.

Public properties:
- Id: Unique identifier of the order line.
- OrderId: Unique identifier of the parent purchase order.
- LineNumber: Line number within the order.
- LineType: Type of the line (e.g., N = Normal, A = Accessory, P = Shipping, etc.).
- ProductGuid: Unique identifier of the product.
- VariantGuid: Unique identifier of the product variant (optional).
- UnitPriceWOTax: Unit price excluding taxes.
- UnitPrice: Unit price including taxes.
- UnitPriceWOTaxBeforeDiscount: Unit price excluding tax before discount.
- UnitPriceBeforeDiscount: Unit price including tax before discount.
- UnitDiscountWOTax: Unit discount excluding tax.
- UnitDiscount: Unit discount including tax.
- Quantity: Quantity ordered.
- QuantityInPreparation: Quantity currently being prepared.
- QuantityMissing: Quantity missing during preparation.
- QuantityReadyToShip: Quantity ready for shipping.
- QuantityShipped: Quantity shipped.
- QuantityInvoiced: Quantity already invoiced.
- QuantityToInvoice: Quantity to be invoiced.
- QuantityToRefund: Quantity to be refunded.
- QuantityRefunded: Quantity already refunded.
- QuantityCancelled: Quantity commercially cancelled.
- CustomerComment: Customer's comment on the line.
- RecipientInfo: Information about the recipient.
- IsGiftWrapped: Indicates if the line is prepared as a gift.
- PartnerGuid: Unique identifier of the associated partner (optional).
- PreparationMode: Preparation mode of the line.
- PreparationCode: Preparation code of the line.
- PreparationActorGuid: Unique identifier of the preparation actor (optional).

### TypeScript class
```typescript
interface PurchaseOrderLine {
  Id: string; // Unique identifier of the order line (GUID)
  OrderId: string; // Unique identifier of the parent purchase order (GUID)
  LineNumber: number; // Line number in the purchase order
  LineType: string; // Line type (e.g., 'N', 'A', 'P')
  ProductGuid: string; // Unique identifier of the product (GUID)
  VariantGuid?: string | null; // Optional unique identifier of the product variant (GUID)
  UnitPriceWOTax: number; // Unit price without tax
  UnitPrice: number; // Unit price with tax
  UnitPriceWOTaxBeforeDiscount: number; // Unit price without tax before discount
  UnitPriceBeforeDiscount: number; // Unit price with tax before discount
  UnitDiscountWOTax: number; // Unit discount without tax
  UnitDiscount: number; // Unit discount with tax
  Quantity: number; // Quantity ordered
  QuantityInPreparation: number; // Quantity currently being prepared
  QuantityMissing: number; // Quantity missing during preparation
  QuantityReadyToShip: number; // Quantity ready to ship
  QuantityShipped: number; // Quantity shipped
  QuantityInvoiced: number; // Quantity already invoiced
  QuantityToInvoice: number; // Quantity to invoice
  QuantityToRefund: number; // Quantity to refund
  QuantityRefunded: number; // Quantity already refunded
  QuantityCancelled: number; // Quantity commercially cancelled
  CustomerComment: string | null; // Comment from the customer
  RecipientInfo: string | null; // Information about the recipient
  IsGiftWrapped: boolean; // Indicates if the line is gift wrapped
  PartnerGuid?: string | null; // Optional unique identifier of the associated partner (GUID)
  PreparationMode: string | null; // Preparation mode
  PreparationCode: string | null; // Preparation code
  PreparationActorGuid?: string | null; // Optional unique identifier of the preparation actor (GUID)
}
```