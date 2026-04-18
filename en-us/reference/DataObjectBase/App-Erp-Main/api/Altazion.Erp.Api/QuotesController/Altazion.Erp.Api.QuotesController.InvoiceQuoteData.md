## InvoiceQuoteData

Class representing the data used during the invoicing of a quote.

Public properties:
- InvoiceAll (bool): Indicates whether all quote lines should be invoiced.
- LinesToInvoice (decimal[]): Array of identifiers for specific lines of the quote to invoice.
- ValidatedOptions (decimal[]): Array of validated options that may be related to invoicing.
- CreateNewClient (bool): Indicates if a new client should be created when transforming into an invoice.
- ReplacementClientPK (int?): Identifier of the replacement client, if any.
- CustomerType (short): The type of customer (short numeric).
- CustomerInvoiceReference (string): Customer reference associated with the invoice, can be null.

### TypeScript class
```typescript
interface InvoiceQuoteData {
  InvoiceAll: boolean;
  LinesToInvoice: number[];
  ValidatedOptions: number[];
  CreateNewClient: boolean;
  ReplacementClientPK?: number | null;
  CustomerType: number;
  CustomerInvoiceReference?: string | null;
}
```