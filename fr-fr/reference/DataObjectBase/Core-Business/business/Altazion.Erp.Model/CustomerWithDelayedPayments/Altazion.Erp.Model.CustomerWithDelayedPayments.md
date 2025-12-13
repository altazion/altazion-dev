## CustomerWithDelayedPayments

Cette classe représente un client avec des factures en retard de paiement, incluant des statistiques et des montants associés.

Propriétés publiques :

- Id : Identifiant principal du client.
- Guid : Identifiant unique du client.
- Name : Nom du client.
- PostalCode : Code postal du client.
- City : Ville du client.
- TotalInvoicesCount : Nombre total de factures pour ce client.
- InProgressNotDelayedCount : Nombre de factures en cours sans retard.
- PaidWithDelayCount : Nombre de factures réglées avec retard.
- InProgressDelayedCount : Nombre de factures en cours avec retard.
- TotalAmountIncludingTax : Montant total TTC de toutes les factures.
- DelayedAmountIncludingTax : Montant TTC des factures en retard.
- InvoicesToProcessCount : Nombre de factures à traiter pour les frais.
- WaivedFeesCount : Nombre de factures avec frais offerts.
- LastOverdueNotification : Date de la dernière relance envoyée.
- InProgressAmountIncludingTax : Montant TTC des factures en cours.
- InProgressDelayedAmountIncludingTax : Montant TTC des factures en cours en retard.

### D�claration TypeScript
```typescript
export interface CustomerWithDelayedPayments {
  Id: number;
  Guid: string; // Guid as string representation
  Name: string | null;
  PostalCode: string | null;
  City: string | null;
  TotalInvoicesCount: number;
  InProgressNotDelayedCount: number;
  PaidWithDelayCount: number;
  InProgressDelayedCount: number;
  TotalAmountIncludingTax: number;
  DelayedAmountIncludingTax: number;
  InvoicesToProcessCount: number;
  WaivedFeesCount: number;
  LastOverdueNotification?: string | null; // DateTimeOffset as ISO string or null
  InProgressAmountIncludingTax: number;
  InProgressDelayedAmountIncludingTax: number;
}
```