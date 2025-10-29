## InvoiceLine

La classe InvoiceLine représente une ligne de facture avec ses détails.

Propriétés publiques :
- Id : Identifiant unique de la ligne de facture.
- InvoiceId : Identifiant de la facture à laquelle appartient cette ligne.
- ArticleId : Identifiant de l'article facturé (nullable, peut être null pour les lignes libres).
- ArticleLabel : Libellé ou description de l'article facturé.
- Quantity : Quantité facturée.
- UnitPrice : Prix unitaire hors taxes.
- UnitPriceWithTax : Prix unitaire toutes taxes comprises.
- Comment : Commentaire ou remarque sur la ligne de facture.
- ProjectId : Identifiant du projet associé à cette ligne (nullable).
- IsDepositLine : Indique si cette ligne correspond à un acompte (booléen).

### D�claration TypeScript
```typescript
interface InvoiceLine {
  Id: number;
  InvoiceId: number;
  ArticleId?: number | null;
  ArticleLabel: string;
  Quantity: number;
  UnitPrice: number;
  UnitPriceWithTax: number;
  Comment: string;
  ProjectId?: number | null;
  IsDepositLine: boolean;
}
```