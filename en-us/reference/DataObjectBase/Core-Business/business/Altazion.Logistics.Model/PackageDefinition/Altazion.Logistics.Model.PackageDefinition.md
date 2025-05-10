## PackageDefinition

The PackageDefinition class represents a logistics package type definition.

- Guid: Unique identifier of the package type.
- Label: Label of the package type.
- WidthInCm: Width of the package in centimeters.
- LengthInCm: Length of the package in centimeters.
- HeightInCm: Height of the package in centimeters.
- MaxWeightInGrams: Maximum weight of the package in grams.
- MaxVolumeInCm3: Maximum volume of the package in cubic centimeters.
- PaddingPercentage: Allowed padding percentage.
- CartonWeightInGrams: Weight of the carton in grams.
- MaxContentValue: Maximum value of the package content, optional.
- PreparationZoneGuid: Identifier of the associated preparation zone, optional.

### TypeScript class
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