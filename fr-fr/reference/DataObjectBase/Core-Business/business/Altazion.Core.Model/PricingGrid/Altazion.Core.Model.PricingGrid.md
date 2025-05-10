## PricingGrid

La classe PricingGrid représente une grille tarifaire dans le système Altazion. Elle contient les propriétés suivantes :

- Guid : Identifiant unique de la grille tarifaire (type Guid).
- Label : Libellé ou nom de la grille tarifaire (string).
- GridTypeId : Identifiant du type de grille (nullable int).
- IsPartial : Indique si la grille est partielle (bool).
- IsArchived : Indique si la grille est archivée (bool).
- StartDate : Date de début de validité de la grille tarifaire (DateTime).
- EndDate : Date de fin de validité de la grille tarifaire (DateTime).
- Priority : Priorité de la grille tarifaire (int).
- SiteId : Identifiant du site associé à la grille (nullable int).

Cette classe hérite de DataObjectBase et permet d'obtenir la clé unique par la propriété Guid. Les valeurs des propriétés sont initialisées à partir d'une DataRow via une méthode protégée FromDataRow.


### D�claration TypeScript
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