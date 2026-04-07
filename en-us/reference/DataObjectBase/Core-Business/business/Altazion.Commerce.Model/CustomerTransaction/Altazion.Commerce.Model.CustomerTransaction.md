## CustomerTransaction

Represents a commercial transaction (purchase, return, exchange...) in the Customer Data Platform (CDP). This document is a denormalized read model stored in MongoDB, intended for analytical and behavioral usages. It centralizes transactions from Altazion internal systems (ERP, e-commerce) and external systems (marketplaces, Shopify, third-party POS). It does not replace SQL documents but is an enriched projection linked to the CDP profile.

Public properties:

- Id: Unique identifier for this transaction in the CDP (Guid).
- CustomerId: Client identifier (Guid).
- Type: Transaction type (CustomerTransactionType).
- Status: Transaction status (CustomerTransactionStatus).
- OccurredAt: Effective date of the transaction (DateTimeOffset).
- Channel: Sales channel, e.g. "web", "pos", "phone", "partner", "marketplace", "app" (string).
- StoreCode: Code or GUID of the physical point of sale, if applicable (string).
- SiteGuid: GUID of the originating e-commerce site, if applicable (Guid?).
- Origin: Origin of the transaction identifying the source system and references (CustomerTransactionOrigin).
- Currency: Transaction currency (ISO 4217 code), default is "EUR" (string).
- Amounts: Aggregated transaction amounts (CustomerTransactionAmounts).
- PaymentMethod: Payment method used, e.g. "card", "cash", "transfer", "paypal", "gift_card" (string).
- Lines: List of transaction lines (purchased or returned items) (List<CustomerTransactionLine>).
- RelatedTransactionId: Reference to the original sales transaction for returns (Guid?).
- CreatedAt: Creation date of this CDP document (DateTimeOffset).
- LastUpdated: Last update date of this CDP document (DateTimeOffset).

### TypeScript class
```typescript
interface CustomerTransaction {
  Id: string; // GUID unique of the transaction in CDP
  CustomerId: string; // GUID of the customer
  Type: CustomerTransactionType;
  Status: CustomerTransactionStatus;
  OccurredAt: string; // Date ISO string
  Channel: string;
  StoreCode: string;
  SiteGuid?: string;
  Origin: CustomerTransactionOrigin;
  Currency: string;
  Amounts: CustomerTransactionAmounts;
  PaymentMethod: string;
  Lines: CustomerTransactionLine[];
  RelatedTransactionId?: string;
  CreatedAt: string;
  LastUpdated: string;
}

enum CustomerTransactionType {
  Purchase = 1,
  FullReturn = 2,
  PartialReturn = 3,
  Exchange = 4,
  Subscription = 5,
  CreditNote = 6
}

enum CustomerTransactionStatus {
  Completed = 1,
  Cancelled = 2,
  PendingReturn = 3,
  Refunded = 4,
  Disputed = 5
}

interface CustomerTransactionOrigin {
  System: string;
  TransactionId: string;
  HumanReference: string;
  AltazionInvoiceId?: number;
  AltazionOrderGuid?: string;
}

interface CustomerTransactionAmounts {
  TotalAmount: number;
  TotalAmountWOTax: number;
  TotalDiscount: number;
  TotalTax: number;
  ShippingAmount: number;
}

interface CustomerTransactionLine {
  ProductId?: string;
  ExternalProductId: string;
  Label: string;
  Quantity: number;
  UnitPrice: number;
  UnitPriceWithTax: number;
  DiscountAmount: number;
  TaxRate?: number;
  ProductCategory: string;
}
```