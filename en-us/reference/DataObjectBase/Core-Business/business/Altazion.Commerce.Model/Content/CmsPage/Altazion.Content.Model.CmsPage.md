## CmsPage

The CmsPage class represents a page of the e-commerce CMS.

Public properties:
- Guid: The unique identifier of the page (business key).
- SiteId: Identifier of the site to which the page belongs.
- IsInProduction: Indicates if the page is in production.
- StartDate: Start display date of the page (nullable).
- EndDate: End display date of the page (nullable).
- Url: URL of the page.
- CreationDate: Creation date of the page.
- ParentPageGuid: Identifier of the parent page, if any (nullable).
- Seo: SEO information associated with the page, of type SeoContentBase (title, nofollow, noindex, description).
- RootCssClass: Root CSS class of the page.
- PageTypeGuid: Identifier of the page type.

Methods:
- GetKey(): Returns the unique key (Guid) of the page.
- IsActive(DateTime dt): Indicates if the page is active at the specified date, based on start and end display dates.

This class inherits from DataObjectBase and is marked as an SQL data concept linked to the ecommerce_pages table in the Ecommerce database.

### TypeScript class
```typescript
interface CmsPage {
  Guid: string; // Unique identifier of the page
  SiteId: number; // Site identifier
  IsInProduction: boolean; // Indicates if the page is in production
  StartDate?: string; // Nullable start display date (ISO string format)
  EndDate?: string; // Nullable end display date (ISO string format)
  Url?: string; // Page URL
  CreationDate: string; // Creation date (ISO string format)
  ParentPageGuid?: string; // Nullable parent page identifier
  Seo: {
    PageTitle?: string;
    RobotNoFollow: boolean;
    RobotNoIndex: boolean;
    Description?: string;
  };
  RootCssClass?: string; // Root CSS class
  PageTypeGuid: string; // Page type identifier
  IsActive(dt: string): boolean;
}
```