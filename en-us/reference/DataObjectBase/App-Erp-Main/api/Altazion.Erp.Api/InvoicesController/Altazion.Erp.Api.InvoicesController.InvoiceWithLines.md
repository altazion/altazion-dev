## InvoiceWithLines

The InvoiceWithLines class extends the Invoice class and represents an invoice along with its detailed lines.

Public properties:
- Lines: an array of InvoiceLine objects representing the lines of the invoice. Each line corresponds to an invoiced item or product with associated details.

### TypeScript class
```typescript
interface InvoiceWithLines {
  Lines: InvoiceLine[];
  // Plus toutes les propriétés héritées de Invoice
}

interface InvoiceLine {
  // Propriétés définies dans InvoiceLine
}

```