Class representing an invoice in the ERP system. It contains the following properties:

- Id: Unique identifier of the invoice.
- Date: Date and time of the invoice.
- InvoiceNumber: Invoice number.
- TotalAmount: Total amount including taxes (TTC).
- TotalAmountWOTax: Total amount excluding taxes (HT).
- CustomerName: Customer's name.
- CustomerStreetAddress: Customer's street address.
- CustomerZipCode: Customer's postal code.
- CustomerCity: Customer's city.
- CustomerId: Customer identifier.
- TotalNotPayed: Remaining unpaid amount on the invoice.
- PaymentDeadlineDate: Deadline date for payment, nullable.
- LastOverdueNotification: Date of last overdue notification, nullable.
- Origin: Origin or source of the invoice.
- CustomerReference: Customer reference associated with the invoice.
- DisallowOverdueNotification: Flag to disallow overdue notifications.
- OverdueNotificationCount: Number of overdue notifications sent.
- PrintCount: Number of times the invoice has been printed.

This class also provides a GetKey() method returning the unique identifier and a FromDataRow method to populate the object from a data row.
