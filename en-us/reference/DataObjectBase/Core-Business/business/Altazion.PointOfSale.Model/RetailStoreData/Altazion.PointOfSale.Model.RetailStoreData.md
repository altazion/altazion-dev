## RetailStoreData

The RetailStoreData class represents retail-specific data for a store, including technical information such as WiFi network details.

Public properties include:
- StoreId: a unique Guid identifying the store (matches mag_guid in the pos_magasins table).
- RangeId: an optional Guid representing the range associated with the store.
- StoreRegionId: an optional Guid for the store region zone to which the store belongs.
- PublicIpAddress: a string containing the public IP address of the store.
- LocalCentralUrl: a string containing the URL of the store's local central server.
- WifiSsid: a string representing the WiFi network SSID of the store.
- WifiSecurityType: a string indicating the WiFi security type (e.g., WPA2, WPA3).
- WifiCertificate: a string containing the WiFi network security certificate.

This class inherits from DataObjectBase and provides a method to obtain the unique key of the object, which is the StoreId.

### TypeScript class
```typescript
interface RetailStoreData {
  StoreId: string; // Guid in string format
  RangeId?: string | null; // Optional Guid
  StoreRegionId?: string | null; // Optional Guid
  PublicIpAddress?: string | null;
  LocalCentralUrl?: string | null;
  WifiSsid?: string | null;
  WifiSecurityType?: string | null;
  WifiCertificate?: string | null;
}
```