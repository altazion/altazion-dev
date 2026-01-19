## InvoicePaymentDelay

Représente les détails du retard de paiement d'une facture, incluant les pénalités de retard et les frais associés.

Propriétés publiques :
- Id : Identifiant unique de la facture (clé primaire).
- Origin : Origine de la facture (web, magasin, etc.).
- CustomerId : Identifiant du client.
- Date : Date de la facture.
- InvoiceNumber : Numéro de la facture.
- CustomerName : Nom du client.
- CustomerReference : Référence client.
- PaymentDeadlineDate : Date d'échéance du paiement.
- PaymentStatus : Statut du paiement (0 = impayé, 1 = payé).
- TotalAmount : Montant total TTC de la facture.
- PaymentDate : Date réelle du paiement.
- DaysOfDelay : Nombre de jours de retard.
- DelayedAmount : Montant en retard.
- LastOverdueNotification : Date du dernier rappel envoyé.
- DisallowOverdueNotification : Indique si la facture est exonérée de relance.
- OverdueNotificationCount : Niveau du statut de relance (0 = aucun, 1= premier, 2= second, 3= troisième).
- DelayFeeGuid : GUID du frais de retard s'il existe.
- ForfeitFeeLineId : Identifiant de la ligne de forfait sur la facture.
- PenaltyFeeLineId : Identifiant de la ligne de pénalités sur la facture.
- IsDelayFeeIgnored : Indique si les frais de retard sont ignorés.
- PublicIndexValue : Valeur d'indice public utilisée pour le calcul des pénalités.
- AnnualBaseRate : Taux annuel de base pour les pénalités.
- AnnualFactorRate : Taux annuel facteur de calcul des pénalités.
- AnnualAdditionalRate : Taux annuel de majoration pour les pénalités.

### D�claration TypeScript
```typescript
interface InvoicePaymentDelay {
  Id: number;
  Origin: string | null;
  CustomerId: number;
  Date: string; // DateTimeOffset serialized as ISO string
  InvoiceNumber: string | null;
  CustomerName: string | null;
  CustomerReference: string | null;
  PaymentDeadlineDate: string | null; // nullable DateTimeOffset
  PaymentStatus: number;
  TotalAmount: number;
  PaymentDate: string | null; // nullable DateTimeOffset
  DaysOfDelay: number;
  DelayedAmount: number;
  LastOverdueNotification: string | null; // nullable DateTimeOffset
  DisallowOverdueNotification: boolean;
  OverdueNotificationCount: number;
  DelayFeeGuid: string | null; // nullable GUID as string
  ForfeitFeeLineId: number | null;
  PenaltyFeeLineId: number | null;
  IsDelayFeeIgnored: boolean;
  PublicIndexValue: number | null;
  AnnualBaseRate: number | null;
  AnnualFactorRate: number | null;
  AnnualAdditionalRate: number | null;
}
```