## StoreDevice

The StoreDevice class represents a store equipment device such as a kiosk, tablet, or payment terminal. It includes the following properties:

- Guid: Unique identifier of the device.
- DeviceType: Device type code (3 characters).
- StoreId: Identifier of the store the device belongs to (nullable).
- Label: Descriptive label of the device.
- IpAddress: IP address of the device.
- CashRegisterId: Identifier of the cash register associated with the device (nullable).
- Status: Status code of the device (1 character).
- ParentDeviceId: Identifier of a parent device for hierarchy (nullable).
- LastUpdateTimestamp: Timestamp of the device's last update.
- CallbackUrl: Callback URL for device notifications.
- IsMovable: Indicates whether the device is movable.
- DepartmentId: Identifier of the department where the device is located (nullable).
- IsInUse: Indicates if the device is currently in use.
- Code: Short code of the device.
- ConfigurationJson: JSON configuration of the device.
- Description: Detailed description of the device.
- Orientation: Orientation of the device (e.g., portrait, landscape).

This class inherits from DataObjectBase and stores all essential information to manage store devices linked to the point of sale.

### TypeScript class
```typescript
interface StoreDevice {
  Guid: string; // Unique identifier of the device
  DeviceType: string; // Device type code (3 characters)
  StoreId?: string | null; // Store identifier (nullable)
  Label: string; // Descriptive label
  IpAddress: string; // IP address
  CashRegisterId?: string | null; // Associated cash register identifier (nullable)
  Status: string; // Status code (1 character)
  ParentDeviceId?: string | null; // Parent device identifier (nullable)
  LastUpdateTimestamp: Date; // Timestamp of last update
  CallbackUrl: string; // Callback URL
  IsMovable: boolean; // Is device movable
  DepartmentId?: string | null; // Department identifier (nullable)
  IsInUse: boolean; // Is currently in use
  Code: string; // Short code
  ConfigurationJson: string; // JSON configuration
  Description: string; // Detailed description
  Orientation: string; // Orientation (e.g., portrait, landscape)
}
```