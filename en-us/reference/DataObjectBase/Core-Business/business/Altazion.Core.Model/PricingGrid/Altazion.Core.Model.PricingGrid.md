## PricingGrid

The PricingGrid class represents a pricing grid in the Altazion system. It includes the following properties:

- Guid: unique identifier of the pricing grid (type Guid).
- Label: descriptive label or name of the pricing grid (type string).
- GridTypeId: optional primary key indicating the type of the grid (type int?).
- IsPartial: boolean indicating if the grid is partial.
- IsArchived: boolean indicating if the grid is archived.
- StartDate: start date of the pricing grid validity (type DateTimeOffset).
- EndDate: end date of the pricing grid validity (type DateTimeOffset).
- Priority: priority of the pricing grid (type int).
- SiteId: optional identifier of the site associated with the grid (type int?).

Key methods:
- GetKey() : returns the unique key (Guid) of the pricing grid.
- FromDataRow(DataRow) : initializes the pricing grid's properties from a data row.

This class derives from DataObjectBase, indicating it is a data entity class.


### TypeScript class
```typescript
interface PricingGrid {
  Guid: string; // unique identifier (GUID)
  Label: string; // label for the pricing grid
  GridTypeId?: number | null; // optional grid type ID
  IsPartial: boolean; // indicates if the grid is partial
  IsArchived: boolean; // indicates if the grid is archived
  StartDate: string; // ISO string representation of DateTimeOffset
  EndDate: string; // ISO string representation of DateTimeOffset
  Priority: number; // priority of the pricing grid
  SiteId?: number | null; // optional site ID
}
```