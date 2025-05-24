## Store

Class representing a store in the Altazion system.

Properties:
- Guid: Unique identifier of the store (Guid).
- Code: Store identification code (string).
- Label: Name or label of the store (string).
- StreetAddress: Street address of the store (string).
- PostalCode: Postal code of the store (string).
- City: City where the store is located (string).
- CountryIso3LettersCode: 3-letter ISO country code representing the store's country (string).
- Latitude: Geographic latitude of the store (nullable decimal).
- Longitude: Geographic longitude of the store (nullable decimal).
- GeoZone: Geographic or catchment area zone of the store (string).
- Phone: Phone number of the store (string).
- MessageForClients: Message or note intended for the store's clients (string).
- IsClickNMortarEnable: Boolean indicating if Click & Mortar is enabled for the store (true/false).
- IsShippingDestination: Boolean indicating if the store is a shipping destination (true/false).
- StoreType: Type of store, with predefined constants:
    - StoreTypeInternal = "INTEG" (internal store)
    - StoreTypeAffiliate = "AFFIL" (affiliate store)
    - StoreTypeFranchise = "FRANC" (franchise store)
- OpeningDate: Store opening date (nullable DateTimeOffset).
- ClosingDate: Store closing date (nullable DateTimeOffset).
- IsArchived: Indicates whether the store is archived (true/false).

### TypeScript class
```typescript
interface Store {
  Guid: string; // GUID unique identifier
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
  StoreType?: string | null; // Expected values: "INTEG", "AFFIL", "FRANC"
  OpeningDate?: string | null; // ISO 8601 date string
  ClosingDate?: string | null; // ISO 8601 date string
  IsArchived: boolean;
}

// Constants representing store types
const StoreTypeInternal = "INTEG";
const StoreTypeAffiliate = "AFFIL";
const StoreTypeFranchise = "FRANC";
```