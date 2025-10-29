## ECommerceOfferRule

La classe ECommerceOfferRule représente une règle associée à une offre e-commerce. Elle contient les propriétés suivantes :

- Guid : Identifiant unique de la règle.
- OfferGuid : Identifiant unique de l'offre associée à la règle.
- Type : Type de la règle.
- MinimumAmount : Montant minimum requis pour appliquer la règle (optionnel).
- MaximumAmount : Montant maximum pour lequel la règle est applicable (optionnel).
- Incentive : Libellé de l'incitation associée à la règle.
- IncentiveDisplayAmount : Montant déclencheur pour afficher l'incitation (optionnel).
- SourceShowcaseGuid : Identifiant unique de la vitrine source associée à la règle (optionnel).
- Percentage : Pourcentage associé à la règle.
- IsPercentage : Indique si la règle est basée sur un pourcentage.
- MinimumQuantity : Quantité minimum requise pour appliquer la règle (optionnel).
- MaximumQuantity : Quantité maximum pour laquelle la règle est applicable (optionnel).
- IsShippingFeeLimited : Indique si la règle est limitée aux frais de port.
- ApplicationShowcaseGuid : Identifiant unique de la vitrine cible pour l'application de la règle (optionnel).
- IsApplicationLimitedToOneShowcase : Indique si l'application de la règle est limitée à une seule vitrine.
- AppliesToEachProduct : Indique si la règle s'applique à chaque produit individuellement.

Cette classe dérive de DataObjectBase et est associée à une table SQL nommée "ecommerce_reglesavantages".

### D�claration TypeScript
```typescript
interface ECommerceOfferRule {
  Guid: string; // Unique identifier of the rule (GUID)
  OfferGuid: string; // Unique identifier of the associated offer (GUID)
  Type: string; // Type of the rule
  MinimumAmount?: number; // Minimum amount required to apply the rule (nullable)
  MaximumAmount?: number; // Maximum amount for which the rule is applicable (nullable)
  Incentive: string; // Label of the incentive associated with the rule
  IncentiveDisplayAmount?: number; // Amount to trigger the display of the incentive (nullable)
  SourceShowcaseGuid?: string; // Unique identifier of the source showcase (nullable, GUID)
  Percentage: number; // Percentage associated with the rule
  IsPercentage: boolean; // Indicates if the rule is percentage-based
  MinimumQuantity?: number; // Minimum quantity required to apply the rule (nullable)
  MaximumQuantity?: number; // Maximum quantity for which the rule applies (nullable)
  IsShippingFeeLimited: boolean; // Indicates if the rule is limited to shipping fees
  ApplicationShowcaseGuid?: string; // Unique identifier of the target showcase (nullable, GUID)
  IsApplicationLimitedToOneShowcase: boolean; // Indicates if application is limited to one showcase
  AppliesToEachProduct: boolean; // Indicates if rule applies to each product individually
}
```