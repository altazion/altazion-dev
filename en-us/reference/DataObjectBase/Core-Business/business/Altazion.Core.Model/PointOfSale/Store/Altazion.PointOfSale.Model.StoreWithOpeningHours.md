## StoreWithOpeningHours

The StoreWithOpeningHours class represents a store including its opening hours. It inherits from the Store class and adds one property:

- OpeningHours: a list of StoreOpeningHours objects representing the store's opening hours.

Inherited from Store, this class also has the following properties:
- Guid: unique identifier for the store (Guid).
- Code: store code (string).
- Label: store name or label (string).
- StreetAddress: postal address (string).
- PostalCode: postal code (string).
- City: city (string).
- CountryIso3LettersCode: country ISO 3-letter code (string).
- Latitude: geographic latitude (decimal?).
- Longitude: geographic longitude (decimal?).
- GeoZone: geographic zone (string).
- Phone: phone number (string).
- MessageForClients: message for clients (string).
- IsClickNMortarEnable: boolean indicating whether the store supports click and mortar (bool).
- IsShippingDestination: boolean indicating whether the store is a shipping destination (bool).
- StoreType: type of store (string), e.g., internal, affiliate, franchise.
- OpeningDate: store opening date (DateTimeOffset?).
- ClosingDate: store closing date (DateTimeOffset?).
- IsArchived: boolean indicating whether the store is archived (bool).

### TypeScript class
```typescript
interface StoreWithOpeningHours {
  Guid: string; // unique identifier (UUID)
  Code: string | null;
  Label: string;
  StreetAddress: string | null;
  PostalCode: string | null;
  City: string | null;
  CountryIso3LettersCode: string | null;
  Latitude: number | null;
  Longitude: number | null;
  GeoZone: string | null;
  Phone: string | null;
  MessageForClients: string | null;
  IsClickNMortarEnable: boolean;
  IsShippingDestination: boolean;
  StoreType: string | null;
  OpeningDate: string | null; // ISO 8601 date string
  ClosingDate: string | null; // ISO 8601 date string
  IsArchived: boolean;
  OpeningHours: StoreOpeningHours[];
}

// Note: StoreOpeningHours interface needs to be defined separately.
```