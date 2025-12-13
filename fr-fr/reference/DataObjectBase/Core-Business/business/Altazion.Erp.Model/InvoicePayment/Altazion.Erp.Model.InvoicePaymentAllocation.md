## InvoicePaymentAllocation

La classe InvoicePaymentAllocation représente l'affectation d'un règlement client sur une facture spécifique dans le système ERP. Cette classe contient les propriétés principales suivantes :

- PaymentId : Identifiant unique du règlement affecté à la facture.
- InvoiceId : Identifiant unique de la facture à laquelle le règlement est affecté.
- Amount : Montant du règlement affecté à cette facture.

La clé unique de cet objet est la combinaison des identifiants PaymentId et InvoiceId. Cette classe permet de modéliser précisément quelle partie d'un règlement est allouée à quelle facture, facilitant ainsi la gestion des paiements et des factures.


### D�claration TypeScript
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