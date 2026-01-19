## MarketingOperation

The MarketingOperation class represents a commercial operation such as a promotion or highlight within the Altazion system.

Public properties:
- Guid: Unique identifier of the operation (type Guid).
- CampaignGuid: Identifier of the parent commercial campaign (type Guid).
- SiteId: Identifier of the site associated with the operation, optional (type int?).
- Label: Label or title of the operation (type string).
- StartDate: Start date of the operation (type DateTimeOffset).
- EndDate: End date of the operation (type DateTimeOffset).
- Type: Type of operation, coded as a string with a maximum length of 10 characters.
- IsActive: Boolean indicating if the operation is currently active.
- MarketingSurfaceGuid: Identifier of the associated marketing surface (type Guid).

This class is decorated with the [SqlDataConcept] attribute defining database schema mapping (schema Commerce, table MarketingOperation, alias commercial_operations). It inherits from DataObjectBase and incorporates validation logic to ensure internal consistency of its properties.


### TypeScript class
```typescript
interface MarketingOperation {
  Guid: string; // Unique identifier of the operation (UUID string)
  CampaignGuid: string; // Identifier of the parent commercial campaign (UUID string)
  SiteId?: number | null; // Optional identifier of the associated site
  Label: string; // Label or name of the operation
  StartDate: string; // Start date of the operation as ISO string
  EndDate: string; // End date of the operation as ISO string
  Type: string; // Operation type code (max 10 characters)
  IsActive: boolean; // Indicates if the operation is active
  MarketingSurfaceGuid: string; // Identifier of the marketing surface (UUID string)
}
```