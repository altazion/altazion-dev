## PurchaseOrderPaymentIntent

La classe PurchaseOrderPaymentIntent représente une intention de règlement sur un bon de commande. Elle contient les propriétés suivantes :

- Id : Identifiant unique de l'intention de règlement (Guid).
- OrderId : Identifiant unique du bon de commande associé (Guid).
- Amount : Montant actuel de l'intention de règlement (decimal).
- OriginalAmount : Montant original de l'intention de règlement (decimal).
- PaymentMethodGuid : Identifiant unique du mode de règlement (Guid nullable).
- IsConfirmed : Booléen indiquant si l'intention est confirmée.
- IsReceived : Booléen indiquant si le paiement a été reçu.
- IsModified : Booléen indiquant si l'intention a été modifiée.
- IsValidationInProgress : Booléen indiquant si la validation est en cours.
- IsValidated : Booléen indiquant si l'intention est validée.
- ErrorCode : Code d'erreur en cas de problème de validation (string).
- ErrorDetails : Détails de l'erreur en cas de problème de validation (string).
- DocumentNumber : Numéro de pièce associé, par exemple un chèque ou une transaction (string).
- DueDate : Date d'échéance du paiement (DateOnly).
- IsExportedToAccounting : Booléen indiquant si l'intention a été exportée vers la comptabilité.
- StoreDepositGuid : Identifiant unique du magasin ou dépôt associé (Guid nullable).
- BankDepositId : Identifiant du dépôt bancaire associé (long nullable).
- CustomerName : Nom du client (string, champ de jointure).
- OrderNumber : Numéro de la commande (string, champ de jointure).

Cette classe hérite de DataObjectBase et correspond à la table SQL gestcom_bonscommandes_intentionsreglement dans la base "Logistics".

### D�claration TypeScript
```typescript
interface PurchaseOrderPaymentIntent {
  Id: string; // Guid
  OrderId: string; // Guid
  Amount: number; // decimal
  OriginalAmount: number; // decimal
  PaymentMethodGuid?: string | null; // Guid nullable
  IsConfirmed: boolean;
  IsReceived: boolean;
  IsModified: boolean;
  IsValidationInProgress: boolean;
  IsValidated: boolean;
  ErrorCode?: string | null;
  ErrorDetails?: string | null;
  DocumentNumber?: string | null;
  DueDate: string; // DateOnly as ISO string
  IsExportedToAccounting: boolean;
  StoreDepositGuid?: string | null; // Guid nullable
  BankDepositId?: number | null; // long nullable
  CustomerName?: string | null;
  OrderNumber?: string | null;
}
```