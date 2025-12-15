## MarketingOperation

The MarketingOperation class represents a commercial operation such as a promotion or highlighting. It includes the following properties:
- Guid: Unique identifier of the operation.
- CampaignGuid: Identifier of the parent commercial campaign.
- SiteId: Optional identifier of the associated site.
- Label: Label of the operation, must be provided and cannot exceed 250 characters.
- StartDate: Start date of the operation, required.
- EndDate: End date of the operation, required and must be later than the start date.
- Type: Type of the operation (code up to 10 characters), required.
- IsActive: Indicates if the operation is active.
- MarketingSurfaceGuid: Identifier of the associated marketing surface, required.

The class performs validation checks on key properties to ensure consistency and validity.

### TypeScript class
```typescript
interface MarketingOperation {
    Guid: string; // unique identifier, GUID format
    CampaignGuid: string; // parent campaign identifier, GUID format
    SiteId?: number | null; // optional associated site ID
    Label: string; // operation label
    StartDate: Date; // start date
    EndDate: Date; // end date
    Type: string; // operation type code (max 10 chars)
    IsActive: boolean; // active status
    MarketingSurfaceGuid: string; // associated marketing surface GUID
}
```