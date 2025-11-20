## InvoiceLineWithRef

This class represents a detailed invoice line with additional references about the product.

Public properties:
- ProductSku: string, the SKU reference of the product linked to the invoice line.
- ProductTypeId: short integer, identifier of the product type or pricing.
- VatId: byte, identifier of the VAT rate applied to the product.

The class inherits from InvoiceLine and overrides the FromDataRow method to initialize these properties from a data row, adding the retrieval of product-specific information (type, SKU reference, VAT).

### TypeScript class
```typescript
interface InvoiceLineWithRef {
  ProductSku: string | null;
  ProductTypeId: number;
  VatId: number;
}
```