## ProductTaxBase

Classe représentant une taxe associée à un produit avec ses informations de base.

Propriétés publiques :

- Guid : Identifiant unique de la taxe.
- TaxeDefinitionGuid : Identifiant unique de la définition de la taxe.
- Amount : Montant de la taxe.

Description : Cette classe contient les informations essentielles d'une taxe liée à un produit, telles que son identifiant unique, la référence à la définition de la taxe, et le montant de la taxe appliquée.

### D�claration TypeScript
```typescript
interface ProductTaxBase {
  /** Unique identifier of the tax. */
  Guid: string;
  /** Unique identifier of the tax definition. */
  TaxeDefinitionGuid: string;
  /** Amount of the tax. */
  Amount: number;
}
```