## InvoiceWithPrintInfo

The InvoiceWithPrintInfo class inherits from the Invoice class and represents an invoice with additional print-related information.

Public properties:
- InvoiceDownloadUrl (string): URL to download the invoice as a PDF.
- PrintCount (int): the number of times the invoice has been printed.
- ClientGuid (Guid?) [JSON serialization ignored]: unique identifier of the client associated with the invoice.

Protected methods:
- FromDataRow(DataRow dr): initializes properties from a data row, particularly fetching PrintCount and ClientGuid.


### TypeScript class
```typescript
interface InvoiceWithPrintInfo {
  InvoiceDownloadUrl: string;
  PrintCount: number;
  ClientGuid?: string; // GUID as string, nullable
}
```