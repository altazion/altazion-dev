The BatchResult class represents the outcome of a batch process within the system, including key information such as its unique identifier, type, associated object, execution date, result, and current status.

Public properties:
- Guid: Unique identifier of the batch.
- BatchType: Type of the batch.
- AssociatedObjectGuid: Optional unique identifier of the object associated with the batch.
- Date: The date and time when the batch was executed.
- Result: Final result of the batch.
- Status: Current status of the batch, typically "completed" or "running".

Public constants:
- BatchStatusCompleted: status value indicating the batch is completed ("completed").
- BatchStatusRunning: status value indicating the batch is currently running ("running").