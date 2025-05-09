## BatchResult

The BatchResult class represents the outcome of a batch process, including several key details about its execution and status.

Public properties:
- Guid: Unique identifier of the batch.
- BatchType: The type/category of the batch.
- AssociatedObjectGuid: Unique identifier of the object associated with the batch, if any.
- Date: Date and time when the batch was run.
- Result: The final result or output of the batch.
- Status: The current status of the batch.

Associated constants:
- BatchStatusCompleted: The value "completed" indicates that the batch processing is finished.
- BatchStatusRunning: The value "running" indicates that the batch is still in progress.

### TypeScript class
```json
interface BatchResult {
  Guid: string; // Unique identifier (GUID) of the batch
  BatchType: string; // Type of the batch
  AssociatedObjectGuid?: string | null; // Optional GUID of an associated object
  Date: string; // Date and time of batch execution in ISO format
  Result: string; // Result of the batch execution
  Status: string; // Current status of the batch
}

// Constants related to batch status
const BatchStatusCompleted = "completed";
const BatchStatusRunning = "running";
```