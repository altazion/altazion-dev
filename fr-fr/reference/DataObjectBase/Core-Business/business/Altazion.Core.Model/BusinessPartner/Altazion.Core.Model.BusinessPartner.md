## BusinessPartner

Cette classe représente un partenaire commercial. Elle contient les propriétés suivantes :

- PartnerGuid : GUID unique identifiant le partenaire (colonne ptn_guid).
- RjsId : identifiant de la raison juridique (colonne ptn_rjs_id).
- Name : nom du partenaire (colonne ptn_nom).
- PartnerType : type du partenaire qui peut être Reseller (revendeur), Marketplace (vendeur sur marketplace), Store (magasin physique) ou Unknown.
- AssociatedCustomerGuid : GUID du client associé, pouvant être null (colonne ptn_cli_guid_associe).
- MarketplaceGuid : GUID du marketplace associé, pouvant être null (colonne ptn_mkp_guid).
- Code : code du partenaire (colonne ptn_code).
- BankInfo : informations bancaires du partenaire (colonne ptn_info_banque).
- MaxDelayDays : délai maximum en jours associé au partenaire, pouvant être null (colonne ptn_delai_max).

Constantes définies dans la classe pour les types de partenaires :
- TypeReseller = "REVENDEUR"
- TypeMarketplace = "MARKETPLACE"
- TypeStore = "MAGASINS"
- Alias historiques : TypeRevendeur = "REVENDEUR", TypeMagasins = "MAGASINS"

Enum BusinessPartnerType décrivant les types de partenaires :
- Reseller : revendeur
- Marketplace : vendeur sur marketplace
- Store : magasin physique
- Unknown : type inconnu

### D�claration TypeScript
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