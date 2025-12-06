## InvoiceOverdueDetails

Classe représentant le détail d'une facture en retard de paiement avec les informations associées aux relances et pénalités.

Propriétés publiques :

- InvoiceId : Identifiant unique de la facture.
- CustomerId : Identifiant du client.
- CustomerName : Nom du client.
- InvoiceDate : Date de la facture.
- InvoiceNumber : Numéro de la facture.
- CustomerReference : Référence client figurant sur la facture.
- Origin : Origine de la facture (commande, contrat, etc.).
- PaymentDeadlineDate : Date d'échéance du paiement.
- PaymentStatus : État de règlement de la facture (payée ou non).
- TotalAmount : Montant total TTC de la facture.
- PaymentDate : Date du règlement effectué.
- OverdueDays : Nombre de jours de retard de paiement.
- OverdueAmount : Montant concerné par le retard.
- OverdueNotificationCount : Nombre de relances effectuées.
- DisallowOverdueNotification : Indique si la facture est exonérée de relances.
- LastOverdueNotificationDate : Date de la dernière relance effectuée.
- IsIgnored : Indique si le retard est ignoré pour le calcul des frais.
- LateFeeGuid : GUID du traitement des frais de retard.
- FlatFeeInvoiceLineId : Identifiant de la ligne de facture pour les frais forfaitaires.
- PenaltyInvoiceLineId : Identifiant de la ligne de facture pour les pénalités de retard.
- AnnualBaseRate : Taux annuel de base pour le calcul des pénalités.
- AnnualRateFactor : Facteur multiplicateur du taux annuel.
- AnnualRateIncrease : Majoration du taux annuel.
- PublicIndexValue : Valeur de l'indice public utilisé pour le calcul.

### D�claration TypeScript
```typescript
export interface InvoiceOverdueDetails {
  InvoiceId: number;
  CustomerId: number;
  CustomerName: string | null;
  InvoiceDate: Date;
  InvoiceNumber: string | null;
  CustomerReference: string | null;
  Origin: string | null;
  PaymentDeadlineDate: Date | null;
  PaymentStatus: boolean;
  TotalAmount: number;
  PaymentDate: Date | null;
  OverdueDays: number;
  OverdueAmount: number;
  OverdueNotificationCount: number;
  DisallowOverdueNotification: boolean;
  LastOverdueNotificationDate: Date | null;
  IsIgnored: boolean;
  LateFeeGuid: string | null;
  FlatFeeInvoiceLineId: number | null;
  PenaltyInvoiceLineId: number | null;
  AnnualBaseRate: number | null;
  AnnualRateFactor: number | null;
  AnnualRateIncrease: number | null;
  PublicIndexValue: number | null;
}
```