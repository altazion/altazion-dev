## ProductDppSupplyChainStep

Class representing a step in the product supply chain as required for the Digital Product Passport (DPP) at the regulatory level. This class enables competent authorities (customs, market surveillance) to trace the origin and transformations of the product up to the European market.

Public properties:
- StepOrder: integer indicating the order of the step in the chain (1 = raw material, n = distribution).
- Role: string describing the role of the actor in the chain (examples: "raw_material", "manufacturing", "assembly", "distribution").
- CompanyName: name of the company involved in this step.
- CompanyGln: GLN GS1 (Global Location Number) of the company.
- CountryCode: ISO 3166-1 alpha-2 country code where the step takes place (e.g., "FR", "CN", "TR").
- SiteGln: GLN GS1 of the production site concerned (optional).


### TypeScript class
```typescript
interface ProductDppSupplyChainStep {
  StepOrder: number; // Order of the step in the chain (1 = raw material, n = distribution)
  Role: string; // Role of the actor in the chain (e.g., 'raw_material', 'manufacturing')
  CompanyName: string; // Name of the company involved
  CompanyGln: string; // GS1 GLN of the company
  CountryCode: string; // ISO 3166-1 alpha-2 country code where the step occurs
  SiteGln?: string; // GS1 GLN of the production site (optional)
}
```