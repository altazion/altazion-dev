## Invoice

The Invoice class represents an invoice with detailed information such as unique identifier, date, invoice number, amounts, and client and payment details.

Public properties:
- Id: Unique identifier of the invoice.
- Date: Date of the invoice.
- InvoiceNumber: Invoice number.
- TotalAmount: Total amount including taxes.
- TotalAmountWOTax: Total amount excluding taxes.
- CustomerName: Name of the invoiced customer.
- CustomerStreetAddress: Customer's street address.
- CustomerZipCode: Customer's postal code.
- CustomerCity: Customer's city.
- CustomerId: Customer identifier.
- TotalNotPayed: Remaining amount to be paid on the invoice.
- PaymentDeadlineDate: Payment due date (nullable).
- LastOverdueNotification: Date of the last payment reminder (nullable).
- Origin: Origin of the invoice (e.g., order, contract).
- CustomerReference: Customer reference or external order number.
- DisallowOverdueNotification: Flag indicating whether overdue notification is disallowed.
- OverdueNotificationCount: Number of reminders sent.
- PrintCount: Number of times the invoice has been printed.

### TypeScript class
```typescript
interface Invoice {
  Id: number; // Unique identifier of the invoice
  Date: string; // Date of the invoice as ISO string
  InvoiceNumber: string;
  TotalAmount: number; // Total amount including taxes
  TotalAmountWOTax: number; // Total amount excluding taxes
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  CustomerId: number;
  TotalNotPayed: number; // Remaining amount to pay
  PaymentDeadlineDate?: string; // Nullable date
  LastOverdueNotification?: string; // Nullable date
  Origin: string;
  CustomerReference: string;
  DisallowOverdueNotification: boolean;
  OverdueNotificationCount: number;
  PrintCount: number;
}
```