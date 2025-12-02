## CreditNote

The CreditNote class represents a credit note within the Altazion ERP system, including all client-related information, amounts, and related dates. It specifically includes:

- Id: Unique identifier of the credit note.
- IsAutomatic: Indicates whether the credit note was created automatically.
- InvoiceId: Identifier of the original invoice (optional).
- ReturnReasonGuid: GUID of the credit note reason (optional).
- CustomerId: Identifier of the customer.
- CustomerName: Name of the customer.
- CustomerStreetAddress: Customer's street address.
- CustomerZipCode: Customer's postal code.
- CustomerCity: Customer's city.
- TotalAmountWOTax: Total amount excluding tax.
- TotalAmount: Total amount including tax.
- RequestDate: Date when the credit note was requested.
- CreationDate: Date when the credit note was created (optional).
- ExportedToAccounting: Export status to accounting (0 = not exported, 1 = exported).
- AssociatedDocumentId: Identifier of the associated document in the document management system (optional).
- EditionState: Edition status of the credit note (0 = draft, 1 = validated) (optional).
- ContractId: Identifier of the associated contract (optional).
- DeliveryDate: Scheduled or actual delivery date (optional).
- CustomerReference: Customer reference such as order number or external reference.
- CreditNoteNumber: Number of the credit note.
- GlobalDiscount: Amount of the global discount including tax.
- Origin: Origin of the credit note (order, return, etc.).
- IsRefunded: Indicates if the credit note has been refunded (optional).
- OrderGuid: GUID of the associated order (optional).
- PreparationSlipGuid: GUID of the associated preparation slip (optional).
- LastUpdateDate: Date of last update.
- IsRefundable: Indicates if the credit note is refundable.

Each property is essential for managing and tracking a client credit note within the ERP system.

### TypeScript class
```typescript
interface CreditNote {
  Id: string; // Guid
  IsAutomatic: boolean;
  InvoiceId?: number | null;
  ReturnReasonGuid?: string | null; // Guid
  CustomerId: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  TotalAmountWOTax: number;
  TotalAmount: number;
  RequestDate: string; // Date
  CreationDate?: string | null; // Date
  ExportedToAccounting: number; // byte
  AssociatedDocumentId?: number | null;
  EditionState?: number | null; // byte
  ContractId?: number | null;
  DeliveryDate?: string | null; // DateTimeOffset
  CustomerReference: string;
  CreditNoteNumber: string;
  GlobalDiscount: number;
  Origin: string;
  IsRefunded?: boolean | null;
  OrderGuid?: string | null; // Guid
  PreparationSlipGuid?: string | null; // Guid
  LastUpdateDate: string; // Date
  IsRefundable: boolean;
}
```