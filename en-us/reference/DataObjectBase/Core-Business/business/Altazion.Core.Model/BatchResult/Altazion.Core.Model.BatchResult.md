## BatchResult

The BatchResult class represents the result of a batch process, including the following information:

- Guid: Unique identifier of the batch.
- BatchType: Type of the batch.
- AssociatedObjectGuid: Unique identifier of an associated object, if any.
- Date: Date and time when the batch was executed.
- Result: Textual result of the batch.
- Status: Current status of the batch as a string.

Constants defined in the class:
- BatchStatusCompleted: Indicates the batch is completed (value "completed").
- BatchStatusRunning: Indicates the batch is still running (value "running").

### TypeScript class
```typescript
interface BatchResult {
  Guid: string; // Unique identifier of the batch (GUID)
  BatchType: string | null; // Type of the batch
  AssociatedObjectGuid?: string | null; // Optional associated object's GUID
  Date: string; // Date and time of batch execution (ISO 8601 format)
  Result: string | null; // Result of the batch
  Status: string | null; // Current status of the batch
}

// Constants representing batch status
const BatchStatusCompleted = "completed";
const BatchStatusRunning = "running";
```