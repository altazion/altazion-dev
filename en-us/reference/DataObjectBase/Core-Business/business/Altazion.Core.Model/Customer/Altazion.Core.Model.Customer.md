## Customer

The Customer class represents a client with personal and professional information. It includes the following properties:
- Id: Unique identifier of the customer.
- Guid: Global unique identifier (GUID) of the customer.
- Name: Full name of the customer.
- StreetAddress: Address of the customer.
- PostalCode: Postal code of the customer.
- CountryCode: Country code of the customer.
- City: City of the customer.
- MainEmail: Primary email address of the customer.
- Importance: Importance level of the customer.
- IsArchived: Indicates whether the customer is archived.
- CreationDate: Creation date of the customer.
- CustomerType: Type of customer (e.g., individual or company).
- Phone: Phone number of the customer.
- Mobile: Mobile phone number of the customer.
- AccountingAccount: Accounting account of the customer.
- VatNumber: VAT number of the customer.
- LastName: Last name of the customer (without first name).
- FirstName: First name of the customer (without last name).
- Title: Title of the customer (e.g., Mr., Mrs., Dr).

### TypeScript class
```json
interface Customer {
  Id: number;
  Guid: string; // GUID represented as string
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
  VatNumber: string;
  LastName: string;
  FirstName: string;
  Title: string;
}
```