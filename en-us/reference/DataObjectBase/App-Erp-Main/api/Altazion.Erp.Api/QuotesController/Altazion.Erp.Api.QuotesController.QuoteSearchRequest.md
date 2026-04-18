## QuoteSearchRequest

The QuoteSearchRequest class represents the search criteria used to filter quotes in the ERP system. It defines the following public properties:

- OnlyActive: nullable boolean to specify whether to limit the search to only active quotes.
- Origin: string indicating the origin or source of the quote.
- CustomerId: nullable integer representing the unique ID of the customer associated with the quote.
- CustomerName: string for the customer's name.
- PostalCode: string representing the postal code related to the customer or location.
- City: string indicating the city concerned.
- Email: string containing the email linked to the customer or quote.
- MinDate: nullable DateTimeOffset to filter quotes from a minimum date.
- MaxDate: nullable DateTimeOffset to filter quotes up to a maximum date.
- SearchText: string for free text or general search.
- PartnerGuid: nullable Guid identifying a specific partner linked to the quote.

### TypeScript class
```typescript
interface QuoteSearchRequest {
  OnlyActive?: boolean | null;
  Origin?: string | null;
  CustomerId?: number | null;
  CustomerName?: string | null;
  PostalCode?: string | null;
  City?: string | null;
  Email?: string | null;
  MinDate?: string | null; // ISO 8601 string format
  MaxDate?: string | null; // ISO 8601 string format
  SearchText?: string | null;
  PartnerGuid?: string | null; // GUID string format
}
```