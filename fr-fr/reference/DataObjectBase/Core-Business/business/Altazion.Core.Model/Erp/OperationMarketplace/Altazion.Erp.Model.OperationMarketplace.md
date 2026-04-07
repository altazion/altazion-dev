## OperationMarketplace

Classe représentant une opération marketplace dans le système ERP.

Propriétés publiques :
- Guid : Identifiant unique de l'opération marketplace.
- PartenaireGuid : Identifiant unique du partenaire associé à cette opération.
- PieceGuid : Identifiant unique optionnel d'une pièce associée à l'opération.
- Type : Type de l'opération marketplace (ex. achat, remboursement, etc.).
- TransactionId : Identifiant de la transaction liée à cette opération.
- MontantOriginal : Montant initial de l'opération avant toute modification.
- Montant : Montant final de l'opération après modifications éventuelles.

### D�claration TypeScript
```typescript
interface OperationMarketplace {
  Guid: string; // UUID
  PartenaireGuid: string; // UUID
  PieceGuid?: string | null; // UUID nullable
  Type: string;
  TransactionId: string;
  MontantOriginal: number;
  Montant: number;
}
```