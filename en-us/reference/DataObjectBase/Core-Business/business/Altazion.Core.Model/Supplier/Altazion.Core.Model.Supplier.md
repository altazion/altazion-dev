## Supplier

The Supplier class represents a supplier in the commercial management system.

Public properties:
- Guid: unique identifier (GUID) of the supplier.
- Id: numeric identifier of the supplier.
- Libelle: name (label) of the supplier.
- Adress: full address of the supplier.
- PostalCode: postal code of the supplier.
- City: city of the supplier.
- PhoneNumber: phone number of the supplier.
- CompteCompta: accounting account associated with the supplier.
- DefaultExpenseIdType: default type of expense identifier (nullable).
- Type: supplier type (1 character code).
- Siret: SIRET number of the supplier.
- UE_VAT: intra-community VAT number (EU).
- ClientNumber: client number at this supplier.
- IsArchived: indicates if the supplier is archived.
- Code: supplier code.
- MainEmail: main email address of the supplier.
- CountryCode: client country code.
- PaymentTermType: type of payment term (enum PaymentTermType).
- PaymentTermDelay: payment term delay in days.
- PartnerGuid: GUID of the partner associated with the client (nullable).
- StandardDelayInHours: number of hours for the standard delivery delay (nullable).
- EUSpecifications: EU-specific specifications.
- FranceSpecifications: France-specific specifications.
- GermanySpecifications: Germany-specific specifications.
- SpainSpecifications: Spain-specific specifications.
- ItalySpecifications: Italy-specific specifications.
- BelgiumSpecifications: Belgium-specific specifications.
- NetherlandsSpecifications: Netherlands-specific specifications.
- LuxembourgSpecifications: Luxembourg-specific specifications.
- SwitzerlandSpecifications: Switzerland-specific specifications.
- UKSpecifications: United Kingdom-specific specifications.

Each specifications group contains detailed properties related to local regulations.

### TypeScript class
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