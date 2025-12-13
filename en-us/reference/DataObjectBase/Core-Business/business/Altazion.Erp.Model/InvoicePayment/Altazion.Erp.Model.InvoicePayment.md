## InvoicePayment

The `InvoicePayment` class represents a customer's payment for one or more invoices. It includes the following properties:

- `Id`: Unique identifier of the payment.
- `Date`: Date of the payment.
- `CustomerId`: Identifier of the customer.
- `Amount`: Amount of the payment.
- `PaymentKind`: Type of payment method (cash, check, credit card, etc.).
- `BankAccountId`: Identifier of the bank account linked to the payment, if any.
- `IsOnBankAccount`: Indicates if the payment has been deposited to the bank account.
- `PaymentIdentifier`: Reference of the payment or check number.
- `PaymentStatus`: Status of the payment (e.g., pending, validated, rejected).
- `BankDepositId`: Identifier of the bank deposit if part of a bank remittance.
- `ErrorCode`: Error code if payment processing failed.
- `ErrorDetails`: Detailed error message if processing failed.
- `OriginalAmount`: Original amount in the original currency (for multi-currency payments).
- `IsConfirmed`: Indicates whether the payment has been confirmed.
- `IsReceived`: Indicates whether the payment has been received.
- `PrePaymentGuid`: GUID of the prepayment (advance payment) if linked.
- `CreditNoteGuid`: GUID of the credit note if linked.

This class inherits from `DataObjectBase` and is marked with the `SqlDataConcept` attribute to map to the `gestcom_reglements` database table.

The `PaymentMethodKind` enumeration defines the payment method types (not detailed here but used by the `PaymentKind` property).

### TypeScript class
```typescript
interface InvoicePayment {
  Id: number; // Unique identifier of the payment
  Date: string; // ISO string representing the date (DateTimeOffset)
  CustomerId: number; // Customer identifier
  Amount: number; // Amount of the payment
  PaymentKind: PaymentMethodKind; // Enum representing the payment method kind
  BankAccountId?: number | null; // Optional bank account identifier
  IsOnBankAccount: boolean; // Indicates if deposited on bank account
  PaymentIdentifier?: string | null; // Reference or check number
  PaymentStatus?: string | null; // Status of the payment
  BankDepositId?: number | null; // Optional bank deposit identifier
  ErrorCode?: string | null; // Error code if any
  ErrorDetails?: string | null; // Detailed error message
  OriginalAmount?: number | null; // Original amount in original currency
  IsConfirmed: boolean; // True if confirmed
  IsReceived: boolean; // True if received
  PrePaymentGuid?: string | null; // GUID in string format
  CreditNoteGuid?: string | null; // GUID in string format
}

// Enum placeholder for PaymentMethodKind
enum PaymentMethodKind {
  // Enum values must be defined according to usage context
}
```