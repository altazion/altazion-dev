## InvoiceLineWithRef

Class representing an invoice line extended with product reference details.

Public properties:
- ProductSku: string representing the product's SKU (stock-keeping unit).
- ProductTypeId: short integer identifying the product's type or price category.
- VatId: byte identifying the VAT (tax) applicable to the product.

This class inherits from InvoiceLine and overrides the FromDataRow method to populate these specific properties from a data row.

### TypeScript class
```typescript
interface InvoiceLineWithRef {
  ProductSku?: string | null;
  ProductTypeId: number;
  VatId: number;
}
```