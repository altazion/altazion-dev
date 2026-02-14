## ModeReglementWeb

Represents a payment method with its specifics for a e-commerce website. Inherits from WebPaymentMethod.

Public properties:
- MinimumOrderAmount: minimum order amount for this payment method usage.
- MaximumOrderAmount: maximum order amount for this payment method usage.
- IsActive: indicates if this payment method is active on the website.
- SiteId: identifier of the website for which this payment method is configured.

This class is a compatibility alias for WebPaymentMethod and marked obsolete, with a recommendation to use WebPaymentMethod directly.

### TypeScript class
```typescript
interface ModeReglementWeb {
  MinimumOrderAmount: number;
  MaximumOrderAmount: number;
  IsActive: boolean;
  SiteId: number;
}
```