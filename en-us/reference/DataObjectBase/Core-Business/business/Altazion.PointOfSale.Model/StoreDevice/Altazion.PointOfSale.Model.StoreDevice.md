## StoreDevice

The StoreDevice class represents an in-store equipment such as a kiosk, tablet, payment terminal, etc. It includes the following properties:

- Guid: Unique identifier of the device.
- DeviceType: Device type (3-character code).
- StoreId: Identifier of the store to which the device belongs.
- Label: Descriptive label of the device.
- IpAddress: IP address of the device.
- CashRegisterId: Identifier of the cash register associated with the device.
- Status: Status of the device (1-character code).
- ParentDeviceId: Identifier of the parent device for equipment hierarchy.
- LastUpdateTimestamp: Timestamp of the last update.
- CallbackUrl: Callback URL for device notifications.
- IsMovable: Indicates if the device is movable.
- DepartmentId: Identifier of the department where the device is located.
- IsInUse: Indicates if the device is currently in use.
- Code: Short code of the device.
- ConfigurationJson: JSON configuration of the device.
- Description: Detailed description of the device.
- Orientation: Orientation of the device (e.g., "portrait", "landscape").

### TypeScript class
```typescript
interface StoreDevice {
  Guid: string;
  DeviceType: string | null;
  StoreId?: string | null;
  Label: string | null;
  IpAddress: string | null;
  CashRegisterId?: string | null;
  Status: string | null;
  ParentDeviceId?: string | null;
  LastUpdateTimestamp: Date;
  CallbackUrl: string | null;
  IsMovable: boolean;
  DepartmentId?: string | null;
  IsInUse: boolean;
  Code: string | null;
  ConfigurationJson: string | null;
  Description: string | null;
  Orientation: string | null;
}
```