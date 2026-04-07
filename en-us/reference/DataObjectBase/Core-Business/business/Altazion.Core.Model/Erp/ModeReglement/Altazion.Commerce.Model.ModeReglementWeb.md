## ModeReglementWeb

The ModeReglementWeb class represents a payment method with specific features for an e-commerce website.

Public properties:
- MinimumOrderAmount: Minimum order amount to use this payment method.
- MaximumOrderAmount: Maximum order amount to use this payment method.
- IsActive: Indicates whether this payment method is active on the website.
- SiteId: Identifier of the website for which this payment method is configured.

This class inherits from WebPaymentMethod, thus extending the properties of a standard payment method with e-commerce specific criteria.

### TypeScript class
```typescript
interface ModeReglementWeb {
  MinimumOrderAmount: number; // Minimum order amount to use this payment method
  MaximumOrderAmount: number; // Maximum order amount to use this payment method
  IsActive: boolean;          // Whether this payment method is active on the site
  SiteId: number;            // Identifier of the site for which this payment method is assigned
}
```