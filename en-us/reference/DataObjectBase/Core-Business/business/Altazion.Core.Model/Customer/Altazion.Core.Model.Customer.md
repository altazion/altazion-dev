## Customer

The Customer class represents a client with personal and professional information. It includes the following properties:

- Id: Unique identifier of the client.
- Guid: Global unique identifier (GUID) of the client.
- Name: Full name of the client.
- StreetAddress: Client's address.
- PostalCode: Client's postal code.
- CountryCode: Client's country code.
- City: Client's city.
- MainEmail: Client's main email address.
- Importance: Importance level of the client.
- IsArchived: Indicates if the client is archived.
- CreationDate: Date the client was created.
- CustomerType: Type of client (e.g., individual or company).
- Phone: Client's phone number.
- Mobile: Client's mobile phone number.
- AccountingAccount: Client's accounting account.
- LastName: Client's last name only.
- FirstName: Client's first name only.
- Title: Client's title (e.g., Mr., Mrs., Dr).
- EUSpecifications: EU-specific specifications for the client (see nested class CustomerEUSpecifications).
- FranceSpecifications: France-specific specifications (CustomerFranceSpecifications).
- GermanySpecifications: Germany-specific specifications (CustomerGermanySpecifications).
- SpainSpecifications: Spain-specific specifications (CustomerSpainSpecifications).
- ItalySpecifications: Italy-specific specifications (CustomerItalySpecifications).
- BelgiumSpecifications: Belgium-specific specifications (CustomerBelgiumSpecifications).
- NetherlandsSpecifications: Netherlands-specific specifications (CustomerNetherlandsSpecifications).
- LuxembourgSpecifications: Luxembourg-specific specifications (CustomerLuxembourgSpecifications).
- SwitzerlandSpecifications: Switzerland-specific specifications (CustomerSwitzerlandSpecifications).
- UKSpecifications: UK-specific specifications (CustomerUKSpecifications).
- paymentTermType: Payment term type (enum PaymentTermType).
- PaymentTermDelay: Payment term delay in days.
- PreferredPaymentMethod: Preferred payment method (enum PaymentMethodKind).
- IsExemptFromLateFees: Whether the client is exempt from late fees.
- InvoiceToPartnerOnly: Indicates if invoicing should be only to the partner.
- PartnerGuid: GUID of the associated partner, if any.

Defined constants/enums:

- PaymentTermType: Enum defining payment term types:
  - NextXDays: fixed number of days after a given date.
  - XDaysThenEndOfMonth: fixed delay then end of month.
  - EndOfMonthPlusXDays: end of month then fixed delay.

The nested classes correspond to tax or legal specifications by country or region.



### TypeScript class
```typescript
interface Customer {
  Id: number;
  Guid: string; // GUID string
  Name: string;
  StreetAddress: string;
  PostalCode: string;
  CountryCode: string;
  City: string;
  MainEmail: string;
  Importance: number;
  IsArchived: boolean;
  CreationDate: Date;
  CustomerType: number;
  Phone: string;
  Mobile: string;
  AccountingAccount: string;
  LastName: string;
  FirstName: string;
  Title: string;
  EUSpecifications: CustomerEUSpecifications | null;
  FranceSpecifications: CustomerFranceSpecifications | null;
  GermanySpecifications: CustomerGermanySpecifications | null;
  SpainSpecifications: CustomerSpainSpecifications | null;
  ItalySpecifications: CustomerItalySpecifications | null;
  BelgiumSpecifications: CustomerBelgiumSpecifications | null;
  NetherlandsSpecifications: CustomerNetherlandsSpecifications | null;
  LuxembourgSpecifications: CustomerLuxembourgSpecifications | null;
  SwitzerlandSpecifications: CustomerSwitzerlandSpecifications | null;
  UKSpecifications: CustomerUKSpecifications | null;
  paymentTermType: PaymentTermType;
  PaymentTermDelay: number;
  PreferredPaymentMethod: PaymentMethodKind;
  IsExemptFromLateFees: boolean;
  InvoiceToPartnerOnly: boolean;
  PartnerGuid?: string | null;
}

enum PaymentTermType {
  NextXDays = 0,
  XDaysThenEndOfMonth = 1,
  EndOfMonthPlusXDays = 3
}

interface CustomerEUSpecifications {
  VatNumber: string;
  EORINumber: string;
  TaxExemptionReason: string;
}

interface CustomerFranceSpecifications {
  SIRETNumber: string;
  SIRENNumber: string;
  APECode: string;
  ShareCapital?: number | null;
  LegalForm: string;
  RCSNumber: string;
  RCSCity: string;
}

interface CustomerGermanySpecifications {
  Handelsregisternummer: string;
}

interface CustomerSpainSpecifications {
  CIF: string;
  CNAE: string;
}

interface CustomerItalySpecifications {
  CodiceFiscale: string;
  RAE: string;
  ATECO: string;
}

interface CustomerBelgiumSpecifications {
  BCENumber: string;
  NACE: string;
}

interface CustomerNetherlandsSpecifications {
  KvKNummer: string;
  SBI: string;
}

interface CustomerLuxembourgSpecifications {
  RCSNumber: string;
  NACE: string;
}

interface CustomerSwitzerlandSpecifications {
  IDENumber: string;
  NOGA: string;
}

interface CustomerUKSpecifications {
  CompanyNumber: string;
  SIC: string;
}

```