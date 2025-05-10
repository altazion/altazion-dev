## ECommerceOfferRule

The `ECommerceOfferRule` class represents a rule associated with an e-commerce offer. It inherits from `DataObjectBase`.

Public properties:
- `Guid`: Unique identifier of the rule (type `Guid`).
- `OfferGuid`: Unique identifier of the offer associated with the rule (type `Guid`).
- `Type`: The type of the rule as a string.
- `MinimumAmount`: Minimum amount required to apply the rule (type `decimal?`, nullable).
- `MaximumAmount`: Maximum amount for which the rule is applicable (type `decimal?`, nullable).
- `Incentive`: Label of the incentive associated with the rule (type `string`).
- `IncentiveDisplayAmount`: Trigger amount to display the incentive (type `decimal?`, nullable).
- `SourceShowcaseGuid`: Unique identifier of the source showcase associated with the rule (type `Guid?`, nullable).
- `Percentage`: Percentage associated with the rule (type `decimal`).
- `IsPercentage`: Indicates if the rule is based on a percentage (type `bool`).
- `MinimumQuantity`: Minimum quantity required to apply the rule (type `decimal?`, nullable).
- `MaximumQuantity`: Maximum quantity for which the rule is applicable (type `decimal?`, nullable).
- `IsShippingFeeLimited`: Indicates if the rule is limited to shipping fees (type `bool`).
- `ApplicationShowcaseGuid`: Unique identifier of the target showcase for rule application (type `Guid?`, nullable).
- `IsApplicationLimitedToOneShowcase`: Indicates if the rule application is limited to a single showcase (type `bool`).
- `AppliesToEachProduct`: Indicates if the rule applies to each product individually (type `bool`).

### TypeScript class
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