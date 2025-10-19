## Customer

This class represents a customer with personal and professional information. It includes the following public properties:

- Id: Unique identifier of the customer.
- Guid: Global unique identifier (GUID) of the customer.
- Name: Full name of the customer.
- StreetAddress: Customer's address.
- PostalCode: Customer's postal code.
- CountryCode: Customer's country code.
- City: Customer's city.
- MainEmail: Primary email address of the customer.
- Importance: Importance level of the customer.
- IsArchived: Indicates if the customer is archived.
- CreationDate: Creation date of the customer record.
- CustomerType: Type of customer (e.g., individual or business).
- Phone: Customer's phone number.
- Mobile: Customer's mobile phone number.
- AccountingAccount: Accounting account associated with the customer.
- LastName: Customer's last name only.
- FirstName: Customer's first name only.
- Title: Customer's title (e.g., Mr., Mrs., Dr.).
- EUSpecifications: EU-specific specifications (VAT number, EORI number, tax exemption reason).
- FranceSpecifications: France-specific details (SIRET number, SIREN number, APE/NAF code, share capital, legal form, RCS number and city).
- paymentTermType: Type of payment term (enum: NextXDays, XDaysThenEndOfMonth, EndOfMonthPlusXDays).
- PaymentTermDelay: Payment term delay in days.
- PreferredPaymentMethod: Preferred payment method of the customer.
- IsExemptFromLateFees: Exemption from late fees.
- InvoiceToPartnerOnly: Whether invoicing is to be done only to an associated partner.
- PartnerGuid: GUID of the associated partner, if any.

The class defines an internal enumeration PaymentTermType describing types of payment terms with weekend adjustment rules.

Two nested classes describe EU specifications (CustomerEUSpecifications) and France-specific specifications (CustomerFranceSpecifications) with their detailed properties.

It inherits from DataObjectBase and includes methods to load data from a DataRow and to compare equality based on the Id.


### TypeScript class
```typescript
interface CustomerEUSpecifications {
    VatNumber?: string;
    EORINumber?: string;
    TaxExemptionReason?: string;
}

interface CustomerFranceSpecifications {
    SIRETNumber?: string;
    SIRENNumber?: string;
    APECode?: string;
    ShareCapital?: number | null;
    LegalForm?: string;
    RCSNumber?: string;
    RCSCity?: string;
}

enum PaymentTermType {
    NextXDays = 0,
    XDaysThenEndOfMonth = 1,
    EndOfMonthPlusXDays = 3
}

enum PaymentMethodKind {
    // Assuming placeholder values for PaymentMethodKind as the source is not given
    Unknown = 0,
    CreditCard = 1,
    BankTransfer = 2,
    Cash = 3
}

interface Customer {
    Id: number;
    Guid: string; // GUID as string
    Name?: string;
    StreetAddress?: string;
    PostalCode?: string;
    CountryCode?: string;
    City?: string;
    MainEmail?: string;
    Importance: number;
    IsArchived: boolean;
    CreationDate: Date;
    CustomerType: number;
    Phone?: string;
    Mobile?: string;
    AccountingAccount?: string;
    LastName?: string;
    FirstName?: string;
    Title?: string;
    EUSpecifications?: CustomerEUSpecifications;
    FranceSpecifications?: CustomerFranceSpecifications;
    paymentTermType: PaymentTermType;
    PaymentTermDelay: number;
    PreferredPaymentMethod: PaymentMethodKind;
    IsExemptFromLateFees: boolean;
    InvoiceToPartnerOnly: boolean;
    PartnerGuid?: string | null;
}
```