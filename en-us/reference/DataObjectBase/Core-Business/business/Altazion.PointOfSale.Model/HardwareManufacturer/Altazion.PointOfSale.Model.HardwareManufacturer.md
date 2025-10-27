## HardwareManufacturer

The HardwareManufacturer class represents a hardware manufacturer or builder (devices and peripherals) used within the point of sale system.

Public properties:
- Guid: Unique identifier (of type Guid) of the manufacturer.
- Label: Name or label of the manufacturer (examples include Zebra, Apple, Samsung, Honeywell).

Useful methods:
- GetKey(): returns the unique key of the object, here its Guid.
- ToString(): returns a textual representation of the manufacturer, its Label.

This class is decorated with the SqlDataConcept attribute linking it to the "pos_hardware_constructeurs" table in the "PointOfSale" database.

### TypeScript class
```typescript
interface HardwareManufacturer {
  /**
   * Unique identifier of the manufacturer.
   */
  Guid: string; // Guid represented as string

  /**
   * Label or name of the manufacturer (e.g., Zebra, Apple, Samsung).
   */
  Label: string | null;
}
```