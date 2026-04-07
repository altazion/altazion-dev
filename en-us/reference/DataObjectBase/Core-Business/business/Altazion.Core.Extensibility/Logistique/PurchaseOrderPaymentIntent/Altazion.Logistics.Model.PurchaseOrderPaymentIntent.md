## PurchaseOrderPaymentIntent

The PurchaseOrderPaymentIntent class represents a payment intent on a purchase order. It includes the following properties:

- Id: Unique identifier of the payment intent (Guid).
- OrderId: Unique identifier of the associated purchase order (Guid).
- Amount: Current amount of the payment intent (decimal).
- OriginalAmount: Original amount of the payment intent (decimal).
- PaymentMethodGuid: Unique identifier of the payment method (nullable Guid).
- IsConfirmed: Boolean indicating if the intent is confirmed.
- IsReceived: Boolean indicating if the payment has been received.
- IsModified: Boolean indicating if the intent has been modified.
- IsValidationInProgress: Boolean indicating if validation is in progress.
- IsValidated: Boolean indicating if the intent is validated.
- ErrorCode: Error code in case of a validation issue (string).
- ErrorDetails: Details of the error in case of a validation issue (string).
- DocumentNumber: Associated document number (e.g., check, transaction) (string).
- DueDate: Due date of the payment (DateOnly).
- IsExportedToAccounting: Boolean indicating if the intent has been exported to accounting.
- StoreDepositGuid: Unique identifier of the associated store/deposit (nullable Guid).
- BankDepositId: Identifier of the associated bank deposit (nullable long).
- CustomerName: Name of the customer (string, join field).
- OrderNumber: Purchase order number (string, join field).

This class inherits from DataObjectBase and maps to the SQL table gestcom_bonscommandes_intentionsreglement in the "Logistics" database.

### TypeScript class
```typescript
interface PurchaseOrderPaymentIntent {
  Id: string; // Guid
  OrderId: string; // Guid
  Amount: number; // decimal
  OriginalAmount: number; // decimal
  PaymentMethodGuid?: string | null; // Guid nullable
  IsConfirmed: boolean;
  IsReceived: boolean;
  IsModified: boolean;
  IsValidationInProgress: boolean;
  IsValidated: boolean;
  ErrorCode?: string | null;
  ErrorDetails?: string | null;
  DocumentNumber?: string | null;
  DueDate: string; // DateOnly as ISO string
  IsExportedToAccounting: boolean;
  StoreDepositGuid?: string | null; // Guid nullable
  BankDepositId?: number | null; // long nullable
  CustomerName?: string | null;
  OrderNumber?: string | null;
}
```