The Invoice class represents an invoice in the ERP system. It contains properties describing the main information of an invoice:

- Id: Unique identifier of the invoice
- Date: Invoice creation date
- InvoiceNumber: Invoice number
- TotalAmount: Total amount including tax
- TotalAmountWOTax: Total amount excluding tax
- CustomerName: Name of the customer
- CustomerStreetAddress: Customer's street address
- CustomerZipCode: Customer's postal code
- CustomerCity: Customer's city
- CustomerId: Customer identifier
- TotalNotPayed: Remaining amount to be paid
- PaymentDeadlineDate: Payment deadline date
- LastOverdueNotification: Date of the last overdue notification sent
- Origin: Origin of the invoice
- CustomerReference: Associated customer reference
- DisallowOverdueNotification: If true, overdue notifications are disabled
- OverdueNotificationCount: Number of overdue notifications sent
- PrintCount: Number of times the invoice has been printed

Each public property allows managing or displaying the respective invoice information.