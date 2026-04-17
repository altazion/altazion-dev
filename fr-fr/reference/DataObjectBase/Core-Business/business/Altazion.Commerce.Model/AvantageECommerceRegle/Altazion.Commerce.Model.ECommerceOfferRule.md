## ECommerceOfferRule

La classe ECommerceOfferRule représente une règle appliquée à une offre e-commerce. Elle contient les propriétés suivantes :

- Guid : Identifiant unique de la règle.
- OfferGuid : Identifiant unique de l'offre associée.
- Type : Type de la règle.
- MinimumAmount : Montant minimum requis pour appliquer la règle, optionnel.
- MaximumAmount : Montant maximum applicable pour la règle, optionnel.
- Incentive : Libellé de l'incitation associée.
- IncentiveDisplayAmount : Montant déclencheur pour afficher l'incitation, optionnel.
- SourceShowcaseGuid : Identifiant unique de la vitrine source associée, optionnel.
- Percentage : Pourcentage associé à la règle.
- IsPercentage : Indique si la règle est basée sur un pourcentage.
- MinimumQuantity : Quantité minimum requise pour appliquer la règle, optionnel.
- MaximumQuantity : Quantité maximum applicable pour la règle, optionnel.
- IsShippingFeeLimited : Booléen indiquant si la règle est limitée aux frais de port.
- ApplicationShowcaseGuid : Identifiant unique de la vitrine cible pour appliquer la règle, optionnel.
- IsApplicationLimitedToOneShowcase : Indique si la règle est limitée à une seule vitrine.
- AppliesToEachProduct : Indique si la règle s'applique à chaque produit individuellement.
- XmlData : Donnée XML associée à la règle.
- IncludesShippingFeesInAmount : Indique si le montant inclut les frais de port.
- IsLoyaltyTrigger : Indique si la règle déclenche un traitement fidélité.
- ApplicationTypeCode : Code brut du type d'application.
- CombinedRule1Guid : Identifiant de la première règle dans le cas d'une combinaison, optionnel.
- CombinedRule2Guid : Identifiant de la seconde règle dans le cas d'une combinaison, optionnel.
- CombineOperator : Opérateur logique pour la combinaison de règles.

Cette classe permet de gérer des règles complexes de promotions ou avantages liés aux offres e-commerce en fonction de critères comme montants, quantités, vitrines, ou combinaisons logiques.

### D�claration TypeScript
```typescript
interface ECommerceOfferRule {
  Guid: string;
  OfferGuid: string;
  Type: string;
  MinimumAmount?: number | null;
  MaximumAmount?: number | null;
  Incentive: string;
  IncentiveDisplayAmount?: number | null;
  SourceShowcaseGuid?: string | null;
  Percentage: number;
  IsPercentage: boolean;
  MinimumQuantity?: number | null;
  MaximumQuantity?: number | null;
  IsShippingFeeLimited: boolean;
  ApplicationShowcaseGuid?: string | null;
  IsApplicationLimitedToOneShowcase: boolean;
  AppliesToEachProduct: boolean;
  XmlData: string;
  IncludesShippingFeesInAmount: boolean;
  IsLoyaltyTrigger: boolean;
  ApplicationTypeCode: string;
  CombinedRule1Guid?: string | null;
  CombinedRule2Guid?: string | null;
  CombineOperator: string;
}
```