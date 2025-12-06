## CustomerWithOverdueInvoices

Représente un client avec un résumé de ses factures en retard de paiement.

Propriétés publiques :
- CustomerId : Identifiant unique du client.
- CustomerGuid : Identifiant global unique (GUID) du client.
- CustomerName : Nom complet du client.
- PostalCode : Code postal du client.
- City : Ville du client.
- TotalInvoicesCount : Nombre total de factures pour ce client.
- CurrentInvoicesWithoutOverdue : Nombre de factures en cours sans retard.
- SettledInvoicesWithOverdue : Nombre de factures réglées avec retard.
- CurrentInvoicesWithOverdue : Nombre de factures en cours avec retard.
- TotalInvoicesAmount : Montant total TTC de toutes les factures.
- TotalOverdueAmount : Montant total TTC des factures en retard.
- InvoicesToProcess : Nombre de factures en retard à traiter (frais non encore facturés).
- InvoicesWithWaivedFees : Nombre de factures en retard pour lesquelles les frais ont été offerts/ignorés.
- LastOverdueNotificationDate : Date de la dernière relance effectuée.
- CurrentInvoicesAmount : Montant total TTC des factures en cours (non réglées).
- CurrentOverdueAmount : Montant total TTC des factures en cours avec retard.

### D�claration TypeScript
```typescript
interface CustomerWithOverdueInvoices {
  CustomerId: number;
  CustomerGuid: string; // GUID represented as string
  CustomerName: string | null;
  PostalCode: string | null;
  City: string | null;
  TotalInvoicesCount: number;
  CurrentInvoicesWithoutOverdue: number;
  SettledInvoicesWithOverdue: number;
  CurrentInvoicesWithOverdue: number;
  TotalInvoicesAmount: number;
  TotalOverdueAmount: number;
  InvoicesToProcess: number;
  InvoicesWithWaivedFees: number;
  LastOverdueNotificationDate: string | null; // ISO string or null
  CurrentInvoicesAmount: number;
  CurrentOverdueAmount: number;
}
```