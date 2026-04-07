## ModeReglement

The ModeReglement class is an obsolete alias for the PaymentMethod class; it represents a payment method usable within the system. This class inherits from PaymentMethod and does not add any additional properties or methods itself.

The main inherited properties from PaymentMethod include:
- Guid: Unique identifier of the payment method (GUID).
- IsPrimary: Indicates if it is the primary payment method.
- AccountingCode: Associated accounting account code.
- Priority: Display priority order.
- WebModuleUrl: URL of the web module for payment processing.
- ReturnModuleUrl: URL to return to after payment processing.
- Name: Name of the payment method.
- Type: Payment type (e.g., credit card, cheque).
- MerchantKey: Merchant key provided by the payment provider.
- MerchantKeyComplement: Complement to the merchant key.
- ClassName: Technical class used to process this method.
- IsECommerceEnabled: Usable on e-commerce sites.
- IsPosEnabled: Usable at point of sale.
- IsClickAndCollectEnabled: Usable for click & collect.
- IsMicroTransactionsEnabled: Usable for micro-transactions.
- ProviderId: Payment provider identifier.
- IsEditable: Indicates if the method is user-editable.
- IsMarketplaceEnabled: Usable on marketplaces.
- IsBackOfficeEnabled: Usable in business management.
- PaymentDelay: Payment delay in days.
- File1, File2: Binary files associated with the method.
- IsRRR: Indicates if it is a Rapid Renewable Regulation.
- AdditionalData: Additional information string.

This class serves solely as a compatibility alias and is planned for future removal.

### TypeScript class
```typescript
interface ModeReglement {
  Guid: string; // Unique identifier (GUID)
  IsPrimary: boolean; // Indicates if this is the primary payment method
  AccountingCode: string | null; // Associated accounting code
  Priority: number; // Display priority
  WebModuleUrl: string | null; // URL of the web module for payment
  ReturnModuleUrl: string | null; // URL to return after payment
  Name: string | null; // Name of the payment method
  Type: number; // Payment method type (enum PaymentMethodKind)
  MerchantKey: string | null; // Merchant key
  MerchantKeyComplement: string | null; // Complement to merchant key
  ClassName: string | null; // Technical class for processing
  IsECommerceEnabled: boolean; // Usable on e-commerce site
  IsPosEnabled: boolean; // Usable on point of sale
  IsClickAndCollectEnabled: boolean; // Usable on click & collect
  IsMicroTransactionsEnabled: boolean; // Usable for micro-transactions
  ProviderId: number; // Payment provider ID
  IsEditable: boolean; // Can be modified by user
  IsMarketplaceEnabled: boolean; // Usable on marketplaces
  IsBackOfficeEnabled: boolean; // Usable in back office
  PaymentDelay: number; // Payment delay in days
  File1: Uint8Array | null; // Binary file 1
  File2: Uint8Array | null; // Binary file 2
  IsRRR: boolean; // Rapid Renewable Regulation flag
  AdditionalData: string | null; // Additional data string
}

```