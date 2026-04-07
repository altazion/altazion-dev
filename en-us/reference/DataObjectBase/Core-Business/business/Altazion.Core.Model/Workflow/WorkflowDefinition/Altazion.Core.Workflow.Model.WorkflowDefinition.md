## WorkflowDefinition

Defines a workflow persisted in MongoDB, stored in the collection `{RjsId}_workflow_definitions`.

Public properties:
- `Id`: Unique identifier of the workflow definition (Guid).
- `RjsId`: Tenant identifier owning this workflow (int).
- `Name`: Readable name of the workflow (string).
- `Description`: Optional description of the workflow (string).
- `EntryStepId`: Identifier of the first step to execute within the workflow (string).
- `Steps`: List of all steps constituting the workflow (List<WorkflowStepDefinition>).
- `CreatedAt`: Creation date and time (DateTimeOffset, defaults to UTC Now).
- `UpdatedAt`: Last modification date and time (DateTimeOffset, defaults to UTC Now).

Trigger related properties:
- `TriggerSourceType`: Type of source triggering this workflow (WorkflowTriggerSourceType). When set to `Event`, both `TriggerCategory` and `TriggerEventCode` are mandatory.
- `TriggerCategory`: Category of the triggering event (e.g., "order", "customer"), ignored if trigger source is Manual.
- `TriggerEventCode`: Code of the triggering event (e.g., "Created", "Validated"), ignored if trigger source is Manual.
- `TriggerContactMapping`: Mappings used to build the contact identity from the triggering event JSON payload (List<ContactFieldMapping>).

Notes:
The class inherits from `NoSqlDataObjectBase` and is annotated with MongoDB DataConcept `WorkflowDefinition`.

### TypeScript class
```typescript
interface WorkflowDefinition {
  Id: string; // GUID
  RjsId: number;
  Name: string;
  Description?: string;
  EntryStepId?: string;
  Steps: WorkflowStepDefinition[];
  CreatedAt: string; // ISO 8601 Date string
  UpdatedAt: string; // ISO 8601 Date string

  TriggerSourceType: WorkflowTriggerSourceType;
  TriggerCategory?: string;
  TriggerEventCode?: string;
  TriggerContactMapping: ContactFieldMapping[];
}

enum WorkflowTriggerSourceType {
  Manual = 0,
  Event = 1
}
```