## AppTrigger

The AppTrigger class represents an application event trigger that can be used by webhooks. It includes the following properties:

- Guid: Unique identifier (GUID) of the trigger.
- Category: Trigger category, for example "Order", "Customer", "Product".
- Code: Unique code of the trigger.
- Label: Label of the trigger.
- Description: Detailed description of the trigger.
- Namespaces: Namespaces separated by commas or semicolons.
- QueueName: Name of the queue for event processing.

This class inherits from DataObjectBase and overrides data validation to ensure certain properties are required and have maximum lengths:
- Category is required, max length 50.
- Code is required, max length 100.
- Label is required, max length 250.
- QueueName is required, max length 100.
- Namespaces is optional, max length 1000.

The unique key of the object is the Guid. Properties are initialized from a DataRow with specific column names (e.g. "ett_guid", "ett_categorie", etc.).

### TypeScript class
```typescript
interface AppTrigger {
  Guid: string; // GUID unique identifier
  Category: string; // Category of the trigger (e.g. "Order", "Customer", "Product")
  Code: string; // Unique code of the trigger
  Label: string; // Label of the trigger
  Description?: string; // Optional detailed description
  Namespaces?: string; // Optional namespaces as comma or semicolon separated string
  QueueName: string; // Name of the processing queue
}
```