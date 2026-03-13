## ProductDppSnapshot

Classe représentant un snapshot des données du Passeport Numérique Produit (DPP) valable pour une période et une origine de fabrication données. Un même produit peut avoir plusieurs snapshots actifs simultanément si des GTINs ou sites différents ont des compositions différentes.

Propriétés publiques :
- SnapshotId : Identifiant unique du snapshot, utilisé pour le lien explicite depuis ProductUnitPassport.DppSnapshotId.
- ValidFrom : Date de début de validité (null signifie depuis l'origine du produit).
- ValidTo : Date de fin de validité (null signifie toujours en cours).
- ManufacturingSiteGln : GLN GS1 du site de fabrication concerné par ce snapshot (null = tous les sites).
- ManufacturingCountryCode : Code pays ISO 3 lettres du pays de fabrication (null = tous les pays).
- Gtins : Liste des GTINs spécifiques à ce snapshot. Si vide, le snapshot s'applique à tous les GTINs du produit.
- AccessLevel : Niveau d'accès minimum requis pour consulter ce snapshot (par défaut Internal).
- Note : Note libre décrivant le contexte du snapshot.
- RecalledBatches : Liste des lots rappelés dans le cadre de ce snapshot.
- CarbonFootprint : Empreinte carbone du produit pour cette origine/période.
- Materials : Composition matières du produit pour cette origine/période.
- RecycledContentPercent : Pourcentage de matière recyclée dans le produit.
- ExpectedLifespanYears : Durée de vie attendue du produit en années.
- RepairabilityScore : Indice de réparabilité sur 10.
- EnergyEfficiencyClass : Classe d'efficacité énergétique selon EU Energy Label.
- HazardousSubstances : Liste des substances dangereuses présentes dans le produit.
- ConformityDeclarations : Déclarations de conformité réglementaire associées.
- EndOfLifeInstructions : Instructions de fin de vie multilingues.
- RepairDocuments : Documents techniques de réparation et de démontage (accès professional).
- SpareParts : Pièces détachées disponibles (accès professional).
- SupplyChain : Étapes de la chaîne d'approvisionnement (accès regulatory).
- Packaging : Informations d'emballage conformément aux exigences ESPR.
- EnvironmentalLabels : Labels environnementaux et certifications écologiques.

Méthode :
- IsActiveAt(date) : Détermine si ce snapshot est actif à la date donnée.

### D�claration TypeScript
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