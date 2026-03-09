## PickupPoint

The PickupPoint class represents a delivery point (such as a relay point, locker, or parcel locker) where customers can pick up their packages. It contains the following properties:

- Id: Unique identifier of the delivery point (Guid).
- CarrierId: Identifier of the associated carrier (legacy primary key, int).
- Name: Name of the delivery point (string).
- Address: Full address of the delivery point (string).
- PostalCode: Postal code (string).
- City: City (string).
- CountryCode: 3-letter ISO country code (string).
- PlatformLevel1 through PlatformLevel5: Logistics platform codes from level 1 to 5 (string).
- IsPrimary: Indicates if this point is the main point in the area (bool).
- ExternalCode: External code of the delivery point, carrier identifier (string).
- StartDate: Start date of the delivery point validity (DateTimeOffset).
- EndDate: End date of the delivery point validity (DateTimeOffset).
- AccessIndications: Access directions or additional information (string).
- AvailableServices: Available services, comma-separated (string).
- Longitude: GPS longitude (nullable decimal).
- Latitude: GPS latitude (nullable decimal).
- PhoneNumber: Phone number of the delivery point (string).
- IsActive: Computed property that indicates if the point is currently active (current date is between StartDate and EndDate).

This class also performs data validation, including required fields and maximum length constraints.

### TypeScript class
```typescript
interface PickupPoint {
  Id: string; // Guid
  CarrierId: number;
  Name: string;
  Address: string;
  PostalCode: string;
  City: string;
  CountryCode: string;
  PlatformLevel1: string | null;
  PlatformLevel2: string | null;
  PlatformLevel3: string | null;
  PlatformLevel4: string | null;
  PlatformLevel5: string | null;
  IsPrimary: boolean;
  ExternalCode: string | null;
  StartDate: string; // DateTimeOffset ISO string
  EndDate: string;   // DateTimeOffset ISO string
  AccessIndications: string | null;
  AvailableServices: string | null;
  Longitude: number | null;
  Latitude: number | null;
  PhoneNumber: string | null;
  readonly IsActive: boolean;
}
```