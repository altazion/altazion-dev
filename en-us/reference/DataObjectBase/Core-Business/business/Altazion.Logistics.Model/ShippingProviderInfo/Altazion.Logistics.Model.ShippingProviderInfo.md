## ShippingProviderInfo

The ShippingProviderInfo class represents detailed information of a shipping provider.

- Id: Unique identifier of the shipping provider information (GUID).
- TransportProviderId: Identifier of the associated transport provider (integer).
- Origin: Origin of the provider information (string).
- ExpeditorName: Name of the sender (string).
- ExpeditorAddress: Address of the sender (string).
- ExpeditorPostalCode: Postal code of the sender (string).
- ExpeditorCity: City of the sender (string).
- ExpeditorCountryCode: Country code of the sender (string).
- ExpeditorNumber: Sender's number (string).
- PlateformCode: Code of the platform associated with the provider (string).
- LocationCode: Code of the depot associated with the provider (string).

### TypeScript class
```typescript
interface ShippingProviderInfo {
  Id: string; // GUID (unique identifier)
  TransportProviderId: number;
  Origin?: string | null;
  ExpeditorName?: string | null;
  ExpeditorAddress?: string | null;
  ExpeditorPostalCode?: string | null;
  ExpeditorCity?: string | null;
  ExpeditorCountryCode?: string | null;
  ExpeditorNumber?: string | null;
  PlateformCode?: string | null;
  LocationCode?: string | null;
}
```