## PurchaseOrderLine

The class PurchaseOrderLine represents a purchase order line with detailed information about the ordered item, unit prices, quantities in various states, and preparation and shipping information.

Public properties:

- Id: Unique identifier for the order line (GUID).
- OrderId: Unique identifier of the parent purchase order (GUID).
- LineNumber: Line number within the order (decimal).
- LineType: Type of line (e.g., N = Normal, A = Accessory, P = Shipping, etc.) (string).
- ProductGuid: Unique identifier of the product (GUID).
- VariantGuid: Unique identifier of the product variant (availability) (nullable GUID).
- UnitPriceWOTax: Unit price excluding tax (decimal).
- UnitPrice: Unit price including tax (decimal).
- UnitPriceWOTaxBeforeDiscount: Unit price excluding tax before discount (decimal).
- UnitPriceBeforeDiscount: Unit price including tax before discount (decimal).
- UnitDiscountWOTax: Unit discount excluding tax (decimal).
- UnitDiscount: Unit discount including tax (decimal).
- Quantity: Quantity ordered (decimal).
- QuantityInPreparation: Quantity currently being prepared (decimal).
- QuantityMissing: Quantity missing during preparation (decimal).
- QuantityReadyToShip: Quantity ready for shipping (decimal).
- QuantityShipped: Quantity shipped (decimal).
- QuantityInvoiced: Quantity already invoiced (decimal).
- QuantityToInvoice: Quantity to be invoiced (decimal).
- QuantityToRefund: Quantity to be refunded (decimal).
- QuantityRefunded: Quantity already refunded (decimal).
- QuantityCancelled: Quantity commercially cancelled (decimal).
- CustomerComment: Customer comment on the line (string).
- RecipientInfo: Information about the recipient (string).
- IsGiftWrapped: Indicates if the line is gift-wrapped (boolean).
- PartnerGuid: Unique identifier of the associated partner (nullable GUID).
- PreparationMode: Preparation mode for the line (string).
- PreparationCode: Preparation code for the line (string).
- PreparationActorGuid: Unique identifier of the preparation actor (nullable GUID).

### TypeScript class
```typescript
export interface PurchaseOrderLine {
    Id: string; // Unique identifier of the order line (GUID)
    OrderId: string; // Unique identifier of the parent order (GUID)
    LineNumber: number; // Line number in the order
    LineType: string; // Type of line (e.g., N=Normal, A=Accessory, P=Shipping)
    ProductGuid: string; // Unique identifier of the product
    VariantGuid?: string | null; // Unique identifier of the product variant (nullable)
    UnitPriceWOTax: number; // Unit price excluding tax
    UnitPrice: number; // Unit price including tax
    UnitPriceWOTaxBeforeDiscount: number; // Unit price excluding tax before discount
    UnitPriceBeforeDiscount: number; // Unit price including tax before discount
    UnitDiscountWOTax: number; // Unit discount excluding tax
    UnitDiscount: number; // Unit discount including tax
    Quantity: number; // Quantity ordered
    QuantityInPreparation: number; // Quantity currently being prepared
    QuantityMissing: number; // Quantity missing during preparation
    QuantityReadyToShip: number; // Quantity ready to ship
    QuantityShipped: number; // Quantity shipped
    QuantityInvoiced: number; // Quantity invoiced
    QuantityToInvoice: number; // Quantity to invoice
    QuantityToRefund: number; // Quantity to refund
    QuantityRefunded: number; // Quantity refunded
    QuantityCancelled: number; // Quantity commercially cancelled
    CustomerComment?: string | null; // Customer comment on the line
    RecipientInfo?: string | null; // Recipient information
    IsGiftWrapped: boolean; // Is gift wrapped
    PartnerGuid?: string | null; // Unique identifier of the partner
    PreparationMode?: string | null; // Preparation mode
    PreparationCode?: string | null; // Preparation code
    PreparationActorGuid?: string | null; // Unique identifier of the preparation actor
}
```