## ModeReglementWeb

Représente un mode de règlement avec ses spécificités pour un site web e-commerce. Hérite de WebPaymentMethod.

Propriétés publiques :
- MinimumOrderAmount : montant minimum de commande pour utiliser ce mode de règlement.
- MaximumOrderAmount : montant maximum de commande pour utiliser ce mode de règlement.
- IsActive : indique si ce mode de règlement est actif sur le site web.
- SiteId : identifiant du site web pour lequel ce mode de règlement est configuré.

Cette classe est un alias de compatibilité pour WebPaymentMethod et est marquée comme obsolète, avec recommandation d'utiliser WebPaymentMethod directement.

### D�claration TypeScript
```typescript
interface ModeReglementWeb {
  MinimumOrderAmount: number;
  MaximumOrderAmount: number;
  IsActive: boolean;
  SiteId: number;
}
```