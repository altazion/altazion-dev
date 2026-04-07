## AssetRole

The AssetRole class defines an assignable role to assets with technical constraints such as "Main e-commerce image" or "Social media image".

Public properties:
- Id: unique identifier for the role.
- TenantId: tenant identifier.
- Code: unique code for API and internal use.
- Name: name of the role.
- Titles: dictionary of translated names in different languages (key = language, value = title).
- Description: description of the role.
- Color: hexadecimal color for UI badge (e.g., "#00BFA5").
- ApplicableToDocumentTypes: list of AssetDocumentTypeIds for which this role is applicable.
- AllowedAssetTypes: array of asset types accepted for this role (e.g., Image, Video).
- AllowMultiple: boolean indicating if a document can have multiple assets with this role (default is false).
- Constraints: technical constraints for the role, represented by an AssetRoleConstraints object.
- CreatedAt: creation date.
- UpdatedAt: last modification date.
- CreatedBy: identifier of the user who created the role.
- UpdatedBy: identifier of the user who last modified the role.

### TypeScript class
```typescript
interface AssetRole {
  Id: string;
  TenantId: number;
  Code: string;
  Name: string;
  Titles: { [language: string]: string };
  Description: string;
  Color: string;
  ApplicableToDocumentTypes: string[];
  AllowedAssetTypes: AssetType[];
  AllowMultiple: boolean;
  Constraints: AssetRoleConstraints;
  CreatedAt: string; // ISO Date string
  UpdatedAt: string; // ISO Date string
  CreatedBy: string;
  UpdatedBy: string;
}

interface AssetRoleConstraints {
  MinWidth?: number | null;
  MaxWidth?: number | null;
  MinHeight?: number | null;
  MaxHeight?: number | null;
  AspectRatio?: AspectRatio | null;
  MaxFileSize?: number | null;
  AllowedFormats: string[];
}

enum AssetType {
  Image = 0,
  Video = 1,
  Document = 2,
  Audio = 3,
  Custom = 4
}

enum AspectRatio {
  Free = 0,
  Square = 1,
  Landscape_16_9 = 2,
  Landscape_4_3 = 3,
  Portrait_9_16 = 4,
  Portrait_3_4 = 5,
  Ultrawide_21_9 = 6
}
```