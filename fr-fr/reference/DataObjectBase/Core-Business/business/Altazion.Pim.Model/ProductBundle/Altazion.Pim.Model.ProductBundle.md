## ProductBundle

La classe ProductBundle représente un lot promotionnel (bundle) composé de plusieurs articles dans le catalogue. Elle contient les propriétés suivantes :

- Guid : identifiant unique du lot.
- Label : libellé du lot.
- Reference : référence du lot.
- BundleGroupGuid : identifiant du groupe de lots parent.
- IsArchived : indique si le lot est archivé.
- IsDiscountPercentage : indique si la remise est exprimée en pourcentage.
- IsFixedPrice : indique si le prix du lot est fixe.
- AmountIncludingTax : montant TTC du lot, nullable.
- AmountExcludingTax : montant HT du lot, nullable.
- DiscountPercentage : pourcentage de remise appliqué au lot, nullable.
- Relevance : pertinence du lot pour le tri ou l'affichage.
- StartDate : date de début de validité du lot.
- EndDate : date de fin de validité du lot.
- ImageUrlTiny, ImageUrlSmall, ImageUrlMedium, ImageUrlBig : URLs des images du lot en différentes tailles.
- IsActive : propriété calculée indiquant si le lot est actuellement actif, c'est-à-dire non archivé et dans sa période de validité.

Les validations pour cette classe portent notamment sur la présence de l'identifiant unique, la longueur maximale des chaînes (Label, Reference, URLs d'images), la cohérence entre les dates de début et fin, et la présence de l'identifiant du groupe de lots.

### D�claration TypeScript
```typescript
interface ProductBundle {
  Guid: string; // Unique identifier (GUID)
  Label: string; // Bundle label
  Reference: string; // Bundle reference
  BundleGroupGuid: string; // Parent bundle group GUID
  IsArchived: boolean; // Is the bundle archived
  IsDiscountPercentage: boolean; // Is discount expressed in percentage
  IsFixedPrice: boolean; // Is the price fixed
  AmountIncludingTax?: number | null; // Amount including tax (nullable)
  AmountExcludingTax?: number | null; // Amount excluding tax (nullable)
  DiscountPercentage?: number | null; // Discount percentage (nullable)
  Relevance: number; // Relevance for sorting/display
  StartDate: string; // Start date (ISO 8601 string)
  EndDate: string; // End date (ISO 8601 string)
  ImageUrlTiny?: string | null; // Tiny image URL
  ImageUrlSmall?: string | null; // Small image URL
  ImageUrlMedium?: string | null; // Medium image URL
  ImageUrlBig?: string | null; // Big image URL
  readonly IsActive: boolean; // Computed property, active status
}
```