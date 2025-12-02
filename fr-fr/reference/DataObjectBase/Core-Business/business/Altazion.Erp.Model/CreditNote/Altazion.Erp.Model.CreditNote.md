## CreditNote

La classe CreditNote représente un avoir dans le système ERP Altazion, avec toutes les informations relatives au client, aux montants, et aux dates associées. Elle contient notamment :

- Id : Identifiant unique de l'avoir.
- IsAutomatic : Indique si l'avoir a été créé automatiquement.
- InvoiceId : Identifiant de la facture d'origine (optionnel).
- ReturnReasonGuid : GUID de la raison d'avoir (optionnel).
- CustomerId : Identifiant du client.
- CustomerName : Nom du client.
- CustomerStreetAddress : Adresse du client (rue et numéro).
- CustomerZipCode : Code postal du client.
- CustomerCity : Ville du client.
- TotalAmountWOTax : Montant total de l'avoir hors taxes.
- TotalAmount : Montant total TTC de l'avoir.
- RequestDate : Date de demande de l'avoir.
- CreationDate : Date de création de l'avoir (optionnelle).
- ExportedToAccounting : Etat d'export vers la comptabilité (0 = non exporté, 1 = exporté).
- AssociatedDocumentId : Identifiant du document associé dans le système de GED (optionnel).
- EditionState : État d'édition de l'avoir (0 = brouillon, 1 = validé) (optionnel).
- ContractId : Identifiant du contrat associé (optionnel).
- DeliveryDate : Date de livraison prévue ou effective (optionnelle).
- CustomerReference : Référence client (numéro de commande ou référence externe).
- CreditNoteNumber : Numéro de l'avoir.
- GlobalDiscount : Montant de la remise globale TTC.
- Origin : Origine de l'avoir (commande, retour, etc.).
- IsRefunded : Indique si l'avoir a été remboursé (optionnel).
- OrderGuid : GUID de la commande associée (optionnel).
- PreparationSlipGuid : GUID du bon de préparation associé (optionnel).
- LastUpdateDate : Date de dernière mise à jour.
- IsRefundable : Indique si l'avoir est remboursable.

Chaque propriété représente une donnée importante pour gérer et suivre un avoir client dans le système ERP.

### D�claration TypeScript
```typescript
interface CreditNote {
  Id: string; // Guid
  IsAutomatic: boolean;
  InvoiceId?: number | null;
  ReturnReasonGuid?: string | null; // Guid
  CustomerId: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  TotalAmountWOTax: number;
  TotalAmount: number;
  RequestDate: string; // Date
  CreationDate?: string | null; // Date
  ExportedToAccounting: number; // byte
  AssociatedDocumentId?: number | null;
  EditionState?: number | null; // byte
  ContractId?: number | null;
  DeliveryDate?: string | null; // DateTimeOffset
  CustomerReference: string;
  CreditNoteNumber: string;
  GlobalDiscount: number;
  Origin: string;
  IsRefunded?: boolean | null;
  OrderGuid?: string | null; // Guid
  PreparationSlipGuid?: string | null; // Guid
  LastUpdateDate: string; // Date
  IsRefundable: boolean;
}
```