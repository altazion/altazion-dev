## ExtensibilityContribution

The ExtensibilityContribution class represents an extensibility contribution, i.e. a custom application extension. It includes the following properties:

- Guid: Unique identifier of the contribution (type Guid).
- Type: The type of contribution, such as "WebHook", "CustomScript", "Plugin", etc. (type string).
- Content: The content of the contribution, usually JSON or code (type string).
- ModifiedAt: Date and time of the last modification of the contribution (type DateTimeOffset).

This class provides the unique key via the Guid property and can be initialized from a data row (DataRow). Its string representation mainly consists of its type followed by its Guid.

### TypeScript class
```typescript
interface ExtensibilityContribution {
  Guid: string; // Unique identifier (UUID string)
  Type: string | null; // Type of the contribution like "WebHook", "CustomScript", etc.
  Content: string | null; // Content of the contribution, usually JSON or code
  ModifiedAt: string; // ISO string representing last modification date-time
}
```