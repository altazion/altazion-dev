## SupplyRuleSupplierLink

The `SupplyRuleSupplierLink` class represents a link between a supply rule and a specific supplier. It is used to define a fixed selection of suppliers within a supply rule.

Public properties:
- `Id` (Guid): Unique identifier of the link.
- `TenantId` (int): Identifier of the legal entity (tenant).
- `SupplierId` (Guid): Identifier of the linked supplier.
- `SupplyRuleId` (Guid): Identifier of the parent supply rule.

Each property is required and validated internally by the object.

### TypeScript class
```typescript
interface SupplyRuleSupplierLink {
  Id: string; // GUID unique identifier of the link
  TenantId: number; // Identifier of the tenant/legal entity
  SupplierId: string; // GUID of the linked supplier
  SupplyRuleId: string; // GUID of the parent supply rule
}
```