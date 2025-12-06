## CreditNote

La classe CreditNote représente un avoir avec toutes ses informations associées, notamment client, montants, dates et états divers.

- Id : Identifiant unique de l'avoir (GUID).
- IsAutomatic : Indique si l'avoir a été créé automatiquement.
- InvoiceId : Identifiant de la facture d'origine (nullable).
- ReturnReasonGuid : GUID de la raison d'avoir (nullable).
- CustomerId : Identifiant du client.
- CustomerName : Nom du client.
- CustomerStreetAddress : Adresse (rue et numéro) du client.
- CustomerZipCode : Code postal du client.
- CustomerCity : Ville du client.
- TotalAmountWOTax : Montant total hors taxes de l'avoir.
- TotalAmount : Montant total TTC de l'avoir.
- RequestDate : Date de demande de l'avoir.
- CreationDate : Date de création de l'avoir (nullable).
- ExportedToAccounting : État d'export vers la comptabilité (0 = non exporté, 1 = exporté).
- AssociatedDocumentId : Identifiant du document GED associé (nullable).
- EditionState : État d'édition de l'avoir (0 = brouillon, 1 = validé) (nullable).
- ContractGuid : GUID du contrat associé (nullable).
- DeliveryDate : Date de livraison prévue ou effective (nullable).
- CustomerReference : Référence client (numéro ou référence externe).
- CreditNoteNumber : Numéro de l'avoir.
- GlobalDiscount : Montant de la remise globale TTC.
- Origin : Origine de l'avoir (commande, retour, etc.).
- IsRefunded : Indique si l'avoir a été remboursé (nullable).
- OrderGuid : GUID de la commande associée (nullable).
- FulfillmentOrderGuid : GUID de l'ordre de préparation/fulfilment (nullable).
- LastUpdateDate : Date de dernière mise à jour.
- IsRefundable : Indique si l'avoir est remboursable.

### D�claration TypeScript
```typescript
interface CreditNote {
  Id: string; // GUID
  IsAutomatic: boolean;
  InvoiceId?: number;
  ReturnReasonGuid?: string; // GUID
  CustomerId: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  TotalAmountWOTax: number;
  TotalAmount: number;
  RequestDate: string; // ISO date string
  CreationDate?: string; // ISO date string
  ExportedToAccounting: number;
  AssociatedDocumentId?: number;
  EditionState?: number;
  ContractGuid?: string; // GUID
  DeliveryDate?: string; // ISO date string with offset
  CustomerReference: string;
  CreditNoteNumber: string;
  GlobalDiscount: number;
  Origin: string;
  IsRefunded?: boolean;
  OrderGuid?: string; // GUID
  FulfillmentOrderGuid?: string; // GUID
  LastUpdateDate: string; // ISO date string
  IsRefundable: boolean;
}
```