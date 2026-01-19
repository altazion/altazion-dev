## FulfillmentZonePlanning

The FulfillmentZonePlanning class represents a planning entry for a fulfillment zone, defining the percentage of preparation capacity available for a given date.

Public properties:
- Id (Guid): Unique identifier of the planning entry.
- Date (DateTimeOffset): Date of the planning entry.
- FulfillmentZoneId (Guid): Unique identifier of the fulfillment zone concerned.
- OperatingPercentage (short): Percentage of available preparation workforce, where 100% means normal capacity, 0% means closed, and greater than 100% means reinforced capacity.
- IsClosed (bool): Indicates if the zone is closed on that day (true if OperatingPercentage == 0).
- IsReducedCapacity (bool): Indicates if the zone operates at reduced capacity (true if OperatingPercentage > 0 and < 100).

This class models the availability and operational capacity of a fulfillment zone for a specific date, useful for resource planning.

### TypeScript class
```typescript
interface FulfillmentZonePlanning {
  /** Identifiant unique de l'entrée de planning */
  Id: string; // GUID
  /** Date du planning */
  Date: string; // DateTimeOffset as ISO string
  /** Identifiant de la zone de préparation concernée */
  FulfillmentZoneId: string; // GUID
  /** Pourcentage de la force de préparation disponible (0-100+, 100 = normal) */
  OperatingPercentage: number; // short
  /** Indique si la zone est fermée ce jour (OperatingPercentage = 0) */
  IsClosed: boolean;
  /** Indique si la zone fonctionne à capacité réduite (0 < OperatingPercentage < 100) */
  IsReducedCapacity: boolean;
}
```