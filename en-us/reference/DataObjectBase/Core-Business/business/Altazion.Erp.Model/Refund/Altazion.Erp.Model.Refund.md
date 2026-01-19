## Refund

The Refund class represents a refund linked to a credit note in the ERP system. Its public properties are:

- Id: Unique identifier of the refund, Guid type.
- RefundType: Type of refund (credit card, check, bank transfer, etc.), string.
- RefundDate: Date of the refund, DateTimeOffset.
- CreditNoteId: Identifier of the associated credit note, Guid.
- TotalAmount: Total amount of the refund including all taxes (TTC), decimal.
- TotalAmountWOTax: Total amount excluding taxes (HT), decimal.
- TransferredToAccounting: Indicates if the refund has been transferred to accounting, boolean.
- AccountingDocumentNumber: Accounting document number linked to the refund, string.
- UserUxid: Unique identifier (nullable Guid) of the user performing the refund.
- PaymentIntentionGuid: Nullable Guid of the related payment intention.

The class also contains a GetKey method returning the unique key of the object (the Id). The validation ensures required fields are populated, amounts are positive and consistent, and string lengths respect limits.


### TypeScript class
```typescript
interface Refund {
  Id: string; // GUID unique identifier of the refund
  RefundType: string; // Type of refund (e.g., CB, check, bank transfer)
  RefundDate: string; // Date of refund in ISO 8601 format
  CreditNoteId: string; // GUID of the associated credit note
  TotalAmount: number; // Total amount including tax
  TotalAmountWOTax: number; // Total amount excluding tax
  TransferredToAccounting: boolean; // True if transferred to accounting
  AccountingDocumentNumber: string | null; // Accounting document number
  UserUxid?: string | null; // Optional GUID of the user who issued refund
  PaymentIntentionGuid?: string | null; // Optional GUID of payment intention
}
```