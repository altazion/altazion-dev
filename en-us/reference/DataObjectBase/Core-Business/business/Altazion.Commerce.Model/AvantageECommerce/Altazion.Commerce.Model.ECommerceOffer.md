## ECommerceOffer

The ECommerceOffer class represents an e-commerce offer with its associated information.

Public properties:

- Guid: Unique identifier of the e-commerce offer.
- SiteId: Identifier of the site associated with the offer (nullable).
- Label: Label of the e-commerce offer.
- LabelForCustomers: Public label of the offer, intended for customers.
- Code: Code of the e-commerce offer.
- IsAutomatic: Indicates if the offer is automatic.
- IsValid: Indicates if the offer is valid.
- IsActive: Indicates if the offer is active.
- StartDate: Start date of the offer's validity.
- EndDate: End date of the offer's validity.
- CampaignGuid: Unique identifier of the campaign associated with the offer (nullable).
- IsCumulative: Indicates if the offer can be combined with other offers.

### TypeScript class
```typescript
interface ECommerceOffer {
  Guid: string; // Unique identifier of the e-commerce offer (UUID string)
  SiteId?: number | null; // Identifier of the site associated with the offer
  Label: string; // Label of the e-commerce offer
  LabelForCustomers: string; // Public label of the offer
  Code: string; // Code of the e-commerce offer
  IsAutomatic: boolean; // Whether the offer is automatic
  IsValid: boolean; // Whether the offer is valid
  IsActive: boolean; // Whether the offer is active
  StartDate: string; // Start date of the offer's validity (ISO 8601 string)
  EndDate: string; // End date of the offer's validity (ISO 8601 string)
  CampaignGuid?: string | null; // Identifier of the campaign associated with the offer (UUID string)
  IsCumulative: boolean; // Whether the offer is cumulative with others
}
```