## Theme

Class representing an e-commerce theme, serving as the logical root for definitions, routes, and shared resources.

Public properties:

- Id: The technical unique identifier of the theme (Guid).
- TenantId: Identifier of the tenant owning the theme (int).
- Name: Readable name of the theme (string).
- IsActive: Boolean indicating whether the theme is active.
- Revision: The revision number of the theme configuration (int).
- LastUpdated: Date and time of the last configuration update (DateTimeOffset), initialized to the current UTC date.
- Metadata: Free metadata of the theme, of type ThemeMetadata (nullable).
- Options: Dictionary of key/value string pairs to store specific configuration options for the theme.
- Assets: List of global asset links associated with the theme (list of ThemeAssetLink).

Constants defined within the class:

- FrontEndRuntime, with possible values such as none, vanilla, htmx, vue, custom.
- FrontEndBootstrap, with values auto and manual.
- FrontEndSdkVersion with the constant Latest.
- FrontEndSdkCdn with values unpkg and jsdelivr.

These constants likely serve to configure different aspects of the frontend runtime, bootstrap, and SDK related to the theme.

### TypeScript class
```typescript
interface Theme {
  id: string; // GUID
  tenantId: number;
  name: string;
  isActive: boolean;
  revision: number;
  lastUpdated: string; // ISO 8601 date string
  metadata?: ThemeMetadata | null;
  options: { [key: string]: string };
  assets: ThemeAssetLink[];
}

// Constants related to FrontEndRuntime environment
const FrontEndRuntime = {
  UseNone: "none",
  UseVanilla: "vanilla",
  UseHtmx: "htmx",
  UseVue: "vue",
  UseCustom: "custom"
};

const FrontEndBootstrap = {
  Auto: "auto",
  Manual: "manual"
};

const FrontEndSdkVersion = {
  Latest: "latest"
};

const FrontEndSdkCdn = {
  Unpkg: "unpkg",
  JsDeliver: "jsdelivr"
};
```