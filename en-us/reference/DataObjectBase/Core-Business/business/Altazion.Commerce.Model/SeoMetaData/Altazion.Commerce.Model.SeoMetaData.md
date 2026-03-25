## SeoMetaData

The SeoMetaData class represents the SEO metadata configured for a website page within the Commerce module. Its public properties allow defining classic and advanced SEO information for a page, including the HTML title, description, keywords, and robot indexing parameters.

Public Properties:

- Guid: Unique identifier of the SEO definition.
- SiteId: Identifier of the related site.
- ContentId: Identifier of the targeted content.
- ContentKind: Type of the targeted content.
- CanInheritInSubPages: Indicates if subpages can inherit these metadata.
- PageTitle: HTML title of the page.
- Keywords: Array of SEO keywords.
- Description: Meta description of the page.
- PageH1: H1 title associated with the page.
- PageHeaderContent: Additional header content of the page.
- JsonLd: JSON-LD content configured for the page.
- RobotNoIndex: Indicates if the page should be excluded from indexing.
- RobotNoFollow: Indicates if robots should not follow links on the page.

The class also includes a validation method to check the minimal consistency of SEO metadata, such as max length of fields and validity of the JSON-LD content.

### TypeScript class
```typescript
interface SeoMetaData {
  Guid: string; // Unique identifier as GUID
  SiteId: number; // Site identifier
  ContentId: string | null; // Targeted content identifier
  ContentKind: string | null; // Targeted content type
  CanInheritInSubPages: boolean; // Whether subpages inherit metadata
  PageTitle: string | null; // HTML page title
  Keywords?: string[]; // SEO keywords array
  Description: string | null; // Meta description
  PageH1: string | null; // H1 title of the page
  PageHeaderContent?: string | null; // Additional header content
  JsonLd: string | null; // JSON-LD content
  RobotNoIndex: boolean; // Exclude page from indexing
  RobotNoFollow: boolean; // Prevent robots from following links
}
```