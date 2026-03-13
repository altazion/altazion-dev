## ProductDppCarbonFootprint

This class represents the carbon footprint of a product for a given DPP snapshot.

Public properties:
- Co2EqKg: Carbon dioxide equivalent value over the lifecycle (PCF), in kilograms of CO₂ equivalent.
- CalculationMethod: Standard or method used for the calculation, for example "ISO 14067" or "PEF".
- ReferenceYear: Reference year of the carbon footprint calculation (optional).
- Phases: List of lifecycle analysis (LCA) phases breaking down the carbon footprint, each phase being a ProductDppCarbonPhase object to identify the most emitting stages in the lifecycle.

### TypeScript class
```typescript
interface ProductDppCarbonFootprint {
  Co2EqKg: number; // Carbon dioxide equivalent value in kg CO2e over lifecycle
  CalculationMethod: string; // Standard or method used for calculation (e.g. "ISO 14067", "PEF")
  ReferenceYear?: number; // Reference year of the carbon footprint calculation (optional)
  Phases: ProductDppCarbonPhase[]; // Breakdown of carbon footprint by lifecycle phases
}

interface ProductDppCarbonPhase {
  PhaseName: string; // Name of the LCA phase (e.g. "raw_materials", "manufacturing")
  Co2EqKg: number; // CO2 equivalent emissions for this phase in kg CO2e
}
```