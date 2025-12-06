## PurchaseOrderPaymentIntent

The PurchaseOrderPaymentIntent class represents a payment intent on a purchase order. It includes several properties as follows:

- Id: Unique identifier of the payment intent.
- OrderId: Unique identifier of the associated purchase order.
- Amount: Current amount of the payment intent.
- OriginalAmount: Original amount of the payment intent.
- PaymentMethodGuid: Optional unique identifier of the payment method.
- IsConfirmed: Indicates if the intent is confirmed.
- IsReceived: Indicates if the payment has been received.
- IsModified: Indicates if the intent has been modified.
- IsValidationInProgress: Indicates if validation is in progress.
- IsValidated: Indicates if the intent is validated.
- ErrorCode: Error code in case of validation issues.
- ErrorDetails: Details of the error if validation fails.
- DocumentNumber: Associated document number (check, transaction, etc.).
- DueDate: Payment due date.
- IsExportedToAccounting: Indicates if the intent has been exported to accounting.
- StoreDepositGuid: Optional unique identifier of the associated store/deposit.
- BankDepositId: Optional bank deposit identifier.
- CustomerName: Customer name (join field).
- OrderNumber: Order number (join field).

This class inherits from DataObjectBase and is used to manage payment intent information related to purchase orders.

### TypeScript class
```typescript
interface PurchaseOrderPaymentIntent {
  Id: string; // Guid
  OrderId: string; // Guid
  Amount: number; // decimal
  OriginalAmount: number; // decimal
  PaymentMethodGuid?: string | null; // Nullable Guid
  IsConfirmed: boolean;
  IsReceived: boolean;
  IsModified: boolean;
  IsValidationInProgress: boolean;
  IsValidated: boolean;
  ErrorCode?: string | null;
  ErrorDetails?: string | null;
  DocumentNumber?: string | null;
  DueDate: string; // DateTimeOffset as ISO string
  IsExportedToAccounting: boolean;
  StoreDepositGuid?: string | null;
  BankDepositId?: number | null; // Nullable long
  CustomerName?: string | null;
  OrderNumber?: string | null;
}
```