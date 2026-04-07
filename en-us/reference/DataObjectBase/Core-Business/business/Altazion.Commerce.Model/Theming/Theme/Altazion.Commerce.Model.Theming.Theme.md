## Theme

Class representing an e-commerce theme, which is the logical root of definitions, routes, and shared resources within the theme.

Public properties:
- Id: Technical unique identifier of the theme (Guid).
- TenantId: Identifier of the tenant owning the theme (int).
- Name: Human-readable name of the theme (string).
- IsActive: Indicates whether the theme is active (bool).
- Revision: Configuration revision number of the theme (int).
- LastUpdated: Date and time of the last configuration update (DateTimeOffset), defaults to current UTC time.
- Metadata: Arbitrary metadata associated with the theme, of type ThemeMetadata.
- Assets: List of global asset links associated with the theme, of type List<ThemeAssetLink>.

### TypeScript class
```typescript
interface Theme {
  id: string; // Guid
  tenantId: number;
  name: string;
  isActive: boolean;
  revision: number;
  lastUpdated: string; // ISO 8601 date string
  metadata?: ThemeMetadata;
  assets: ThemeAssetLink[];
}

interface ThemeMetadata {
  // Define properties depending on ThemeMetadata class structure if available
}

interface ThemeAssetLink {
  id: string; // Guid
  usage: string;
  provider?: string;
  assetKey: string;
  url?: string;
  metadata?: { [key: string]: string };
}
```