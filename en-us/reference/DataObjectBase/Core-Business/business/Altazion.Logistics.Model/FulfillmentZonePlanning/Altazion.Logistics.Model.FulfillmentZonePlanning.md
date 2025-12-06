## FulfillmentZonePlanning

The FulfillmentZonePlanning class represents a planning entry for a fulfillment zone, defining the percentage of preparation capacity available for a given date.

- Id: Unique identifier of the planning entry (Guid).
- Date: Date of the planning (DateTime).
- FulfillmentZoneId: Identifier of the concerned fulfillment zone (Guid).
- OperatingPercentage: Percentage of available preparation workforce (short). 100% means normal capacity, 0% means closed, and over 100% indicates enhanced capacity.
- IsClosed: Computed property indicating if the zone is closed on that day (bool, true if OperatingPercentage = 0).
- IsReducedCapacity: Computed property indicating if the zone operates at reduced capacity (bool, true if 0 < OperatingPercentage < 100).

### TypeScript class
```typescript
interface FulfillmentZonePlanning {
  id: string; // Unique identifier of the planning entry (Guid)
  date: string; // Date of the planning (ISO string)
  fulfillmentZoneId: string; // Identifier of the fulfillment zone (Guid)
  operatingPercentage: number; // Percentage of preparation capacity (0-100+)
  isClosed: boolean; // True if operatingPercentage == 0
  isReducedCapacity: boolean; // True if 0 < operatingPercentage < 100
}
```