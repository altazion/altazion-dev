## MarketingOperation

The MarketingOperation class represents a commercial operation such as a promotion or highlight.

Public properties:
- Guid: Unique identifier of the operation.
- CampaignGuid: Identifier of the parent commercial campaign.
- SiteId: Identifier of the site associated with the operation (optional).
- Label: Label of the operation.
- StartDate: Start date of the operation.
- EndDate: End date of the operation.
- Type: Type of the operation (code string, max 100 characters).
- MenuGuid: Identifier of the menu associated with the operation (optional).
- IsActive: Indicates if the operation is active.
- MarketingSurfaceGuid: Identifier of the marketing surface associated.

This class ensures that required identifiers are provided, dates are consistent, and string lengths are respected.

### TypeScript class
```typescript
interface MarketingOperation {
  Guid: string; // Unique identifier of the operation (GUID)
  CampaignGuid: string; // Identifier of the parent commercial campaign (GUID)
  SiteId?: number | null; // Optional identifier of the associated site
  Label: string; // Label of the operation
  StartDate: string; // Start date of the operation in ISO 8601 format
  EndDate: string; // End date of the operation in ISO 8601 format
  Type: string; // Type of the operation (max 100 characters)
  MenuGuid?: string | null; // Optional identifier of the associated menu (GUID)
  IsActive: boolean; // Whether the operation is active
  MarketingSurfaceGuid: string; // Identifier of the associated marketing surface (GUID)
}
```