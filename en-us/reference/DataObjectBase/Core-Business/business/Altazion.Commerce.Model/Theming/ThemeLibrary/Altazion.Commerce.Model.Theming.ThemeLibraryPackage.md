## ThemeLibraryPackage

The ThemeLibraryPackage class represents a published package in the theme library. A package is a zipped collection containing the theme, its versions, variants, and associated resources intended for publishing and installation.

Public properties:
- Id: Unique identifier of the package (Guid).
- EntryId: Identifier of the catalog entry to which the package belongs.
- OwnerTenantId: Tenant owner ID of the package, 0 indicates the global catalog.
- Visibility: Visibility of the package in the catalog (TenantPrivate or Global).
- VariantId: Optional identifier of the variant covered by the package.
- Version: Human-readable version of the package.
- SourceThemeId: Identifier of the source theme used to produce this package.
- SourceThemeRevision: Revision number of the source theme at publication time.
- BlobPath: Technical path to the zip file in blob storage.
- BlobUrl: Published URL of the zip if available.
- IsActive: Indicates if the package is still active and offered.
- ContainsMenus: Indicates if the package includes menus.
- AssetCount: Number of embedded assets within the package.
- ManifestHash: Checksum or fingerprint of the published package.
- Notes: Optional release notes.
- PublishedBy: Identity of the publisher.
- PublishedAt: Date of publication of the package.

This class inherits from NoSqlDataObjectBase and corresponds to a NoSQL database document.


### TypeScript class
```typescript
interface ThemeLibraryPackage {
  id: string; // Unique identifier of the package (GUID)
  entryId: string; // Catalog entry this package belongs to (GUID)
  ownerTenantId: number; // Tenant owner ID, or 0 for global catalog
  visibility: 'TenantPrivate' | 'Global'; // Visibility of the package
  variantId?: string | null; // Optional variant ID covered by the package
  version: string; // Human-readable version string
  sourceThemeId: string; // Source theme ID used to create the package
  sourceThemeRevision: number; // Source theme revision number
  blobPath: string; // Blob storage path of the zip file
  blobUrl?: string | null; // Optional URL of the published zip
  isActive: boolean; // Indicates if the package is active
  containsMenus: boolean; // Whether the package contains menus
  assetCount: number; // Number of embedded assets
  manifestHash?: string | null; // Checksum of the package
  notes?: string | null; // Optional notes about the package
  publishedBy?: string | null; // Publisher identity
  publishedAt: string; // Publication date - ISO 8601 string
}
```