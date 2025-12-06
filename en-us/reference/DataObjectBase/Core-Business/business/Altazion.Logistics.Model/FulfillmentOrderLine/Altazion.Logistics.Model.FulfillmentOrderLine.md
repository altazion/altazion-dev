## FulfillmentOrderLine

The FulfillmentOrderLine class represents a fulfillment order line in the logistics module, containing item information and various quantities related to order preparation.

Public properties:
- Id: Unique identifier of the fulfillment order line.
- FulfillmentOrderId: Unique identifier of the parent fulfillment order.
- ProductId: Item identifier (legacy primary key).
- OrderLineId: Unique identifier of the associated order line.
- QuantityOrdered: Quantity ordered.
- QuantityAnnounced: Quantity announced as available for preparation.
- QuantityAnnouncedNotPreparable: Announced quantity that cannot be prepared.
- QuantityPrepared: Actually prepared quantity.
- QuantityNotPreparable: Quantity that cannot be prepared.
- QuantityPostponed: Quantity postponed to a later date.
- PostponedDate: Date of quantity postponement.
- FinalPackageLineGuid: Unique identifier of the associated final package line (nullable).
- PreparationOrderLineGuid: Unique identifier of the associated preparation order line (nullable).
- FinalOrderLineGuid: Unique identifier of the associated final order line (nullable).
- PreparationUnitPriceWOTax: Unit preparation price without tax (nullable).
- PreparationUnitPrice: Unit preparation price including tax (nullable).
- NotPreparedReason: Reason why the line was not prepared (nullable).

### TypeScript class
```typescript
interface FulfillmentOrderLine {
  Id: string; // Guid
  FulfillmentOrderId: string; // Guid
  ProductId: number;
  OrderLineId: string; // Guid
  QuantityOrdered: number;
  QuantityAnnounced: number;
  QuantityAnnouncedNotPreparable: number;
  QuantityPrepared: number;
  QuantityNotPreparable: number;
  QuantityPostponed: number;
  PostponedDate?: string | null; // DateTimeOffset nullable
  FinalPackageLineGuid?: string | null; // Guid nullable
  PreparationOrderLineGuid?: string | null; // Guid nullable
  FinalOrderLineGuid?: string | null; // Guid nullable
  PreparationUnitPriceWOTax?: number | null;
  PreparationUnitPrice?: number | null;
  NotPreparedReason?: string | null;
}
```