## ProductReferenceBase

Classe représentant une référence de produit avec ses informations de base.

Propriétés publiques :
- Reference : chaîne de caractères représentant la référence du produit.
- Kind : chaîne de caractères indiquant le type ou la catégorie de la référence.
- IsMainReference : booléen indiquant si cette référence est la référence principale du produit.

Cette classe dérive de DataObjectBase. Elle fournit une méthode GetKey qui retourne une clé unique composée du type et de la référence, ainsi qu'une méthode FromDataRow qui initialise les propriétés à partir d'une DataRow.

### D�claration TypeScript
```typescript
interface ProductReferenceBase {
  Reference: string | null;
  Kind: string | null;
  IsMainReference: boolean;
}
```