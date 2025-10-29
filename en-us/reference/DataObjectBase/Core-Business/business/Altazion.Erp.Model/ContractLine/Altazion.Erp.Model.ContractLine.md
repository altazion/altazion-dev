## ContractLine

Represents a contract line with the following information:

- Guid: Unique identifier of the contract line.
- Phase: Phase or stage of the contract (for multi-phase contracts).
- QuoteId: Identifier of the associated quote for this contract line (nullable).
- ContractGuid: Unique identifier of the contract this line belongs to.
- ProductGuid: Unique identifier of the product or item associated with this line.
- Quantity: Total quantity planned in the contract for this item.
- QuantityConsumed: Quantity already consumed or used of this item.
- QuantityInvoiced: Quantity already invoiced for this item.
- QuantityReimbursed: Quantity refunded for this item (for credits).
- InvoiceId: Identifier of the invoice associated with this line (nullable).

This class inherits from DataObjectBase and corresponds to a SQL data entity representing the "gestcom_lignescontrats" table in the "Erp" database.

### TypeScript class
```typescript
interface ContractLine {
  Guid: string; // Unique identifier of the contract line
  Phase: number; // Phase or stage of the contract
  QuoteId?: number | null; // Associated quote identifier (nullable)
  ContractGuid: string; // Identifier of the contract
  ProductGuid: string; // Identifier of the product or item
  Quantity: number; // Total planned quantity
  QuantityConsumed: number; // Quantity consumed
  QuantityInvoiced: number; // Quantity invoiced
  QuantityReimbursed: number; // Quantity reimbursed
  InvoiceId?: number | null; // Associated invoice identifier (nullable)
}
```