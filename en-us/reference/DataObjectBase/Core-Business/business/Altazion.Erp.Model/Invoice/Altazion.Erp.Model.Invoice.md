## Invoice

The Invoice class represents an invoice with key information regarding the customer, amounts, dates, and invoice status.

Public properties:
- Id: Unique identifier of the invoice.
- Date: Invoice date.
- InvoiceNumber: Invoice number.
- TotalAmount: Total amount including taxes.
- TotalAmountWOTax: Total amount excluding taxes.
- CustomerName: Name of the invoiced customer.
- CustomerStreetAddress: Customer street address.
- CustomerZipCode: Customer postal code.
- CustomerCity: Customer city.
- CustomerId: Customer identifier.
- TotalNotPayed: Remaining amount to be paid.
- PaymentDeadlineDate: Payment deadline date.
- LastOverdueNotification: Date of last overdue notification.
- Origin: Invoice origin (order, contract, etc.).
- CustomerReference: Customer reference.
- DisallowOverdueNotification: Indicates if overdue notifications are disallowed.
- OverdueNotificationCount: Number of overdue notifications sent.
- PrintCount: Number of printings.
- ExportedToAccounting: Export status to accounting (0 = no, 1 = yes).
- EditionState: Edition state (0 = draft, 1 = validated).
- TotalAmountWOTaxBeforeDiscount: Total amount excluding tax before global discount.
- TotalAmountBeforeDiscount: Total amount including tax before global discount.
- GlobalDiscountWOTax: Global discount amount excluding tax.
- GlobalDiscount: Global discount amount including tax.
- GlobalDiscountLabel: Label for the global discount.
- TotalDiscountsWOTax: Total discounts excluding tax (lines and global).
- TotalDiscounts: Total discounts including tax (lines and global).
- DeliveryDate: Scheduled or actual delivery date.
- ContractGuid: GUID of associated contract.
- BillingCenterGuid: GUID of billing center.
- ExpectedPaymentType: Expected payment type code.
- ExpectedPaymentDate: Expected payment date.
- FinalCustomerId: Final customer ID when different from invoiced customer.
- IsDownPayment: Indicates if invoice is a down payment.
- FirstPrintDate: Date of first print.
- LastPrintDate: Date of last print.
- EmailCount: Number of email sends.
- FirstEmailDate: Date of first email send.
- LastEmailDate: Date of last email send.
- CountryCode: Customer country code.
- AssociatedDocumentId: ID of associated document in document management system.

### TypeScript class
```typescript
interface Invoice {
  Id: number;
  Date: string; // ISO 8601 string for DateTimeOffset
  InvoiceNumber: string;
  TotalAmount: number;
  TotalAmountWOTax: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  CustomerId: number;
  TotalNotPayed: number;
  PaymentDeadlineDate?: string | null;
  LastOverdueNotification?: string | null;
  Origin: string;
  CustomerReference: string;
  DisallowOverdueNotification: boolean;
  OverdueNotificationCount: number;
  PrintCount: number;
  ExportedToAccounting: number; // byte in C#
  EditionState?: number | null; // byte?
  TotalAmountWOTaxBeforeDiscount: number;
  TotalAmountBeforeDiscount: number;
  GlobalDiscountWOTax?: number | null;
  GlobalDiscount: number;
  GlobalDiscountLabel: string;
  TotalDiscountsWOTax?: number | null;
  TotalDiscounts?: number | null;
  DeliveryDate?: string | null;
  ContractGuid?: string | null; // Guid as string
  BillingCenterGuid?: string | null;
  ExpectedPaymentType?: number | null;
  ExpectedPaymentDate?: string | null;
  FinalCustomerId?: number | null;
  IsDownPayment: boolean;
  FirstPrintDate?: string | null;
  LastPrintDate?: string | null;
  EmailCount: number;
  FirstEmailDate?: string | null;
  LastEmailDate?: string | null;
  CountryCode: string;
  AssociatedDocumentId?: number | null;
}
```