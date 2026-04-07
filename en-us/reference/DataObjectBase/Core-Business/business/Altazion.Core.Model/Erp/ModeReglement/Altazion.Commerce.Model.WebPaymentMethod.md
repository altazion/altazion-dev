## WebPaymentMethod

The `WebPaymentMethod` class represents a payment method specifically applied for a web e-commerce site, inheriting from the `PaymentMethod` class. It introduces properties specific to the e-commerce web context.

Public properties:

- `MinimumOrderAmount` (decimal): Minimum order amount required to use this payment method.
- `MaximumOrderAmount` (decimal): Maximum order amount limit above which this payment method is unavailable.
- `IsActive` (bool): Indicates whether this payment method is currently active on the website.
- `SiteId` (int): Identifier of the website for which this payment method is configured.

### TypeScript class
```typescript
interface WebPaymentMethod {
  MinimumOrderAmount: number; // minimum order amount to use this payment method
  MaximumOrderAmount: number; // maximum order amount limit
  IsActive: boolean; // indicates if the payment method is active on the website
  SiteId: number; // identifier for the website

  // Inherited from PaymentMethod (not detailed here)
}
```