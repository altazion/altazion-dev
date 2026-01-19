## IntentionReglementBase

Classe représentant une intention de règlement (commande) dans le système ERP d'Altazion. Elle contient les propriétés suivantes :

- Guid : identifiant unique du règlement.
- ModeReglementGuid : identifiant unique du mode de règlement utilisé.
- BonCommandeGuid : identifiant unique du bon de commande associé.
- MontantOriginal : montant initial du règlement.
- Montant : montant actuel du règlement.
- DateEcheance : date d'échéance du règlement.
- NumPiece : numéro de pièce associé au règlement.
- EstRecu : indique si le règlement a été reçu.
- EstValide : indique si le règlement est validé.
- DepotBanqueId : identifiant optionnel du dépôt banque.
- ModeReglementDetailGuid : identifiant optionnel du détail du mode de règlement.

La méthode ToString() est redéfinie pour retourner "Règlement (commande)".

Cette classe hérite de DataObjectBase et sert de base aux intentions de règlement.


### D�claration TypeScript
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