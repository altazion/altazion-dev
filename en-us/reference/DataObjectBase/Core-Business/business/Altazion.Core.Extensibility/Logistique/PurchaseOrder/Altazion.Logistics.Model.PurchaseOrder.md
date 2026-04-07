## PurchaseOrder

The PurchaseOrder class represents a purchase order header with information about the customer, amounts, and dates.

Public Properties:
- Id: Unique identifier of the purchase order (Guid).
- CustomerGuid: Unique identifier of the customer (Guid).
- DeliveryAddressGuid: Optional unique identifier of the delivery address (Guid?).
- OrderDate: Date of the order (DateTimeOffset).
- Origin: Origin of the order (e.g., WEB, POS) (string).
- OrderNumber: Order number (string).
- DisplayOrder: Display or sorting order (short).
- TotalAmount: Total amount including taxes (decimal).
- TotalAmountWOTax: Total amount excluding taxes (decimal).
- TotalAmountWOTaxBeforeDiscount: Total amount before discount excluding tax (decimal).
- TotalAmountBeforeDiscount: Total amount before discount including tax (decimal).
- TotalDiscountsWOTax: Total discount amount excluding taxes (decimal).
- TotalDiscounts: Total discount amount including taxes (decimal).
- GlobalDiscountWOTax: Amount of global discount excluding taxes (decimal).
- GlobalDiscount: Amount of global discount including taxes (decimal).
- RailsState: Workflow processing state (string).
- IsLockedForProcessing: Indicates if the order is locked for processing (bool).
- IsConfirmed: Indicates if the order is confirmed (bool).
- IsApproved: Indicates if the order is approved (bool).
- IsTriggered: Indicates if the order has been triggered (bool).
- IsCompleted: Indicates if the order is completed (bool).
- IsArchived: Indicates if the order is archived (bool).
- IsInError: Indicates if the order is in error (bool).
- IsCancelled: Indicates if the order is cancelled (bool).
- IsCancelledByCustomer: Indicates if the cancellation was requested by the customer (bool).
- CancellationReason: Reason for cancellation (string).
- StoreGuid: Optional unique identifier of the associated store (Guid?).
- PickupPointGuid: Optional unique identifier of the pickup point (Guid?).
- PickupPointRecipientName: Name of the recipient at the pickup point (string).
- DeliveryModeGuid: Optional unique identifier of the delivery mode (Guid?).
- OrderType: Type of order (string).
- CustomerMessage: Message from the customer (string).
- BillingAddressGuid: Optional unique identifier of the billing address (Guid?).
- IsGuestMode: Indicates if the order is in guest mode (bool).
- ParentOrderGuid: Optional unique identifier of the parent order (Guid?).
- DeviceGuid: Optional unique identifier of the device that placed the order (Guid?).

### TypeScript class
```typescript
interface PurchaseOrder {
  Id: string; // Guid
  CustomerGuid: string; // Guid
  DeliveryAddressGuid?: string; // Guid | null
  OrderDate: string; // DateTimeOffset as ISO string
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
  StoreGuid?: string | null;
  PickupPointGuid?: string | null;
  PickupPointRecipientName: string | null;
  DeliveryModeGuid?: string | null;
  OrderType: string | null;
  CustomerMessage: string | null;
  BillingAddressGuid?: string | null;
  IsGuestMode: boolean;
  ParentOrderGuid?: string | null;
  DeviceGuid?: string | null;
}
```