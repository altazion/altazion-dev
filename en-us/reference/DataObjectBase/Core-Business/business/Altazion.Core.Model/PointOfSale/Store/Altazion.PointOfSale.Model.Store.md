## Store

Represents a store (physical point of sale).

Public properties:
- Guid: Unique identifier of the store (GUID).
- Code: Store code.
- Label: Store label.
- StreetAddress: Postal address of the store.
- PostalCode: Postal code of the store.
- City: City of the store.
- CountryIso3LettersCode: 3-letter ISO country code of the store.
- Latitude: Geographic latitude of the store (nullable).
- Longitude: Geographic longitude of the store (nullable).
- GeoZone: Geographic zone of the store.
- Phone: Phone number of the store.
- MessageForClients: Message intended for clients.
- IsClickNMortarEnable: Indicates if the store is enabled for Click'n'Mortar.
- IsShippingDestination: Indicates if the store is a shipping destination.
- StoreType: Store type (internal, affiliate, franchise).
- OpeningDate: Store opening date (nullable).
- ClosingDate: Store closing date (nullable).
- IsArchived: Indicates if the store is archived.

Constants:
- StoreTypeInternal: "INTEG" (internal store type).
- StoreTypeAffiliate: "AFFIL" (affiliate store type).
- StoreTypeFranchise: "FRANC" (franchise store type).

### TypeScript class
```typescript
interface Store {
  Guid: string; // UUID
  Code?: string | null;
  Label: string;
  StreetAddress?: string | null;
  PostalCode?: string | null;
  City?: string | null;
  CountryIso3LettersCode?: string | null;
  Latitude?: number | null;
  Longitude?: number | null;
  GeoZone?: string | null;
  Phone?: string | null;
  MessageForClients?: string | null;
  IsClickNMortarEnable: boolean;
  IsShippingDestination: boolean;
  StoreType?: string | null;
  OpeningDate?: string | null; // ISO 8601 string for DateTimeOffset
  ClosingDate?: string | null; // ISO 8601 string for DateTimeOffset
  IsArchived: boolean;
}

// Constants
const StoreTypeInternal = "INTEG";
const StoreTypeAffiliate = "AFFIL";
const StoreTypeFranchise = "FRANC";
```