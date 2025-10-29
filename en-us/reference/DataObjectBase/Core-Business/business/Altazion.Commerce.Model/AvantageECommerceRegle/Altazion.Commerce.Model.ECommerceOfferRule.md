## ECommerceOfferRule

The ECommerceOfferRule class represents a rule associated with an e-commerce offer. It includes the following properties:

- Guid: Unique identifier for the rule.
- OfferGuid: Unique identifier of the offer associated with the rule.
- Type: Type of the rule.
- MinimumAmount: Minimum amount required to apply the rule (optional).
- MaximumAmount: Maximum amount for which the rule applies (optional).
- Incentive: Label of the incentive linked to the rule.
- IncentiveDisplayAmount: Trigger amount to display the incentive (optional).
- SourceShowcaseGuid: Unique identifier of the source showcase linked to the rule (optional).
- Percentage: Percentage associated with the rule.
- IsPercentage: Indicates if the rule is percentage-based.
- MinimumQuantity: Minimum quantity required to apply the rule (optional).
- MaximumQuantity: Maximum quantity for which the rule applies (optional).
- IsShippingFeeLimited: Indicates if the rule is limited to shipping fees.
- ApplicationShowcaseGuid: Unique identifier of the target showcase where the rule applies (optional).
- IsApplicationLimitedToOneShowcase: Indicates if the application of the rule is limited to a single showcase.
- AppliesToEachProduct: Indicates if the rule applies to each product individually.

This class inherits from DataObjectBase and is mapped to a SQL table named "ecommerce_reglesavantages."

### TypeScript class
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