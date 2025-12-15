## ProductBundleGroup

The ProductBundleGroup class represents a group of promotional bundles (a commercial operation of bundle type).

Public properties:
- Guid: Unique identifier of the bundle group.
- Label: Name of the bundle group.
- CampaignGuid: Identifier of the associated commercial campaign.
- IsArchived: Indicates whether the bundle group is archived (boolean).

This class allows identifying a promotional bundle group, associating a label and a commercial campaign to it, and indicating if it is archived.

### TypeScript class
```typescript
interface ProductBundleGroup {
  Guid: string; // Unique identifier of the bundle group
  Label: string; // Name of the bundle group
  CampaignGuid: string; // Identifier of the associated commercial campaign
  IsArchived: boolean; // Indicates whether the bundle group is archived
}
```