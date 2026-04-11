## SeoMetaData

The SeoMetaData class represents the SEO metadata configured for a site page within the Altazion system. It stores and manages various SEO-related properties such as the page title, description, keywords, and specific settings for search engine robots and social networks.

Public properties:
- Guid: Unique identifier for the SEO definition.
- SiteId: Identifier of the concerned site.
- ContentId: Identifier of the targeted content.
- ContentKind: Type of content targeted by the metadata.
- CanInheritInSubPages: Indicates if the metadata can be inherited by subpages.
- PageTitle: HTML title of the page.
- Keywords: Array of SEO keywords.
- Description: Meta description of the page.
- PageH1: H1 title associated with the page.
- PageHeaderContent: Additional HTML header content for the page.
- JsonLd: Configured JSON-LD structured data for the page.
- SocialMetaJson: JSON configuration for social tags like OpenGraph and TwitterCard.
- RobotNoIndex: Indicates if the page should be excluded from indexing.
- RobotNoFollow: Indicates if robots should not follow links.
- RobotNoArchive: Indicates if robots should not cache the page.
- RobotNoSnippet: Indicates if robots should not show snippets.
- RobotNoImageIndex: Indicates if robots should not index images.

Important method:
- ToRobotString(): Returns a string corresponding to the robots directive based on the boolean properties.

This class derives from DataObjectBase and is used to handle and validate SEO metadata in the Altazion commerce context.

### TypeScript class
```typescript
interface SeoMetaData {
  Guid: string; // Unique identifier (GUID) of the SEO definition
  SiteId: number; // Identifier of the site
  ContentId: string | null; // Identifier of the targeted content
  ContentKind: string | null; // Type of the content
  CanInheritInSubPages: boolean; // Indicates if metadata can be inherited by subpages
  PageTitle: string | null; // HTML title of the page
  Keywords?: string[]; // SEO keywords array
  Description: string | null; // Meta description
  PageH1: string | null; // H1 title of the page
  PageHeaderContent: string | null; // Additional HTML header content
  JsonLd: string | null; // JSON-LD structured content
  SocialMetaJson: string | null; // JSON configuration for social meta tags
  RobotNoIndex: boolean; // Robots noindex directive
  RobotNoFollow: boolean; // Robots nofollow directive
  RobotNoArchive: boolean; // Robots noarchive directive
  RobotNoSnippet: boolean; // Robots nosnippet directive
  RobotNoImageIndex: boolean; // Robots noimageindex directive
}
```