## ProductDppSnapshotPatch

Class representing a partial update (patch) to a DPP (Digital Product Passport) snapshot. Only non-null fields are applied during the update; a null field means the existing value should remain unchanged.

Public properties:
- AccessLevel: Required access level to view the snapshot.
- Note: Free text note describing the snapshot context.
- ValidFrom: Start date of the snapshot's validity period.
- ValidTo: End date of the snapshot's validity period.
- ManufacturingSiteGln: GS1 GLN of the manufacturing site.
- ManufacturingCountryCode: ISO 3166-1 alpha-2 country code of the manufacturing country.
- Gtins: List of GTINs (Global Trade Item Numbers) specific to this snapshot.

Environmental data:
- CarbonFootprint: Carbon footprint of the product for this snapshot.
- RecycledContentPercent: Percentage of recycled content in the product.
- ExpectedLifespanYears: Expected product lifespan in years.
- RepairabilityScore: Repairability score out of 10.
- EnergyEfficiencyClass: Energy efficiency class according to EU Energy Label.
- Materials: List of materials composing the product.
- HazardousSubstances: List of hazardous substances present.

Conformity & end of life:
- ConformityDeclarations: Regulatory conformity declarations.
- EndOfLifeInstructions: Multilingual end-of-life instructions.

Professional access:
- RepairDocuments: List of technical repair and disassembly documents.
- SpareParts: List of available spare parts.

Regulatory access:
- SupplyChain: Steps in the supply chain.

Packaging & environmental labels:
- Packaging: Packaging information (material, recyclability).
- EnvironmentalLabels: Environmental labels and ecological certifications associated.

### TypeScript class
```typescript
interface ProductDppSnapshotPatch {
  AccessLevel?: DppAccessLevel;
  Note?: string;
  ValidFrom?: string; // DateOnly format YYYY-MM-DD
  ValidTo?: string; // DateOnly format YYYY-MM-DD
  ManufacturingSiteGln?: string;
  ManufacturingCountryCode?: string;
  Gtins?: string[];

  CarbonFootprint?: ProductDppCarbonFootprint;
  RecycledContentPercent?: number;
  ExpectedLifespanYears?: number;
  RepairabilityScore?: number;
  EnergyEfficiencyClass?: string;
  Materials?: ProductDppMaterial[];
  HazardousSubstances?: ProductDppHazardousSubstance[];

  ConformityDeclarations?: ProductDppConformityDeclaration[];
  EndOfLifeInstructions?: ProductDppEndOfLifeInstruction[];

  RepairDocuments?: ProductDppRepairDocument[];
  SpareParts?: ProductDppSparePart[];

  SupplyChain?: ProductDppSupplyChainStep[];

  Packaging?: ProductDppPackagingInfo[];
  EnvironmentalLabels?: ProductDppEnvironmentalLabel[];
}

// Supporting interfaces should be declared similarly, based on their definitions.
```