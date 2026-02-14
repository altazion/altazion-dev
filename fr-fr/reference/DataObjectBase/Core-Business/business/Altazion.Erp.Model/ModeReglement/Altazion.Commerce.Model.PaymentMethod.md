## PaymentMethod

La classe PaymentMethod représente un mode de règlement (moyen de paiement) utilisable dans le système.

Propriétés publiques :
- Guid : Identifiant unique du mode de règlement (GUID).
- IsPrimary : Indique si ce mode est le mode principal.
- AccountingCode : Code du compte comptable associé.
- Priority : Priorité d'affichage (ordre de tri).
- WebModuleUrl : URL du module web pour traitement du paiement.
- ReturnModuleUrl : URL de retour après traitement du paiement.
- Name : Nom du mode de règlement.
- Type : Type de règlement (carte bancaire, chèque, virement, etc.).
- MerchantKey : Clé marchand fournie par le prestataire.
- MerchantKeyComplement : Complément de la clé marchand (ex. clé secrète).
- ClassName : Classe technique utilisée pour le traitement.
- IsECommerceEnabled : Indique si utilisable sur site e-commerce.
- IsPosEnabled : Indique si utilisable en point de vente web.
- IsClickAndCollectEnabled : Indique si utilisable en click & collect.
- IsMicroTransactionsEnabled : Indique si utilisable pour micro-transactions.
- ProviderId : Identifiant du prestataire de paiement.
- IsEditable : Indique si modifiable par l'utilisateur.
- IsMarketplaceEnabled : Indique si utilisable sur marketplaces.
- IsBackOfficeEnabled : Indique si utilisable en gestion commerciale.
- PaymentDelay : Délai de paiement en jours.
- File1 : Fichier 1 en données binaires associé au mode.
- File2 : Fichier 2 en données binaires associé au mode.
- IsRRR : Indique si mode de type RRR (Règlement Rapide Reconductible).
- AdditionalData : Chaîne complémentaire d'informations additionnelles.

### D�claration TypeScript
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