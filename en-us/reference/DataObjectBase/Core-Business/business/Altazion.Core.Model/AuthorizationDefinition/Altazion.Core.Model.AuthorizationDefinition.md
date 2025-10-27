## AuthorizationDefinition

The AuthorizationDefinition class represents the definition of an authorization (permission) available in the security system.

Public properties:
- Guid: Unique identifier of the authorization definition.
- Zone: Application area of the authorization (e.g., "Gestcom").
- Plugin: Plugin or functional module concerned (e.g., "Purchases", "Sales", "Catalog").
- Cell: Cell or sub-module within the plugin (e.g., "Orders", "Invoices").
- Function: Specific function or action (e.g., "Edit", "Create", "Archive").

### TypeScript class
```typescript
interface AuthorizationDefinition {
  Guid: string; // Unique identifier (GUID) of the authorization definition
  Zone?: string; // Application zone of the authorization
  Plugin?: string; // Plugin or functional module concerned
  Cell?: string; // Cell or sub-module in the plugin
  Function?: string; // Specific function or action
}
```