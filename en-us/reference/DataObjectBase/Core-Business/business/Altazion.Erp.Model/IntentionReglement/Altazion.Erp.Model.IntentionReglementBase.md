## IntentionReglementBase

Class representing a payment intention (order) in the Altazion ERP system. It includes the following properties:

- Guid: unique identifier of the payment.
- ModeReglementGuid: unique identifier of the payment method used.
- BonCommandeGuid: unique identifier of the associated purchase order.
- MontantOriginal: original amount of the payment.
- Montant: current amount of the payment.
- DateEcheance: due date of the payment.
- NumPiece: document number associated with the payment.
- EstRecu: indicates if the payment has been received.
- EstValide: indicates if the payment is validated.
- DepotBanqueId: optional bank deposit identifier.
- ModeReglementDetailGuid: optional identifier for the payment method detail.

The ToString() method is overridden to return "Payment (order)".

This class derives from DataObjectBase and serves as a base for payment intentions.


### TypeScript class
```typescript
interface IntentionReglementBase {
  Guid: string; // UUID
  ModeReglementGuid: string; // UUID
  BonCommandeGuid: string; // UUID
  MontantOriginal: number;
  Montant: number;
  DateEcheance: string; // ISO date string
  NumPiece: string | null;
  EstRecu: boolean;
  EstValide: boolean;
  DepotBanqueId: number | null;
  ModeReglementDetailGuid: string | null; // UUID or null
}
```