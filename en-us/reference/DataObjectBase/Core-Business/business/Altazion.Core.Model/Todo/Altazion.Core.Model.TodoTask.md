## TodoTask

The TodoTask class represents a task to be done with its details and metadata.

- Guid: Unique identifier of the task.
- TypeGuid: Unique identifier of the task type.
- Label: Label or title of the task.
- Details: Details or description of the task.
- AssociatedUrl: URL associated with the task.
- TargetGuid: Optional unique identifier of the associated target.
- TargetType: Type of the associated target.
- CompletionDate: Optional date when the task was completed.
- Comment1: First comment associated with the task.
- Comment2: Second comment associated with the task.
- Comment3: Third comment associated with the task.
- Priority: Task priority level (integer).
- IsUrgent: Indicates if the task is urgent (boolean).
- RecipientUserId: Optional unique identifier of the recipient user.
- RecipientGroupGuid: Optional unique identifier of the recipient group.
- IsContextLimited: Indicates if the task is limited to a specific context.
- Parameters: Indicates if the task has parameters.
- PriorityLabel: Dynamically calculated label representing the priority as text based on state and numeric priority.
- IsCompleted: Indicates if the task is completed (boolean, based on CompletionDate).
- DueDate: Optional due date for the task.
- RequestDate: Date the task was created or requested.
- RequesterUserId: Optional unique identifier of the user who requested the task.

Static constants (priority labels):
- OverdueLabel: Label for overdue tasks.
- LowPriorityLabel: Label for low priority tasks.
- NormalPriorityLabel: Label for normal priority tasks.
- CriticalPriorityLabel: Label for critical priority tasks.
- UrgentPriorityLabel: Label for urgent priority tasks.

The ToString method returns the task's label.

The FromDataRow method initializes an instance from a data row.

The GetKey method returns the unique identifier (Guid) of the task.

### TypeScript class
```typescript
interface TodoTask {
  Guid: string; // Unique identifier (GUID) of the task
  TypeGuid: string; // Unique identifier of the type of task
  Label: string; // Task label or title
  Details?: string | null; // Optional details or description
  AssociatedUrl?: string | null; // Optional URL associated with the task
  TargetGuid?: string | null; // Optional unique identifier of the associated target
  TargetType?: string | null; // Optional target type string
  CompletionDate?: string | null; // Optional completion date (ISO string)
  Comment1?: string | null; // Optional first comment
  Comment2?: string | null; // Optional second comment
  Comment3?: string | null; // Optional third comment
  Priority: number; // Priority level
  IsUrgent: boolean; // Is task urgent
  RecipientUserId?: string | null; // Optional recipient user ID
  RecipientGroupGuid?: string | null; // Optional recipient group ID
  IsContextLimited: boolean; // Is task context limited
  Parameters: boolean; // Does task contain parameters
  PriorityLabel: string; // Calculated priority label
  IsCompleted: boolean; // Is task completed
  DueDate?: string | null; // Optional due date
  RequestDate: string; // Request or creation date
  RequesterUserId?: string | null; // Optional requester user ID
}

// Static priority labels (strings)
const TodoTask_OverdueLabel: string;
const TodoTask_LowPriorityLabel: string;
const TodoTask_NormalPriorityLabel: string;
const TodoTask_CriticalPriorityLabel: string;
const TodoTask_UrgentPriorityLabel: string;
```