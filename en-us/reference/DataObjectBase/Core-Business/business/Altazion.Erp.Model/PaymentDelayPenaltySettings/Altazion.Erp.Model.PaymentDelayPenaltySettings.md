## PaymentDelayPenaltySettings

This class represents the settings for payment delay penalties.

Public properties:
- Id: Unique identifier (primary key) of the penalty settings.
- Origin: Origin of the invoice (e.g., web, store, etc.).
- AnnualBaseRate: Annual base rate used for penalty calculations.
- AnnualFactorRate: Annual factor rate used in penalty calculations.
- AnnualAdditionalRate: Annual additional (increased) rate applicable to penalties.
- ForfeitAmount: Fixed forfeit amount applied for late payments.
- PublicIndexGuid: Optional GUID of the public index used for calculations.

The class also contains validation logic ensuring parameter values are valid (e.g., rates cannot be negative, Id must be positive, etc.).

### TypeScript class
```typescript
interface PaymentDelayPenaltySettings {
  Id: number;
  Origin: string;
  AnnualBaseRate: number;
  AnnualFactorRate: number;
  AnnualAdditionalRate: number;
  ForfeitAmount: number;
  PublicIndexGuid?: string | null;
}
```