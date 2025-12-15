## ProductBundleLine

La classe ProductBundleLine représente une ligne d'un lot promotionnel, c'est-à-dire un article qui compose un bundle. Elle contient les propriétés suivantes :

- Guid : Identifiant unique de la ligne.
- BundleGuid : Identifiant du lot parent, clé étrangère vers ProductBundle.
- ProductGuid : Identifiant de l'article composant le lot.
- Quantity : Quantité de l'article dans le lot, devant être supérieure à zéro.

Des validations sont effectuées pour s'assurer que tous les identifiants sont définis (différents de Guid.Empty) et que la quantité est positive.

### D�claration TypeScript
```typescript
interface ProductBundleLine {
  Guid: string; // Unique identifier of the line (UUID string)
  BundleGuid: string; // Identifier of the parent bundle (UUID string)
  ProductGuid: string; // Identifier of the product composing the bundle (UUID string)
  Quantity: number; // Quantity of the product in the bundle, must be > 0
}
```