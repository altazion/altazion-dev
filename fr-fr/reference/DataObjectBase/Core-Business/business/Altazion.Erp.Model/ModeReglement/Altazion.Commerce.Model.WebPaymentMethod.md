## WebPaymentMethod

La classe WebPaymentMethod représente un mode de règlement spécifique à un site web e-commerce, héritant des propriétés générales de PaymentMethod avec des particularités adaptées au contexte web.

Propriétés :
- MinimumOrderAmount : Montant minimum de commande requis pour que ce mode de règlement soit utilisable.
- MaximumOrderAmount : Montant maximum de commande au-delà duquel ce mode de règlement ne peut pas être utilisé.
- IsActive : Indique si ce mode de règlement est activé pour le site web.
- SiteId : Identifiant du site web concerné par cette configuration du mode de règlement.

Cette classe permet de configurer les modes de paiement avec des contraintes et des disponibilités spécifiques par site e-commerce.

### D�claration TypeScript
```typescript
interface WebPaymentMethod {
  MinimumOrderAmount: number; // Minimum order amount to use the payment method
  MaximumOrderAmount: number; // Maximum order amount to use the payment method
  IsActive: boolean; // Indicates if the payment method is active on the website
  SiteId: number; // Identifier of the website site

  // Properties inherited from PaymentMethod (not repeated here)
}
```