## ProductTaxBase

Classe représentant une taxe associée à un produit avec ses informations de base.

Propriétés publiques :
- Guid : Identifiant unique de la taxe (type Guid).
- TaxeDefinitionGuid : Identifiant unique de la définition de la taxe (type Guid).
- Amount : Montant de la taxe (type decimal).

Cette classe dérive de DataObjectBase, elle implémente la méthode GetKey() qui retourne la clé unique de l'objet, ici l'identifiant unique de la taxe (Guid). Elle initialise également ses propriétés à partir d'une DataRow via la méthode FromDataRow.

### D�claration TypeScript
```typescript
interface ProductTaxBase {
  Guid: string; // Unique identifier of the tax (UUID string)
  TaxeDefinitionGuid: string; // Unique identifier of the tax definition (UUID string)
  Amount: number; // Amount of the tax
}
```