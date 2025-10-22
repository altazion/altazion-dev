## StoreRegion

The StoreRegion class represents a store area used for the administrative or geographical segmentation of stores in the system.

Public properties:
- Guid: Unique identifier of the store area (type Guid).
- Label: Name or label of the store area (type string).
- Code: Code representing the store area (type string).
- CountryIso3LettersCode: ISO 3-letter country code of the area (type string).
- HasAffiliates: Indicates whether the area contains affiliated stores (type bool).
- HasOtherBrands: Indicates whether the area contains stores of other brands (type bool).
- StoreVisibilityThreshold: Quantity threshold for in-store stock visibility (type decimal?, nullable).
- StoreAvailabilityThreshold: Quantity threshold for in-store stock availability (type decimal?, nullable).
- CrossChannelVisibilityThreshold: Quantity threshold for cross-channel stock visibility (other stores) (type decimal?, nullable).
- CrossChannelAvailabilityThreshold: Quantity threshold for cross-channel stock availability (other stores) (type decimal?, nullable).

This class inherits from DataObjectBase and is marked with the SqlDataConcept attribute for database persistence management.

Key methods:
- GetKey(): returns the unique identifier (Guid) of the store area.
- FromDataRow(DataRow): initializes properties from a data row.
- ToString(): returns a string representation of the store area's label or code.

### TypeScript class
```typescript
interface StoreRegion {
  Guid: string; // Unique identifier
  Label: string | null; // Name or label of the store region
  Code: string | null; // Code of the store region
  CountryIso3LettersCode: string | null; // ISO 3-letter country code
  HasAffiliates: boolean; // Indicates presence of affiliated stores
  HasOtherBrands: boolean; // Indicates presence of other branded stores
  StoreVisibilityThreshold?: number | null; // Threshold for in-store stock visibility
  StoreAvailabilityThreshold?: number | null; // Threshold for in-store stock availability
  CrossChannelVisibilityThreshold?: number | null; // Threshold for cross-channel stock visibility
  CrossChannelAvailabilityThreshold?: number | null; // Threshold for cross-channel stock availability
}
```