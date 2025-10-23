## ExtensibilityContribution

The ExtensibilityContribution class represents an extensibility contribution, i.e., a custom application extension within the Altazion system.

Public properties:
- Guid: Unique identifier of the contribution of type Guid.
- Type: The type of the contribution (e.g., "WebHook", "CustomScript", "Plugin", etc.), as a string.
- Content: Content of the contribution, generally JSON or code, as a string.
- ModifiedAt: Date and time of the last modification of the contribution, of type DateTime.

Notable methods:
- GetKey(): Returns the unique key of the object, here the Guid identifier.
- FromDataRow(DataRow dr): Initializes the object's properties from a data row from a SQL source.
- ToString(): Returns a string representation of the contribution showing the type and the Guid.

### TypeScript class
```typescript
interface ExtensibilityContribution {
  Guid: string; // Unique identifier (GUID as string)
  Type: string | null; // Contribution type (e.g., 'WebHook', 'CustomScript', etc.)
  Content: string | null; // Contribution content (usually JSON or code)
  ModifiedAt: string; // Date-time of last modification (ISO 8601 string)
}
```