## ModeReglementWeb

La classe ModeReglementWeb représente un mode de règlement avec ses spécificités pour un site web e-commerce. 

Propriétés publiques :
- MinimumOrderAmount : Montant minimum de commande pour utiliser ce mode de règlement.
- MaximumOrderAmount : Montant maximum de commande pour utiliser ce mode de règlement.
- IsActive : Indique si ce mode de règlement est actif sur le site web.
- SiteId : Identifiant du site web pour lequel ce mode de règlement est configuré.

Cette classe hérite de WebPaymentMethod, elle étend donc les propriétés d'un mode de paiement classique avec des critères spécifiques pour l'e-commerce.

### D�claration TypeScript
```typescript
interface ModeReglementWeb {
  MinimumOrderAmount: number; // Minimum order amount to use this payment method
  MaximumOrderAmount: number; // Maximum order amount to use this payment method
  IsActive: boolean;          // Whether this payment method is active on the site
  SiteId: number;            // Identifier of the site for which this payment method is assigned
}
```