## ECommerceListRealizationLine

The ECommerceListRealizationLine class represents a realization line of an e-commerce list, i.e., the quantity actually realized for a given item in the list.

Public properties:
- Guid: Unique identifier of the realization line.
- RealizationGuid: Unique identifier of the parent realization.
- ListItemGuid: Unique identifier of the corresponding e-commerce list line.
- QuantityRealized: Quantity realized for this item in this realization.

This class inherits from DataObjectBase and includes methods to initialize its properties from a data row, validate the data, and get the unique key of the object.

### TypeScript class
```typescript
interface ECommerceListRealizationLine {
  Guid: string; // Unique identifier of the realization line
  RealizationGuid: string; // Unique identifier of the parent realization
  ListItemGuid: string; // Unique identifier of the corresponding list line
  QuantityRealized: number; // Quantity realized for this item
}
```