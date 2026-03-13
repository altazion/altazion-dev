## ProductDppPackagingInfo

La classe ProductDppPackagingInfo représente les informations d'emballage d'un produit selon les exigences ESPR d'éco-conception sur les emballages.

- MaterialType : Type de matériau d'emballage, par exemple "cardboard", "plastic_pet", "glass", "aluminium".
- WeightGrams : Poids de l'emballage exprimé en grammes.
- IsRecyclable : Indique si l'emballage est recyclable (booléen).
- RecyclingCode : Code de recyclage standard tel que "PAP 21", "PET 01", "GL 70" qui permet d'identifier la norme de recyclage applicable.

### D�claration TypeScript
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