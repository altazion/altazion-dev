## InvoiceSearchRequest

Class representing a customer invoices search request.

Public properties:
- OnlyActive (bool?) : Indicates if the search should be limited to only active invoices.
- Origin (string) : Origin of the invoices to filter on.
- CustomerId (int?) : Customer identifier to filter the invoices.
- CustomerName (string) : Customer name for filtering.
- PostalCode (string) : Postal code for location filtering.
- City (string) : City for geographical filtering.
- Email (string) : Email address associated with invoices or customers.
- MinDate (DateTimeOffset?) : Minimal invoice date filter.
- MaxDate (DateTimeOffset?) : Maximal invoice date filter.
- SearchText (string) : Free text search in invoices.
- PartnerGuid (Guid?) : Unique identifier of a partner for specific filtering.

### TypeScript class
```typescript
interface InvoiceSearchRequest {
  OnlyActive?: boolean;
  Origin?: string;
  CustomerId?: number;
  CustomerName?: string;
  PostalCode?: string;
  City?: string;
  Email?: string;
  MinDate?: string; // ISO 8601 date string
  MaxDate?: string; // ISO 8601 date string
  SearchText?: string;
  PartnerGuid?: string; // GUID string
}
```