## ParcelLine

The ParcelLine class represents a detailed line item within a parcel, containing information about the product and corresponding quantities.

Public properties:

- Id: Unique identifier for the parcel line (Guid).
- ParcelId: Unique identifier for the parent parcel (Guid).
- ProductGuid: Optional unique identifier for the product (Guid?).
- Quantity: Optional quantity of the product in the parcel (decimal?).
- Remarks: Optional remarks about the line (string).
- Status: Current status code of the line (string).
- FulfillmentOrderLineGuid: Optional unique identifier for the associated fulfillment order line (Guid?).
- OrderLineGuid: Optional unique identifier for the associated order line (Guid?).
- ReplenishmentRequestLineGuid: Optional unique identifier for the associated replenishment request line (Guid?).
- AfterSalesServiceLineGuid: Optional unique identifier for the associated after-sales service line (Guid?).

### TypeScript class
```typescript
interface ParcelLine {
  Id: string; // Guid
  ParcelId: string; // Guid
  ProductGuid?: string | null; // Guid optional
  Quantity?: number | null;
  Remarks?: string | null;
  Status?: string | null;
  FulfillmentOrderLineGuid?: string | null;
  OrderLineGuid?: string | null;
  ReplenishmentRequestLineGuid?: string | null;
  AfterSalesServiceLineGuid?: string | null;
}
```