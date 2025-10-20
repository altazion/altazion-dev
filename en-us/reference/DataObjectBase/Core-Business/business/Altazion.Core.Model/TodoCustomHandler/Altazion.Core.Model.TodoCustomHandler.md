## TodoCustomHandler

The TodoCustomHandler class represents a custom handler for processing TODO tasks, allowing to associate a specific action with a task type.

Public properties:
- Guid: Unique identifier of the custom handler.
- TodoKindGuid: Unique identifier of the task type (TodoKindDefinition) associated with this handler.
- Label: Label of the custom handler.
- Description: Detailed description of the handler.
- Section: Organizational section of the handler.
- Plugin: Name of the plugin used to process the task.
- Cell: Name of the cell or visual component used.
- Function: Name of the function to call for processing the task.
- ApplicationGuid: Unique identifier of the associated application, if applicable.
- Url: URL to use for processing the task, if applicable.
- Language: Language code used for this handler (ISO 639-1, e.g., "fr", "en").

### TypeScript class
```typescript
interface TodoCustomHandler {
  Guid: string; // Unique identifier of the custom handler (GUID)
  TodoKindGuid: string; // Unique identifier of the associated task type (GUID)
  Label: string; // Label of the custom handler
  Description: string; // Detailed description of the handler
  Section: string; // Organizational section of the handler
  Plugin: string; // Name of the plugin to process the task
  Cell: string; // Name of the visual component or cell used
  Function: string; // Name of the function called to handle the task
  ApplicationGuid?: string | null; // GUID of the associated application, optional
  Url: string; // URL used for processing the task
  Language: string; // Language code (ISO 639-1)
}
```