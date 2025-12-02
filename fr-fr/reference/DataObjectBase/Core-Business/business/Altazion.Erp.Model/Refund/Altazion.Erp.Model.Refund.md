## Refund

La classe Refund représente un remboursement lié à un avoir dans le système ERP. Elle contient les propriétés suivantes :

- Id : Identifiant unique du remboursement (Guid).
- RefundType : Type de remboursement, par exemple CB, chèque, virement, etc. (string).
- RefundDate : Date du remboursement (DateTime).
- CreditNoteId : Identifiant unique de l'avoir associé (Guid).
- TotalAmount : Montant total du remboursement TTC (decimal).
- TotalAmountWOTax : Montant total du remboursement HT (decimal).
- TransferredToAccounting : Indique si le remboursement a été transféré en comptabilité (bool).
- AccountingDocumentNumber : Numéro de la pièce comptable associée (string).
- UserUxid : Identifiant unique optionnel de l'utilisateur ayant réalisé le remboursement (Guid?).
- PaymentIntentionGuid : Guid optionnel de l'intention de règlement associée (Guid?).

Cette classe hérite de DataObjectBase et dispose d'une méthode pour récupérer sa clé unique (Id). Elle fournit également une méthode pour initialiser ses propriétés à partir d'une ligne de données et valide ses données avec plusieurs règles (ex : les montants doivent être positifs, la date ne doit pas être dans le futur, etc.).

### D�claration TypeScript
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