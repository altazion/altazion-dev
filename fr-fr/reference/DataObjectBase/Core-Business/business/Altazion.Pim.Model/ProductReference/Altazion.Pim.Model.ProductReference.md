## ProductReference

La classe ProductReference représente une référence de produit avec un identifiant unique. Elle hérite des informations de base de ProductReferenceBase.

Propriétés publiques :
- ProductGuid : Identifiant unique (Guid) du produit associé à cette référence.
- Reference : Référence du produit (héritée).
- Kind : Type ou catégorie de la référence (héritée).
- IsMainReference : Indique si cette référence est la référence principale du produit (bool, héritée).

### D�claration TypeScript
```typescript
interface ProductReference {
  /** Unique identifier of the product associated with this reference */
  ProductGuid: string; // Guid as string
  /** Product reference */
  Reference: string | null;
  /** Type or category of the reference */
  Kind: string | null;
  /** Indicates if this reference is the main product reference */
  IsMainReference: boolean;
}
```