## InvoicePaymentAllocation

The InvoicePaymentAllocation class represents the allocation of a customer payment to a specific invoice within the ERP system. It includes the following main properties:

- PaymentId: The unique identifier of the payment allocated to the invoice.
- InvoiceId: The unique identifier of the invoice receiving the payment allocation.
- Amount: The amount of the payment allocated to this invoice.

The unique key of this object is a combination of the PaymentId and InvoiceId identifiers. This class enables precise modeling of which part of a payment is applied to which invoice, facilitating payment and invoice management.


### TypeScript class
```typescript
interface InvoicePaymentAllocation {
  /** Identifiant du règlement. */
  PaymentId: number;
  /** Identifiant de la facture. */
  InvoiceId: number;
  /** Montant affecté du règlement à cette facture. */
  Amount: number;
}
```