## ProductDppCarbonPhase

Classe représentant une phase d'analyse du cycle de vie (ACV) contribuant à l'empreinte carbone d'un produit.

Propriétés :
- PhaseName : nom de la phase ACV (par exemple "raw_materials", "manufacturing", "distribution", "use", "end_of_life").
- Co2EqKg : émissions de CO₂ équivalent pour cette phase, exprimées en kilogrammes de CO₂ équivalent (kg CO₂e).

### D�claration TypeScript
```typescript
interface ProductDppCarbonPhase {
  /** Name of the LCA phase (e.g., "raw_materials", "manufacturing", "distribution", "use", "end_of_life"). */
  PhaseName: string;

  /** CO₂ equivalent emissions for this phase, in kg CO₂e. */
  Co2EqKg: number;
}
```