## ECommerceOfferRule

La classe `ECommerceOfferRule` représente une règle associée à une offre e-commerce. Elle dérive de `DataObjectBase`.

Propriétés publiques :
- `Guid` : Identifiant unique de la règle (type `Guid`).
- `OfferGuid` : Identifiant unique de l'offre associée à la règle (type `Guid`).
- `Type` : Type de la règle, sous forme de chaîne de caractères.
- `MinimumAmount` : Montant minimum requis pour appliquer la règle (type `decimal?`, nullable).
- `MaximumAmount` : Montant maximum pour lequel la règle est applicable (type `decimal?`, nullable).
- `Incentive` : Libellé de l'incitation associée à la règle (type `string`).
- `IncentiveDisplayAmount` : Montant déclencheur pour afficher l'incitation (type `decimal?`, nullable).
- `SourceShowcaseGuid` : Identifiant unique de la vitrine source associée à la règle (type `Guid?`, nullable).
- `Percentage` : Pourcentage associé à la règle (type `decimal`).
- `IsPercentage` : Indique si la règle est basée sur un pourcentage (type `bool`).
- `MinimumQuantity` : Quantité minimum requise pour appliquer la règle (type `decimal?`, nullable).
- `MaximumQuantity` : Quantité maximum pour laquelle la règle est applicable (type `decimal?`, nullable).
- `IsShippingFeeLimited` : Indique si la règle est limitée aux frais de port (type `bool`).
- `ApplicationShowcaseGuid` : Identifiant unique de la vitrine cible pour l'application de la règle (type `Guid?`, nullable).
- `IsApplicationLimitedToOneShowcase` : Indique si l'application de la règle est limitée à une seule vitrine (type `bool`).
- `AppliesToEachProduct` : Indique si la règle s'applique à chaque produit individuellement (type `bool`).

### D�claration TypeScript
```typescript
interface ECommerceOfferRule {
  Guid: string; // Unique identifier of the rule
  OfferGuid: string; // Unique identifier of the associated offer
  Type: string; // Rule type
  MinimumAmount?: number | null; // Minimum amount to apply the rule
  MaximumAmount?: number | null; // Maximum amount applicable for the rule
  Incentive: string; // Incentive label
  IncentiveDisplayAmount?: number | null; // Trigger amount to display incentive
  SourceShowcaseGuid?: string | null; // Unique ID of the source showcase
  Percentage: number; // Percentage associated with the rule
  IsPercentage: boolean; // Is rule based on percentage
  MinimumQuantity?: number | null; // Minimum quantity to apply rule
  MaximumQuantity?: number | null; // Maximum quantity applicable
  IsShippingFeeLimited: boolean; // Is rule limited to shipping fees
  ApplicationShowcaseGuid?: string | null; // Unique ID of the target showcase
  IsApplicationLimitedToOneShowcase: boolean; // Is application limited to one showcase
  AppliesToEachProduct: boolean; // Does rule apply to each product
}
```