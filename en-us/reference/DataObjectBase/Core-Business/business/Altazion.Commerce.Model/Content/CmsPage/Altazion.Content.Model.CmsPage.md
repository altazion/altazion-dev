## CmsPage

The CmsPage class represents an e-commerce CMS page. It includes the following properties:

- Guid: Unique identifier of the page (business key).
- SiteId: Identifier of the site the page belongs to.
- IsInProduction: Indicates if the page is in production.
- StartDate: Start date for page display (optional).
- EndDate: End date for page display (optional).
- Url: URL of the page.
- CreationDate: Creation date of the page.
- ParentPageGuid: Identifier of the parent page, if applicable.
- Seo: SEO metadata associated with the page (SeoMetaData object).
- RootCssClass: Root CSS class of the page.
- PageTypeGuid: Identifier of the page type.

This class also provides the method IsActive(DateTimeOffset dt) to determine whether the page is active at a specified date, considering the start and end display dates.

Each public property represents a core aspect of page management within the CMS, including publication status, display scheduling, SEO attributes, and structural organization via parent pages and page types.

### TypeScript class
```typescript
interface CmsPage {
  Guid: string; // Unique identifier (UUID)
  SiteId: number; // Site identifier
  IsInProduction: boolean; // Is the page in production
  StartDate?: string; // Nullable, display start date in ISO format
  EndDate?: string; // Nullable, display end date in ISO format
  Url?: string; // URL of the page
  CreationDate: string; // Creation date in ISO format
  ParentPageGuid?: string; // Nullable parent page GUID
  Seo: SeoMetaData; // SEO metadata object
  RootCssClass?: string; // Root CSS class
  PageTypeGuid: string; // Page type GUID
  IsActive(dt: string): boolean; // Method to check if active at given DateTime
}

interface SeoMetaData {
  PageTitle?: string;
  RobotNoFollow: boolean;
  RobotNoIndex: boolean;
  Description?: string;
}
```