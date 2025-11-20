## InvoiceWithLines

The InvoiceWithLines class inherits from the Invoice class and represents an invoice along with its detailed lines.

Public Properties:
- Lines: an array of InvoiceLine objects representing the detailed lines of the invoice.

### TypeScript class
```typescript
interface InvoiceWithLines extends Invoice {
  Lines?: InvoiceLine[];
}
```