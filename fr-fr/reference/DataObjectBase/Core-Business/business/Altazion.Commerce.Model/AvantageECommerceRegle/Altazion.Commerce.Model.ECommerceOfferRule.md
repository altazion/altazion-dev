## ECommerceOfferRule

La classe ECommerceOfferRule représente une règle associée à une offre e-commerce.

Propriétés publiques :
- Guid : Identifiant unique de la règle.
- OfferGuid : Identifiant unique de l'offre associée à la règle.
- Type : Type de la règle.
- MinimumAmount : Montant minimum requis pour appliquer la règle (nullable).
- MaximumAmount : Montant maximum pour lequel la règle est applicable (nullable).
- Incentive : Libellé de l'incitation associée à la règle.
- IncentiveDisplayAmount : Montant déclencheur pour afficher l'incitation (nullable).
- SourceShowcaseGuid : Identifiant unique de la vitrine source associée à la règle (nullable).
- Percentage : Pourcentage associé à la règle.
- IsPercentage : Indique si la règle est basée sur un pourcentage.
- MinimumQuantity : Quantité minimum requise pour appliquer la règle (nullable).
- MaximumQuantity : Quantité maximum pour laquelle la règle est applicable (nullable).
- IsShippingFeeLimited : Indique si la règle est limitée aux frais de port.
- ApplicationShowcaseGuid : Identifiant unique de la vitrine cible pour l'application de la règle (nullable).
- IsApplicationLimitedToOneShowcase : Indique si l'application de la règle est limitée à une seule vitrine.
- AppliesToEachProduct : Indique si la règle s'applique à chaque produit individuellement.

### D�claration TypeScript
```typescript
interface ECommerceOfferRule {
  Guid: string; // Unique identifier of the rule (UUID)
  OfferGuid: string; // Unique identifier of the associated offer (UUID)
  Type: string; // Type of the rule
  MinimumAmount?: number; // Minimum amount required to apply the rule
  MaximumAmount?: number; // Maximum amount for which the rule applies
  Incentive: string; // Label of the incentive associated with the rule
  IncentiveDisplayAmount?: number; // Amount triggering the display of the incentive
  SourceShowcaseGuid?: string; // Unique identifier of the source showcase
  Percentage: number; // Percentage associated with the rule
  IsPercentage: boolean; // Indicates if rule is based on percentage
  MinimumQuantity?: number; // Minimum quantity required to apply the rule
  MaximumQuantity?: number; // Maximum quantity for which the rule applies
  IsShippingFeeLimited: boolean; // Indicates if rule is limited to shipping fees
  ApplicationShowcaseGuid?: string; // Unique identifier of the application showcase
  IsApplicationLimitedToOneShowcase: boolean; // If application limited to one showcase
  AppliesToEachProduct: boolean; // If rule applies to each product individually
}
```