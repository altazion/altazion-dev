## InvoiceLine

The InvoiceLine class represents a line in an invoice with its details.

Public properties:
- Id: Unique identifier of the invoice line.
- InvoiceId: Identifier of the invoice this line belongs to.
- ArticleId: Identifier of the invoiced article (nullable, may be null for free lines).
- ArticleLabel: Label or description of the invoiced article.
- Quantity: Quantity invoiced.
- UnitPrice: Unit price excluding taxes.
- UnitPriceWithTax: Unit price including all taxes.
- Comment: Comment or remark on the invoice line.
- ProjectId: Identifier of the project associated with this line (nullable).
- IsDepositLine: Indicates if this line corresponds to a deposit (boolean).

### TypeScript class
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