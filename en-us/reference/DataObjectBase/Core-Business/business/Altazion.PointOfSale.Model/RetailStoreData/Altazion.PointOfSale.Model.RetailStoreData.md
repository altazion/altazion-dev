## RetailStoreData

The RetailStoreData class represents retail-specific data for a store, including key technical and network information.

Public Properties:
- StoreId (Guid): Unique identifier of the store (matches mag_guid in the pos_magasins table).
- RangeId (Guid?): Optional identifier of the product range associated with the store.
- StoreRegionId (Guid?): Optional identifier of the store region to which this store belongs.
- PublicIpAddress (string): Public IP address of the store.
- LocalCentralUrl (string): URL of the store's local central server.
- WifiSsid (string): SSID of the store's WiFi network.
- WifiSecurityType (string): Security type of the WiFi network (e.g., "WPA2", "WPA3").
- WifiCertificate (string): Security certificate for the WiFi network.

This class inherits from DataObjectBase and is marked with a SQL data concept attribute referencing the pos_magasins table.

### TypeScript class
```typescript
interface RetailStoreData {
  StoreId: string; // Guid representing the unique store identifier
  RangeId?: string | null; // Optional Guid for the associated product range
  StoreRegionId?: string | null; // Optional Guid for the store region
  PublicIpAddress?: string | null; // Public IP address of the store
  LocalCentralUrl?: string | null; // URL of the local central server
  WifiSsid?: string | null; // SSID of the WiFi network
  WifiSecurityType?: string | null; // Security type of the WiFi (e.g. WPA2, WPA3)
  WifiCertificate?: string | null; // Security certificate for the WiFi
}
```