## CarrierPickupBatch

This class represents a carrier's package pickup batch.

Public properties:
- Id: Unique identifier of the batch.
- CreationDate: The creation date of the batch.
- CarrierId: Identifier of the carrier provider (legacy primary key).
- IsTransmitted: Indicates whether the batch has been transmitted to the carrier.
- ErrorCode: Error code if there was a transmission problem.
- ErrorMessage: Error message if there was a transmission problem.
- Number: Batch number.
- PickupDate: Scheduled or actual pickup date by the carrier.
- PreparationZoneGuid: Unique identifier of the preparation zone.

### TypeScript class
```typescript
interface CarrierPickupBatch {
  Id: string; // Guid
  CreationDate: string; // DateTimeOffset
  CarrierId: number;
  IsTransmitted: boolean;
  ErrorCode: string | null;
  ErrorMessage: string | null;
  Number: string | null;
  PickupDate?: string | null; // DateTimeOffset nullable
  PreparationZoneGuid?: string | null; // Guid nullable
}
```