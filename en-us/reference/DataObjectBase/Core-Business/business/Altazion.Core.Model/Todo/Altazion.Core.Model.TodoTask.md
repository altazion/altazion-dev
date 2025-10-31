## TodoTask

The TodoTask class represents a task to be performed along with its details and metadata. It includes the following properties:

- Guid: Unique identifier of the task (Guid type).
- TypeGuid: Unique identifier of the task type (Guid type).
- Label: Label or title of the task (string type).
- Details: Details or description of the task (string type).
- AssociatedUrl: URL associated with the task (string type).
- TargetGuid: Unique identifier of the associated target (nullable Guid).
- TargetType: Type of the associated target (string type).
- CompletionDate: Date when the task was completed (nullable DateTime).
- Comment1, Comment2, Comment3: Three comments associated with the task (string types).
- Priority: Priority level of the task (int type).
- IsUrgent: Indicates if the task is urgent (bool type).
- RecipientUserId: Unique identifier of the user recipient of the task (nullable Guid).
- RecipientGroupGuid: Unique identifier of the recipient group (nullable Guid).
- IsContextLimited: Indicates if the task is limited to a specific context (bool type).
- Parameters: Indicates if the task contains parameters (bool type).
- PriorityLabel: Computed property that returns a dynamic label for the task priority based on the task's completion status and urgency.
- IsCompleted: Indicates if the task is completed (true if CompletionDate has a value).
- DueDate: Due date of the task (nullable DateTime).
- RequestDate: Date when the task was created or requested (DateTime type).
- RequesterUserId: Unique identifier of the user who requested the task (nullable Guid).

The class also defines several static constants providing pre-defined priority labels: OverdueLabel, LowPriorityLabel, NormalPriorityLabel, CriticalPriorityLabel, UrgentPriorityLabel.

The ToString() method returns the task label (Label).

This class inherits from DataObjectBase and is decorated with the SqlDataConcept attribute, indicating its mapping to a SQL table named "profils_todo" in the "Office" context and "Todo" category.

### TypeScript class
```typescript
interface TodoTask {
  Guid: string; // Unique identifier of the task
  TypeGuid: string; // Unique identifier of the task type
  Label: string; // Label or title of the task
  Details: string; // Details or description of the task
  AssociatedUrl: string; // URL associated with the task
  TargetGuid?: string | null; // Unique identifier of the associated target
  TargetType: string; // Type of the associated target
  CompletionDate?: string | null; // Completion date in ISO string format
  Comment1: string; // First comment
  Comment2: string; // Second comment
  Comment3: string; // Third comment
  Priority: number; // Priority level
  IsUrgent: boolean; // Whether the task is urgent
  RecipientUserId?: string | null; // Unique ID of user recipient
  RecipientGroupGuid?: string | null; // Unique ID of recipient group
  IsContextLimited: boolean; // Whether task is context limited
  Parameters: boolean; // Whether task contains parameters
  IsCompleted: boolean; // Whether the task is completed
  DueDate?: string | null; // Due date in ISO string format
  RequestDate: string; // Request or creation date in ISO string format
  RequesterUserId?: string | null; // Unique ID of user who requested the task
}
```