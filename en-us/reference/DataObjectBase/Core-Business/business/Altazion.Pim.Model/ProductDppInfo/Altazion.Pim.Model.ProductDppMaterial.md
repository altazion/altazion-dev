## ProductDppMaterial

Class representing a material component of a product for a given DPP snapshot (Digital Product Passport).

Public properties:
- Name: Name of the material (e.g. "Cotton", "Recycled polyester").
- Percentage: Mass percentage of this material in the product.
- IsRecycled: Indicates if the material is recycled.
- CasNumber: CAS number of the chemical substance, required for REACH regulation if the material is risky.
- OriginCountryCode: ISO 3166-1 alpha-2 country code indicating the origin country of the material (e.g. "FR" for France, "IN" for India).
- CertificationCode: Certification code for the material (e.g. "GOTS", "FSC", "OEKO-TEX").
- RecycledContentPct: Percentage of recycled content in this material, mass-based (optional).

### TypeScript class
```typescript
interface ProductDppMaterial {
  /** Name of the material (e.g. "Cotton", "Recycled polyester") */
  Name: string;

  /** Mass percentage of this material in the product */
  Percentage: number;

  /** Indicates if the material is recycled */
  IsRecycled: boolean;

  /** CAS number of the chemical substance, required for REACH if risky */
  CasNumber: string;

  /** ISO 3166-1 alpha-2 code of the origin country (e.g. "FR", "IN") */
  OriginCountryCode: string;

  /** Certification code for the material (e.g. "GOTS", "FSC", "OEKO-TEX") */
  CertificationCode: string;

  /** Percentage of recycled content in the material, mass-based (optional) */
  RecycledContentPct?: number;
}
```