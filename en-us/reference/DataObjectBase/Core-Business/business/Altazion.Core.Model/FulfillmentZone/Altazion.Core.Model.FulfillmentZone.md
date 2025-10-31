## FulfillmentZone

The FulfillmentZone class represents a logistics preparation zone such as a warehouse, a store, or a pickup point.

Public properties:
- Guid: Unique identifier (GUID) of the fulfillment zone.
- Label: The label/name of the fulfillment zone.
- ShortName: Short name for the zone.
- IsDefault: Indicates if this zone is the default zone.
- IsActive: Indicates if the zone is active.
- PreparationDelayInDays: Preparation delay expressed in days.
- LegalEntityId: Identifier of the legal entity (company) associated, nullable.
- Name: Name of the zone for addressing purposes.
- Address: Postal address of the zone.
- PostalCode: The postal code.
- City: The city.
- CountryCode: The ISO 3-letter country code.
- Phone: Phone number.
- Email: Email address.
- IsActiveForShipFromStore: Indicates if the zone is active for Ship From Store operations.
- ShipFromStorePoints: Points assigned for Ship From Store selection algorithm, nullable.
- ShipFromStorePriority: Priority for Ship From Store, nullable.
- ShipFromStorePreparationRate: Preparation rate (cost) for Ship From Store, nullable.

This class includes validation mechanisms regarding required fields and maximum string lengths. It derives from DataObjectBase, allowing it to support data validation and retrieval of the unique key (here, the Guid).

### TypeScript class
```typescript
interface FulfillmentZone {
  Guid: string; // GUID unique identifier
  Label: string; // Zone label
  ShortName?: string; // Short name (optional)
  IsDefault: boolean; // Is default zone
  IsActive: boolean; // Is active zone
  PreparationDelayInDays: number; // Preparation delay in days
  LegalEntityId?: number | null; // Nullable legal entity ID
  Name?: string; // Name for the address (optional)
  Address?: string; // Postal address (optional)
  PostalCode?: string; // Postal code (optional)
  City?: string; // City (optional)
  CountryCode?: string; // ISO3 country code (optional)
  Phone?: string; // Phone number (optional)
  Email?: string; // Email address (optional)
  IsActiveForShipFromStore: boolean; // Active for Ship From Store
  ShipFromStorePoints?: number | null; // Nullable points for Ship From Store
  ShipFromStorePriority?: number | null; // Nullable priority for Ship From Store
  ShipFromStorePreparationRate?: number | null; // Nullable preparation rate for Ship From Store
}
```