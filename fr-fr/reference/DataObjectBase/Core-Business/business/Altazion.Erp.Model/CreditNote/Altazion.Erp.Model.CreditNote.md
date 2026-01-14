## CreditNote

La classe `CreditNote` représente un avoir dans le système ERP avec ses informations client, les montants, dates, et états associés.

Propriétés :
- `Id` : Identifiant unique de l'avoir.
- `IsAutomatic` : Indique si l'avoir a été créé automatiquement.
- `InvoiceId` : Identifiant de la facture d'origine, nullable.
- `ReturnReasonGuid` : GUID de la raison d'avoir, nullable.
- `CustomerId` : Identifiant du client.
- `CustomerName` : Nom du client.
- `CustomerStreetAddress` : Adresse du client (rue et numéro).
- `CustomerZipCode` : Code postal du client.
- `CustomerCity` : Ville du client.
- `TotalAmountWOTax` : Montant total de l'avoir hors taxes.
- `TotalAmount` : Montant total de l'avoir toutes taxes comprises.
- `RequestDate` : Date de demande de l'avoir.
- `CreationDate` : Date de création de l'avoir, nullable.
- `ExportedToAccounting` : État d'export vers la comptabilité (0 = non exporté, 1 = exporté).
- `AssociatedDocumentId` : Identifiant du document associé dans la GED, nullable.
- `EditionState` : État d'édition de l'avoir (0 = brouillon, 1 = validé), nullable.
- `ContractGuid` : GUID du contrat associé, nullable.
- `DeliveryDate` : Date de livraison prévue ou effective, nullable.
- `CustomerReference` : Référence client (numéro de commande ou référence externe).
- `CreditNoteNumber` : Numéro de l'avoir.
- `GlobalDiscount` : Montant de la remise globale TTC.
- `Origin` : Origine de l'avoir (commande, retour, etc.).
- `IsRefunded` : Indique si l'avoir a été remboursé, nullable.
- `OrderGuid` : GUID de la commande associée, nullable.
- `FulfillmentOrderGuid` : GUID de l'ordre de préparation/fulfilment associé, nullable.
- `LastUpdateDate` : Date de dernière mise à jour.
- `IsRefundable` : Indique si l'avoir est remboursable.

### D�claration TypeScript
```typescript
interface CreditNote {
  Id: string; // GUID unique identifier
  IsAutomatic: boolean;
  InvoiceId?: number | null;
  ReturnReasonGuid?: string | null;
  CustomerId: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  TotalAmountWOTax: number;
  TotalAmount: number;
  RequestDate: string; // ISO Date string
  CreationDate?: string | null;
  ExportedToAccounting: number; // byte
  AssociatedDocumentId?: number | null;
  EditionState?: number | null;
  ContractGuid?: string | null;
  DeliveryDate?: string | null;
  CustomerReference?: string | null;
  CreditNoteNumber?: string | null;
  GlobalDiscount: number;
  Origin?: string | null;
  IsRefunded?: boolean | null;
  OrderGuid?: string | null;
  FulfillmentOrderGuid?: string | null;
  LastUpdateDate: string; // ISO Date string
  IsRefundable: boolean;
}
```