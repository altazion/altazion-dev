## ProductDppRecalledBatch

Cette classe représente la déclaration de rappel d'un lot spécifique dans le cadre d'un snapshot DPP.

Propriétés publiques :
- BatchNumber : Numéro du lot rappelé.
- RecallDate : Date officielle du rappel.
- Reason : Motif du rappel.
- RegulatoryReference : Référence réglementaire associée au rappel (par exemple, numéro de décision RAPEX).

### D�claration TypeScript
```typescript
interface ProductDppRecalledBatch {
  BatchNumber: string;
  RecallDate: string; // DateOnly represented as ISO date string
  Reason: string;
  RegulatoryReference: string;
}
```