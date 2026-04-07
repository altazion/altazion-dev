## Asset

The Asset class represents a single file within an asset document.

- Id: Unique identifier of the asset.
- TenantId: Identifier of the tenant.
- AssetDocumentId: Reference to the parent asset document ID.
- GroupCode: Code of the group this asset belongs to.
- OriginalFileName: Original filename when uploaded.
- Name: Internal name or label of the asset.
- Description: Description or alternative text for the asset.
- AssetType: Type of the asset (derived from MIME type).
- MimeType: MIME type of the file (e.g., "image/jpeg").
- FileSize: Size of the file in bytes.
- Roles: List of assigned role codes for this asset.
- Order: Display order within the group.
- LanguageCode: Language code for localized assets (e.g., "fr", "en").
- CreatedByRuleCode: Code of the identification rule that created this asset (traceability).
- Metadata: Additional metadata extracted or computed for the asset (an instance of AssetMetadata).
- Tags: List of tags associated with the asset for search and filtering.
- FileHash: File content hash used for duplicate detection.
- LicenseInfo: License information related to the asset.
- Copyright: Copyright information.
- CreatedAt: Creation date.
- UpdatedAt: Last modification date.
- CreatedBy: Identifier of the creator user.
- UpdatedBy: Identifier of the user who last modified the asset.

### TypeScript class
```typescript
interface Asset {
  Id: string;
  TenantId: number;
  AssetDocumentId: string;
  GroupCode: string;
  OriginalFileName: string;
  Name: string;
  Description: string;
  AssetType: AssetType;
  MimeType: string;
  FileSize: number;
  Roles: string[];
  Order: number;
  LanguageCode: string;
  CreatedByRuleCode: string;
  Metadata: AssetMetadata;
  Tags: string[];
  FileHash: string;
  LicenseInfo: string;
  Copyright: string;
  CreatedAt: string; // DateTimeOffset serialized as string
  UpdatedAt: string; // DateTimeOffset serialized as string
  CreatedBy: string;
  UpdatedBy: string;
}

interface AssetMetadata {
  Width?: number|null;
  Height?: number|null;
  Duration?: number|null;
  Custom: {[key: string]: any};
}

enum AssetType {
  // Les valeurs de l'énumération AssetType ne sont pas fournies dans le code source extrait
}
```