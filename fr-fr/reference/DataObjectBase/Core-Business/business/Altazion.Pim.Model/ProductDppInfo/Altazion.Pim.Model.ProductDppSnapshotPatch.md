## ProductDppSnapshotPatch

Classe représentant une mise à jour partielle d'un snapshot DPP (Passeport Numérique Produit). Seuls les champs non nuls sont appliqués lors de la mise à jour, un champ nul signifiant que la valeur existante ne doit pas être modifiée.

Propriétés publiques :
- AccessLevel : Niveau d'accès requis pour consulter le snapshot.
- Note : Note libre décrivant le contexte du snapshot.
- ValidFrom : Date de début de validité du snapshot.
- ValidTo : Date de fin de validité du snapshot.
- ManufacturingSiteGln : GLN GS1 du site de fabrication.
- ManufacturingCountryCode : Code pays ISO 3166-1 alpha-2 du pays de fabrication.
- Gtins : Liste des GTINs (Global Trade Item Number) spécifiques à ce snapshot.

Données environnementales :
- CarbonFootprint : Empreinte carbone du produit pour ce snapshot.
- RecycledContentPercent : Pourcentage de contenu recyclé dans le produit.
- ExpectedLifespanYears : Durée de vie attendue du produit en années.
- RepairabilityScore : Indice de réparabilité sur 10.
- EnergyEfficiencyClass : Classe d'efficacité énergétique selon EU Energy Label.
- Materials : Liste des matières composant le produit.
- HazardousSubstances : Liste des substances dangereuses présentes.

Conformité & fin de vie :
- ConformityDeclarations : Liste des déclarations de conformité réglementaire.
- EndOfLifeInstructions : Instructions de fin de vie multilingues.

Accès Professional :
- RepairDocuments : Liste des documents techniques de réparation et démontage.
- SpareParts : Liste des pièces détachées disponibles.

Accès Regulatory :
- SupplyChain : Étapes de la chaîne d'approvisionnement.

Emballage & labels environnementaux :
- Packaging : Informations sur l'emballage (matériau, recyclabilité).
- EnvironmentalLabels : Labels environnementaux et certifications écologiques associés.

### D�claration TypeScript
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