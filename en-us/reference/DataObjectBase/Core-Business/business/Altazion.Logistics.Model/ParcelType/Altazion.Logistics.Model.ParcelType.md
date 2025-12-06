## ParcelType

The ParcelType class represents a type of parcel/box available for shipping with its specific dimensions and constraints.

Public Properties:
- Id (Guid): Unique identifier of the parcel type.
- Label (string): Label or name of the parcel type.
- WidthInCm (decimal): Width of the box in centimeters.
- LengthInCm (decimal): Length of the box in centimeters.
- HeightInCm (decimal): Height of the box in centimeters.
- MaxWeightInGrams (decimal): Maximum weight of the content in grams.
- MaxVolumeInCm3 (decimal): Maximum volume of the content in cubic centimeters.
- PaddingPercentage (decimal): Padding percentage, representing volume loss due to cushioning/protection.
- BoxWeightInGrams (decimal): Weight of the empty box in grams.
- MaxContentValue (decimal?, optional): Maximum allowed value of the content (for insurance purposes).
- FulfillmentZoneId (Guid?, optional): Identifier of the associated fulfillment zone.
- UsableVolumeInCm3 (decimal, read only): Usable volume available in cm³, accounting for padding (automatically calculated).

### TypeScript class
```typescript
interface ParcelType {
  Id: string; // Unique identifier (GUID)
  Label: string; // Label of the parcel type
  WidthInCm: number; // Width in centimeters
  LengthInCm: number; // Length in centimeters
  HeightInCm: number; // Height in centimeters
  MaxWeightInGrams: number; // Maximum weight in grams
  MaxVolumeInCm3: number; // Maximum volume in cubic centimeters
  PaddingPercentage: number; // Padding percentage (0-100)
  BoxWeightInGrams: number; // Weight of empty box in grams
  MaxContentValue?: number | null; // Optional maximum content value
  FulfillmentZoneId?: string | null; // Optional GUID of fulfillment zone
  UsableVolumeInCm3: number; // Computed usable volume in cubic centimeters
}
```