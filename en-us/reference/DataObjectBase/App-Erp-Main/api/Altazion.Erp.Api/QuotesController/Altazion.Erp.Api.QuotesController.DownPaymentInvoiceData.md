## DownPaymentInvoiceData

This class represents the data needed to create a down payment invoice related to a customer quote.

Public properties:
- TransformationDate (DateTime?) : The date when the quote is transformed into a down payment invoice, initialized to the current date and read-only.
- CreateNewClient (bool) : Indicates whether to create a new client during the transformation.
- ReplacementClientPK (int?) : Identifier of a possible replacement client.
- CustomerType (short) : The type of the customer.
- AmountWOTax (decimal) : The amount excluding tax of the down payment.
- AmountWithTax (decimal) : The amount including tax of the down payment.
- DownPaymentProductId (long?) : Identifier of the down payment product.
- Label (string) : Label for the down payment.
- Description (string) : Description of the down payment.

### TypeScript class
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