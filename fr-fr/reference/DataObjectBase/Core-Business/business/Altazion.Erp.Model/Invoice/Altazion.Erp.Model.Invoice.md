## Invoice

La classe Invoice représente une facture avec ses informations détaillées telles que l'identifiant unique, la date, le numéro, les montants, et les informations relatives au client et au paiement.

Propriétés publiques :
- Id : Identifiant unique de la facture.
- Date : Date de la facture.
- InvoiceNumber : Numéro de la facture.
- TotalAmount : Montant total TTC de la facture.
- TotalAmountWOTax : Montant total hors taxes de la facture.
- CustomerName : Nom du client facturé.
- CustomerStreetAddress : Adresse du client (rue et numéro).
- CustomerZipCode : Code postal du client.
- CustomerCity : Ville du client.
- CustomerId : Identifiant du client.
- TotalNotPayed : Montant restant à payer sur la facture.
- PaymentDeadlineDate : Date d'échéance de paiement (nullable).
- LastOverdueNotification : Date de la dernière relance pour paiement (nullable).
- Origin : Origine de la facture (ex : commande, contrat).
- CustomerReference : Référence client externe ou numéro de commande.
- DisallowOverdueNotification : Indique si la facture est exonérée de relances de paiement.
- OverdueNotificationCount : Nombre de relances effectuées.
- PrintCount : Nombre d'impressions de la facture.

### D�claration TypeScript
```typescript
interface Invoice {
  Id: number; // Unique identifier of the invoice
  Date: string; // Date of the invoice as ISO string
  InvoiceNumber: string;
  TotalAmount: number; // Total amount including taxes
  TotalAmountWOTax: number; // Total amount excluding taxes
  CustomerName: string;
  CustomerStreetAddress: string;
  CustomerZipCode: string;
  CustomerCity: string;
  CustomerId: number;
  TotalNotPayed: number; // Remaining amount to pay
  PaymentDeadlineDate?: string; // Nullable date
  LastOverdueNotification?: string; // Nullable date
  Origin: string;
  CustomerReference: string;
  DisallowOverdueNotification: boolean;
  OverdueNotificationCount: number;
  PrintCount: number;
}
```