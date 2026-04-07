## ProductDppInfo

The ProductDppInfo class represents the Digital Product Passport (DPP) information linked to a product reference (SKU/GTIN). It includes:

- Id: Unique identifier of the product to which this DPP is linked, used as the MongoDB document key to ensure uniqueness.
- ManufacturerGln: GS1 GLN of the product manufacturer, stable across all snapshots.
- EsprCategory: ESPR category of the product (e.g., textile, electronics) determining specific eco-design requirements at the European level.
- EsprDelegatedActRef: Reference to the applicable ESPR delegated act for the product.
- Snapshots: List of versioned DPP snapshots ordered by validity date (ValidFrom ascending), representing different data versions by time period and manufacturing origin.
- AuditLog: Audit log of DPP changes in chronological order, automatically maintained on each update.

This class also provides a ResolveSnapshot method which resolves the applicable DPP snapshot for a given product instance based on priority criteria including GTIN, date, manufacturing site GLN, and minimum access level, returning the most precise matching snapshot.


### TypeScript class
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