## TodoKindDefinition

The TodoKindDefinition class represents the definition of a TODO task type including its parameters and execution classes.

Public properties:
- Guid: Unique identifier of the task type definition.
- MessageGuid: Unique identifier of the associated message.
- IsAssignedToGroup: Indicates if the task is assigned to a group.
- RecipientGroupGuid: Unique identifier of the recipient group (if IsAssignedToGroup is true).
- RecipientUserId: Unique identifier of the recipient user (if IsAssignedToGroup is false).
- Parameter: JSON parameter or raw text used for task configuration.
- BatchClass: Full name of the class (namespace.class, assembly) for batch execution.
- InteractiveClass: Full name of the class (namespace.class, assembly) for interactive execution.
- Ignore: Indicates if this definition should be ignored (disabled).
- Label: Label of the task.
- IsAvailableForMobile: Indicates if this task is available for mobile applications.
- Details: Details or description of the task.
- Category: Task category (e.g., "Commercial", "Logistics", etc.).
- IsContextLimited: Indicates if the task is limited to the current context.
- Options: Additional JSON options for advanced configuration.

### TypeScript class
```typescript
interface TodoKindDefinition {
  Guid: string; // Unique identifier of the task type definition
  MessageGuid: string; // Unique identifier of the associated message
  IsAssignedToGroup: boolean; // Indicates if the task is assigned to a group
  RecipientGroupGuid?: string | null; // Unique identifier of the recipient group (if assigned to group)
  RecipientUserId?: string | null; // Unique identifier of the recipient user (if not assigned to group)
  Parameter?: string | null; // JSON parameter or raw text for configuration
  BatchClass?: string | null; // Full class name for batch execution
  InteractiveClass?: string | null; // Full class name for interactive execution
  Ignore: boolean; // Indicates if definition is ignored (disabled)
  Label?: string | null; // Task label
  IsAvailableForMobile: boolean; // Availability for mobile applications
  Details?: string | null; // Task details or description
  Category?: string | null; // Task category
  IsContextLimited: boolean; // Is the task limited to current context
  Options?: string | null; // Additional JSON options for advanced configuration
}
```