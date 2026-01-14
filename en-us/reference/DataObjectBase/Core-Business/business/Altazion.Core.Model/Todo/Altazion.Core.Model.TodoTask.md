## TodoTask

The `TodoTask` class represents a task to be performed with its details and metadata.

Public properties:
- `Guid`: Unique identifier of the task.
- `TypeGuid`: Unique identifier of the task type.
- `Label`: The label or title of the task.
- `Details`: Details or description of the task.
- `AssociatedUrl`: URL associated with the task.
- `TargetGuid`: Optional unique identifier of the associated target.
- `TargetType`: Type of the associated target.
- `CompletionDate`: The date when the task was completed, nullable.
- `Comment1`, `Comment2`, `Comment3`: Three comments associated with the task.
- `Priority`: Priority level of the task (integer).
- `IsUrgent`: Indicates if the task is urgent (boolean).
- `RecipientUserId`: Optional unique identifier of the recipient user.
- `RecipientGroupGuid`: Optional unique identifier of the recipient group.
- `IsContextLimited`: Indicates if the task is context limited (boolean).
- `Parameters`: Indicates if the task has parameters (boolean).
- `PriorityLabel`: Dynamically computed string label for the task's priority, based on its status (completed, overdue, low, normal, urgent, critical).
- Static labels `OverdueLabel`, `LowPriorityLabel`, `NormalPriorityLabel`, `CriticalPriorityLabel`, `UrgentPriorityLabel`: predefined labels for various urgency levels.
- `IsCompleted`: Indicates if the task is completed (true if `CompletionDate` has a value).
- `DueDate`: Task's due date, nullable.
- `RequestDate`: Date the task was created or requested.
- `RequesterUserId`: Optional unique identifier of the user who requested the task.

Methods:
- `ToString()` returns the label of the task.

This class encapsulates all relevant information to represent, manage, and track a task within the Altazion system.

### TypeScript class
```typescript
interface TodoTask {
  Guid: string; // Unique identifier (GUID) of the task
  TypeGuid: string; // Unique identifier (GUID) of the task type
  Label: string; // Label or title of the task
  Details?: string; // Optional details or description
  AssociatedUrl?: string; // Optional URL associated with the task
  TargetGuid?: string | null; // Optional GUID of the associated target
  TargetType?: string | null; // Optional target type
  CompletionDate?: string | null; // Optional completion date (ISO string)
  Comment1?: string | null;
  Comment2?: string | null;
  Comment3?: string | null;
  Priority: number; // Priority level
  IsUrgent: boolean; // If the task is urgent
  RecipientUserId?: string | null; // Optional GUID of recipient user
  RecipientGroupGuid?: string | null; // Optional GUID of recipient group
  IsContextLimited: boolean; // If task is context limited
  Parameters: boolean; // If task has parameters
  // PriorityLabel is a computed readonly property based on other fields
  DueDate?: string | null; // Optional due date
  RequestDate: string; // Creation/request date (ISO string)
  RequesterUserId?: string | null; // Optional GUID of requester user
  IsCompleted: boolean; // Computed readonly property, true if CompletionDate is set
}

```