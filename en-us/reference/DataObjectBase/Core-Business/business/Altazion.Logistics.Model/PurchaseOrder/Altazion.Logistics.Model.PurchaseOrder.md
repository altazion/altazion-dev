## PurchaseOrder

This class represents a purchase order header with client information, amounts, dates, and processing state.

Public properties:
- Id: Unique identifier of the purchase order.
- CustomerGuid: Unique identifier of the customer.
- DeliveryAddressGuid: Optional unique identifier of the delivery address.
- OrderDate: Date and time of the order.
- Origin: Origin of the order (e.g., WEB, POS).
- OrderNumber: Order number.
- DisplayOrder: Display or sorting order.
- TotalAmount: Total amount including taxes.
- TotalAmountWOTax: Total amount excluding taxes.
- TotalAmountWOTaxBeforeDiscount: Amount before discount excluding taxes.
- TotalAmountBeforeDiscount: Amount before discount including taxes.
- TotalDiscountsWOTax: Total discounts excluding taxes.
- TotalDiscounts: Total discounts including taxes.
- GlobalDiscountWOTax: Global discount amount excluding taxes.
- GlobalDiscount: Global discount amount including taxes.
- RailsState: Processing state in the workflow.
- IsLockedForProcessing: Indicates if the order is locked for processing.
- IsConfirmed: Indicates if the order is confirmed.
- IsApproved: Indicates if the order is approved.
- IsTriggered: Indicates if the order is triggered (being prepared).
- IsCompleted: Indicates if the order is completed.
- IsArchived: Indicates if the order is archived.
- IsInError: Indicates if the order is in error.
- IsCancelled: Indicates if the order is canceled.
- IsCancelledByCustomer: Indicates if cancellation was requested by the customer.
- CancellationReason: Reason for cancellation.
- StoreGuid: Unique store identifier associated with the order.
- PickupPointGuid: Unique pickup point identifier.
- PickupPointRecipientName: Name of the recipient at the pickup point.
- DeliveryModeGuid: Unique delivery mode identifier.
- OrderType: Type of the order.
- CustomerMessage: Message from the customer.
- BillingAddressGuid: Unique identifier of the billing address.
- IsGuestMode: Indicates if the order was placed in guest mode.
- ParentOrderGuid: Unique identifier of the parent order (if split order).
- DeviceGuid: Unique identifier of the device used to place the order.

### TypeScript class
```typescript
interface PurchaseOrder {
  Id: string; // GUID
  CustomerGuid: string; // GUID
  DeliveryAddressGuid?: string | null; // GUID nullable
  OrderDate: string; // DateTimeOffset ISO string
  Origin: string | null;
  OrderNumber: string | null;
  DisplayOrder: number; // short
  TotalAmount: number; // decimal
  TotalAmountWOTax: number; // decimal
  TotalAmountWOTaxBeforeDiscount: number; // decimal
  TotalAmountBeforeDiscount: number; // decimal
  TotalDiscountsWOTax: number; // decimal
  TotalDiscounts: number; // decimal
  GlobalDiscountWOTax: number; // decimal
  GlobalDiscount: number; // decimal
  RailsState: string | null;
  IsLockedForProcessing: boolean;
  IsConfirmed: boolean;
  IsApproved: boolean;
  IsTriggered: boolean;
  IsCompleted: boolean;
  IsArchived: boolean;
  IsInError: boolean;
  IsCancelled: boolean;
  IsCancelledByCustomer: boolean;
  CancellationReason: string | null;
  StoreGuid?: string | null; // GUID nullable
  PickupPointGuid?: string | null; // GUID nullable
  PickupPointRecipientName: string | null;
  DeliveryModeGuid?: string | null; // GUID nullable
  OrderType: string | null;
  CustomerMessage: string | null;
  BillingAddressGuid?: string | null; // GUID nullable
  IsGuestMode: boolean;
  ParentOrderGuid?: string | null; // GUID nullable
  DeviceGuid?: string | null; // GUID nullable
}
```