## PickupPoint

The `PickupPoint` class represents a delivery location (such as a relay point, locker, or parcel locker) where customers can pick up their packages.

Properties:
- `Id`: Unique identifier of the pickup point (GUID).
- `CarrierId`: Identifier of the associated carrier (legacy primary key).
- `Name`: Name of the pickup point.
- `Address`: Full address of the pickup point.
- `PostalCode`: Postal code.
- `City`: City.
- `CountryCode`: 3-letter ISO country code.
- `PlatformLevel1` to `PlatformLevel5`: Platform codes according to the carrier's logistic hierarchy.
- `IsPrimary`: Indicates if this point is the main point in the zone.
- `ExternalCode`: External code of the pickup point (carrier-specific identifier).
- `StartDate`: Start date of the pickup point validity.
- `EndDate`: End date of the pickup point validity.
- `AccessIndications`: Access instructions or additional information.
- `AvailableServices`: Available services at the point (comma-separated).
- `Longitude`: GPS longitude (optional).
- `Latitude`: GPS latitude (optional).
- `PhoneNumber`: Pickup point phone number.
- `IsActive`: Computed property indicating if the point is currently active (current date between StartDate and EndDate).

### TypeScript class
```typescript
interface PickupPoint {
  Id: string; // GUID
  CarrierId: number;
  Name: string;
  Address: string;
  PostalCode: string;
  City: string;
  CountryCode: string;
  PlatformLevel1: string;
  PlatformLevel2: string;
  PlatformLevel3: string;
  PlatformLevel4: string;
  PlatformLevel5: string;
  IsPrimary: boolean;
  ExternalCode: string;
  StartDate: Date;
  EndDate: Date;
  AccessIndications: string;
  AvailableServices: string;
  Longitude?: number | null;
  Latitude?: number | null;
  PhoneNumber: string;
  IsActive: boolean; // Readonly computed property
}
```