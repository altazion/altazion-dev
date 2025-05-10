## PricingGrid

The PricingGrid class represents a pricing grid within the Altazion system. It includes the following properties:

- Guid: Unique identifier of the pricing grid (Guid type).
- Label: Label or name of the pricing grid (string).
- GridTypeId: Identifier of the grid type (nullable int).
- IsPartial: Indicates if the grid is partial (bool).
- IsArchived: Indicates if the grid is archived (bool).
- StartDate: Start date of the pricing grid validity (DateTime).
- EndDate: End date of the pricing grid validity (DateTime).
- Priority: Priority of the pricing grid (int).
- SiteId: Identifier of the associated site (nullable int).

This class derives from DataObjectBase and provides the unique key via the Guid property. Property values are initialized from a DataRow through a protected FromDataRow method.


### TypeScript class
```typescript
interface PricingGrid {
  Guid: string; // Unique identifier as UUID string
  Label: string; // Pricing grid label
  GridTypeId?: number | null; // Grid type identifier, optional
  IsPartial: boolean; // Indicates if the grid is partial
  IsArchived: boolean; // Indicates if the grid is archived
  StartDate: string; // ISO string representation of start date
  EndDate: string; // ISO string representation of end date
  Priority: number; // Priority of the pricing grid
  SiteId?: number | null; // Associated site identifier, optional
}
```