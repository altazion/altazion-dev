## OperationMarketplace

Class representing a marketplace operation within the ERP system.

Public properties:
- Guid: Unique identifier of the marketplace operation.
- PartenaireGuid: Unique identifier of the partner associated with this operation.
- PieceGuid: Optional unique identifier of a piece associated with the operation.
- Type: Type of the marketplace operation (e.g., purchase, refund, etc.).
- TransactionId: Transaction identifier linked to this operation.
- MontantOriginal: Original amount of the operation before any modification.
- Montant: Final amount of the operation after possible modifications.

### TypeScript class
```typescript
interface OperationMarketplace {
  Guid: string; // UUID
  PartenaireGuid: string; // UUID
  PieceGuid?: string | null; // UUID nullable
  Type: string;
  TransactionId: string;
  MontantOriginal: number;
  Montant: number;
}
```