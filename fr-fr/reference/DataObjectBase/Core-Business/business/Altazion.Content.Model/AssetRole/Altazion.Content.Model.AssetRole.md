## AssetRole

La classe AssetRole définit un rôle assignable aux assets avec des contraintes techniques spécifiques, par exemple « Image principale e-commerce » ou « Image pour réseaux sociaux ».

Propriétés publiques :
- Id : identifiant unique du rôle.
- TenantId : identifiant du locataire.
- Code : code unique utilisé pour l'API et en interne.
- Name : nom du rôle.
- Titles : dictionnaire des noms traduits dans différentes langues (clé = langue, valeur = titre).
- Description : description du rôle.
- Color : couleur hexadécimale pour le badge dans l'interface utilisateur (ex. « #00BFA5 »).
- ApplicableToDocumentTypes : liste des identifiants des types de documents auxquels ce rôle s'applique.
- AllowedAssetTypes : tableau des types d'assets acceptés pour ce rôle (comme Image, Vidéo).
- AllowMultiple : booléen indiquant si un document peut avoir plusieurs assets avec ce rôle (par défaut false).
- Constraints : contraintes techniques spécifiques à ce rôle, représentées par un objet AssetRoleConstraints.
- CreatedAt : date de création.
- UpdatedAt : date de dernière modification.
- CreatedBy : identifiant utilisateur du créateur.
- UpdatedBy : identifiant utilisateur du dernier modificateur.

### D�claration TypeScript
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