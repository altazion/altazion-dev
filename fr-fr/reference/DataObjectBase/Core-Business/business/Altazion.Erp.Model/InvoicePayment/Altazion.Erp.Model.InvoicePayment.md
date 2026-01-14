## InvoicePayment

La classe InvoicePayment représente un règlement client pour une ou plusieurs factures. Elle contient les propriétés publiques suivantes :

- Id : Identifiant unique du règlement.
- Date : Date du règlement.
- CustomerId : Identifiant du client.
- Amount : Montant du règlement.
- PaymentKind : Type de moyen de paiement (espèces, chèque, carte bancaire, etc.).
- BankAccountId : Identifiant du compte bancaire si lié.
- IsOnBankAccount : Indique si le règlement a été déposé sur un compte bancaire.
- PaymentIdentifier : Référence du règlement ou numéro de chèque.
- PaymentStatus : État du règlement (en attente, validé, rejeté, etc.).
- BankDepositId : Identifiant du dépôt bancaire associé.
- ErrorCode : Code d'erreur si le traitement a échoué.
- ErrorDetails : Détails de l'erreur en cas d'échec.
- OriginalAmount : Montant original dans la devise d'origine (pour multidevises).
- IsConfirmed : Indique si le règlement a été confirmé.
- IsReceived : Indique si le règlement a été reçu.
- PrePaymentGuid : GUID de l'acompte associé s'il y a lieu.
- CreditNoteGuid : GUID de l'avoir lié si applicable.

Ces propriétés permettent de gérer l'ensemble des détails et statuts d'un règlement client dans le système ERP.

### D�claration TypeScript
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