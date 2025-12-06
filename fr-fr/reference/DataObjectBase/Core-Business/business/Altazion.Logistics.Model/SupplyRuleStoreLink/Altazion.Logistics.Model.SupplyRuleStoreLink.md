## SupplyRuleStoreLink

La classe SupplyRuleStoreLink représente une liaison entre une règle d'approvisionnement et un magasin spécifique. Elle est utilisée pour définir une sélection fixe de magasins dans une règle d'approvisionnement.

Propriétés publiques :

- Id : Identifiant unique de la liaison, de type Guid.
- TenantId : Identifiant de la raison juridique (tenant), de type int.
- StoreId : Identifiant du magasin lié, de type Guid.
- SupplyRuleId : Identifiant de la règle d'approvisionnement parente, de type Guid.

### D�claration TypeScript
```typescript
interface SupplyRuleStoreLink {
  Id: string; // Unique link identifier (Guid)
  TenantId: number; // Tenant legal reason identifier
  StoreId: string; // Linked store identifier (Guid)
  SupplyRuleId: string; // Parent supply rule identifier (Guid)
}
```