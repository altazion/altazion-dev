## StoreDevice

The StoreDevice class represents an in-store device such as a kiosk, tablet, or payment terminal.

Public properties:

- Guid: Unique identifier of the device.
- DeviceType: Device type code with 3 characters.
- StoreId: Identifier of the store owning the device (nullable).
- Label: Descriptive label of the device.
- IpAddress: IP address of the device.
- CashRegisterId: Identifier of the cash register associated with the device (nullable).
- Status: Device status code with 1 character.
- ParentDeviceId: Identifier of the parent device for equipment hierarchy (nullable).
- LastUpdateTimestamp: Timestamp of the last update of the device.
- CallbackUrl: Callback URL for device notifications.
- IsMovable: Indicates if the device is movable.
- DepartmentId: Identifier of the department where the device is located (nullable).
- IsInUse: Indicates if the device is currently in use.
- Code: Short code of the device.
- ConfigurationJson: JSON configuration of the device.
- Description: Detailed description of the device.
- Orientation: Device orientation (e.g., "portrait" or "landscape").

### TypeScript class
```typescript
interface StoreDevice {
  Guid: string; // Unique identifier (UUID) of the device
  DeviceType: string | null; // Type of device (3-char code)
  StoreId?: string | null; // Store identifier (UUID)
  Label: string | null; // Descriptive label
  IpAddress: string | null; // IP address
  CashRegisterId?: string | null; // Cash register ID (UUID)
  Status: string | null; // Status code (1 char)
  ParentDeviceId?: string | null; // Parent device ID (UUID)
  LastUpdateTimestamp: string; // Last update timestamp (ISO 8601 string)
  CallbackUrl: string | null; // Callback URL
  IsMovable: boolean; // Whether the device is movable
  DepartmentId?: string | null; // Department ID (UUID)
  IsInUse: boolean; // Whether the device is in use
  Code: string | null; // Short code
  ConfigurationJson: string | null; // JSON configuration
  Description: string | null; // Detailed description
  Orientation: string | null; // Orientation (eg. "portrait", "landscape")
}
```