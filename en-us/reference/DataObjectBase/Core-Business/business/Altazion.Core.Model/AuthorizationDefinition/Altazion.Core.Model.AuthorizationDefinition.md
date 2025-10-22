## AuthorizationDefinition

The AuthorizationDefinition class represents the definition of an authorization (right) available in the security system. It has the following public properties:

- Guid: Unique identifier for the authorization definition.
- Zone: Application area of the authorization (e.g., "Gestcom").
- Plugin: Plugin or functional module concerned (e.g., "Purchases", "Sales", "Catalog").
- Cell: Cell or sub-module within the plugin (e.g., "Orders", "Invoices").
- Function: Specific function or action (e.g., "Edit", "Create", "Archive").

This class can initialize its properties from a DataRow and provides a unique key corresponding to its Guid. It also overrides ToString() to return a string representing the combination of Zone / Plugin / Cell / Function.

### TypeScript class
```typescript
interface AuthorizationDefinition {
  Guid: string; // Unique identifier (GUID) of the authorization definition
  Zone?: string; // Application area of the authorization
  Plugin?: string; // Plugin or functional module concerned
  Cell?: string; // Cell or sub-module in the plugin
  Function?: string; // Specific function or action
}
```