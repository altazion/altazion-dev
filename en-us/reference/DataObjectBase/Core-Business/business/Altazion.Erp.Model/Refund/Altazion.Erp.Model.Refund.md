## Refund

The Refund class represents a refund linked to a credit note in the ERP system. It includes the following properties:

- Id: Unique identifier of the refund (Guid).
- RefundType: Type of refund such as credit card, check, bank transfer, etc. (string).
- RefundDate: Date of the refund (DateTime).
- CreditNoteId: Unique identifier of the associated credit note (Guid).
- TotalAmount: Total amount of the refund including taxes (decimal).
- TotalAmountWOTax: Total amount of the refund excluding taxes (decimal).
- TransferredToAccounting: Indicates if the refund has been transferred to accounting (bool).
- AccountingDocumentNumber: Accounting document number linked to the refund (string).
- UserUxid: Optional unique identifier of the user who executed the refund (Guid?).
- PaymentIntentionGuid: Optional GUID of the associated payment intention (Guid?).

This class derives from DataObjectBase, implements a method to get its unique key (Id), provides a method to initialize properties from a data row, and includes validation rules ensuring data consistency (e.g., amounts must be positive, the refund date cannot be in the future).

### TypeScript class
```typescript
export interface Refund {
  id: string; // Unique identifier of the refund (Guid)
  refundType: string; // Type of refund (max 10 characters)
  refundDate: string; // Date of refund (ISO string)
  creditNoteId: string; // Unique ID of associated credit note
  totalAmount: number; // Total amount including tax
  totalAmountWOTax: number; // Total amount excluding tax
  transferredToAccounting: boolean; // Whether transferred to accounting
  accountingDocumentNumber?: string | null; // Accounting document number
  userUxid?: string | null; // ID of user performing refund (optional)
  paymentIntentionGuid?: string | null; // Payment intention GUID (optional)
}
```