## InvoicePaymentDelay

Represents payment delay details for an invoice, including delay penalties and associated fees.

Public properties:
- Id: Unique identifier of the invoice (primary key).
- Origin: Origin of the invoice (web, store, etc.).
- CustomerId: Identifier of the customer.
- Date: Date of the invoice.
- InvoiceNumber: Invoice number.
- CustomerName: Name of the customer.
- CustomerReference: Customer reference.
- PaymentDeadlineDate: Payment due date.
- PaymentStatus: Payment status (0 = unpaid, 1 = paid).
- TotalAmount: Total amount including tax.
- PaymentDate: Actual payment date.
- DaysOfDelay: Number of days delayed.
- DelayedAmount: Amount delayed.
- LastOverdueNotification: Date of last reminder sent.
- DisallowOverdueNotification: Indicates if the invoice is exempt from reminders.
- OverdueNotificationCount: Reminder status level (0 = none, 1 = first, 2 = second, 3 = third).
- DelayFeeGuid: GUID of delay fee record if any.
- ForfeitFeeLineId: Invoice line ID for the forfeit fee.
- PenaltyFeeLineId: Invoice line ID for penalty fees.
- IsDelayFeeIgnored: Indicates if the delay fee has been waived.
- PublicIndexValue: Public index value used for penalty calculations.
- AnnualBaseRate: Annual base rate for penalties.
- AnnualFactorRate: Annual factor rate for penalty calculations.
- AnnualAdditionalRate: Annual additional rate (majoration) for penalties.

### TypeScript class
```typescript
interface InvoicePaymentDelay {
  Id: number;
  Origin: string | null;
  CustomerId: number;
  Date: string; // DateTimeOffset serialized as ISO string
  InvoiceNumber: string | null;
  CustomerName: string | null;
  CustomerReference: string | null;
  PaymentDeadlineDate: string | null; // nullable DateTimeOffset
  PaymentStatus: number;
  TotalAmount: number;
  PaymentDate: string | null; // nullable DateTimeOffset
  DaysOfDelay: number;
  DelayedAmount: number;
  LastOverdueNotification: string | null; // nullable DateTimeOffset
  DisallowOverdueNotification: boolean;
  OverdueNotificationCount: number;
  DelayFeeGuid: string | null; // nullable GUID as string
  ForfeitFeeLineId: number | null;
  PenaltyFeeLineId: number | null;
  IsDelayFeeIgnored: boolean;
  PublicIndexValue: number | null;
  AnnualBaseRate: number | null;
  AnnualFactorRate: number | null;
  AnnualAdditionalRate: number | null;
}
```