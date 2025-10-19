## TodoTask

The TodoTask class represents a task to be done with its details and associated metadata.

Public properties:
- Guid: Unique identifier of the task (Guid).
- TypeGuid: Unique identifier of the task type (Guid).
- Label: Label or title of the task (string).
- Details: Details or description of the task (string).
- AssociatedUrl: URL related to the task (string).
- TargetGuid: Optional unique identifier of the associated target (Guid?).
- TargetType: Type of the associated target (string).
- CompletionDate: Optional date when the task was completed (DateTime?).
- Comment1, Comment2, Comment3: Three optional comments associated with the task (string).
- Priority: Priority level of the task (int).
- IsUrgent: Indicates if the task is urgent (bool).
- RecipientUserId: Optional unique identifier of the user recipient (Guid?).
- RecipientGroupGuid: Optional unique identifier of the recipient group (Guid?).
- IsContextLimited: Indicates if the task is limited to a specific context (bool).
- Parameters: Indicates if the task contains parameters (bool).
- PriorityLabel: Label of the task priority, dynamically calculated (string, read-only).
- IsCompleted: Indicates if the task is completed, based on CompletionDate (bool, read-only).
- DueDate: Optional due date of the task (DateTime?).
- RequestDate: Date when the task was created or requested (DateTime).
- RequesterUserId: Optional unique identifier of the user who requested the task (Guid?).

Static constants provide possible priority labels:
- OverdueLabel (overdue tasks)
- LowPriorityLabel (low priority)
- NormalPriorityLabel (normal priority)
- CriticalPriorityLabel (critical priority)
- UrgentPriorityLabel (urgent priority)

The class inherits from DataObjectBase and overrides the FromDataRow method to initialize its properties from a data row.
It also overrides GetKey to return the unique task identifier Guid.
The ToString method returns the Label of the task.

### TypeScript class
```typescript
interface TodoTask {
  Guid: string;
  TypeGuid: string;
  Label: string | null;
  Details: string | null;
  AssociatedUrl: string | null;
  TargetGuid?: string | null;
  TargetType: string | null;
  CompletionDate?: string | null; // DateTime in ISO string format
  Comment1: string | null;
  Comment2: string | null;
  Comment3: string | null;
  Priority: number;
  IsUrgent: boolean;
  RecipientUserId?: string | null;
  RecipientGroupGuid?: string | null;
  IsContextLimited: boolean;
  Parameters: boolean;
  PriorityLabel: string;
  IsCompleted: boolean;
  DueDate?: string | null; // DateTime in ISO string format
  RequestDate: string; // DateTime in ISO string format
  RequesterUserId?: string | null;
}
```