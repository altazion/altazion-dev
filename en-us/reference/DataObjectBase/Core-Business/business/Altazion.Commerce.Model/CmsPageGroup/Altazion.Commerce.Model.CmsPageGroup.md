## CmsPageGroup

The CmsPageGroup class represents a group of pages in the e-commerce CMS. It is mapped to the SQL table `ecommerce_groupes_pages`.

Public properties:
- Guid: Unique identifier (business key) of the page group (type Guid).
- Code: Functional code of the page group (type string).
- Label: Label of the page group (type string).
- IsArchived: Indicates whether the group is archived, raw value as stored in the database (type string).
- MarketingCampaignGuid: Identifier of the associated marketing campaign, if any (type Guid).
- PublishingDate: Publishing date of the page group, if defined (type DateTimeOffset?).
- UnpublishingDate: Unpublishing date of the page group, if defined (type DateTimeOffset?).

### TypeScript class
```typescript
interface CmsPageGroup {
  Guid: string; // Unique identifier (GUID) of the page group
  Code: string | null; // Functional code of the page group
  Label: string | null; // Label of the page group
  IsArchived: string | null; // Raw archive state as stored in database
  MarketingCampaignGuid: string; // GUID of the associated marketing campaign
  PublishingDate?: string | null; // Publishing date (ISO 8601 format) or null
  UnpublishingDate?: string | null; // Unpublishing date (ISO 8601 format) or null
}
```