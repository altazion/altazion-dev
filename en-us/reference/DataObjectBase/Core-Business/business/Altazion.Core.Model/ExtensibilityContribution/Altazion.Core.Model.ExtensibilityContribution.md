## ExtensibilityContribution

The ExtensibilityContribution class represents an extensibility contribution, that is a customized application extension within the system.

Public properties:
- Guid: Unique identifier of the contribution.
- Type: Type of the contribution (e.g., "WebHook", "CustomScript", "Plugin", etc.).
- Content: Content of the contribution, usually JSON or code.
- ModifiedAt: Date and time of the last modification of the contribution.

Important inherited methods (not detailed here):
- GetKey(): Returns the unique identifier (Guid) of the contribution.

This class encapsulates the necessary information to manage custom extensions in the Altazion platform.

### TypeScript class
```typescript
interface ExtensibilityContribution {
  Guid: string; // Unique identifier (UUID) of the contribution
  Type: string | null; // Type of the contribution (e.g., "WebHook", "CustomScript", "Plugin")
  Content: string | null; // Content of the contribution, typically JSON or code
  ModifiedAt: string; // ISO string representation of the modification date and time
}
```