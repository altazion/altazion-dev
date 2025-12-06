## OrderProcessingStep

This class represents a processing step of an order form in the preparation workflow.

- Id: Unique identifier of the processing step (Guid).
- OrderId: Unique identifier of the associated order (Guid).
- RailCode: Code of the rail/workflow (e.g., P for Preparation, E for Shipment), of type string.
- Status: Current status in the rail, as a string.
- StartDate: Start date of the step, of type DateTimeOffset.
- EndDate: End date of the step, optional (nullable), of type DateTimeOffset?.
- IsInError: Indicates if the step is in error, boolean.
- Message: Error or informational message about the step, string.
- IsProcessed: Indicates if the step has been processed/completed, boolean.

### TypeScript class
```typescript
interface OrderProcessingStep {
  Id: string; // Guid
  OrderId: string; // Guid
  RailCode: string | null;
  Status: string | null;
  StartDate: string; // ISO String for DateTimeOffset
  EndDate?: string | null; // Nullable DateTimeOffset
  IsInError: boolean;
  Message: string | null;
  IsProcessed: boolean;
}
```