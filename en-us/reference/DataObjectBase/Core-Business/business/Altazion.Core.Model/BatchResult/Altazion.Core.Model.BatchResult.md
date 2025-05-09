The BatchResult class represents the result of a batch in the system.

Properties:
- Guid: Unique identifier of the batch, of type Guid.
- BatchType: Type of the batch (string).
- AssociatedObjectGuid: Optional unique identifier of the object associated with the batch, of nullable Guid type.
- Date: Date and time when the batch was executed, of type DateTimeOffset.
- Result: Result of the batch, as a string.
- Status: Current status of the batch, as a string.

Constants:
- BatchStatusCompleted: indicates the batch has completed, value "completed".
- BatchStatusRunning: indicates the batch is still running, value "running".