## CreditNote

The CreditNote class represents a credit note with its client information, amounts, dates, and other related attributes. Here is the description of its public properties:

- Id: Unique identifier of the credit note (GUID).
- IsAutomatic: Indicates if the credit note was automatically created (bool).
- InvoiceId: Optional identifier of the original invoice (nullable long).
- ReturnReasonGuid: Optional GUID of the return reason (nullable GUID).
- CustomerId: Identifier of the customer (int).
- CustomerName: Name of the customer (string).
- CustomerStreetAddress: Customer's address (street and number) (string).
- CustomerZipCode: Customer's postal code (string).
- CustomerCity: Customer's city (string).
- TotalAmountWOTax: Total amount excluding tax of the credit note (decimal).
- TotalAmount: Total amount including tax of the credit note (decimal).
- RequestDate: Date when the credit note was requested (DateTime).
- CreationDate: Optional creation date of the credit note (nullable DateTime).
- ExportedToAccounting: Export status to accounting (0 = not exported, 1 = exported) (byte).
- AssociatedDocumentId: Optional identifier of the associated document in the document management system (nullable long).
- EditionState: Optional edition state of the credit note (0 = draft, 1 = validated) (nullable byte).
- ContractGuid: Optional GUID of the associated contract (nullable GUID).
- DeliveryDate: Optional expected or actual delivery date (nullable DateTimeOffset).
- CustomerReference: Customer reference (order number or external reference) (string).
- CreditNoteNumber: Number of the credit note (string).
- GlobalDiscount: Amount of the global discount including taxes (decimal).
- Origin: Origin of the credit note (order, return, etc.) (string).
- IsRefunded: Indicates if the credit note has been refunded (nullable bool).
- OrderGuid: Optional GUID of the associated order (nullable GUID).
- FulfilmentOrderGuid: Optional GUID of the fulfilment order (nullable GUID).
- LastUpdateDate: Date of the last update (DateTime).
- IsRefundable: Indicates if the credit note is refundable (bool).

### TypeScript class
```typescript
interface CreditNote {
  Id: string; // GUID
  IsAutomatic: boolean;
  InvoiceId?: number | null;
  ReturnReasonGuid?: string | null; // GUID
  CustomerId: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  TotalAmountWOTax: number;
  TotalAmount: number;
  RequestDate: string; // ISO date string
  CreationDate?: string | null; // ISO date string
  ExportedToAccounting: number;
  AssociatedDocumentId?: number | null;
  EditionState?: number | null;
  ContractGuid?: string | null; // GUID
  DeliveryDate?: string | null; // ISO datetime string with offset
  CustomerReference: string;
  CreditNoteNumber: string;
  GlobalDiscount: number;
  Origin: string;
  IsRefunded?: boolean | null;
  OrderGuid?: string | null; // GUID
  FulfilmentOrderGuid?: string | null; // GUID
  LastUpdateDate: string; // ISO date string
  IsRefundable: boolean;
}
```