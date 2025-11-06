## ProductAssociationType

La classe ProductAssociationType représente un type d'association entre produits, permettant de définir des liens sémantiques tels que des accessoires ou des produits complémentaires.

Propriétés publiques :
- Id (Guid) : Identifiant unique (GUID) du type d'association.
- Code (string) : Code unique identifiant le type d'association.
- IsAutomatic (bool) : Indique si les associations de ce type sont créées automatiquement.
- Label (string) : Libellé descriptif du type d'association.
- MainProductTypeId (short?) : Identifiant du type d'article principal associé (peut être nul).

Cette classe inclut une validation des données pour s'assurer que :
- L'id n'est pas vide.
- Le code est obligatoire et ne dépasse pas 10 caractères.
- Le libellé est obligatoire et ne dépasse pas 500 caractères.

### D�claration TypeScript
```typescript
interface ProductAssociationType {
  /** Unique identifier (GUID) of the association type */
  Id: string; // GUID as string
  /** Unique code identifying the association type */
  Code: string;
  /** Indicates if associations of this type are created automatically */
  IsAutomatic: boolean;
  /** Descriptive label of the association type */
  Label: string;
  /** Identifier of the main product type associated - nullable */
  MainProductTypeId?: number;
}
```