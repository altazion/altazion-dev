## SeoMetaData

The `SeoMetaData` class represents the SEO metadata configured for a page on the e-commerce site.

### Public Properties:

- `PageTitle`: Gets or sets the HTML title of the page.
- `Keywords`: Gets or sets the SEO keywords of the page as a string array.
- `Description`: Gets or sets the meta description of the page.
- `PageH1`: Gets or sets the H1 heading associated with the page.
- `PageHeaderContent`: Gets or sets additional header content for the page.
- `JsonLd`: Gets or sets JSON-LD content configured for the page, used for structured data.
- `SocialMetaJson`: Gets or sets the social tags configuration (OpenGraph, TwitterCard) as a JSON string.
- `RobotNoIndex`: Indicates if the page should be excluded from indexing by robots.
- `RobotNoFollow`: Indicates if robots should not follow links on the page.
- `CanInheritInSubPages`: Indicates if sub-pages can inherit these SEO metadata.
- `ContentKind`: The content type targeted by these metadata (e.g., page type).
- `ContentId`: The identifier of the targeted content.
- `Guid`: Unique identifier of the SEO metadata definition.
- `SiteId`: Identifier of the site concerned.

The class initializes from a SQL data row and parses robot directives (noindex, nofollow). It also performs validation on coherence and property formats.


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
  CanInheritInSubPages: boolean;
  ContentKind?: string;
  ContentId?: string;
  Guid: string; // Guid as string
  SiteId: number;
}
```