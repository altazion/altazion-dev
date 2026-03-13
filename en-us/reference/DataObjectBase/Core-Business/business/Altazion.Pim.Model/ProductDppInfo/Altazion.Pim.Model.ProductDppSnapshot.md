## ProductDppSnapshot

Class representing a snapshot of Digital Product Passport (DPP) data valid for a given period and manufacturing origin. The same product may have multiple active snapshots simultaneously if different GTINs or sites have different compositions.

Public properties:
- SnapshotId: Unique identifier for the snapshot, used for explicit linking from ProductUnitPassport.DppSnapshotId.
- ValidFrom: Start date of validity (null means since the product's origin).
- ValidTo: End date of validity (null means still ongoing).
- ManufacturingSiteGln: GS1 GLN of the manufacturing site concerned by this snapshot (null means all sites).
- ManufacturingCountryCode: ISO 3-letter country code of manufacturing (null means all countries).
- Gtins: List of GTINs specific to this snapshot. If empty, snapshot applies to all product GTINs.
- AccessLevel: Minimum access level required to view this snapshot (default Internal).
- Note: Free note describing the context of this snapshot.
- RecalledBatches: List of recalled batches in the snapshot context.
- CarbonFootprint: Carbon footprint of the product for this origin/period.
- Materials: Material composition of the product for this origin/period.
- RecycledContentPercent: Percentage of recycled content in the product.
- ExpectedLifespanYears: Expected lifespan of the product in years.
- RepairabilityScore: Repairability score out of 10.
- EnergyEfficiencyClass: Energy efficiency class (EU Energy Label).
- HazardousSubstances: List of hazardous substances present in the product.
- ConformityDeclarations: Regulatory conformity declarations associated.
- EndOfLifeInstructions: Multilingual end-of-life instructions.
- RepairDocuments: Technical repair and disassembly documents (professional access).
- SpareParts: Spare parts available (professional access).
- SupplyChain: Supply chain steps (regulatory access).
- Packaging: Packaging info complying with ESPR eco-design requirements.
- EnvironmentalLabels: Environmental labels and ecological certifications.

Method:
- IsActiveAt(date): Determines if this snapshot is active at the given date.

### TypeScript class
```typescript
interface ProductDppSnapshot {
  SnapshotId: string; // Guid
  ValidFrom?: string | null; // DateOnly nullable
  ValidTo?: string | null; // DateOnly nullable
  ManufacturingSiteGln?: string | null;
  ManufacturingCountryCode?: string | null;
  Gtins: string[];
  AccessLevel: number; // DppAccessLevel enum number
  Note?: string | null;
  RecalledBatches: ProductDppRecalledBatch[];
  CarbonFootprint?: ProductDppCarbonFootprint | null;
  Materials: ProductDppMaterial[];
  RecycledContentPercent?: number | null;
  ExpectedLifespanYears?: number | null;
  RepairabilityScore?: number | null;
  EnergyEfficiencyClass?: string | null;
  HazardousSubstances: ProductDppHazardousSubstance[];
  ConformityDeclarations: ProductDppConformityDeclaration[];
  EndOfLifeInstructions: ProductDppEndOfLifeInstruction[];
  RepairDocuments: ProductDppRepairDocument[];
  SpareParts: ProductDppSparePart[];
  SupplyChain: ProductDppSupplyChainStep[];
  Packaging: ProductDppPackagingInfo[];
  EnvironmentalLabels: ProductDppEnvironmentalLabel[];
  IsActiveAt(date: string): boolean;
}

// Note: DateOnly typed properties are strings in ISO date format (YYYY-MM-DD).
```