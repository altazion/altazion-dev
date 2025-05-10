## ECommerceOffer

Class representing an e-commerce offer with its associated information.

Public properties:
- Guid: Unique identifier of the e-commerce offer (GUID).
- SiteId: Optional identifier of the site associated with the offer.
- Label: The label of the e-commerce offer.
- LabelForCustomers: The public label of the offer intended for customers.
- Code: Unique code of the e-commerce offer.
- IsAutomatic: Boolean indicating if the offer is automatic.
- IsValid: Boolean indicating if the offer is valid.
- IsActive: Boolean indicating if the offer is active.
- StartDate: Start date of the offer's validity.
- EndDate: End date of the offer's validity.
- CampaignGuid: Optional unique identifier of the associated campaign.
- IsCumulative: Boolean indicating if the offer can be combined with other offers.

### TypeScript class
```typescript
interface ECommerceOffer {
  Guid: string; // Unique identifier (GUID)
  SiteId?: number | null; // Optional site identifier
  Label: string; // Offer label
  LabelForCustomers: string; // Public label for customers
  Code: string; // Offer code
  IsAutomatic: boolean; // Whether the offer is automatic
  IsValid: boolean; // Whether the offer is valid
  IsActive: boolean; // Whether the offer is active
  StartDate: Date; // Offer start date
  EndDate: Date; // Offer end date
  CampaignGuid?: string | null; // Optional campaign GUID
  IsCumulative: boolean; // Whether the offer is cumulative
}
```