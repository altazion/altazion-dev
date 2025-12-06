## CustomerWithOverdueInvoices

Represents a customer with a summary of their overdue invoices.

Public properties:
- CustomerId: Unique identifier of the customer.
- CustomerGuid: Globally unique identifier (GUID) of the customer.
- CustomerName: Full name of the customer.
- PostalCode: Postal code of the customer.
- City: City of the customer.
- TotalInvoicesCount: Total number of invoices for this customer.
- CurrentInvoicesWithoutOverdue: Number of current invoices without overdue.
- SettledInvoicesWithOverdue: Number of invoices settled with overdue delay.
- CurrentInvoicesWithOverdue: Number of current invoices that are overdue.
- TotalInvoicesAmount: Total amount including tax of all invoices.
- TotalOverdueAmount: Total amount including tax of overdue invoices.
- InvoicesToProcess: Number of overdue invoices to process (fees not yet invoiced).
- InvoicesWithWaivedFees: Number of overdue invoices for which fees were waived or ignored.
- LastOverdueNotificationDate: Date of the last overdue notification.
- CurrentInvoicesAmount: Total amount including tax of current (unpaid) invoices.
- CurrentOverdueAmount: Total amount including tax of current invoices that are overdue.

### TypeScript class
```typescript
interface CustomerWithOverdueInvoices {
  CustomerId: number;
  CustomerGuid: string; // GUID represented as string
  CustomerName: string | null;
  PostalCode: string | null;
  City: string | null;
  TotalInvoicesCount: number;
  CurrentInvoicesWithoutOverdue: number;
  SettledInvoicesWithOverdue: number;
  CurrentInvoicesWithOverdue: number;
  TotalInvoicesAmount: number;
  TotalOverdueAmount: number;
  InvoicesToProcess: number;
  InvoicesWithWaivedFees: number;
  LastOverdueNotificationDate: string | null; // ISO string or null
  CurrentInvoicesAmount: number;
  CurrentOverdueAmount: number;
}
```