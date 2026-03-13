## ProductDppHazardousSubstance

Class representing a hazardous substance present in a product, according to SCIP and REACH Article 33 requirements.

Public properties:
- Name: Name of the hazardous substance.
- CasNumber: CAS number identifying the chemical substance.
- MaxConcentrationPercent: Maximum concentration of the substance in the product, expressed as a mass percentage (%).
- EcNumber: EC number (EINECS/ELINCS) identifying the substance in the European inventory (e.g., "200-001-8").
- IsSvhc: Indicates whether the substance is listed as SVHC (Substances of Very High Concern) by ECHA.


### TypeScript class
```typescript
interface ProductDppHazardousSubstance {
  /** Name of the hazardous substance */
  Name: string;
  /** CAS number identifying the chemical substance */
  CasNumber: string;
  /** Maximum concentration of the substance in the product (mass %) */
  MaxConcentrationPercent: number;
  /** EC number identifying the substance in the European inventory */
  EcNumber: string;
  /** Indicates if the substance is listed as SVHC by ECHA */
  IsSvhc: boolean;
}
```