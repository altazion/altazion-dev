## ProductDppPackagingInfo

The class ProductDppPackagingInfo represents the packaging information of a product according to ESPR eco-design requirements for packaging.

- MaterialType: Type of packaging material, e.g. "cardboard", "plastic_pet", "glass", "aluminium".
- WeightGrams: Packaging weight in grams.
- IsRecyclable: Indicates whether the packaging is recyclable (boolean).
- RecyclingCode: Standard recycling code such as "PAP 21", "PET 01", "GL 70" used to identify the applicable recycling standard.

### TypeScript class
```typescript
interface ProductDppPackagingInfo {
  /** Type of packaging material, e.g. "cardboard", "plastic_pet", "glass", "aluminium" */
  MaterialType: string;
  /** Packaging weight in grams */
  WeightGrams: number;
  /** Indicates whether the packaging is recyclable */
  IsRecyclable: boolean;
  /** Standard recycling code such as "PAP 21", "PET 01", "GL 70" */
  RecyclingCode: string;
}
```