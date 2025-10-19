## BusinessPartner

La classe BusinessPartner représente un partenaire commercial.

### Propriétés publiques :
- **PartnerGuid (Guid)** : Identifiant unique (GUID) du partenaire.
- **RjsId (int)** : Identifiant de la raison juridique associée.
- **Name (string)** : Nom du partenaire.
- **PartnerType (BusinessPartnerType)** : Type de partenaire, valeur parmi l'énumération BusinessPartnerType (Reseller, Marketplace, Store, Unknown).
- **AssociatedCustomerGuid (Guid?)** : GUID du client associé, optionnel.
- **MarketplaceGuid (Guid?)** : GUID du marketplace associé, optionnel.
- **Code (string)** : Code du partenaire.
- **BankInfo (string)** : Informations bancaires.
- **MaxDelayDays (int?)** : Délai maximum en jours, optionnel.

### Constantes :
- **TypeReseller** et **TypeRevendeur** : "REVENDEUR"
- **TypeMarketplace** : "MARKETPLACE"
- **TypeStore** et **TypeMagasins** : "MAGASINS"

### Enumération BusinessPartnerType :
- **Reseller** : Revendeur
- **Marketplace** : Vendeur sur la marketplace
- **Store** : Magasin physique
- **Unknown** : Type inconnu

Cette classe hérite de DataObjectBase et correspond à un concept SQL lié à la table "e.gestcom_partenaires" de la base "Erp".

### D�claration TypeScript
```typescript
export interface BusinessPartner {
  PartnerGuid: string; // GUID of the partner
  RjsId: number; // Legal entity identifier
  Name: string | null; // Partner name
  PartnerType: BusinessPartnerType; // Type of partner
  AssociatedCustomerGuid?: string | null; // Optional associated customer GUID
  MarketplaceGuid?: string | null; // Optional marketplace GUID
  Code: string | null; // Partner code
  BankInfo: string | null; // Bank information
  MaxDelayDays?: number | null; // Optional maximum allowed delay in days
}

export enum BusinessPartnerType {
  Reseller = "Reseller",
  Marketplace = "Marketplace",
  Store = "Store",
  Unknown = "Unknown"
}

export const TypeReseller = "REVENDEUR";
export const TypeRevendeur = "REVENDEUR";
export const TypeMarketplace = "MARKETPLACE";
export const TypeStore = "MAGASINS";
export const TypeMagasins = "MAGASINS";
```