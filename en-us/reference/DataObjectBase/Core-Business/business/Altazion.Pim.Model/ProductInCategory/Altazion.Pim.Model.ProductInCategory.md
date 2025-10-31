## ProductInCategory

The ProductInCategory class represents the association of a product to a public category (segmentation) including relevance and highlighting parameters.

Public properties:
- CategoryId (decimal): Identifier of the public category (segmentation). Mandatory, must be greater than 0.
- ProductId (int): Identifier of the product (item). Mandatory, must be greater than 0.
- Relevance (decimal): Relevance score or sort order of the product in this category. Any decimal value allowed.
- IsFeatured (bool): Indicates if the product is featured in this category.
- IsPrimary (bool): Indicates if this category is the primary category of the product.

Data validation ensures CategoryId and ProductId are valid (>0). Other properties have no specific constraints.

### TypeScript class
```typescript
interface ProductInCategory {
  CategoryId: number; // Identifier of the public category (segmentation)
  ProductId: number; // Identifier of the product (item)
  Relevance: number; // Relevance score or sort order of the product
  IsFeatured: boolean; // Indicates if the product is featured
  IsPrimary: boolean; // Indicates if this category is the primary category
}
```