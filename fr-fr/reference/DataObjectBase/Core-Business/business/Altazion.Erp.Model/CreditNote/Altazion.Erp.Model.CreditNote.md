## CreditNote

La classe CreditNote représente un avoir avec ses informations client, montants, dates et autres attributs liés. Voici la description de ses propriétés publiques :

- Id : Identifiant unique de l'avoir (GUID).
- IsAutomatic : Indique si l'avoir a été créé automatiquement (bool).
- InvoiceId : Identifiant optionnel de la facture d'origine (nullable long).
- ReturnReasonGuid : GUID optionnel de la raison d'avoir (nullable GUID).
- CustomerId : Identifiant du client (int).
- CustomerName : Nom du client (string).
- CustomerStreetAddress : Adresse du client (rue et numéro) (string).
- CustomerZipCode : Code postal du client (string).
- CustomerCity : Ville du client (string).
- TotalAmountWOTax : Montant total hors taxes de l'avoir (decimal).
- TotalAmount : Montant total toutes taxes comprises de l'avoir (decimal).
- RequestDate : Date de demande de l'avoir (DateTime).
- CreationDate : Date optionnelle de création de l'avoir (nullable DateTime).
- ExportedToAccounting : État d'export vers la comptabilité (0 = non exporté, 1 = exporté) (byte).
- AssociatedDocumentId : Identifiant optionnel du document associé dans la GED (nullable long).
- EditionState : État optionnel d'édition de l'avoir (0 = brouillon, 1 = validé) (nullable byte).
- ContractGuid : GUID optionnel du contrat associé (nullable GUID).
- DeliveryDate : Date optionnelle de livraison prévue ou effective (nullable DateTimeOffset).
- CustomerReference : Référence client (numéro de commande ou référence externe) (string).
- CreditNoteNumber : Numéro de l'avoir (string).
- GlobalDiscount : Montant de la remise globale TTC (decimal).
- Origin : Origine de l'avoir (commande, retour, etc.) (string).
- IsRefunded : Indique si l'avoir a été remboursé (bool nullable).
- OrderGuid : GUID optionnel de la commande associée (nullable GUID).
- FulfilmentOrderGuid : GUID optionnel de l'ordre de préparation/fulfilment (nullable GUID).
- LastUpdateDate : Date de dernière mise à jour (DateTime).
- IsRefundable : Indique si l'avoir est remboursable (bool).

### D�claration TypeScript
```typescript
interface CreditNote {
  Id: string; // GUID
  IsAutomatic: boolean;
  InvoiceId?: number | null;
  ReturnReasonGuid?: string | null; // GUID
  CustomerId: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  TotalAmountWOTax: number;
  TotalAmount: number;
  RequestDate: string; // ISO date string
  CreationDate?: string | null; // ISO date string
  ExportedToAccounting: number;
  AssociatedDocumentId?: number | null;
  EditionState?: number | null;
  ContractGuid?: string | null; // GUID
  DeliveryDate?: string | null; // ISO datetime string with offset
  CustomerReference: string;
  CreditNoteNumber: string;
  GlobalDiscount: number;
  Origin: string;
  IsRefunded?: boolean | null;
  OrderGuid?: string | null; // GUID
  FulfilmentOrderGuid?: string | null; // GUID
  LastUpdateDate: string; // ISO date string
  IsRefundable: boolean;
}
```