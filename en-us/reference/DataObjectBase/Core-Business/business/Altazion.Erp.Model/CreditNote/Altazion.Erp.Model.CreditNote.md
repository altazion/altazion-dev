## CreditNote

The `CreditNote` class represents a credit note within the ERP system, including client information, amounts, dates, and associated statuses.

Properties:
- `Id`: Unique identifier of the credit note.
- `IsAutomatic`: Indicates whether the credit note was created automatically.
- `InvoiceId`: Identifier of the original invoice, nullable.
- `ReturnReasonGuid`: GUID for the return reason, nullable.
- `CustomerId`: Identifier of the customer.
- `CustomerName`: Name of the customer.
- `CustomerStreetAddress`: Customer address (street and number).
- `CustomerZipCode`: Customer postal code.
- `CustomerCity`: Customer city.
- `TotalAmountWOTax`: Total amount of the credit note excluding taxes.
- `TotalAmount`: Total amount of the credit note including all taxes.
- `RequestDate`: Date the credit note was requested.
- `CreationDate`: Date the credit note was created, nullable.
- `ExportedToAccounting`: Export status to accounting (0 = not exported, 1 = exported).
- `AssociatedDocumentId`: ID of the associated document in the document management system, nullable.
- `EditionState`: Editing state of the credit note (0 = draft, 1 = validated), nullable.
- `ContractGuid`: GUID of the associated contract, nullable.
- `DeliveryDate`: Scheduled or actual delivery date, nullable.
- `CustomerReference`: Customer reference (order number or external reference).
- `CreditNoteNumber`: Number of the credit note.
- `GlobalDiscount`: Amount of the global discount including taxes.
- `Origin`: Origin of the credit note (order, return, etc.).
- `IsRefunded`: Indicates if the credit note has been refunded, nullable.
- `OrderGuid`: GUID of the associated order, nullable.
- `FulfillmentOrderGuid`: GUID of the associated fulfillment order, nullable.
- `LastUpdateDate`: Date of last update.
- `IsRefundable`: Indicates if the credit note is refundable.

### TypeScript class
```typescript
interface CreditNote {
  Id: string; // GUID unique identifier
  IsAutomatic: boolean;
  InvoiceId?: number | null;
  ReturnReasonGuid?: string | null;
  CustomerId: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  TotalAmountWOTax: number;
  TotalAmount: number;
  RequestDate: string; // ISO Date string
  CreationDate?: string | null;
  ExportedToAccounting: number; // byte
  AssociatedDocumentId?: number | null;
  EditionState?: number | null;
  ContractGuid?: string | null;
  DeliveryDate?: string | null;
  CustomerReference?: string | null;
  CreditNoteNumber?: string | null;
  GlobalDiscount: number;
  Origin?: string | null;
  IsRefunded?: boolean | null;
  OrderGuid?: string | null;
  FulfillmentOrderGuid?: string | null;
  LastUpdateDate: string; // ISO Date string
  IsRefundable: boolean;
}
```