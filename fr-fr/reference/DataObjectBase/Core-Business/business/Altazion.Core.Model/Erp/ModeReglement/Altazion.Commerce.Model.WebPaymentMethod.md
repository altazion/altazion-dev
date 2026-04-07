## WebPaymentMethod

La classe `WebPaymentMethod` représente un mode de règlement utilisé spécifiquement pour un site web e-commerce, et hérite de la classe `PaymentMethod`. Elle ajoute des propriétés spécifiques au contexte web en commerce électronique.

Propriétés publiques :

- `MinimumOrderAmount` (decimal) : Montant minimum de commande requis pour utiliser ce mode de règlement.
- `MaximumOrderAmount` (decimal) : Montant maximum de commande au-delà duquel ce mode de règlement n'est plus disponible.
- `IsActive` (bool) : Indique si ce mode de règlement est actuellement actif sur le site web.
- `SiteId` (int) : Identifiant du site web pour lequel ce mode de règlement est configuré.

### D�claration TypeScript
```typescript
interface WebPaymentMethod {
  MinimumOrderAmount: number; // minimum order amount to use this payment method
  MaximumOrderAmount: number; // maximum order amount limit
  IsActive: boolean; // indicates if the payment method is active on the website
  SiteId: number; // identifier for the website

  // Inherited from PaymentMethod (not detailed here)
}
```