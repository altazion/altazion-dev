## ProductBundle

The ProductBundle class represents a promotional bundle composed of several items in the catalog. It has the following public properties:

- Guid: unique identifier of the bundle.
- Label: label of the bundle.
- Reference: reference code of the bundle.
- BundleGroupGuid: identifier of the parent bundle group.
- IsArchived: indicates if the bundle is archived.
- IsDiscountPercentage: indicates if the discount is expressed as a percentage.
- IsFixedPrice: indicates if the bundle price is fixed.
- AmountIncludingTax: gross amount of the bundle, nullable.
- AmountExcludingTax: net amount of the bundle, nullable.
- DiscountPercentage: discount percentage applied to the bundle, nullable.
- Relevance: relevance score for sorting or display.
- StartDate: bundle validity start date.
- EndDate: bundle validity end date.
- ImageUrlTiny, ImageUrlSmall, ImageUrlMedium, ImageUrlBig: URLs to bundle images in various sizes.
- IsActive: computed property indicating if the bundle is currently active (not archived and within the validity period).

The class includes validation rules ensuring required fields are set, string length constraints, date consistency, and presence of parent group identifier.

### TypeScript class
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