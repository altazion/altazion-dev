## PickupPoint

The PickupPoint class represents a delivery point (relay point, locker, locker box, etc.) where customers can pick up their parcels.

Public properties:
- Id: Unique identifier of the pickup point (Guid).
- CarrierId: Identifier of the associated carrier (legacy primary key) (int).
- Name: Name of the pickup point (string).
- Address: Full address of the pickup point (string).
- PostalCode: Postal code (string).
- City: City (string).
- CountryCode: ISO 3-letter country code (string).
- PlatformLevel1 to PlatformLevel5: Logistics platform codes at levels 1 to 5 (string).
- IsPrimary: Indicates if this point is the primary point in its zone (bool).
- ExternalCode: External code of the pickup point (carrier identifier) (string).
- StartDate: Start date of the pickup point validity (DateTimeOffset).
- EndDate: End date of the pickup point validity (DateTimeOffset).
- AccessIndications: Access instructions or additional information (string).
- AvailableServices: Available services, separated by commas (string).
- Longitude: GPS longitude (decimal?).
- Latitude: GPS latitude (decimal?).
- PhoneNumber: Phone number of the pickup point (string).
- IsActive: Indicates whether the pickup point is currently active (bool, computed based on current date between StartDate and EndDate).

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
  PlatformLevel1?: string;
  PlatformLevel2?: string;
  PlatformLevel3?: string;
  PlatformLevel4?: string;
  PlatformLevel5?: string;
  IsPrimary: boolean;
  ExternalCode?: string;
  StartDate: string; // ISO date string
  EndDate: string; // ISO date string
  AccessIndications?: string;
  AvailableServices?: string;
  Longitude?: number | null;
  Latitude?: number | null;
  PhoneNumber?: string;
  IsActive: boolean;
}
```