## CmsPageGroup

The CmsPageGroup class represents a page group in the e-commerce CMS. The data is mapped from the SQL table "ecommerce_groupes_pages".

Properties:
- Guid: Unique identifier of the page group (business key).
- Code: Functional code of the page group.
- Label: Label of the page group.
- IsArchived: Indicates whether the group is archived (raw value as stored in the database).
- CampaignGuid: Identifier of the associated marketing campaign, if any.
- PublishingDate: Publishing date of the page group (optional).
- UnpublishingDate: Unpublishing date of the page group (optional).

### TypeScript class
```typescript
export interface CmsPageGroup {
  Guid: string; // Unique identifier (GUID)
  Code: string | null; // Functional code
  Label: string | null; // Label of the group
  IsArchived: string | null; // Archived status raw value
  CampaignGuid: string; // Campaign GUID
  PublishingDate?: string; // Nullable publishing date (ISO string)
  UnpublishingDate?: string; // Nullable unpublishing date (ISO string)
}
```