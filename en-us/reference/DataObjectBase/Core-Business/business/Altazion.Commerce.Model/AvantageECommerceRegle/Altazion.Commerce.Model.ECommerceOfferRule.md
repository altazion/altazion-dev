## ECommerceOfferRule

The ECommerceOfferRule class represents a rule associated with an e-commerce offer.

Public properties:
- Guid: Unique identifier of the rule.
- OfferGuid: Unique identifier of the offer associated with the rule.
- Type: Type of the rule.
- MinimumAmount: Minimum amount required to apply the rule (nullable).
- MaximumAmount: Maximum amount for which the rule applies (nullable).
- Incentive: Label of the incentive associated with the rule.
- IncentiveDisplayAmount: Trigger amount for displaying the incentive (nullable).
- SourceShowcaseGuid: Unique identifier of the source showcase associated with the rule (nullable).
- Percentage: Percentage associated with the rule.
- IsPercentage: Indicates if the rule is based on a percentage.
- MinimumQuantity: Minimum quantity required to apply the rule (nullable).
- MaximumQuantity: Maximum quantity for which the rule applies (nullable).
- IsShippingFeeLimited: Indicates if the rule is limited to shipping fees.
- ApplicationShowcaseGuid: Unique identifier of the target showcase for applying the rule (nullable).
- IsApplicationLimitedToOneShowcase: Indicates if the application of the rule is limited to a single showcase.
- AppliesToEachProduct: Indicates if the rule applies to each product individually.

### TypeScript class
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