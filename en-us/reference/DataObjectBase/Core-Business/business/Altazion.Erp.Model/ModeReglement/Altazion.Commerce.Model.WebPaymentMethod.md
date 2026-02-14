## WebPaymentMethod

The WebPaymentMethod class represents a payment method with specific features for an e-commerce website. It inherits general properties from PaymentMethod and adds web-specific ones.

Properties:
- MinimumOrderAmount: The minimum order amount required to use this payment method.
- MaximumOrderAmount: The maximum order amount allowed to use this payment method.
- IsActive: Indicates if this payment method is active on the website.
- SiteId: The identifier of the website for which this payment method configuration applies.

This class allows configuring payment methods with constraints and availability specific to an e-commerce site.

### TypeScript class
```typescript
interface WebPaymentMethod {
  MinimumOrderAmount: number; // Minimum order amount to use the payment method
  MaximumOrderAmount: number; // Maximum order amount to use the payment method
  IsActive: boolean; // Indicates if the payment method is active on the website
  SiteId: number; // Identifier of the website site

  // Properties inherited from PaymentMethod (not repeated here)
}
```