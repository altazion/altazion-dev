## PurchaseOrderPaymentIntent

La classe PurchaseOrderPaymentIntent représente une intention de règlement sur un bon de commande. Elle contient plusieurs propriétés :

- Id : Identifiant unique de l'intention de règlement.
- OrderId : Identifiant unique du bon de commande associé.
- Amount : Montant actuel de l'intention de règlement.
- OriginalAmount : Montant original de l'intention de règlement.
- PaymentMethodGuid : Identifiant unique optionnel du mode de règlement.
- IsConfirmed : Indique si l'intention est confirmée.
- IsReceived : Indique si le paiement a été reçu.
- IsModified : Indique si l'intention a été modifiée.
- IsValidationInProgress : Indique si la validation est en cours.
- IsValidated : Indique si l'intention est validée.
- ErrorCode : Code d'erreur en cas de problème de validation.
- ErrorDetails : Détails de l'erreur en cas de problème de validation.
- DocumentNumber : Numéro de pièce associé au paiement (chèque, transaction, etc.).
- DueDate : Date d'échéance du paiement.
- IsExportedToAccounting : Indique si l'intention a été exportée vers la comptabilité.
- StoreDepositGuid : Identifiant unique optionnel du magasin/dépôt associé.
- BankDepositId : Identifiant optionnel du dépôt banque associé.
- CustomerName : Nom du client (champ de jointure).
- OrderNumber : Numéro de la commande (champ de jointure).

Cette classe hérite de DataObjectBase et sert à gérer les informations concernant les intentions de paiement liées à des bons de commande.

### D�claration TypeScript
```typescript
interface PurchaseOrderPaymentIntent {
  Id: string; // Guid
  OrderId: string; // Guid
  Amount: number; // decimal
  OriginalAmount: number; // decimal
  PaymentMethodGuid?: string | null; // Nullable Guid
  IsConfirmed: boolean;
  IsReceived: boolean;
  IsModified: boolean;
  IsValidationInProgress: boolean;
  IsValidated: boolean;
  ErrorCode?: string | null;
  ErrorDetails?: string | null;
  DocumentNumber?: string | null;
  DueDate: string; // DateTimeOffset as ISO string
  IsExportedToAccounting: boolean;
  StoreDepositGuid?: string | null;
  BankDepositId?: number | null; // Nullable long
  CustomerName?: string | null;
  OrderNumber?: string | null;
}
```