## Supplier

La classe Supplier représente un fournisseur dans le système de gestion commerciale.

Propriétés publiques :
- Guid : identifiant unique (GUID) du fournisseur.
- Id : identifiant numérique du fournisseur.
- Libelle : nom (libellé) du fournisseur.
- Adress : adresse complète du fournisseur.
- PostalCode : code postal du fournisseur.
- City : ville du fournisseur.
- PhoneNumber : numéro de téléphone du fournisseur.
- CompteCompta : compte comptable associé au fournisseur.
- DefaultExpenseIdType : identifiant du type de dépenses par défaut (optionnel).
- Type : type de fournisseur (code sur 1 caractère).
- Siret : numéro SIRET du fournisseur.
- UE_VAT : numéro de TVA intracommunautaire (UE).
- ClientNumber : numéro de client chez ce fournisseur.
- IsArchived : indique si le fournisseur est archivé.
- Code : code du fournisseur.
- MainEmail : adresse e-mail principale du fournisseur.
- CountryCode : code du pays du client.
- PaymentTermType : type de délai de paiement (enum PaymentTermType).
- PaymentTermDelay : délai de paiement en jours.
- PartnerGuid : GUID du partenaire associé au client (optionnel).
- StandardDelayInHours : nombre d'heures du délai standard de livraison (optionnel).
- EUSpecifications : spécifications spécifiques à l'Union Européenne.
- FranceSpecifications : spécifications spécifiques à la France.
- GermanySpecifications : spécifications spécifiques à l'Allemagne.
- SpainSpecifications : spécifications spécifiques à l'Espagne.
- ItalySpecifications : spécifications spécifiques à l'Italie.
- BelgiumSpecifications : spécifications spécifiques à la Belgique.
- NetherlandsSpecifications : spécifications spécifiques aux Pays-Bas.
- LuxembourgSpecifications : spécifications spécifiques au Luxembourg.
- SwitzerlandSpecifications : spécifications spécifiques à la Suisse.
- UKSpecifications : spécifications spécifiques au Royaume-Uni.

Chaque groupe de spécifications contient ses propres propriétés détaillées liées aux réglementations locales.

### D�claration TypeScript
```typescript
interface Supplier {
  Guid: string; // GUID in string format
  Id: number;
  Libelle: string;
  Adress: string;
  PostalCode: string | null;
  City: string | null;
  PhoneNumber: string | null;
  CompteCompta: string | null;
  DefaultExpenseIdType?: number | null;
  Type: string;
  Siret: string | null;
  UE_VAT: string | null;
  ClientNumber: string | null;
  IsArchived: boolean;
  Code: string | null;
  MainEmail: string | null;
  CountryCode: string | null;
  PaymentTermType: PaymentTermType;
  PaymentTermDelay: number;
  PartnerGuid?: string | null;
  StandardDelayInHours?: number | null;
  EUSpecifications?: SupplierEUSpecifications | null;
  FranceSpecifications?: SupplierFranceSpecifications | null;
  GermanySpecifications?: SupplierGermanySpecifications | null;
  SpainSpecifications?: SupplierSpainSpecifications | null;
  ItalySpecifications?: SupplierItalySpecifications | null;
  BelgiumSpecifications?: SupplierBelgiumSpecifications | null;
  NetherlandsSpecifications?: SupplierNetherlandsSpecifications | null;
  LuxembourgSpecifications?: SupplierLuxembourgSpecifications | null;
  SwitzerlandSpecifications?: SupplierSwitzerlandSpecifications | null;
  UKSpecifications?: SupplierUKSpecifications | null;
}

interface SupplierEUSpecifications {
  VatNumber?: string | null;
  EORINumber?: string | null;
  TaxExemptionReason?: string | null;
}

interface SupplierFranceSpecifications {
  SIRETNumber?: string | null;
  SIRENNumber?: string | null;
  APECode?: string | null;
  ShareCapital?: number | null;
  LegalForm?: string | null;
  RCSNumber?: string | null;
  RCSCity?: string | null;
}

interface SupplierGermanySpecifications {
  Handelsregisternummer?: string | null;
}

interface SupplierSpainSpecifications {
  CIF?: string | null;
  CNAE?: string | null;
}

interface SupplierItalySpecifications {
  CodiceFiscale?: string | null;
  RAE?: string | null;
  ATECO?: string | null;
}

interface SupplierBelgiumSpecifications {
  BCENumber?: string | null;
  NACE?: string | null;
}

interface SupplierNetherlandsSpecifications {
  KvKNummer?: string | null;
  SBI?: string | null;
}

interface SupplierLuxembourgSpecifications {
  RCSNumber?: string | null;
  NACE?: string | null;
}

interface SupplierSwitzerlandSpecifications {
  IDENumber?: string | null;
  NOGA?: string | null;
}

interface SupplierUKSpecifications {
  CompanyNumber?: string | null;
  SIC?: string | null;
}

// Enum PaymentTermType should be declared elsewhere or imported.
```