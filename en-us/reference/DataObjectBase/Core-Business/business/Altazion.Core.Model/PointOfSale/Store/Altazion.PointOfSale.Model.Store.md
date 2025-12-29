## Store

Represents a store (physical point of sale).

Properties:
- Guid: Unique identifier of the store.
- Code: Store code.
- Label: Store label.
- StreetAddress: Postal address of the store.
- PostalCode: Postal code of the store.
- City: City of the store.
- CountryIso3LettersCode: 3-letter ISO country code of the store.
- Latitude: Geographical latitude of the store.
- Longitude: Geographical longitude of the store.
- GeoZone: Geographical zone of the store.
- Phone: Phone number of the store.
- Email: Email address of the store.
- MessageForClients: Message intended for clients.
- IsClickNMortarEnable: Indicates if the store is enabled for Click'n'Mortar.
- IsShippingDestination: Indicates if the store is a shipping destination.
- AcceptsPickup: Indicates if the store accepts in-store pickup (Click & Collect).
- AcceptsShipFromStore: Indicates if the store accepts Ship-From-Store (shipping from the store).
- StoreType: Type of the store (internal, affiliate, franchise).
- OpeningDate: Opening date of the store.
- ClosingDate: Closing date of the store.
- IsArchived: Indicates if the store is archived.
- StoreChainId: Identifier of the store chain to which the store belongs.
- ManagerName: Name of the store manager.
- ManagerEmail: Email address of the store manager.
- ManagerPhone: Phone number of the store manager.

Constants:
- StoreTypeInternal: Constant for internal store type.
- StoreTypeAffiliate: Constant for affiliate store type.
- StoreTypeFranchise: Constant for franchise store type.

### TypeScript class
```typescript
interface Store {
  Guid: string; // Unique identifier of the store (GUID)
  Code?: string; // Store code
  Label: string; // Store label
  StreetAddress?: string; // Postal address of the store
  PostalCode?: string; // Postal code of the store
  City?: string; // City of the store
  CountryIso3LettersCode?: string; // 3-letter ISO country code
  Latitude?: number | null; // Geographical latitude
  Longitude?: number | null; // Geographical longitude
  GeoZone?: string; // Geographical zone
  Phone?: string; // Phone number
  Email?: string; // Email address
  MessageForClients?: string; // Message intended for clients
  IsClickNMortarEnable: boolean; // Enabled for Click'n'Mortar
  IsShippingDestination: boolean; // Is a shipping destination
  AcceptsPickup: boolean; // Accepts in-store pickup (Click & Collect)
  AcceptsShipFromStore: boolean; // Accepts Ship-From-Store
  StoreType?: string; // Store type (internal, affiliate, franchise)
  OpeningDate?: string | null; // Opening date in ISO format
  ClosingDate?: string | null; // Closing date in ISO format
  IsArchived: boolean; // Is archived
  StoreChainId?: string | null; // Identifier of the store chain
  ManagerName?: string; // Name of the store manager
  ManagerEmail?: string; // Email of the store manager
  ManagerPhone?: string; // Phone of the store manager
}

const StoreTypeInternal = "INTEG";
const StoreTypeAffiliate = "AFFIL";
const StoreTypeFranchise = "FRANC";
```