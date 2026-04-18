## ECommerceOffer

The `ECommerceOffer` class represents an e-commerce offer with its associated information.

Public properties :
- `Guid`: Unique identifier of the e-commerce offer.
- `SiteId`: Identifier of the site associated with the offer (nullable).
- `Label`: Label of the e-commerce offer.
- `LabelForCustomers`: Public label of the offer, intended for customers.
- `Code`: Code of the e-commerce offer.
- `IsAutomatic`: Indicates if the offer is automatic.
- `IsValid`: Indicates if the offer is valid.
- `IsActive`: Indicates if the offer is active.
- `StartDate`: Start date of the offer validity.
- `EndDate`: End date of the offer validity.
- `CampaignGuid`: Unique identifier of the campaign associated with the offer (nullable).
- `IsCumulative`: Indicates if the offer can be combined with other offers.
- `IsForMainEcommerce`: Indicates if the offer applies to main lines of the e-commerce cart (default true).
- `IsForMarketplace`: Indicates if the offer applies to marketplace seller lines of the e-commerce cart (default true).
- `IsForShipFromStore`: Indicates if the offer applies to ship from store lines of the e-commerce cart (default true).
- `IsForStorePickup`: Indicates if the offer applies to store pickup lines of the e-commerce cart (default false).

### TypeScript class
```typescript
interface ECommerceOffer {
  Guid: string; // Unique identifier of the e-commerce offer (GUID)
  SiteId?: number | null; // Identifier of the associated site (optional)
  Label: string; // Label of the e-commerce offer
  LabelForCustomers: string; // Public label for customers
  Code: string; // Code of the offer
  IsAutomatic: boolean; // Indicates if the offer is automatic
  IsValid: boolean; // Indicates if the offer is valid
  IsActive: boolean; // Indicates if the offer is active
  StartDate: string; // Start date of validity (ISO 8601 string)
  EndDate: string; // End date of validity (ISO 8601 string)
  CampaignGuid?: string | null; // Identifier of the associated campaign (optional)
  IsCumulative: boolean; // Indicates if offer is cumulative with others
  IsForMainEcommerce: boolean; // Available for main e-commerce lines
  IsForMarketplace: boolean; // Available for marketplace seller lines
  IsForShipFromStore: boolean; // Available for ship from store lines
  IsForStorePickup: boolean; // Available for store pickup lines
}
```