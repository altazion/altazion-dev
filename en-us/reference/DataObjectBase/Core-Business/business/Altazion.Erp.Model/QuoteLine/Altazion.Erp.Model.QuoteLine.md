## QuoteLine

The QuoteLine class represents a quote line item in the ERP system.

Public properties:
- Id: Unique identifier of the quote line (decimal type).
- QuoteId: Identifier of the quote to which this line belongs (decimal type).
- ProductId: Identifier of the product linked to this line (long type).
- Label: Label or name of the product/line (string).
- Description: Optional additional description of the line (string).
- Quantity: Quantity of the product ordered in this line (decimal).
- Price: Unit price including tax (decimal).
- PriceWOTax: Unit price excluding tax (decimal).
- Discount: Discount applied including tax (nullable decimal).
- DiscountWOTax: Discount applied excluding tax (nullable decimal).
- LineType: Type of the line (string), default "N" indicating a product line (constant LineTypeProduct).
- InvoiceLineId: Optional identifier of the invoice line linked to this quote line (nullable decimal).

Defined constant:
- LineTypeProduct: Constant value "N" indicating the line is a product type.

The class inherits from DataObjectBase and provides an overridden GetKey method returning the Id, as well as a protected FromDataRow method to initialize the object from a DataRow.


### TypeScript class
```typescript
export interface QuoteLine {
  Id: number; // Unique identifier of the quote line
  QuoteId: number; // Identifier of the quote
  ProductId: number; // Identifier of the product
  Label: string; // Label of the product or line
  Description?: string | null; // Optional description
  Quantity: number; // Quantity ordered
  Price: number; // Unit price including tax
  PriceWOTax: number; // Unit price excluding tax
  Discount?: number | null; // Discount including tax (optional)
  DiscountWOTax?: number | null; // Discount excluding tax (optional)
  LineType: string; // Type of line, e.g. "N" for product
  InvoiceLineId?: number | null; // Optional linked invoice line ID
}

export const LineTypeProduct = "N";

```