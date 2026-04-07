## WebSiteStaticFile

The WebSiteStaticFile class represents a static file configured for an e-commerce site. The content can be hard-coded or cached from a generator.

Public properties:
- Id: Technical unique identifier of the document (Guid).
- TenantId: Identifier of the owning tenant (int).
- SiteId: Identifier of the concerned site (int).
- Type: Functional type of the static file (string), examples: sitemap, robots.txt, llms.txt, googleverification.
- Url: Virtual URL of the file within the site (string), expected relative to the site and starting with "~/".
- HostName: Host name or domain restriction of the file (string, nullable). If null, applies to all site domains.
- LanguageCode: Language or culture code restriction (string, nullable). If null, applies to all site languages.
- IsActive: Indicates if the file is active (bool), default true.
- IsGenerated: Indicates if the content is automatically generated (bool).
- Content: Current content of the file (string, nullable). For generated files, it is the persistent cache of the last render.
- ContentType: MIME type of the published file (string, nullable).
- ContentEncoding: Encoding name of the published content (string, nullable).
- GeneratorClassName: Full class name of the content generator class (string, nullable). The class must inherit from WebSiteStaticFileGeneratorBase.
- GeneratorProperties: Free parameters passed to the generator (Dictionary<string, string>), initialized empty.
- Revision: Document revision number (int).
- CreatedAt: Document creation date (DateTimeOffset), initialized to current UTC time.
- CreatedBy: Identifier or name of the creator (string, nullable).
- LastUpdated: Date of last update to configuration or content (DateTimeOffset), initialized to current UTC time.
- LastUpdatedBy: Identifier or name of the last updater (string, nullable).
- LastGenerated: Date of last effective content generation cache (DateTimeOffset?, nullable).
- LastGenerationStatus: Status of last generation attempt (string, nullable).
- LastGenerationError: Error message of last generation attempt (string, nullable).
- LastGenerationDurationMs: Duration in milliseconds of last generation attempt (long?, nullable).

### TypeScript class
```typescript
interface WebSiteStaticFile {
  id: string; // Guid
  tenantId: number;
  siteId: number;
  type: string;
  url: string;
  hostName?: string | null;
  languageCode?: string | null;
  isActive: boolean;
  isGenerated: boolean;
  content?: string | null;
  contentType?: string | null;
  contentEncoding?: string | null;
  generatorClassName?: string | null;
  generatorProperties: { [key: string]: string };
  revision: number;
  createdAt: string; // DateTimeOffset as ISO string
  createdBy?: string | null;
  lastUpdated: string; // DateTimeOffset as ISO string
  lastUpdatedBy?: string | null;
  lastGenerated?: string | null; // DateTimeOffset as ISO string or null
  lastGenerationStatus?: string | null;
  lastGenerationError?: string | null;
  lastGenerationDurationMs?: number | null;
}
```