## InvoicePaymentAllocation

Represents the allocation of a payment to a specific invoice.

Public properties:

- PaymentId: Identifier of the payment.
- InvoiceId: Identifier of the invoice.
- Amount: Allocated amount of the payment to this invoice.

### TypeScript class
```typescript
interface InvoicePaymentAllocation {
  PaymentId: number;
  InvoiceId: number;
  Amount: number;
}
```