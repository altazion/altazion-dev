## PaymentMethod

The PaymentMethod class represents a payment method usable in the system.

Public properties:
- Guid: Unique identifier of the payment method (GUID).
- IsPrimary: Indicates if this is the main payment method.
- AccountingCode: Accounting account code associated with this method.
- Priority: Display priority (sort order).
- WebModuleUrl: Web module URL for payment processing.
- ReturnModuleUrl: Return URL after payment processing.
- Name: Name of the payment method.
- Type: Payment type (credit card, check, bank transfer, etc.).
- MerchantKey: Merchant key provided by the payment provider.
- MerchantKeyComplement: Complement to the merchant key (e.g. secret key).
- ClassName: Technical class used for processing this payment method.
- IsECommerceEnabled: Indicates if usable on e-commerce site.
- IsPosEnabled: Indicates if usable on point of sale web.
- IsClickAndCollectEnabled: Indicates if usable for click & collect.
- IsMicroTransactionsEnabled: Indicates if usable for micro-transactions.
- ProviderId: Identifier of the payment provider.
- IsEditable: Indicates if the method can be modified by the user.
- IsMarketplaceEnabled: Indicates if usable on marketplaces.
- IsBackOfficeEnabled: Indicates if usable for back-office management.
- PaymentDelay: Payment delay in days.
- File1: Binary data file 1 associated with the payment method.
- File2: Binary data file 2 associated with the payment method.
- IsRRR: Indicates if this is a Rapid Repeatable Payment (RRR) type.
- AdditionalData: Additional string data for extra information.

### TypeScript class
```typescript
interface PaymentMethod {
  Guid: string; // Unique identifier (GUID)
  IsPrimary: boolean; // Indicates if primary method
  AccountingCode: string | null; // Accounting account code
  Priority: number; // Display priority
  WebModuleUrl: string | null; // Web module URL for payment
  ReturnModuleUrl: string | null; // Return URL after payment
  Name: string | null; // Payment method name
  Type: PaymentMethodKind; // Type of payment method
  MerchantKey: string | null; // Merchant key
  MerchantKeyComplement: string | null; // Key complement
  ClassName: string | null; // Technical class name
  IsECommerceEnabled: boolean; // Usable on e-commerce
  IsPosEnabled: boolean; // Usable on point of sale
  IsClickAndCollectEnabled: boolean; // Usable for click & collect
  IsMicroTransactionsEnabled: boolean; // Usable for micro-transactions
  ProviderId: number; // Payment provider identifier
  IsEditable: boolean; // Modifiable by user
  IsMarketplaceEnabled: boolean; // Usable on marketplaces
  IsBackOfficeEnabled: boolean; // Usable for back-office
  PaymentDelay: number; // Payment delay in days
  File1: Uint8Array | null; // Binary file 1
  File2: Uint8Array | null; // Binary file 2
  IsRRR: boolean; // Indicates if RRR type
  AdditionalData: string | null; // Additional information string
}

// Note: PaymentMethodKind enum should be defined separately.
```