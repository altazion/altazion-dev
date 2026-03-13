## ProductDppCarbonFootprint

Cette classe représente l'empreinte carbone d'un produit pour un snapshot DPP donné.

Propriétés publiques :
- Co2EqKg : Valeur CO₂ équivalent sur le cycle de vie (PCF), exprimée en kilogrammes de CO₂ équivalent.
- CalculationMethod : Norme ou méthode utilisée pour le calcul de l'empreinte carbone, par exemple "ISO 14067" ou "PEF".
- ReferenceYear : Année de référence du calcul de l'empreinte carbone (optionnel).
- Phases : Liste des phases du cycle de vie (ACV) décomposant l'empreinte carbone, chaque phase étant un objet ProductDppCarbonPhase permettant d'identifier les étapes les plus émettrices du cycle de vie.

### D�claration TypeScript
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