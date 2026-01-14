## CmsPage

The CmsPage class represents a page in the e-commerce CMS.

Public properties:
- Guid: Unique identifier of the page (Guid).
- SiteId: Identifier of the site the page belongs to (int).
- IsInProduction: Indicates if the page is in production (bool).
- StartDate: Start date of the page display (DateTimeOffset?).
- EndDate: End date of the page display (DateTimeOffset?).
- Url: URL of the page (string).
- CreationDate: Creation date of the page (DateTimeOffset).
- ParentPageGuid: Identifier of the parent page, if any (Guid?).
- Seo: SEO information associated with the page (SeoContentBase).
- RootCssClass: Root CSS class of the page (string).
- PageTypeGuid: Identifier of the page type (Guid).

Public method:
- IsActive(DateTimeOffset dt): Indicates if the page is active at the specified date. Returns true if the date is within the display range, false otherwise.

### TypeScript class
```typescript
interface CmsPage {
  Guid: string; // Unique identifier of the page
  SiteId: number; // Identifier of the site
  IsInProduction: boolean; // Production status
  StartDate?: string | null; // Nullable start display date (ISO string)
  EndDate?: string | null; // Nullable end display date (ISO string)
  Url?: string | null; // Page URL
  CreationDate: string; // Creation date (ISO string)
  ParentPageGuid?: string | null; // Nullable parent page identifier
  Seo: SeoContentBase; // SEO metadata
  RootCssClass?: string | null; // CSS root class
  PageTypeGuid: string; // Identifier of page type
  IsActive(dt: string): boolean; // Method to check if page is active at given date (ISO string)
}

interface SeoContentBase {
  PageTitle?: string | null;
  RobotNoFollow: boolean;
  RobotNoIndex: boolean;
  Description?: string | null;
}
```