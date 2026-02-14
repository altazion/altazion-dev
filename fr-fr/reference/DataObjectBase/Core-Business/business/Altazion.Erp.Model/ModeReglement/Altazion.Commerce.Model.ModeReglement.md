## ModeReglement

La classe ModeReglement est un alias de compatibilité pour la classe PaymentMethod, représentant un mode de règlement (moyen de paiement) utilisable dans le système.

Propriétés héritées (principales) de PaymentMethod :
- Guid : Identifiant unique du mode de règlement.
- IsPrimary : Indique si ce mode de règlement est le mode principal.
- AccountingCode : Code du compte comptable associé.
- Priority : Priorité d'affichage (ordre de tri).
- WebModuleUrl : URL du module web pour le traitement du paiement.
- ReturnModuleUrl : URL de retour après traitement du paiement.
- Name : Nom du mode de règlement.
- Type : Type de règlement (carte bancaire, chèque, virement, etc.).
- MerchantKey : Clé marchand (identifiant fourni par le prestataire).
- MerchantKeyComplement : Complément de la clé marchand (ex. clé secrète).
- ClassName : Classe technique utilisée pour le traitement.
- IsECommerceEnabled : Indique si utilisable sur site e-commerce.
- IsPosEnabled : Indique si utilisable en point de vente.
- IsClickAndCollectEnabled : Indique si utilisable en click & collect.
- IsMicroTransactionsEnabled : Indique si utilisable pour micro-transactions.
- ProviderId : Identifiant du prestataire de paiement.
- IsEditable : Indique si modifiable par l'utilisateur.
- IsMarketplaceEnabled : Indique si utilisable sur marketplaces.
- IsBackOfficeEnabled : Indique si utilisable en gestion commerciale.
- PaymentDelay : Délai de paiement en jours.
- File1 : Fichier binaire 1 associé.
- File2 : Fichier binaire 2 associé.
- IsRRR : Indique si mode est RRR (Règlement Rapide Reconductible).
- AdditionalData : Données complémentaires sous forme de chaîne.

Cette classe étant un dérivé direct et un alias obsolète, il est conseillé d'utiliser PaymentMethod directement.

### D�claration TypeScript
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