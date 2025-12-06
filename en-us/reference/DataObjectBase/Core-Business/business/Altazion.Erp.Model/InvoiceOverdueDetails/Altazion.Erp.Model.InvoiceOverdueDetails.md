## InvoiceOverdueDetails

Class representing the details of an overdue invoice including reminder and penalty information.

Public properties:

- InvoiceId: Unique identifier of the invoice.
- CustomerId: Identifier of the customer.
- CustomerName: Name of the customer.
- InvoiceDate: Date of the invoice.
- InvoiceNumber: Invoice number.
- CustomerReference: Customer reference on the invoice.
- Origin: Origin of the invoice (order, contract, etc.).
- PaymentDeadlineDate: Payment due date.
- PaymentStatus: Payment status (paid or not).
- TotalAmount: Total invoice amount including tax.
- PaymentDate: Date payment was made.
- OverdueDays: Number of days payment is overdue.
- OverdueAmount: Amount concerned by the overdue status.
- OverdueNotificationCount: Number of payment reminders sent.
- DisallowOverdueNotification: Indicates if reminders are waived for this invoice.
- LastOverdueNotificationDate: Date of the last reminder.
- IsIgnored: Indicates if the overdue status is ignored for fee calculation.
- LateFeeGuid: GUID of the late fee process.
- FlatFeeInvoiceLineId: Identifier for flat fee invoice line related to late fees.
- PenaltyInvoiceLineId: Identifier for penalty invoice line related to late fees.
- AnnualBaseRate: Base annual interest rate for penalty calculation.
- AnnualRateFactor: Multiplicative factor of the annual rate.
- AnnualRateIncrease: Increase applied to the annual rate.
- PublicIndexValue: Value of the public index used in calculations.

### TypeScript class
```typescript
export interface InvoiceOverdueDetails {
  InvoiceId: number;
  CustomerId: number;
  CustomerName: string | null;
  InvoiceDate: Date;
  InvoiceNumber: string | null;
  CustomerReference: string | null;
  Origin: string | null;
  PaymentDeadlineDate: Date | null;
  PaymentStatus: boolean;
  TotalAmount: number;
  PaymentDate: Date | null;
  OverdueDays: number;
  OverdueAmount: number;
  OverdueNotificationCount: number;
  DisallowOverdueNotification: boolean;
  LastOverdueNotificationDate: Date | null;
  IsIgnored: boolean;
  LateFeeGuid: string | null;
  FlatFeeInvoiceLineId: number | null;
  PenaltyInvoiceLineId: number | null;
  AnnualBaseRate: number | null;
  AnnualRateFactor: number | null;
  AnnualRateIncrease: number | null;
  PublicIndexValue: number | null;
}
```