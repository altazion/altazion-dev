## CustomerTransaction

Représente une transaction commerciale (achat, retour, échange…) dans le CDP (Customer Data Platform). Ce document est un modèle de lecture dénormalisé stocké dans MongoDB, destiné aux usages analytiques et comportementaux. Il centralise les transactions issues des systèmes internes Altazion (ERP, e-commerce) et des systèmes externes (marketplace, Shopify, POS tiers). Il ne remplace pas les documents SQL mais en est une projection enrichie rattachée au profil CDP.

Propriétés publiques :

- Id : Identifiant unique de cette transaction dans le CDP (Guid).
- CustomerId : Identifiant du client (Guid).
- Type : Type de transaction (CustomerTransactionType).
- Status : Statut de la transaction (CustomerTransactionStatus).
- OccurredAt : Date effective de la transaction (DateTimeOffset).
- Channel : Canal de vente, par exemple "web", "pos", "phone", "partner", "marketplace", "app" (string).
- StoreCode : Code ou GUID du point de vente physique, si applicable (string).
- SiteGuid : GUID du site e-commerce d'origine, si applicable (Guid?).
- Origin : Origine de la transaction, identifiant le système source et ses références (CustomerTransactionOrigin).
- Currency : Devise de la transaction au format ISO 4217, par défaut "EUR" (string).
- Amounts : Montants de la transaction agrégés (CustomerTransactionAmounts).
- PaymentMethod : Mode de paiement utilisé, par exemple "card", "cash", "transfer", "paypal", "gift_card" (string).
- Lines : Liste des lignes de la transaction (articles) (List<CustomerTransactionLine>).
- RelatedTransactionId : Référence de la transaction d'origine en cas de retour (Guid?).
- CreatedAt : Date de création du document CDP (DateTimeOffset).
- LastUpdated : Date de dernière mise à jour du document CDP (DateTimeOffset).

### D�claration TypeScript
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