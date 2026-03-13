## ProductDppInfo

Class representing the Digital Product Passport (DPP) information associated with a product reference (SKU/GTIN).
It contains a list of versioned snapshots by period and manufacturing origin, compliant with GS1 and ESPR requirements.

Public properties:
- ManufacturerGln: GS1 GLN of the product manufacturer, stable for all snapshots.
- EsprCategory: ESPR category of the product (e.g., "textile", "electronics", "furniture"), determining specific eco-design requirements at the European level.
- EsprDelegatedActRef: Reference of the applicable ESPR delegated act for this product (e.g., "EU 2023/XXXX" or an internal standardized identifier).
- Snapshots: List of versioned DPP snapshots, ordered by ascending ValidFrom.
- AuditLog: Audit log of DPP modifications, chronologically ordered, automatically populated on each mutation.

Public method:
- ResolveSnapshot(gtin, date, siteGln = null, minimumAccess = Internal): Resolves and returns the applicable snapshot for a given unit according to a priority algorithm considering GTIN, site GLN, date, and minimum access level.

### TypeScript class
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