## Refund

La classe Refund représente un remboursement lié à un avoir dans le système ERP. Ses propriétés publiques sont :

- Id : Identifiant unique du remboursement, de type Guid.
- RefundType : Type de remboursement (CB, chèque, virement, etc.), chaîne de caractères.
- RefundDate : Date du remboursement, de type DateTimeOffset.
- CreditNoteId : Identifiant de l'avoir associé, de type Guid.
- TotalAmount : Montant total du remboursement toutes taxes comprises (TTC), de type decimal.
- TotalAmountWOTax : Montant total du remboursement hors taxes (HT), de type decimal.
- TransferredToAccounting : Indique si le remboursement a été transféré en comptabilité, booléen.
- AccountingDocumentNumber : Numéro de pièce comptable associé au remboursement, chaîne de caractères.
- UserUxid : Identifiant unique (Guid?) de l'utilisateur ayant effectué le remboursement, nullable.
- PaymentIntentionGuid : GUID nullable de l'intention de règlement associée.

La classe inclut également une méthode GetKey qui retourne la clé unique de l'objet (l'Id). La validation des données vérifie notamment que les champs essentiels sont renseignés, les montants sont positifs et cohérents, et que les longueurs des chaînes sont conformes.


### D�claration TypeScript
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