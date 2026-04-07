## SeoMetaData

The `SeoMetaData` class represents the SEO metadata configured for a page on the e-commerce site.

### Public properties:
- `PageTitle`: The HTML title of the page.
- `Keywords`: An array of SEO keywords for the page.
- `Description`: The meta description of the page.
- `PageH1`: The H1 title associated with the page.
- `PageHeaderContent`: Additional HTML header content for the page.
- `JsonLd`: JSON-LD content configured for the page, used to enhance SEO.
- `SocialMetaJson`: JSON configuration for social tags (OpenGraph, TwitterCard), stored as a JSON string.
- `RobotNoIndex`: Indicates if the page should be excluded from indexing (robots noindex).
- `RobotNoFollow`: Indicates if robots should not follow links (nofollow).
- `RobotNoArchive`: Indicates if robots should not cache the page (noarchive).
- `RobotNoSnippet`: Indicates if robots should not display snippets (nosnippet).
- `RobotNoImageIndex`: Indicates if robots should not index images (noimageindex).
- `CanInheritInSubPages`: Indicates if subpages can inherit these metadata.
- `ContentKind`: The type of content targeted by the SEO metadata.
- `ContentId`: The identifier of the targeted content.
- `Guid`: Unique identifier of the SEO definition.
- `SiteId`: Identifier of the concerned site.

### Notable methods:
- `ToRobotString()`: Returns the robots directive string based on the boolean flags (e.g., "noindex, nofollow"), or null if no restrictions are set.

This class enables detailed management of page SEO settings, including indexation robot directives, classic meta tags, and enriched metadata such as JSON-LD or social media tags.


### TypeScript class
```typescript
interface SeoMetaData {
  PageTitle?: string;
  Keywords?: string[];
  Description?: string;
  PageH1?: string;
  PageHeaderContent?: string;
  JsonLd?: string;
  SocialMetaJson?: string;
  RobotNoIndex: boolean;
  RobotNoFollow: boolean;
  RobotNoArchive: boolean;
  RobotNoSnippet: boolean;
  RobotNoImageIndex: boolean;
  CanInheritInSubPages: boolean;
  ContentKind?: string;
  ContentId?: string;
  Guid: string;  // UUID string
  SiteId: number;
}
```