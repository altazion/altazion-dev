## InvoicePaymentDelay

Cette classe représente les détails relatifs aux retards de paiement d'une facture, incluant les pénalités de retard et les frais associés.

Propriétés publiques :
- Id : Clé primaire de la facture.
- Origin : Origine de la facture (exemples : web, magasin).
- CustomerId : Clé primaire du client.
- Date : Date de la facture.
- InvoiceNumber : Numéro de la facture.
- CustomerName : Nom du client.
- CustomerReference : Référence client associée à la facture.
- PaymentDeadlineDate : Date limite de paiement.
- PaymentStatus : Statut du paiement (0 = non payé, 1 = payé).
- TotalAmount : Montant total TTC de la facture.
- PaymentDate : Date effective de paiement.
- DaysOfDelay : Nombre de jours de retard de paiement.
- DelayedAmount : Montant en retard.
- LastOverdueNotification : Date du dernier rappel de retard envoyé.
- DisallowOverdueNotification : Indique si la facture est exonérée de relances.
- OverdueNotificationCount : Niveau de relance (0 = aucune, 1 = première, 2 = deuxième, 3 = troisième).
- DelayFeeGuid : Identifiant GUID des frais de retard, s'il existe.
- ForfeitFeeLineId : Identifiant de la ligne de facture correspondant au forfait.
- PenaltyFeeLineId : Identifiant de la ligne de facture correspondant aux pénalités.
- IsDelayFeeIgnored : Indique si les frais de retard ont été annulés.
- PublicIndexValue : Valeur d'indice public utilisée pour le calcul des pénalités.
- AnnualBaseRate : Taux annuel de base pour les pénalités.
- AnnualFactorRate : Taux annuel facteur utilisé pour le calcul.
- AnnualAdditionalRate : Taux annuel de majoration pour les pénalités.

### D�claration TypeScript
```typescript
interface InvoicePaymentDelay {
  Id: number;
  Origin: string | null;
  CustomerId: number;
  Date: string; // ISO 8601 DateTimeOffset
  InvoiceNumber: string | null;
  CustomerName: string | null;
  CustomerReference: string | null;
  PaymentDeadlineDate: string | null; // ISO 8601 DateTimeOffset nullable
  PaymentStatus: number;
  TotalAmount: number;
  PaymentDate: string | null; // ISO 8601 DateTime nullable
  DaysOfDelay: number;
  DelayedAmount: number;
  LastOverdueNotification: string | null; // ISO 8601 DateTimeOffset nullable
  DisallowOverdueNotification: boolean;
  OverdueNotificationCount: number;
  DelayFeeGuid: string | null; // GUID nullable
  ForfeitFeeLineId: number | null;
  PenaltyFeeLineId: number | null;
  IsDelayFeeIgnored: boolean;
  PublicIndexValue: number | null;
  AnnualBaseRate: number | null;
  AnnualFactorRate: number | null;
  AnnualAdditionalRate: number | null;
}
```