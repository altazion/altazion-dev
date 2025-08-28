## Customer

The Customer class represents a customer with their personal and professional information. It includes the following properties:

- Id: Unique identifier of the customer.
- Guid: Globally unique identifier (GUID) of the customer.
- Name: Full name of the customer.
- StreetAddress: Customer's address.
- PostalCode: Customer's postal code.
- CountryCode: Customer's country code.
- City: Customer's city.
- MainEmail: Customer's main email address.
- Importance: Customer importance level.
- IsArchived: Indicates whether the customer is archived.
- CreationDate: Customer creation date.
- CustomerType: Type of customer (e.g., individual or company).
- Phone: Customer's phone number.
- Mobile: Customer's mobile phone number.
- AccountingAccount: Customer's accounting account.
- VatNumber: Customer's VAT number.
- LastName: Customer's last name only (without first name).
- FirstName: Customer's first name only (without last name).
- Title: Customer's title (e.g., Mr., Mrs., Dr).

### TypeScript class
```typescript
interface Customer {
  Id: number;
  Guid: string; // GUID format
  Name: string;
  StreetAddress: string;
  PostalCode: string;
  CountryCode: string;
  City: string;
  MainEmail: string;
  Importance: number; // short integer
  IsArchived: boolean;
  CreationDate: Date;
  CustomerType: number; // short integer
  Phone: string;
  Mobile: string;
  AccountingAccount: string;
  VatNumber: string;
  LastName: string;
  FirstName: string;
  Title: string;
}
```