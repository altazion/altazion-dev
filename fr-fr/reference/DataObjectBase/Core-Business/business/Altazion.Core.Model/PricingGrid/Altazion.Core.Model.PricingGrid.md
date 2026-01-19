## PricingGrid

La classe PricingGrid représente une grille tarifaire dans le système Altazion. Elle contient les propriétés suivantes :

- Guid : identifiant unique de la grille tarifaire (type Guid).
- Label : libellé ou nom descriptif de la grille tarifaire (type string).
- GridTypeId : clé primaire optionnelle indiquant le type de la grille (type int?).
- IsPartial : booléen indiquant si la grille est partielle.
- IsArchived : booléen indiquant si la grille est archivée.
- StartDate : date de début de validité de la grille tarifaire (type DateTimeOffset).
- EndDate : date de fin de validité de la grille tarifaire (type DateTimeOffset).
- Priority : priorité de la grille tarifaire (type int).
- SiteId : identifiant optionnel du site associé à la grille (type int?).

Méthodes importantes :
- GetKey() : retourne la clé unique (Guid) de la grille tarifaire.
- FromDataRow(DataRow) : initialise les propriétés de la grille tarifaire à partir d'une ligne de données (DataRow).

Cette classe hérite de DataObjectBase, signifiant qu'elle est une classe de donnée.


### D�claration TypeScript
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