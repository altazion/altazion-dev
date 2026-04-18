## InvoiceSearchRequest

This class represents a search request for invoices within Altazion's ERP system.

Public properties:
- OnlyActive: bool? - Indicates if the search should be limited to active invoices only.
- Origin: string - Allows filtering by origin or point of sale.
- CustomerId: int? - Numeric identifier of the customer for whom to search invoices.
- CustomerName: string - Customer's name used as a search criterion.
- PostalCode: string - Postal code associated with the customer to refine the search.
- City: string - City associated with the customer.
- Email: string - Customer's email for filtering invoices.
- MinDate: DateTimeOffset? - Minimum date to filter invoices (start date).
- MaxDate: DateTimeOffset? - Maximum date to filter invoices (end date).
- SearchText: string - Free text to use for searching within the invoices.
- PartnerGuid: Guid? - Unique identifier of the partner related to the invoices.

This class is used to pass multiple possible criteria for an advanced invoice search in the API.

### TypeScript class
```typescript
interface InvoiceSearchRequest {
  OnlyActive?: boolean | null;
  Origin?: string | null;
  CustomerId?: number | null;
  CustomerName?: string | null;
  PostalCode?: string | null;
  City?: string | null;
  Email?: string | null;
  MinDate?: string | null; // ISO 8601 string for DateTimeOffset
  MaxDate?: string | null; // ISO 8601 string for DateTimeOffset
  SearchText?: string | null;
  PartnerGuid?: string | null; // GUID in string format
}
```