## SupplyRuleSupplierLink

La classe `SupplyRuleSupplierLink` représente une liaison entre une règle d'approvisionnement et un fournisseur spécifique. Elle est utilisée pour définir une sélection fixe de fournisseurs dans une règle d'approvisionnement.

Propriétés publiques :
- `Id` (Guid) : Identifiant unique de la liaison.
- `TenantId` (int) : Identifiant de la raison juridique (tenant).
- `SupplierId` (Guid) : Identifiant du fournisseur lié à la règle.
- `SupplyRuleId` (Guid) : Identifiant de la règle d'approvisionnement parente.

Chaque propriété est requise et fait partie de la validation interne de l'objet.

### D�claration TypeScript
```typescript
interface SupplyRuleSupplierLink {
  Id: string; // GUID unique identifier of the link
  TenantId: number; // Identifier of the tenant/legal entity
  SupplierId: string; // GUID of the linked supplier
  SupplyRuleId: string; // GUID of the parent supply rule
}
```