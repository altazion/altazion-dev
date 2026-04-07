## ModeReglement

La classe ModeReglement est une alias obsolète de la classe PaymentMethod, elle représente un mode de règlement (moyen de paiement) utilisable dans le système. Cette classe hérite de PaymentMethod et ne contient aucune propriété ni méthode supplémentaire propre. 

Les propriétés principales héritées de PaymentMethod comprennent :
- Guid : Identifiant unique du mode de règlement (GUID).
- IsPrimary : Indique si le mode de règlement est le principal.
- AccountingCode : Code de compte comptable associé.
- Priority : Priorité d'affichage du mode.
- WebModuleUrl : URL du module web pour le paiement.
- ReturnModuleUrl : URL de retour après paiement.
- Name : Nom du mode de règlement.
- Type : Type de règlement (ex : carte bancaire, chèque).
- MerchantKey : Clé marchand fournie par le prestataire.
- MerchantKeyComplement : Complément de la clé marchand.
- ClassName : Classe technique pour le traitement.
- IsECommerceEnabled : Utilisable sur le site e-commerce.
- IsPosEnabled : Utilisable en point de vente.
- IsClickAndCollectEnabled : Utilisable en click & collect.
- IsMicroTransactionsEnabled : Utilisable pour micro-transactions.
- ProviderId : Identifiant du prestataire.
- IsEditable : Peut être modifié par l'utilisateur.
- IsMarketplaceEnabled : Utilisable sur marketplaces.
- IsBackOfficeEnabled : Utilisable en gestion commerciale.
- PaymentDelay : Délai de paiement en jours.
- File1, File2 : Fichiers binaires associés.
- IsRRR : Indique si c'est un Règlement Rapide Reconductible.
- AdditionalData : Données complémentaires sous forme de chaîne.

Cette classe est essentiellement un alias pour assurer la compatibilité, appelée à être supprimée ultérieurement.

### D�claration TypeScript
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