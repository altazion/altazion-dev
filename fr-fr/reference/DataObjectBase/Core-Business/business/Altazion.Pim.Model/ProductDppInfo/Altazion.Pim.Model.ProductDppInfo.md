## ProductDppInfo

La classe ProductDppInfo représente les informations du Passeport Numérique Produit (DPP) associées à une référence produit (SKU/GTIN). Elle contient notamment :

- Id : Identifiant unique du produit auquel ce DPP est rattaché, utilisé comme clé documentaire Mongo pour garantir un DPP unique par produit.
- ManufacturerGln : GLN GS1 du fabricant du produit, stable pour tous les snapshots.
- EsprCategory : Catégorie ESPR du produit (ex : textile, electronics), déterminant les exigences spécifiques d'éco-conception au niveau européen.
- EsprDelegatedActRef : Référence de l'acte délégué ESPR applicable à ce produit.
- Snapshots : Liste des snapshots DPP versionnés, ordonnés par date de validité (ValidFrom croissant), représentant les différentes versions des données produit selon période et origine de fabrication.
- AuditLog : Journal d'audit des modifications DPP, ordonné chronologiquement, alimenté automatiquement à chaque mutation.

La classe fournit aussi une méthode ResolveSnapshot qui permet de résoudre le snapshot DPP applicable pour un exemplaire donné selon plusieurs critères de priorité incluant le GTIN, la date, le site de fabrication (GLN), et un niveau d'accès minimum, retournant le snapshot le plus précis disponible.


### D�claration TypeScript
```typescript
interface ProductDppInfo {
  id: string; // Guid
  manufacturerGln: string;
  esprCategory: string;
  esprDelegatedActRef: string;
  snapshots: ProductDppSnapshot[];
  auditLog: ProductDppAuditEntry[];

  resolveSnapshot(gtin: string, date: string, siteGln?: string, minimumAccess?: DppAccessLevel): ProductDppSnapshot | null;
}

interface ProductDppSnapshot { /* see related class definition */ }
interface ProductDppAuditEntry { /* see related class definition */ }
enum DppAccessLevel {
  Internal = 0,
  Regulatory = 10,
  Professional = 20,
  Public = 30
}
```