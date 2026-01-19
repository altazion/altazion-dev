## Invoice

La classe Invoice représente une facture avec ses informations principales liées au client, aux montants, aux dates et à l'état de la facture.

Propriétés publiques :
- Id : Identifiant unique de la facture.
- Date : Date de la facture.
- InvoiceNumber : Numéro de la facture.
- TotalAmount : Montant total TTC de la facture.
- TotalAmountWOTax : Montant total HT de la facture.
- CustomerName : Nom du client facturé.
- CustomerStreetAddress : Adresse du client (rue et numéro).
- CustomerZipCode : Code postal du client.
- CustomerCity : Ville du client.
- CustomerId : Identifiant du client.
- TotalNotPayed : Montant restant à payer.
- PaymentDeadlineDate : Date d'échéance de paiement.
- LastOverdueNotification : Date de la dernière relance pour paiement.
- Origin : Origine de la facture (commande, contrat, ...).
- CustomerReference : Référence client.
- DisallowOverdueNotification : Indique si la facture est exonérée de relances.
- OverdueNotificationCount : Nombre de relances effectuées.
- PrintCount : Nombre d'impressions.
- ExportedToAccounting : État d'export vers la comptabilité (0 = non, 1 = oui).
- EditionState : État d'édition (0 = brouillon, 1 = validée).
- TotalAmountWOTaxBeforeDiscount : Montant HT avant remise globale.
- TotalAmountBeforeDiscount : Montant TTC avant remise globale.
- GlobalDiscountWOTax : Montant remise globale HT.
- GlobalDiscount : Montant remise globale TTC.
- GlobalDiscountLabel : Libellé de la remise globale.
- TotalDiscountsWOTax : Total des remises HT (lignes et globale).
- TotalDiscounts : Total des remises TTC (lignes et globale).
- DeliveryDate : Date de livraison prévue ou effective.
- ContractGuid : GUID du contrat associé.
- BillingCenterGuid : GUID du centre de facturation.
- ExpectedPaymentType : Type de règlement prévu.
- ExpectedPaymentDate : Date de règlement prévue.
- FinalCustomerId : Identifiant client final (facturation tiers).
- IsDownPayment : Indique si la facture est un acompte.
- FirstPrintDate : Date première impression.
- LastPrintDate : Date dernière impression.
- EmailCount : Nombre d'envois par email.
- FirstEmailDate : Date premier envoi email.
- LastEmailDate : Date dernier envoi email.
- CountryCode : Code pays du client.
- AssociatedDocumentId : Identifiant du document associé dans la GED.

### D�claration TypeScript
```typescript
interface Invoice {
  Id: number;
  Date: string; // ISO 8601 string for DateTimeOffset
  InvoiceNumber: string;
  TotalAmount: number;
  TotalAmountWOTax: number;
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  CustomerId: number;
  TotalNotPayed: number;
  PaymentDeadlineDate?: string | null;
  LastOverdueNotification?: string | null;
  Origin: string;
  CustomerReference: string;
  DisallowOverdueNotification: boolean;
  OverdueNotificationCount: number;
  PrintCount: number;
  ExportedToAccounting: number; // byte in C#
  EditionState?: number | null; // byte?
  TotalAmountWOTaxBeforeDiscount: number;
  TotalAmountBeforeDiscount: number;
  GlobalDiscountWOTax?: number | null;
  GlobalDiscount: number;
  GlobalDiscountLabel: string;
  TotalDiscountsWOTax?: number | null;
  TotalDiscounts?: number | null;
  DeliveryDate?: string | null;
  ContractGuid?: string | null; // Guid as string
  BillingCenterGuid?: string | null;
  ExpectedPaymentType?: number | null;
  ExpectedPaymentDate?: string | null;
  FinalCustomerId?: number | null;
  IsDownPayment: boolean;
  FirstPrintDate?: string | null;
  LastPrintDate?: string | null;
  EmailCount: number;
  FirstEmailDate?: string | null;
  LastEmailDate?: string | null;
  CountryCode: string;
  AssociatedDocumentId?: number | null;
}
```