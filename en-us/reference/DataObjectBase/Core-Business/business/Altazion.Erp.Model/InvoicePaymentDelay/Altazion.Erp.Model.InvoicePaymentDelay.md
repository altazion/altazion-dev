## InvoicePaymentDelay

This class represents the payment delay details for an invoice, including delay penalties and associated fees.

Public properties:
- Id: Primary key of the invoice.
- Origin: Origin of the invoice (e.g., web, store).
- CustomerId: Primary key of the customer.
- Date: Date of the invoice.
- InvoiceNumber: Invoice number.
- CustomerName: Name of the customer.
- CustomerReference: Customer reference associated with the invoice.
- PaymentDeadlineDate: Payment due date.
- PaymentStatus: Payment status (0 = unpaid, 1 = paid).
- TotalAmount: Total amount including tax.
- PaymentDate: Actual payment date.
- DaysOfDelay: Number of days delayed in payment.
- DelayedAmount: Amount in delay.
- LastOverdueNotification: Date of the last overdue notification sent.
- DisallowOverdueNotification: Indicates if the invoice is exempt from reminders.
- OverdueNotificationCount: Reminder status level (0 = none, 1 = first, 2 = second, 3 = third).
- DelayFeeGuid: GUID of the delay fee record if exists.
- ForfeitFeeLineId: Invoice line ID for the forfeit fee.
- PenaltyFeeLineId: Invoice line ID for the penalty fees.
- IsDelayFeeIgnored: Indicates if the delay fee has been waived.
- PublicIndexValue: Public index value used for penalty calculation.
- AnnualBaseRate: Annual base rate for penalties.
- AnnualFactorRate: Annual factor rate for penalties calculation.
- AnnualAdditionalRate: Annual additional rate (majoration) for penalties.

### TypeScript class
```typescript
interface InvoicePaymentDelay {
  Id: number;
  Origin: string | null;
  CustomerId: number;
  Date: string; // ISO 8601 DateTimeOffset
  InvoiceNumber: string | null;
  CustomerName: string | null;
  CustomerReference: string | null;
  PaymentDeadlineDate: string | null; // ISO 8601 DateTimeOffset nullable
  PaymentStatus: number;
  TotalAmount: number;
  PaymentDate: string | null; // ISO 8601 DateTime nullable
  DaysOfDelay: number;
  DelayedAmount: number;
  LastOverdueNotification: string | null; // ISO 8601 DateTimeOffset nullable
  DisallowOverdueNotification: boolean;
  OverdueNotificationCount: number;
  DelayFeeGuid: string | null; // GUID nullable
  ForfeitFeeLineId: number | null;
  PenaltyFeeLineId: number | null;
  IsDelayFeeIgnored: boolean;
  PublicIndexValue: number | null;
  AnnualBaseRate: number | null;
  AnnualFactorRate: number | null;
  AnnualAdditionalRate: number | null;
}
```