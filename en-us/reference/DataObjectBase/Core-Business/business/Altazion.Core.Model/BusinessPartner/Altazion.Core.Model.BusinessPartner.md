## BusinessPartner

The BusinessPartner class represents a business partner.

### Public properties:
- **PartnerGuid (Guid)**: Unique identifier (GUID) of the partner.
- **RjsId (int)**: Identifier for the legal entity associated.
- **Name (string)**: Name of the partner.
- **PartnerType (BusinessPartnerType)**: Partner type, from the enumeration BusinessPartnerType (Reseller, Marketplace, Store, Unknown).
- **AssociatedCustomerGuid (Guid?)**: GUID of the associated customer, optional.
- **MarketplaceGuid (Guid?)**: GUID of the associated marketplace, optional.
- **Code (string)**: Code of the partner.
- **BankInfo (string)**: Bank information.
- **MaxDelayDays (int?)**: Maximum delay in days, optional.

### Constants:
- **TypeReseller** and **TypeRevendeur**: "REVENDEUR"
- **TypeMarketplace**: "MARKETPLACE"
- **TypeStore** and **TypeMagasins**: "MAGASINS"

### BusinessPartnerType enumeration:
- **Reseller**: Reseller
- **Marketplace**: Marketplace seller
- **Store**: Physical store
- **Unknown**: Unknown type

This class inherits from DataObjectBase and corresponds to the SQL concept linked to the table "e.gestcom_partenaires" in the "Erp" database.

### TypeScript class
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