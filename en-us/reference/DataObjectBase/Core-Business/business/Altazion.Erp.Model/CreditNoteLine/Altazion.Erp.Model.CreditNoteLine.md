## CreditNoteLine

The CreditNoteLine class represents a credit note line detailing a product and its associated amounts.

Public properties:
- Id: Guid, unique identifier of the credit note line.
- CreditNoteId: Guid, identifier of the credit note this line belongs to.
- InvoiceLineId: long?, identifier of the original invoice line (optional).
- ProductId: long?, identifier of the product (optional).
- ProductLabel: string, product label, mandatory.
- Quantity: decimal, quantity returned, must be greater than zero.
- UnitPriceWOTax: decimal, unit price excluding tax, mandatory.
- UnitPrice: decimal, unit price including tax, mandatory and must be greater or equal to unit price excluding tax.
- Comment: string, optional comment on the line.
- ProjectId: long?, identifier of the associated project (optional).
- StockMovementId: long?, identifier of the stock movement (optional).
- LineType: string, line type (e.g., 'P' for Product, 'C' for Comment), mandatory.

This class inherits from DataObjectBase and uses the SqlDataConcept attribute for SQL mapping with the "gestcom_lignesavoirs" table.

### TypeScript class
```typescript
interface CreditNoteLine {
  Id: string; // Unique identifier (GUID) of the credit note line
  CreditNoteId: string; // Identifier (GUID) of the credit note this line belongs to
  InvoiceLineId?: number | null; // Optional identifier of the original invoice line
  ProductId?: number | null; // Optional product identifier
  ProductLabel: string; // Product label
  Quantity: number; // Quantity, must be > 0
  UnitPriceWOTax: number; // Unit price without tax
  UnitPrice: number; // Unit price including tax, >= UnitPriceWOTax
  Comment?: string | null; // Optional comment
  ProjectId?: number | null; // Optional project identifier
  StockMovementId?: number | null; // Optional stock movement identifier
  LineType: string; // Line type (e.g., 'P' for Product, 'C' for Comment)
}
```