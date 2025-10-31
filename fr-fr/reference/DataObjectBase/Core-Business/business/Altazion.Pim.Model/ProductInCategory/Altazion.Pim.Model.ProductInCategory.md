## ProductInCategory

La classe ProductInCategory représente l'association d'un produit à une catégorie publique (segmentation) avec des paramètres de pertinence et de mise en avant.

Propriétés publiques :
- CategoryId (decimal) : Identifiant de la catégorie publique (segmentation). Obligatoire, valeur stricte supérieure à 0.
- ProductId (int) : Identifiant du produit (article). Obligatoire, valeur stricte supérieure à 0.
- Relevance (decimal) : Score de pertinence ou ordre de tri du produit dans cette catégorie. Peut prendre toute valeur décimale.
- IsFeatured (bool) : Indique si le produit est mis en avant dans cette catégorie.
- IsPrimary (bool) : Indique si cette catégorie est la catégorie principale du produit.

La validation des données garantit que CategoryId et ProductId sont valides (>0). Les autres propriétés ne sont pas soumises à des contraintes spécifiques.

### D�claration TypeScript
```typescript
interface ProductInCategory {
  CategoryId: number; // Identifier of the public category (segmentation)
  ProductId: number; // Identifier of the product (item)
  Relevance: number; // Relevance score or sort order of the product
  IsFeatured: boolean; // Indicates if the product is featured
  IsPrimary: boolean; // Indicates if this category is the primary category
}
```