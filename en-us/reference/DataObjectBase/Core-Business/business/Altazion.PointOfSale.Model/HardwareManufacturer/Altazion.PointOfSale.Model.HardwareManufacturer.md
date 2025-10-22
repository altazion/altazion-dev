## HardwareManufacturer

The HardwareManufacturer class represents a hardware manufacturer or builder (devices and peripherals) within the PointOfSale solution.

Public properties:
- Guid: Unique identifier of the manufacturer.
- Label: Name label of the manufacturer, e.g., Zebra, Apple, Samsung, Honeywell.

Important methods:
- GetKey(): Retrieves the unique key of the object, here the Guid.
- ToString(): Returns a string representation of the manufacturer, here its label.

This class is mapped to a SQL table named pos_hardware_constructeurs in the PointOfSale database.

### TypeScript class
```typescript
interface HardwareManufacturer {
  /** Unique identifier of the manufacturer */
  Guid: string; // Guid represented as string
  /** Name label of the manufacturer, e.g., Zebra, Apple, Samsung, Honeywell */
  Label: string | null;
}
```