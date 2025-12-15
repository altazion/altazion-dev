## ProductLabel

The ProductLabel class represents the association between a product and an e-commerce label/tag.

Public properties:
- ProductId (long): Identifier of the product.
- LabelDefinitionId (long): Identifier of the label (foreign key to LabelDefinition).
- LabelValueGuid (Guid?, nullable): Identifier of the label's value (foreign key to LabelValue), if applicable.
- DisplayOrder (short?, nullable): Display order of the label on the product.
- Priority (int): Priority of the label assignment.
- PromotionGuid (Guid?, nullable): Identifier of the associated commercial operation, if applicable.

### TypeScript class
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