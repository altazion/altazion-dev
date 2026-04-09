## ECommerceListRealizationLine

La classe ECommerceListRealizationLine représente une ligne de réalisation d'une liste e-commerce, c'est-à-dire la quantité effectivement réalisée pour un article donné de la liste.

Propriétés publiques :
- Guid : Identifiant unique de la ligne de réalisation.
- RealizationGuid : Identifiant unique de la réalisation parente.
- ListItemGuid : Identifiant unique de la ligne de liste e-commerce correspondante.
- QuantityRealized : Quantité réalisée pour cet article lors de cette réalisation.

Cette classe hérite de DataObjectBase et inclut des méthodes pour initialiser ses propriétés à partir d'une ligne de données, valider les données, et obtenir la clé unique de l'objet.

### D�claration TypeScript
```typescript
interface ECommerceListRealizationLine {
  Guid: string; // Unique identifier of the realization line
  RealizationGuid: string; // Unique identifier of the parent realization
  ListItemGuid: string; // Unique identifier of the corresponding list line
  QuantityRealized: number; // Quantity realized for this item
}
```