## ProductAvailability

Represents the consolidated availability of a product. This class aggregates information related to stocks, supplier orders, and manufacturing.

Public properties:
- ProductGuid: Unique identifier of the product (Guid type).
- InStock: Quantity currently available in stock (decimal type).
- ReservedStock: Quantity in stock that is reserved (decimal type).
- IncomingStock: Quantity currently incoming to stock (decimal type).
- InManufacturing: Quantity currently in manufacturing process (decimal type).
- ManufacturingPossible: Quantity that can still be manufactured (decimal type).
- SupplierAvailable: Quantity available from suppliers (decimal type).
- SupplierReserved: Quantity reserved at suppliers (decimal type).
- SupplierUnder15Days: Quantity available from suppliers within 15 days (decimal type).
- SupplierUnder30Days: Quantity available from suppliers within 30 days (decimal type).
- StoreAvailable: Quantity available in store (decimal type).
- SupplySourceGuid: Optional identifier of the associated supply source (Guid?).

### TypeScript class
```typescript
export interface ProductAvailability {
  ProductGuid: string; // Unique identifier of the product
  InStock: number; // Quantity currently available in stock
  ReservedStock: number; // Quantity in stock that is reserved
  IncomingStock: number; // Quantity currently incoming to stock
  InManufacturing: number; // Quantity currently in manufacturing
  ManufacturingPossible: number; // Quantity that can still be manufactured
  SupplierAvailable: number; // Quantity available from suppliers
  SupplierReserved: number; // Quantity reserved at suppliers
  SupplierUnder15Days: number; // Quantity available from suppliers within 15 days
  SupplierUnder30Days: number; // Quantity available from suppliers within 30 days
  StoreAvailable: number; // Quantity available in store
  SupplySourceGuid?: string | null; // Optional supply source identifier
}
```