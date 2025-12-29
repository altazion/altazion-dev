## WithdrawnStoreStock

Represents stock withdrawn from availability in a store for various reasons (demonstration product, defective item, inventory error, etc.).

Properties:
- Guid: Unique identifier of the stock withdrawal.
- ProductGuid: Identifier of the withdrawn product.
- StoreGuid: Identifier of the concerned store.
- UserGuid: Identifier of the user who performed the withdrawal.
- LastUpdateDate: Date of the last update of the withdrawal.
- Quantity: Quantity withdrawn from available stock.
- Label: Label or reason for withdrawal (e.g., "Demonstration product", "Defective item").
- StartDate: Start date of the withdrawal (optional, for temporary withdrawals).
- EndDate: End date of the withdrawal (optional, after which the stock becomes available again).

This class allows to track and manage stock withdrawn from availability in a store.

### TypeScript class
```typescript
interface WithdrawnStoreStock {
  Guid: string; // Unique identifier of the stock withdrawal (GUID)
  ProductGuid: string; // Identifier of the withdrawn product (GUID)
  StoreGuid: string; // Identifier of the concerned store (GUID)
  UserGuid: string; // Identifier of the user who performed the withdrawal (GUID)
  LastUpdateDate: string; // Date of last update of the withdrawal (ISO 8601 string)
  Quantity: number; // Quantity withdrawn from available stock
  Label: string; // Label or reason for the withdrawal
  StartDate?: string | null; // Optional start date of the withdrawal (ISO 8601 string or null)
  EndDate?: string | null; // Optional end date of the withdrawal (ISO 8601 string or null)
}
```