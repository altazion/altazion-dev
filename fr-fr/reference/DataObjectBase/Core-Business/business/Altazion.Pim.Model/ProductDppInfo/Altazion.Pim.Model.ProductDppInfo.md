## ProductDppInfo

Classe représentant les informations du Passeport Numérique Produit (DPP) associées à une référence produit (SKU/GTIN).
Elle contient une liste de snapshots versionnés par périodes et origines de fabrication, conforme aux exigences GS1 et ESPR.

Propriétés publiques :
- ManufacturerGln : GLN GS1 du fabricant du produit, stable pour tous les snapshots.
- EsprCategory : Catégorie ESPR du produit (par exemple "textile", "electronics", "furniture"), déterminant les exigences spécifiques d'éco-conception au niveau européen.
- EsprDelegatedActRef : Référence de l'acte délégué ESPR applicable à ce produit (ex : "EU 2023/XXXX" ou identifiant interne).
- Snapshots : Liste des snapshots DPP versionnés, ordonnée par ordre croissant de ValidFrom.
- AuditLog : Journal d'audit des modifications DPP, chronologiquement ordonné, alimenté automatiquement à chaque mutation.

Méthode publique :
- ResolveSnapshot(gtin, date, siteGln = null, minimumAccess = Internal) : Résout et retourne le snapshot applicable pour un exemplaire donné selon un algorithme de priorité prenant en compte GTIN, site GLN, date et minimum d'accès.

### D�claration TypeScript
```typescript
interface ProductDppInfo {
  manufacturerGln: string;
  esprCategory: string;
  esprDelegatedActRef: string;
  snapshots: ProductDppSnapshot[];
  auditLog: ProductDppAuditEntry[];
  resolveSnapshot(gtin: string, date: string, siteGln?: string | null, minimumAccess?: DppAccessLevel): ProductDppSnapshot | null;
}

// Note: ProductDppSnapshot, ProductDppAuditEntry, DppAccessLevel are assumed to be defined elsewhere.
```