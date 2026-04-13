## ThemeLibraryEntry

Represents a catalog entry in the theme library.

Properties:
- Id: Unique identifier of the library entry.
- OwnerTenantId: Identifier of the owning tenant for the entry, or 0 if it is a global catalog.
- Visibility: Visibility level of the entry in the catalog (TenantPrivate or Global).
- Code: Stable functional code for the entry, nullable.
- Name: Main label of the entry.
- Description: Optional textual description of the entry.
- IsActive: Indicates if the entry is active in the catalog (default true).
- DefaultVariantId: Optional identifier of the default variant to propose during installation.
- Variants: List of variants available for this entry.
- Screenshots: List of screenshots or presentation visuals of the entry.
- Metadata: Optional editorial metadata.
- CreatedAt: Creation date and time of the entry.
- UpdatedAt: Date and time of the last update of the entry.

### TypeScript class
```typescript
interface ThemeLibraryEntry {
  id: string; // Guid
  ownerTenantId: number;
  visibility: ThemeLibraryVisibility;
  code?: string | null;
  name: string;
  description?: string | null;
  isActive: boolean;
  defaultVariantId?: string | null; // Guid
  variants: ThemeLibraryVariant[];
  screenshots: ThemeLibraryScreenshot[];
  metadata?: ThemeMetadata | null;
  createdAt: string; // DateTimeOffset as ISO string
  updatedAt: string; // DateTimeOffset as ISO string
}

enum ThemeLibraryVisibility {
  TenantPrivate = 0,
  Global = 1
}

interface ThemeLibraryVariant {
  id: string; // Guid
  code?: string | null;
  name: string;
  description?: string | null;
  parentVariantId?: string | null; // Guid
  publishedPackageId?: string | null; // Guid
}

interface ThemeLibraryScreenshot {
  id: string; // Guid
  label?: string | null;
  url: string;
  mimeType?: string | null;
}

interface ThemeMetadata {
  // Defined elsewhere
}

```