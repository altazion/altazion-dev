## InvoiceWithPrintInfo

The InvoiceWithPrintInfo class extends the Invoice class to include additional information related to the printing and downloading of customer invoices within the ERP system.

Public properties:
- InvoiceDownloadUrl: a string representing the URL to download the invoice as a PDF.
- ClientGuid: a unique identifier (GUID) of the client associated with the invoice. This property is decorated with JsonIgnoreCondition.Always, meaning it is ignored during JSON serialization.

Functionality:
- The protected FromDataRow method overrides the base method to map a DataRow's data to the class properties. It additionally maps the print count (PrintCount) and the client's GUID (ClientGuid).


### TypeScript class
```typescript
interface InvoiceWithPrintInfo {
  InvoiceDownloadUrl: string | null; // URL to download the invoice PDF
  ClientGuid?: string; // Nullable GUID (UUID) of the client, ignored in JSON serialization
  // Properties inherited from Invoice are not redefined here
}
```