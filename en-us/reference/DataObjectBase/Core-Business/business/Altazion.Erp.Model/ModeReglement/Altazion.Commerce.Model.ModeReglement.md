## ModeReglement

The ModeReglement class is a compatibility alias for the PaymentMethod class, representing a payment method usable in the system.

Main inherited properties from PaymentMethod include:
- Guid: Unique identifier for the payment method.
- IsPrimary: Indicates if this is the primary payment method.
- AccountingCode: Accounting code associated.
- Priority: Display priority (sort order).
- WebModuleUrl: URL of the web module for payment processing.
- ReturnModuleUrl: Return URL after payment processing.
- Name: Name of the payment method.
- Type: Payment type (credit card, cheque, transfer, etc.).
- MerchantKey: Merchant key provided by payment provider.
- MerchantKeyComplement: Complement to the merchant key (e.g., secret key).
- ClassName: Technical class used for processing.
- IsECommerceEnabled: Indicates if usable on e-commerce site.
- IsPosEnabled: Indicates if usable at point of sale.
- IsClickAndCollectEnabled: Indicates if usable for click & collect.
- IsMicroTransactionsEnabled: Indicates if usable for micro-transactions.
- ProviderId: Payment provider ID.
- IsEditable: Indicates if modifiable by user.
- IsMarketplaceEnabled: Indicates if usable on marketplaces.
- IsBackOfficeEnabled: Indicates if usable in back office.
- PaymentDelay: Payment delay in days.
- File1: Binary file 1.
- File2: Binary file 2.
- IsRRR: Indicates if Rapid Renewable Regulation (RRR) type.
- AdditionalData: Additional data string.

As a direct subclass and obsolete alias, it is recommended to use PaymentMethod directly.

### TypeScript class
```typescript
interface ModeReglement {
  Guid: string; // Unique identifier (GUID)
  IsPrimary: boolean; // Is primary payment method
  AccountingCode: string | null; // Accounting code
  Priority: number; // Display priority
  WebModuleUrl: string | null; // Web module URL
  ReturnModuleUrl: string | null; // Return URL after payment
  Name: string | null; // Payment method name
  Type: PaymentMethodKind; // Type of payment
  MerchantKey: string | null; // Merchant key
  MerchantKeyComplement: string | null; // Complement to merchant key
  ClassName: string | null; // Technical class name
  IsECommerceEnabled: boolean; // Usable on e-commerce site
  IsPosEnabled: boolean; // Usable at point of sale
  IsClickAndCollectEnabled: boolean; // Usable for click & collect
  IsMicroTransactionsEnabled: boolean; // Usable for micro-transactions
  ProviderId: number; // Payment provider ID
  IsEditable: boolean; // Editable by user
  IsMarketplaceEnabled: boolean; // Usable on marketplaces
  IsBackOfficeEnabled: boolean; // Usable in back office
  PaymentDelay: number; // Payment delay in days
  File1: Uint8Array | null; // Associated file 1
  File2: Uint8Array | null; // Associated file 2
  IsRRR: boolean; // Is Rapid Renewable Regulation type
  AdditionalData: string | null; // Additional information
}

enum PaymentMethodKind {
  // Enum values should be defined according to the system's definition
}

```