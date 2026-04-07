## Asset

La classe Asset représente un fichier unique au sein d'un document d'actifs (asset document).

- Id : Identifiant unique de l'actif.
- TenantId : Identifiant du tenant (locataire).
- AssetDocumentId : Référence à l'identifiant du document parent de l'actif.
- GroupCode : Code du groupe auquel appartient l'actif.
- OriginalFileName : Nom original du fichier lors de l'upload.
- Name : Nom interne ou libellé de l'actif.
- Description : Description ou texte alternatif associé à l'actif.
- AssetType : Type de l'actif (dérivé du type MIME).
- MimeType : Type MIME du fichier (exemple "image/jpeg").
- FileSize : Taille du fichier en octets.
- Roles : Liste des codes des rôles attribués à cet actif.
- Order : Ordre d'affichage au sein du groupe.
- LanguageCode : Code langue pour les actifs localisés (exemple "fr", "en").
- CreatedByRuleCode : Code de la règle d'identification ayant créé cet actif (traçabilité).
- Metadata : Métadonnées additionnelles extraites ou calculées pour l'actif (instance de AssetMetadata).
- Tags : Liste des tags associés à l'actif pour la recherche et le filtrage.
- FileHash : Hash du contenu du fichier pour la détection de doublons.
- LicenseInfo : Informations sur la licence applicables à l'actif.
- Copyright : Informations sur les droits d'auteur.
- CreatedAt : Date de création.
- UpdatedAt : Date de dernière modification.
- CreatedBy : Identifiant de l'utilisateur créateur.
- UpdatedBy : Identifiant de l'utilisateur ayant effectué la dernière modification.

### D�claration TypeScript
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