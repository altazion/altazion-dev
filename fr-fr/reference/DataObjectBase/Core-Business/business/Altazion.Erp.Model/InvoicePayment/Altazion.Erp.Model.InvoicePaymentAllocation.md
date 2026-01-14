## InvoicePaymentAllocation

Représente l'affectation d'un règlement sur une facture spécifique.

Propriétés publiques :

- PaymentId : Identifiant du règlement.
- InvoiceId : Identifiant de la facture.
- Amount : Montant affecté du règlement à cette facture.

### D�claration TypeScript
```typescript
interface InvoicePaymentAllocation {
  PaymentId: number;
  InvoiceId: number;
  Amount: number;
}
```