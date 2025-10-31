## SalesChannel

The SalesChannel class represents a sales origin channel, such as a point of sale, a website, or a marketplace.

Public properties:
- Id: Unique identifier of the sales channel.
- Code: Short code for the sales channel, limited to 3 characters.
- Label: Descriptive name or label of the sales channel.
- SiteId: Optional identifier for the associated site or store.
- IsActive: Indicates whether the sales channel is active.
- InvoiceNumberingFormat: Optional invoice numbering format (max 50 characters).
- CreditNoteNumberingFormat: Optional credit note numbering format (max 50 characters).
- QuoteNumberingFormat: Optional quote numbering format (max 50 characters).
- OrderNumberingFormat: Optional order numbering format (max 50 characters).
- DefaultCustomerTypeId: Optional identifier of the default customer type.
- DefaultCurrencyGuid: Optional GUID of the default currency for the channel.

The class enforces validation rules including mandatory presence and maximum length for Code and Label, as well as maximum length for numbering formats.

### TypeScript class
```typescript
interface SalesChannel {
  Id: number;
  Code: string;
  Label: string;
  SiteId?: number | null;
  IsActive: boolean;
  InvoiceNumberingFormat?: string | null;
  CreditNoteNumberingFormat?: string | null;
  QuoteNumberingFormat?: string | null;
  OrderNumberingFormat?: string | null;
  DefaultCustomerTypeId?: number | null;
  DefaultCurrencyGuid?: string | null; // GUID as string
}
```