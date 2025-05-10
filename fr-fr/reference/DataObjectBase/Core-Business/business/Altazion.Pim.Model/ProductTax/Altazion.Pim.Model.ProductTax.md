## ProductTax

La classe ProductTax représente une taxe associée à un produit spécifique. Elle hérite de ProductTaxBase, qui contient les informations principales de la taxe.

Propriétés publiques :
- ProductGuid : Identifiant unique du produit associé à la taxe.
- Guid : Identifiant unique de la taxe (hérité de ProductTaxBase).
- TaxeDefinitionGuid : Identifiant unique de la définition de la taxe (hérité de ProductTaxBase).
- Amount : Montant de la taxe (hérité de ProductTaxBase).

### D�claration TypeScript
```typescript
interface ProductTax {
  ProductGuid: string; // Unique identifier of the associated product
  Guid: string; // Unique identifier of the tax
  TaxeDefinitionGuid: string; // Unique identifier of the tax definition
  Amount: number; // Amount of the tax
}
```