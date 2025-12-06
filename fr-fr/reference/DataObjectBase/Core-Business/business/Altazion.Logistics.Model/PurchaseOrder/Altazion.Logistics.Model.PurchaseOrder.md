## PurchaseOrder

Cette classe représente un en-tête de bon de commande avec ses informations relatives au client, montants, dates, et état de traitement.

Propriétés publiques :
- Id : Identifiant unique du bon de commande.
- CustomerGuid : Identifiant unique du client.
- DeliveryAddressGuid : Identifiant unique optionnel de l'adresse de livraison.
- OrderDate : Date et heure de la commande.
- Origin : Origine de la commande (ex : WEB, POS).
- OrderNumber : Numéro de la commande.
- DisplayOrder : Ordre d'affichage ou de tri.
- TotalAmount : Montant total TTC de la commande.
- TotalAmountWOTax : Montant total HT de la commande.
- TotalAmountWOTaxBeforeDiscount : Montant HT avant remise.
- TotalAmountBeforeDiscount : Montant TTC avant remise.
- TotalDiscountsWOTax : Montant total des remises HT.
- TotalDiscounts : Montant total des remises TTC.
- GlobalDiscountWOTax : Montant global de remise HT.
- GlobalDiscount : Montant global de remise TTC.
- RailsState : État du traitement dans le workflow.
- IsLockedForProcessing : Indique si la commande est verrouillée pour traitement.
- IsConfirmed : Indique si la commande est confirmée.
- IsApproved : Indique si la commande est approuvée.
- IsTriggered : Indique si la commande est déclenchée (en préparation).
- IsCompleted : Indique si la commande est terminée.
- IsArchived : Indique si la commande est archivée.
- IsInError : Indique si la commande est en erreur.
- IsCancelled : Indique si la commande est annulée.
- IsCancelledByCustomer : Indique si l'annulation a été demandée par le client.
- CancellationReason : Raison de l'annulation.
- StoreGuid : Identifiant unique du magasin associé.
- PickupPointGuid : Identifiant unique du point de livraison.
- PickupPointRecipientName : Nom du destinataire au point de livraison.
- DeliveryModeGuid : Identifiant unique du mode de livraison.
- OrderType : Type de commande.
- CustomerMessage : Message du client.
- BillingAddressGuid : Identifiant unique de l'adresse de facturation.
- IsGuestMode : Indique si la commande est en mode invité.
- ParentOrderGuid : Identifiant de la commande parente (commande fractionnée).
- DeviceGuid : Identifiant unique du device ayant passé la commande.

### D�claration TypeScript
```typescript
interface PurchaseOrder {
  Id: string; // GUID
  CustomerGuid: string; // GUID
  DeliveryAddressGuid?: string | null; // GUID nullable
  OrderDate: string; // DateTimeOffset ISO string
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
  StoreGuid?: string | null; // GUID nullable
  PickupPointGuid?: string | null; // GUID nullable
  PickupPointRecipientName: string | null;
  DeliveryModeGuid?: string | null; // GUID nullable
  OrderType: string | null;
  CustomerMessage: string | null;
  BillingAddressGuid?: string | null; // GUID nullable
  IsGuestMode: boolean;
  ParentOrderGuid?: string | null; // GUID nullable
  DeviceGuid?: string | null; // GUID nullable
}
```