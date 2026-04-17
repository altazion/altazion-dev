## ECommerceOfferRule

The ECommerceOfferRule class represents a rule associated with an e-commerce offer. It includes the following properties:

- Guid: Unique identifier of the rule.
- OfferGuid: Unique identifier of the associated offer.
- Type: Type of the rule.
- MinimumAmount: Minimum amount required to apply the rule, optional.
- MaximumAmount: Maximum amount to which the rule is applicable, optional.
- Incentive: Label of the associated incentive.
- IncentiveDisplayAmount: Trigger amount to display the incentive, optional.
- SourceShowcaseGuid: Unique identifier of the source showcase associated with the rule, optional.
- Percentage: Percentage value associated with the rule.
- IsPercentage: Indicates whether the rule is percentage-based.
- MinimumQuantity: Minimum quantity required to apply the rule, optional.
- MaximumQuantity: Maximum quantity for which the rule applies, optional.
- IsShippingFeeLimited: Indicates if the rule is limited to shipping fees.
- ApplicationShowcaseGuid: Unique identifier of the target showcase for applying the rule, optional.
- IsApplicationLimitedToOneShowcase: Indicates if the rule application is limited to a single showcase.
- AppliesToEachProduct: Indicates if the rule applies individually to each product.
- XmlData: XML data associated with the rule.
- IncludesShippingFeesInAmount: Indicates if the trigger amount calculation includes shipping fees.
- IsLoyaltyTrigger: Indicates if the rule triggers loyalty processing.
- ApplicationTypeCode: Raw code for the type of application of the rule.
- CombinedRule1Guid: Identifier of the first rule in a combined rule set, optional.
- CombinedRule2Guid: Identifier of the second rule in a combined rule set, optional.
- CombineOperator: Logical operator used for combination of rules.

This class allows managing complex promotional or advantage rules linked to e-commerce offers based on criteria such as amounts, quantities, showcases, or logical combinations.

### TypeScript class
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