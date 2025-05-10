## PackageDefinition

La classe PackageDefinition représente une définition de type de colis logistique.

- Guid : Identifiant unique du type de colis.
- Label : Libellé du type de colis.
- WidthInCm : Largeur du colis en centimètres.
- LengthInCm : Longueur du colis en centimètres.
- HeightInCm : Hauteur du colis en centimètres.
- MaxWeightInGrams : Poids maximum du colis en grammes.
- MaxVolumeInCm3 : Volume maximum du colis en centimètres cubes.
- PaddingPercentage : Pourcentage de bourrage autorisé.
- CartonWeightInGrams : Poids du carton en grammes.
- MaxContentValue : Valeur maximale du contenu du colis, facultative.
- PreparationZoneGuid : Identifiant de la zone de préparation associée, facultatif.

### D�claration TypeScript
```typescript
interface PackageDefinition {
  Guid: string; // Unique identifier of the package type (GUID)
  Label: string; // Label of the package type
  WidthInCm: number; // Width of the package in centimeters
  LengthInCm: number; // Length of the package in centimeters
  HeightInCm: number; // Height of the package in centimeters
  MaxWeightInGrams: number; // Maximum weight of the package in grams
  MaxVolumeInCm3: number; // Maximum volume of the package in cubic centimeters
  PaddingPercentage: number; // Allowed padding percentage
  CartonWeightInGrams: number; // Weight of the carton in grams
  MaxContentValue?: number; // Optional maximum value of the package content
  PreparationZoneGuid?: string; // Optional identifier of the associated preparation zone (GUID)
}
```