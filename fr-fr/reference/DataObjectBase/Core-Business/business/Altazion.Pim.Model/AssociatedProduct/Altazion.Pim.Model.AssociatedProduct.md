## AssociatedProduct

La classe `AssociatedProduct` représente les informations décrivant un produit associé à un produit principal dans un catalogue.

Propriétés publiques :
- `MainProductGuid` : identifiant unique (GUID) du produit principal.
- `AssociatedProductGuid` : identifiant unique (GUID) du produit associé (produit secondaire).
- `AssociationKind` : chaîne de caractères indiquant le type d'association entre les produits (ex. complémentaire, accessoire, etc.), limitée à 10 caractères.
- `QuantityByMainUnit` : quantité de produit secondaire pour une unité du produit principal, doit être strictement positive.
- `Reason` : raison métier de l'association, texte explicatif de l'association, limite de 250 caractères.
- `Importance` : entier indiquant l'importance relative de l'association.

La classe permet de valider les données, notamment la présence des identifiants et le respect des contraintes de longueur et de quantité. La clé primaire est composée de `MainProductGuid`, `AssociatedProductGuid` et `AssociationKind`.

Cette classe est mappée à la table SQL `catalog_articles_associes` dans le schéma `Catalog`.

### D�claration TypeScript
```typescript
interface AssociatedProduct {
  MainProductGuid: string; // GUID of the main product
  AssociatedProductGuid: string; // GUID of the associated product
  AssociationKind: string | null; // Type of association (max 10 chars)
  QuantityByMainUnit: number; // Quantity of associated product per unit of main product
  Reason: string | null; // Business reason for the association (max 250 chars)
  Importance: number; // Relative importance of the association
}
```