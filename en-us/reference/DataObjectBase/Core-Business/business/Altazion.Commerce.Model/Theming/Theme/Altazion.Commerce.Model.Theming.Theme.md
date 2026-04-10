## Theme

Represents an e-commerce theme, which is the logical root for definitions, routes, and shared resources.

Public properties:
- Id (Guid): Technical identifier of the theme.
- TenantId (int): Identifier of the tenant owner of the theme.
- Name (string): Readable name of the theme.
- IsActive (bool): Indicates whether the theme is active.
- Revision (int): Configuration revision of the theme.
- LastUpdated (DateTimeOffset): Date of the last configuration update.
- Metadata (ThemeMetadata): Free metadata associated with the theme.
- Options (Dictionary<string, string>): Specific configuration options used to store parameters.
- LibraryReference (ThemeLibraryReference): Optional reference to a standard library package from which this theme originates.
- Assets (List<ThemeAssetLink>): Global asset links associated with the theme.
- SharedSections (List<ThemeSharedSection>): Shared sections reusable by the theme's pages.

Constants defined in the class:
- FrontEndRuntime: key for the frontend runtime used.
- FrontEndRuntimeUseNone, FrontEndRuntimeUseVanilla, FrontEndRuntimeUseHtmx, FrontEndRuntimeUseVue, FrontEndRuntimeUseCustom: possible values for frontend runtime.
- FrontEndBootstrap: key for frontend bootstrap configuration.
- FrontEndBootstrapAuto, FrontEndBootstrapManual: possible bootstrap options.
- FrontEndSdkVersion: key for the frontend SDK version.
- FrontEndSdkVersionLatest: value meaning latest SDK version.
- FrontEndSdkCdn: key for the SDK CDN.
- FrontEndSdkCdnUnpkg, FrontEndSdkCdnJsDeliver: possible CDN values.


### TypeScript class
```typescript
interface Theme {
  id: string; // GUID - Technical identifier of the theme
  tenantId: number; // Identifier of the tenant owner
  name: string; // Readable name of the theme
  isActive: boolean; // Whether the theme is active
  revision: number; // Configuration revision number
  lastUpdated: string; // ISO string date for last update
  metadata?: ThemeMetadata; // Optional free metadata
  options: { [key: string]: string }; // Configuration options dictionary
  libraryReference?: ThemeLibraryReference; // Optional reference to standard library package
  assets: ThemeAssetLink[]; // List of global asset links
  sharedSections?: ThemeSharedSection[]; // Optional list of reusable shared sections
}

// Constants for runtime and bootstrap can be defined as enums or constants in TS as needed.
```