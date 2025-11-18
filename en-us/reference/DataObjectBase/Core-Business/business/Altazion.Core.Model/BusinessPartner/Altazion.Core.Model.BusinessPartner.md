## BusinessPartner

This class represents a business partner. It includes the following properties:

- PartnerGuid: Unique GUID identifying the partner (column ptn_guid).
- RjsId: Legal reason identifier (column ptn_rjs_id).
- Name: Name of the partner (column ptn_nom).
- PartnerType: Type of partner which can be Reseller, Marketplace, Store, or Unknown.
- AssociatedCustomerGuid: GUID of the associated customer, nullable (column ptn_cli_guid_associe).
- MarketplaceGuid: GUID of the associated marketplace, nullable (column ptn_mkp_guid).
- Code: Partner code (column ptn_code).
- BankInfo: Banking information of the partner (column ptn_info_banque).
- MaxDelayDays: Maximum delay in days related to the partner, nullable (column ptn_delai_max).

Constants defined in the class for partner types:
- TypeReseller = "REVENDEUR"
- TypeMarketplace = "MARKETPLACE"
- TypeStore = "MAGASINS"
- Historical aliases: TypeRevendeur = "REVENDEUR", TypeMagasins = "MAGASINS"

Enum BusinessPartnerType describing partner types:
- Reseller
- Marketplace
- Store
- Unknown

### TypeScript class
```typescript
interface BusinessPartner {
  PartnerGuid: string; // GUID unique identifiant le partenaire
  RjsId: number; // Identifiant de la raison juridique
  Name: string | null; // Nom du partenaire
  PartnerType: 'Reseller' | 'Marketplace' | 'Store' | 'Unknown'; // Type du partenaire
  AssociatedCustomerGuid?: string | null; // GUID du client associé (nullable)
  MarketplaceGuid?: string | null; // GUID du marketplace associé (nullable)
  Code: string | null; // Code du partenaire
  BankInfo: string | null; // Informations bancaires
  MaxDelayDays?: number | null; // Délai maximum en jours (nullable)
}

// Constantes des types
const TypeReseller = "REVENDEUR";
const TypeMarketplace = "MARKETPLACE";
const TypeStore = "MAGASINS";
const TypeRevendeur = "REVENDEUR"; // alias historique
const TypeMagasins = "MAGASINS"; // alias historique
```