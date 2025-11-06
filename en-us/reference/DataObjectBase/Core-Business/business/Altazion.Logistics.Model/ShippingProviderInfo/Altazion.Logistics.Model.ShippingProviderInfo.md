## ShippingProviderInfo

The ShippingProviderInfo class represents detailed information about a shipping provider.

Public properties:
- Id: Unique identifier of the shipping provider information (Guid).
- ProviderId: Identifier of the associated shipping provider (int).
- Origin: Origin of the provider information (string).
- ExpeditorName: Name of the sender (string).
- ExpeditorAddress: Address of the sender (string).
- ExpeditorPostalCode: Postal code of the sender (string).
- ExpeditorCity: City of the sender (string).
- ExpeditorCountryCode: Country code of the sender (string).
- ExpeditorNumber: Number of the sender (string).
- PlateformCode: Code of the platform associated with the provider (string).
- LocationCode: Code of the depot associated with the provider (string).

### TypeScript class
```typescript
interface ShippingProviderInfo {
  Id: string; // Guid as string
  ProviderId: number;
  Origin: string | null;
  ExpeditorName: string | null;
  ExpeditorAddress: string | null;
  ExpeditorPostalCode: string | null;
  ExpeditorCity: string | null;
  ExpeditorCountryCode: string | null;
  ExpeditorNumber: string | null;
  PlateformCode: string | null;
  LocationCode: string | null;
}
```