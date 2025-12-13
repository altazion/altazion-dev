## InvoicePayment

La classe `InvoicePayment` représente un règlement client pour une ou plusieurs factures. Elle contient les propriétés suivantes :

- `Id` : Identifiant unique du règlement.
- `Date` : Date du règlement.
- `CustomerId` : Identifiant du client.
- `Amount` : Montant du règlement.
- `PaymentKind` : Type de moyen de paiement (espèces, chèque, carte bancaire, etc.).
- `BankAccountId` : Identifiant du compte bancaire lié au règlement, si applicable.
- `IsOnBankAccount` : Indique si le règlement a été déposé sur le compte bancaire.
- `PaymentIdentifier` : Référence du règlement ou numéro de chèque.
- `PaymentStatus` : État du règlement (exemple : en attente, validé, rejeté).
- `BankDepositId` : Identifiant du dépôt bancaire lié à une remise en banque, si applicable.
- `ErrorCode` : Code d'erreur en cas d'échec du traitement du règlement.
- `ErrorDetails` : Message d'erreur détaillé en cas de problème.
- `OriginalAmount` : Montant original dans la devise d'origine (utile pour règlements multidevises).
- `IsConfirmed` : Indique si le règlement a été confirmé.
- `IsReceived` : Indique si le règlement a été reçu.
- `PrePaymentGuid` : GUID de l'acompte si le règlement est lié à un acompte.
- `CreditNoteGuid` : GUID de l'avoir si le règlement est lié à un avoir.

Cette classe dérive de `DataObjectBase` et est marquée par l'attribut `SqlDataConcept` permettant son mapping avec la table `gestcom_reglements` dans la base de données.

Le type `PaymentMethodKind` est une énumération indiquant le type de moyen de paiement utilisé (non détaillée ici, mais utilisée dans la propriété `PaymentKind`).

### D�claration TypeScript
```typescript
interface InvoicePayment {
  Id: number; // Unique identifier of the payment
  Date: string; // ISO string representing the date (DateTimeOffset)
  CustomerId: number; // Customer identifier
  Amount: number; // Amount of the payment
  PaymentKind: PaymentMethodKind; // Enum representing the payment method kind
  BankAccountId?: number | null; // Optional bank account identifier
  IsOnBankAccount: boolean; // Indicates if deposited on bank account
  PaymentIdentifier?: string | null; // Reference or check number
  PaymentStatus?: string | null; // Status of the payment
  BankDepositId?: number | null; // Optional bank deposit identifier
  ErrorCode?: string | null; // Error code if any
  ErrorDetails?: string | null; // Detailed error message
  OriginalAmount?: number | null; // Original amount in original currency
  IsConfirmed: boolean; // True if confirmed
  IsReceived: boolean; // True if received
  PrePaymentGuid?: string | null; // GUID in string format
  CreditNoteGuid?: string | null; // GUID in string format
}

// Enum placeholder for PaymentMethodKind
enum PaymentMethodKind {
  // Enum values must be defined according to usage context
}
```