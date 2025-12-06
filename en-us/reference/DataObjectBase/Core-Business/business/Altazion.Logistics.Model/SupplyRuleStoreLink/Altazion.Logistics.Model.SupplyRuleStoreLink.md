## SupplyRuleStoreLink

The SupplyRuleStoreLink class represents a link between a supply rule and a specific store. It is used to define a fixed selection of stores within a supply rule.

Public properties:

- Id: Unique identifier of the link, of type Guid.
- TenantId: Identifier of the legal entity (tenant), of type int.
- StoreId: Identifier of the linked store, of type Guid.
- SupplyRuleId: Identifier of the parent supply rule, of type Guid.

### TypeScript class
```typescript
interface SupplyRuleStoreLink {
  Id: string; // Unique link identifier (Guid)
  TenantId: number; // Tenant legal reason identifier
  StoreId: string; // Linked store identifier (Guid)
  SupplyRuleId: string; // Parent supply rule identifier (Guid)
}
```