## Customer

Represents a customer with personal and professional information.

Public properties:
- Id: Unique customer identifier.
- Guid: Global unique identifier (GUID) of the customer.
- Name: Full name of the customer.
- StreetAddress: Customer's address.
- PostalCode: Customer's postal code.
- CountryCode: Customer's country code.
- City: Customer's city.
- MainEmail: Primary email address of the customer.
- Importance: Customer importance level.
- IsArchived: Indicates if the customer is archived.
- CreationDate: Date of customer creation.
- CustomerType: Customer type (e.g., individual or company).
- Phone: Customer's phone number.
- Mobile: Customer's mobile phone number.
- AccountingAccount: Customer's accounting account.
- LastName: Customer's last name without first name.
- FirstName: Customer's first name without last name.
- Title: Customer's title (e.g., Mr., Mrs., Dr.).
- EUSpecifications: European Union specific specifications for this customer.
- FranceSpecifications: France specific specifications for this customer.
- GermanySpecifications: Germany specific specifications for this customer.
- SpainSpecifications: Spain specific specifications for this customer.
- ItalySpecifications: Italy specific specifications for this customer.
- BelgiumSpecifications: Belgium specific specifications for this customer.
- NetherlandsSpecifications: Netherlands specific specifications for this customer.
- LuxembourgSpecifications: Luxembourg specific specifications for this customer.
- SwitzerlandSpecifications: Switzerland specific specifications for this customer.
- UKSpecifications: United Kingdom specific specifications for this customer.
- paymentTermType: Defines the payment term type.
- PaymentTermDelay: Defines the payment term delay in days (depending on type).
- PreferredPaymentMethod: Customer's preferred payment method.
- IsExemptFromLateFees: Allows exempting this customer from late fees.
- InvoiceToPartnerOnly: Allows to specify billing only to the partner linked to the customer.
- PartnerGuid: Global unique identifier (GUID) of the partner associated with the customer, if any.

Constants and enumerations declared:
- Enum PaymentTermType:
  * NextXDays: Fixed number of days after given date, use 0 for invoice due immediately (if payment date falls on Saturday or Sunday, it is moved to next Monday).
  * XDaysThenEndOfMonth: Adds a fixed delay then goes to end of the month (with move to Monday if weekend).
  * EndOfMonthPlusXDays: Goes to the end of the month then adds a fixed delay (with move to Monday if weekend).

Nested classes describing national/regional specifications:
- CustomerEUSpecifications: VatNumber, EORINumber, TaxExemptionReason.
- CustomerFranceSpecifications: SIRETNumber, SIRENNumber, APECode, ShareCapital, LegalForm, RCSNumber, RCSCity.
- CustomerGermanySpecifications: Handelsregisternummer.
- CustomerSpainSpecifications: CIF, CNAE.
- CustomerItalySpecifications: CodiceFiscale, RAE, ATECO.
- CustomerBelgiumSpecifications: BCENumber, NACE.
- CustomerNetherlandsSpecifications: KvKNummer, SBI.
- CustomerLuxembourgSpecifications: RCSNumber, NACE.
- CustomerSwitzerlandSpecifications: IDENumber, NOGA.
- CustomerUKSpecifications: CompanyNumber, SIC.

### TypeScript class
```typescript
interface Customer {
  Id: number;
  Guid: string; // GUID as string
  Name: string | null;
  StreetAddress: string | null;
  PostalCode: string | null;
  CountryCode: string | null;
  City: string | null;
  MainEmail: string | null;
  Importance: number; // short
  IsArchived: boolean;
  CreationDate: string; // ISO date string
  CustomerType: number; // short
  Phone: string | null;
  Mobile: string | null;
  AccountingAccount: string | null;
  LastName: string | null;
  FirstName: string | null;
  Title: string | null;
  EUSpecifications?: CustomerEUSpecifications;
  FranceSpecifications?: CustomerFranceSpecifications;
  GermanySpecifications?: CustomerGermanySpecifications;
  SpainSpecifications?: CustomerSpainSpecifications;
  ItalySpecifications?: CustomerItalySpecifications;
  BelgiumSpecifications?: CustomerBelgiumSpecifications;
  NetherlandsSpecifications?: CustomerNetherlandsSpecifications;
  LuxembourgSpecifications?: CustomerLuxembourgSpecifications;
  SwitzerlandSpecifications?: CustomerSwitzerlandSpecifications;
  UKSpecifications?: CustomerUKSpecifications;
  paymentTermType: PaymentTermType;
  PaymentTermDelay: number;
  PreferredPaymentMethod: PaymentMethodKind;
  IsExemptFromLateFees: boolean;
  InvoiceToPartnerOnly: boolean;
  PartnerGuid?: string | null; // Nullable GUID
}

enum PaymentTermType {
  NextXDays = 0,
  XDaysThenEndOfMonth = 1,
  EndOfMonthPlusXDays = 3,
}

interface CustomerEUSpecifications {
  VatNumber?: string | null;
  EORINumber?: string | null;
  TaxExemptionReason?: string | null;
}

interface CustomerFranceSpecifications {
  SIRETNumber?: string | null;
  SIRENNumber?: string | null;
  APECode?: string | null;
  ShareCapital?: number | null;
  LegalForm?: string | null;
  RCSNumber?: string | null;
  RCSCity?: string | null;
}

interface CustomerGermanySpecifications {
  Handelsregisternummer?: string | null;
}

interface CustomerSpainSpecifications {
  CIF?: string | null;
  CNAE?: string | null;
}

interface CustomerItalySpecifications {
  CodiceFiscale?: string | null;
  RAE?: string | null;
  ATECO?: string | null;
}

interface CustomerBelgiumSpecifications {
  BCENumber?: string | null;
  NACE?: string | null;
}

interface CustomerNetherlandsSpecifications {
  KvKNummer?: string | null;
  SBI?: string | null;
}

interface CustomerLuxembourgSpecifications {
  RCSNumber?: string | null;
  NACE?: string | null;
}

interface CustomerSwitzerlandSpecifications {
  IDENumber?: string | null;
  NOGA?: string | null;
}

interface CustomerUKSpecifications {
  CompanyNumber?: string | null;
  SIC?: string | null;
}

enum PaymentMethodKind {
  // Placeholder - actual enum values not provided in the code snippet
}

```