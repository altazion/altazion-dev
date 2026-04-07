## PendingAsset

This class represents an asset that has been uploaded but is not yet assigned to a specific entity or document. These assets are in a "pending" state awaiting manual or automatic assignment.

Public properties:
- Id: unique identifier.
- TenantId: tenant (client) identifier.
- AssetDocumentTypeId: the type of document this pending asset is intended for (nullable, can be unknown).
- Status: current identification status (enum PendingAssetStatus), indicating the stage of asset identification.
- OriginalFileName: original filename when uploaded.
- MimeType: file MIME type.
- AssetType: asset type derived from MIME type (enum AssetType).
- FileSize: file size in bytes.
- StoragePath: storage path or reference to the uploaded file.
- Scope: scope of this pending asset, either personal or shared (enum PendingAssetScope).
- DetectionHints: detection hints extracted from filename or other sources to assist manual assignment.
- Notes: notes or comments added during manual processing.
- CreatedAt: creation date.
- UpdatedAt: last modification date.
- CreatedBy: creator user identifier.
- UpdatedBy: last modifier user identifier.

### TypeScript class
```typescript
interface PendingAsset {
  Id: string;
  TenantId: number;
  AssetDocumentTypeId?: string | null;
  Status: PendingAssetStatus;
  OriginalFileName: string;
  MimeType: string;
  AssetType: AssetType;
  FileSize?: number | null;
  StoragePath: string;
  Scope: PendingAssetScope;
  DetectionHints?: PendingAssetDetectionHints | null;
  Notes?: string | null;
  CreatedAt: string; // Date ISO string
  UpdatedAt: string; // Date ISO string
  CreatedBy: string;
  UpdatedBy: string;
}

enum PendingAssetStatus {
  Unidentified = 0,
  TypeDetected = 1,
  FullyIdentified = 2,
  ManualReview = 3
}

enum PendingAssetScope {
  Personal = 0,
  Shared = 1
}

// Note: AssetType and PendingAssetDetectionHints should be declared elsewhere as they are referenced here.
```