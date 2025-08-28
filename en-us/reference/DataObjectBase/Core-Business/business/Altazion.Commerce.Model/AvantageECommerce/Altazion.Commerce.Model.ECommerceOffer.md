## ECommerceOffer

The `ECommerceOffer` class represents an e-commerce offer with its associated information.

**Public Properties:**

- `Guid`: Unique identifier of the e-commerce offer (type `Guid`).
- `SiteId`: Identifier of the site associated with the offer, nullable `int`.
- `Label`: Internal label of the offer (`string`).
- `LabelForCustomers`: Public label intended for customers (`string`).
- `Code`: E-commerce offer code (`string`).
- `IsAutomatic`: Boolean indicating if the offer is automatic.
- `IsValid`: Boolean indicating if the offer is valid.
- `IsActive`: Boolean indicating if the offer is active.
- `StartDate`: Start date of the offer validity (`DateTime`).
- `EndDate`: End date of the offer validity (`DateTime`).
- `CampaignGuid`: Nullable `Guid` of the campaign associated with the offer.
- `IsCumulative`: Boolean indicating if the offer can be combined with other offers.

The `ToString()` method returns the label of the offer.


### TypeScript class
```typescript
export interface ECommerceOffer {
  Guid: string; // Unique identifier GUID
  SiteId?: number | null; // Nullable site ID
  Label: string; // Internal label
  LabelForCustomers: string; // Public label for customers
  Code: string; // Offer code
  IsAutomatic: boolean; // Is the offer automatic
  IsValid: boolean; // Is the offer valid
  IsActive: boolean; // Is the offer active
  StartDate: string; // Date as ISO string
  EndDate: string; // Date as ISO string
  CampaignGuid?: string | null; // Nullable campaign GUID
  IsCumulative: boolean; // Is the offer cumulative
}
```