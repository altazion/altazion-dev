## PendingAsset

Cette classe représente un actif (asset) qui a été téléchargé mais qui n'a pas encore été assigné à une entité ou un document spécifique. Ces actifs sont dans un état "en attente" (pending), attendant une assignation manuelle ou automatique. 

Propriétés publiques :
- Id : identifiant unique.
- TenantId : identifiant du client (tenant).
- AssetDocumentTypeId : type de document auquel cet actif est destiné (nullable, peut être inconnu).
- Status : le statut actuel de l'identification (de l'enum PendingAssetStatus), indique le stade d'identification de l'actif.
- OriginalFileName : nom original du fichier lors du téléchargement.
- MimeType : type MIME du fichier.
- AssetType : type d'actif dérivé du type MIME (enum AssetType).
- FileSize : taille du fichier en octets.
- StoragePath : chemin ou référence de stockage du fichier téléchargé.
- Scope : portée de cet actif en attente, peut être personnel ou partagé (enum PendingAssetScope).
- DetectionHints : indices de détection extraits du nom du fichier ou d'autres sources pour aider à l'assignation manuelle.
- Notes : notes ou commentaires ajoutés lors du traitement manuel.
- CreatedAt : date de création.
- UpdatedAt : date de dernière modification.
- CreatedBy : identifiant de l'utilisateur ayant créé.
- UpdatedBy : identifiant de l'utilisateur ayant modifié en dernier.

### D�claration TypeScript
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