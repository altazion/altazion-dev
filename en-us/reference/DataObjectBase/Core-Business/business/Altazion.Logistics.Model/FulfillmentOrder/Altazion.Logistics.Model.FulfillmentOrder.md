## FulfillmentOrder

The FulfillmentOrder class represents a fulfillment voucher in a logistics context. It includes the necessary information to track and manage the order preparation process.

Public properties:
- Id: Unique identifier of the fulfillment order (Guid).
- PreparationType: Type of preparation as a code (string).
- OrderId: Unique identifier of the associated order voucher (Guid).
- Number: Fulfillment order number (string).
- CreationDate: Creation date of the fulfillment order (DateTimeOffset).
- IsValidated: Indicates if the order is validated (bool).
- IsPreparationTriggered: Indicates if the preparation has been triggered (bool).
- IsPreparationInProgress: Indicates if the preparation is in progress (bool).
- IsCompleted: Indicates if the preparation is completed (bool).
- PreparationBinInfo: Information about the preparation bin (string).
- PreparationZoneGuid: Unique identifier of the preparation zone (nullable Guid).
- RailsState: State of the workflow processing (string).
- ReplenishmentRequestGuid: Unique identifier of the associated replenishment request (nullable Guid).
- CompletionDate: Completion date of the preparation (nullable DateTimeOffset).
- ParentFulfillmentOrderGuid: Unique identifier of the parent fulfillment order if split (nullable Guid).
- InterStorePackageGuid: Unique identifier of the inter-store package (nullable Guid).
- OriginStoreGuid: Unique identifier of the origin store (nullable Guid).
- DestinationStoreGuid: Unique identifier of the destination store (nullable Guid).
- PartnerGuid: Unique identifier of the associated partner (nullable Guid).
- ProcessingDeadline: Deadline for processing (nullable DateTimeOffset).

### TypeScript class
```typescript
export interface FulfillmentOrder {
  Id: string;  // Guid
  PreparationType: string | null;
  OrderId: string;  // Guid
  Number: string | null;
  CreationDate: string;  // ISO 8601 date string
  IsValidated: boolean;
  IsPreparationTriggered: boolean;
  IsPreparationInProgress: boolean;
  IsCompleted: boolean;
  PreparationBinInfo: string | null;
  PreparationZoneGuid?: string | null;
  RailsState: string | null;
  ReplenishmentRequestGuid?: string | null;
  CompletionDate?: string | null;
  ParentFulfillmentOrderGuid?: string | null;
  InterStorePackageGuid?: string | null;
  OriginStoreGuid?: string | null;
  DestinationStoreGuid?: string | null;
  PartnerGuid?: string | null;
  ProcessingDeadline?: string | null;
}
```