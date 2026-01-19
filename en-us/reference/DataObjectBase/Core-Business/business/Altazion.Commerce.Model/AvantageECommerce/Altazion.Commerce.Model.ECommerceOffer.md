## ECommerceOffer

Class representing an e-commerce offer with its associated properties:

- Guid: Unique identifier of the e-commerce offer.
- SiteId: Identifier of the site associated with the offer (nullable).
- Label: Internal label of the offer.
- LabelForCustomers: Public label intended for customers.
- Code: Code of the offer.
- IsAutomatic: Indicates if the offer is automatic.
- IsValid: Indicates if the offer is valid.
- IsActive: Indicates if the offer is active.
- StartDate: Start date of offer validity.
- EndDate: End date of offer validity.
- CampaignGuid: Unique identifier of the associated campaign (nullable).
- IsCumulative: Indicates if the offer can be combined with other offers.

The ToString method returns the label of the offer.

### TypeScript class
```typescript
interface ECommerceOffer {
  Guid: string; // Guid unique identifier of the offer
  SiteId?: number | null; // Nullable site identifier
  Label: string; // Internal label of the offer
  LabelForCustomers: string; // Public label for customers
  Code: string; // Code of the offer
  IsAutomatic: boolean; // Whether the offer is automatic
  IsValid: boolean; // Whether the offer is valid
  IsActive: boolean; // Whether the offer is active
  StartDate: string; // Start date of validity in ISO string format
  EndDate: string; // End date of validity in ISO string format
  CampaignGuid?: string | null; // Nullable campaign identifier
  IsCumulative: boolean; // Whether the offer is cumulative with others
}
```