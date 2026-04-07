## PurchaseOrder

La classe PurchaseOrder représente un en-tête de bon de commande avec ses informations relatives au client, aux montants, et aux dates.

Propriétés publiques :
- Id : Identifiant unique du bon de commande (Guid).
- CustomerGuid : Identifiant unique du client (Guid).
- DeliveryAddressGuid : Identifiant unique optionnel de l'adresse de livraison (Guid?).
- OrderDate : Date de la commande (DateTimeOffset).
- Origin : Origine de la commande (ex: WEB, POS) (string).
- OrderNumber : Numéro de la commande (string).
- DisplayOrder : Ordre d'affichage ou de tri (short).
- TotalAmount : Montant total TTC (decimal).
- TotalAmountWOTax : Montant total HT (decimal).
- TotalAmountWOTaxBeforeDiscount : Montant HT avant remise (decimal).
- TotalAmountBeforeDiscount : Montant TTC avant remise (decimal).
- TotalDiscountsWOTax : Montant total des remises HT (decimal).
- TotalDiscounts : Montant total des remises TTC (decimal).
- GlobalDiscountWOTax : Montant de la remise globale HT (decimal).
- GlobalDiscount : Montant de la remise globale TTC (decimal).
- RailsState : État du traitement dans le workflow (string).
- IsLockedForProcessing : Indique si la commande est verrouillée pour traitement (bool).
- IsConfirmed : Indique si la commande est confirmée (bool).
- IsApproved : Indique si la commande est approuvée (bool).
- IsTriggered : Indique si la commande est déclenchée (bool).
- IsCompleted : Indique si la commande est terminée (bool).
- IsArchived : Indique si la commande est archivée (bool).
- IsInError : Indique si la commande est en erreur (bool).
- IsCancelled : Indique si la commande est annulée (bool).
- IsCancelledByCustomer : Indique si l'annulation a été demandée par le client (bool).
- CancellationReason : Raison de l'annulation (string).
- StoreGuid : Identifiant unique optionnel du magasin associé (Guid?).
- PickupPointGuid : Identifiant unique optionnel du point de livraison (Guid?).
- PickupPointRecipientName : Nom du destinataire au point de livraison (string).
- DeliveryModeGuid : Identifiant unique optionnel du mode de livraison (Guid?).
- OrderType : Type de commande (string).
- CustomerMessage : Message du client (string).
- BillingAddressGuid : Identifiant unique optionnel de l'adresse de facturation (Guid?).
- IsGuestMode : Indique si la commande est en mode invité (bool).
- ParentOrderGuid : Identifiant unique optionnel de la commande parente (Guid?).
- DeviceGuid : Identifiant unique optionnel du device ayant passé la commande (Guid?).

### D�claration TypeScript
```typescript
interface PurchaseOrder {
  Id: string; // Guid
  CustomerGuid: string; // Guid
  DeliveryAddressGuid?: string; // Guid | null
  OrderDate: string; // DateTimeOffset as ISO string
  Origin: string | null;
  OrderNumber: string | null;
  DisplayOrder: number; // short
  TotalAmount: number; // decimal
  TotalAmountWOTax: number; // decimal
  TotalAmountWOTaxBeforeDiscount: number; // decimal
  TotalAmountBeforeDiscount: number; // decimal
  TotalDiscountsWOTax: number; // decimal
  TotalDiscounts: number; // decimal
  GlobalDiscountWOTax: number; // decimal
  GlobalDiscount: number; // decimal
  RailsState: string | null;
  IsLockedForProcessing: boolean;
  IsConfirmed: boolean;
  IsApproved: boolean;
  IsTriggered: boolean;
  IsCompleted: boolean;
  IsArchived: boolean;
  IsInError: boolean;
  IsCancelled: boolean;
  IsCancelledByCustomer: boolean;
  CancellationReason: string | null;
  StoreGuid?: string | null;
  PickupPointGuid?: string | null;
  PickupPointRecipientName: string | null;
  DeliveryModeGuid?: string | null;
  OrderType: string | null;
  CustomerMessage: string | null;
  BillingAddressGuid?: string | null;
  IsGuestMode: boolean;
  ParentOrderGuid?: string | null;
  DeviceGuid?: string | null;
}
```