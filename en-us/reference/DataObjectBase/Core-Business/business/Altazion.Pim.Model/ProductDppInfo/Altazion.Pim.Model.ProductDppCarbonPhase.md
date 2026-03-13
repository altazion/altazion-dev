## ProductDppCarbonPhase

Class representing a life cycle assessment (LCA) phase contributing to a product's carbon footprint.

Properties:
- PhaseName: name of the LCA phase (e.g., "raw_materials", "manufacturing", "distribution", "use", "end_of_life").
- Co2EqKg: equivalent CO₂ emissions for this phase, measured in kilograms of CO₂ equivalent (kg CO₂e).

### TypeScript class
```typescript
interface ProductDppCarbonPhase {
  /** Name of the LCA phase (e.g., "raw_materials", "manufacturing", "distribution", "use", "end_of_life"). */
  PhaseName: string;

  /** CO₂ equivalent emissions for this phase, in kg CO₂e. */
  Co2EqKg: number;
}
```