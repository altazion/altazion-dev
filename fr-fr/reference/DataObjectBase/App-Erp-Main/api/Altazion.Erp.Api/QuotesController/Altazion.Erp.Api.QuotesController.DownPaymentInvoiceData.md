## DownPaymentInvoiceData

Cette classe représente les données nécessaires pour la création d'une facture d'acompte liée à un devis client.

Propriétés publiques :
- TransformationDate (DateTime?) : La date de transformation du devis en facture d'acompte, initialisée à la date du jour et accessible en lecture seule.
- CreateNewClient (bool) : Indique s'il faut créer un nouveau client lors de la transformation.
- ReplacementClientPK (int?) : Identifiant du client de remplacement éventuel.
- CustomerType (short) : Type du client.
- AmountWOTax (decimal) : Montant hors taxe de l'acompte.
- AmountWithTax (decimal) : Montant TTC de l'acompte.
- DownPaymentProductId (long?) : Identifiant du produit d'acompte.
- Label (string) : Libellé de l'acompte.
- Description (string) : Description de l'acompte.

### D�claration TypeScript
```typescript
interface DownPaymentInvoiceData {
  readonly TransformationDate?: Date | null;
  CreateNewClient: boolean;
  ReplacementClientPK?: number | null;
  CustomerType: number;
  AmountWOTax: number;
  AmountWithTax: number;
  DownPaymentProductId?: number | null;
  Label?: string | null;
  Description?: string | null;
}
```