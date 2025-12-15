## ProductLabel

La classe ProductLabel représente l'association entre un article et un label/tag e-commerce.

Propriétés publiques :
- ProductId (long) : Identifiant de l'article.
- LabelDefinitionId (long) : Identifiant du label (clé étrangère vers LabelDefinition).
- LabelValueGuid (Guid?, nullable) : Identifiant de la valeur du label (clé étrangère vers LabelValue), si applicable.
- DisplayOrder (short?, nullable) : Ordre d'affichage du label sur l'article.
- Priority (int) : Priorité de l'assignation du label.
- PromotionGuid (Guid?, nullable) : Identifiant de l'opération commerciale associée, si applicable.

### D�claration TypeScript
```typescript
interface ProductLabel {
  ProductId: number;
  LabelDefinitionId: number;
  LabelValueGuid?: string | null;
  DisplayOrder?: number | null;
  Priority: number;
  PromotionGuid?: string | null;
}
```