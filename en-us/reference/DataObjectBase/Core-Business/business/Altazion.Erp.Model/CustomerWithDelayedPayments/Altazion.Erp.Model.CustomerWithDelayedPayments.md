## CustomerWithDelayedPayments

This class represents a customer with delayed payment invoices, including statistics and amounts.

Public properties:

- Id: Primary key of the customer.
- Guid: Unique identifier of the customer.
- Name: Customer name.
- PostalCode: Customer postal code.
- City: Customer city.
- TotalInvoicesCount: Total number of invoices for this customer.
- InProgressNotDelayedCount: Number of invoices in progress without delay.
- PaidWithDelayCount: Number of invoices paid with delay.
- InProgressDelayedCount: Number of invoices in progress with delay.
- TotalAmountIncludingTax: Total amount including tax of all invoices.
- DelayedAmountIncludingTax: Total amount including tax of delayed invoices.
- InvoicesToProcessCount: Number of invoices to be processed for fees.
- WaivedFeesCount: Number of invoices with waived fees.
- LastOverdueNotification: Date of the last reminder sent.
- InProgressAmountIncludingTax: Amount including tax of invoices currently in progress.
- InProgressDelayedAmountIncludingTax: Amount including tax of delayed invoices currently in progress.

### TypeScript class
```typescript
export interface CustomerWithDelayedPayments {
  Id: number;
  Guid: string; // Guid as string representation
  Name: string | null;
  PostalCode: string | null;
  City: string | null;
  TotalInvoicesCount: number;
  InProgressNotDelayedCount: number;
  PaidWithDelayCount: number;
  InProgressDelayedCount: number;
  TotalAmountIncludingTax: number;
  DelayedAmountIncludingTax: number;
  InvoicesToProcessCount: number;
  WaivedFeesCount: number;
  LastOverdueNotification?: string | null; // DateTimeOffset as ISO string or null
  InProgressAmountIncludingTax: number;
  InProgressDelayedAmountIncludingTax: number;
}
```