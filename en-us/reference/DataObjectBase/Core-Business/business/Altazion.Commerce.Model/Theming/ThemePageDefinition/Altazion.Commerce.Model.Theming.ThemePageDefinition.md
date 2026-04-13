## ThemePageDefinition

Represents a page definition belonging to a theme.

Public properties:
- Id (Guid): Technical identifier of the page definition.
- ThemeId (Guid): Identifier of the owning theme.
- TenantId (int): Identifier of the owning tenant.
- PageType (string): Functional type of the page.
- Name (string): Human-readable name of the definition.
- IsActive (bool): Indicates if the definition is active.
- Revision (int): Configuration revision number.
- Config (Dictionary<string, string>): Simple general configuration of the page.
- Metadata (ThemeMetadata): Additional metadata (nullable).
- LastUpdated (DateTimeOffset): Last update date of the definition.
- Nodes (List<ThemePageNode>): Set of nodes available in the definition.
- Composition (List<ThemePageCompositionItem>): Logical composition of the definition.
- Options (Dictionary<string, string>): Specific configuration options for the page that override the theme's options.
- SectionAssignments (ThemePageSectionAssignments): Assignments of shared sections used by the page (nullable).
- SectionOverrides (List<ThemePageSectionOverride>): Overrides applied to nodes from shared sections.

### TypeScript class
```typescript
interface ThemePageDefinition {
  id: string; // Guid
  themeId: string; // Guid
  tenantId: number;
  pageType: string;
  name: string;
  isActive: boolean;
  revision: number;
  config: { [key: string]: string };
  metadata?: ThemeMetadata;
  lastUpdated: string; // ISO 8601 date string
  nodes: ThemePageNode[];
  composition: ThemePageCompositionItem[];
  options?: { [key: string]: string };
  sectionAssignments?: ThemePageSectionAssignments;
  sectionOverrides: ThemePageSectionOverride[];
}
```