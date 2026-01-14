## InvoicePayment

The InvoicePayment class represents a client payment for one or more invoices. It exposes the following public properties:

- Id: Unique identifier of the payment.
- Date: Date of the payment.
- CustomerId: Identifier of the customer.
- Amount: Amount of the payment.
- PaymentKind: Type of payment method (cash, check, credit card, etc.).
- BankAccountId: Identifier of the bank account if related.
- IsOnBankAccount: Indicates if the payment has been deposited to a bank account.
- PaymentIdentifier: Payment reference or check number.
- PaymentStatus: Status of the payment (pending, validated, rejected, etc.).
- BankDepositId: Identifier of the bank deposit if part of a deposit batch.
- ErrorCode: Error code if processing failed.
- ErrorDetails: Detailed error message if processing failed.
- OriginalAmount: Original amount in the original currency (for multi-currency payments).
- IsConfirmed: Indicates if the payment has been confirmed.
- IsReceived: Indicates if the payment has been received.
- PrePaymentGuid: GUID of the prepayment if linked.
- CreditNoteGuid: GUID of the credit note if linked.

These properties enable managing the full details and statuses of a client payment within the ERP system.

### TypeScript class
```typescript
interface InvoicePayment {
  Id: number; // Identifiant unique du règlement
  Date: string; // Date du règlement en format ISO (DateTimeOffset)
  CustomerId: number; // Identifiant du client
  Amount: number; // Montant du règlement
  PaymentKind: PaymentMethodKind; // Type de moyen de paiement
  BankAccountId?: number | null; // Identifiant du compte bancaire si lié
  IsOnBankAccount: boolean; // Indique si le règlement est déposé en banque
  PaymentIdentifier?: string | null; // Référence ou numéro de chèque
  PaymentStatus?: string | null; // État du règlement
  BankDepositId?: number | null; // Id du dépôt bancaire associé
  ErrorCode?: string | null; // Code d'erreur de traitement
  ErrorDetails?: string | null; // Détails de l'erreur
  OriginalAmount?: number | null; // Montant original en devise d'origine
  IsConfirmed: boolean; // Indique si le règlement est confirmé
  IsReceived: boolean; // Indique si le règlement est reçu
  PrePaymentGuid?: string | null; // GUID de l'acompte si lié
  CreditNoteGuid?: string | null; // GUID de l'avoir lié
}

enum PaymentMethodKind {
  // Enum values should be defined as per system specification
}
```