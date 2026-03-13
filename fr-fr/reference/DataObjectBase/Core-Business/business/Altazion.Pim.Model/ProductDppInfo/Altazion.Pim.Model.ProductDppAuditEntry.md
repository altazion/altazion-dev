## ProductDppAuditEntry

La classe ProductDppAuditEntry représente une entrée du journal d'audit pour les modifications du Passeport Numérique Produit (DPP). Chaque entrée est tracée automatiquement par la logique métier à chaque opération de mutation. Les propriétés publiques sont :

- Timestamp : Horodatage UTC de l'opération, indique la date et l'heure exactes de la modification.
- Action : Code de l'action effectuée, référencé dans DppConstants.DppAuditActions, indiquant le type spécifique d'opération réalisée.
- SnapshotId : Identifiant unique (GUID) du snapshot DPP concerné par l'opération. Cette valeur peut être nulle pour les actions portant directement sur l'objet ProductDppInfo.
- Description : Description libre de l'opération telle que le nom du matériau, numéro CAS ou numéro de lot, afin d'apporter un contexte à la modification.

### D�claration TypeScript
```typescript
interface ProductDppAuditEntry {
  Timestamp: Date;
  Action: string;
  SnapshotId?: string | null;
  Description: string;
}
```