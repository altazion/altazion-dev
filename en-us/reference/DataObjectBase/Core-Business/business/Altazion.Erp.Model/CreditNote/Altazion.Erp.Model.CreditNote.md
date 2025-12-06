## CreditNote

The CreditNote class represents a credit note along with all its related information including customer details, amounts, dates and various states.

- Id: Unique identifier of the credit note (GUID).
- IsAutomatic: Indicates if the credit note was created automatically.
- InvoiceId: Identifier of the original invoice (nullable).
- ReturnReasonGuid: GUID of the reason for the credit note (nullable).
- CustomerId: Identifier of the customer.
- CustomerName: Name of the customer.
- CustomerStreetAddress: Customer's street address.
- CustomerZipCode: Customer postal code.
- CustomerCity: Customer city.
- TotalAmountWOTax: Total amount of the credit note excluding tax.
- TotalAmount: Total amount of the credit note including tax.
- RequestDate: Date when the credit note was requested.
- CreationDate: Date when the credit note was created (nullable).
- ExportedToAccounting: Export state to accounting (0 = not exported, 1 = exported).
- AssociatedDocumentId: Identifier of the associated document in the document management system (nullable).
- EditionState: Edition state of the credit note (0 = draft, 1 = validated) (nullable).
- ContractGuid: GUID of the associated contract (nullable).
- DeliveryDate: Scheduled or actual delivery date (nullable).
- CustomerReference: Customer reference (order number or external reference).
- CreditNoteNumber: Credit note number.
- GlobalDiscount: Amount of the global tax-included discount.
- Origin: Origin of the credit note (order, return, etc.).
- IsRefunded: Indicates if the credit note has been refunded (nullable).
- OrderGuid: GUID of the associated order (nullable).
- FulfillmentOrderGuid: GUID of the associated fulfillment order (nullable).
- LastUpdateDate: Date of last update.
- IsRefundable: Indicates if the credit note is refundable.

### TypeScript class
```typescript
interface CreditNote {
  Id: string; // GUID
  IsAutomatic: boolean;
  InvoiceId?: number;
  ReturnReasonGuid?: string; // GUID
  CustomerId: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  TotalAmountWOTax: number;
  TotalAmount: number;
  RequestDate: string; // ISO date string
  CreationDate?: string; // ISO date string
  ExportedToAccounting: number;
  AssociatedDocumentId?: number;
  EditionState?: number;
  ContractGuid?: string; // GUID
  DeliveryDate?: string; // ISO date string with offset
  CustomerReference: string;
  CreditNoteNumber: string;
  GlobalDiscount: number;
  Origin: string;
  IsRefunded?: boolean;
  OrderGuid?: string; // GUID
  FulfillmentOrderGuid?: string; // GUID
  LastUpdateDate: string; // ISO date string
  IsRefundable: boolean;
}
```