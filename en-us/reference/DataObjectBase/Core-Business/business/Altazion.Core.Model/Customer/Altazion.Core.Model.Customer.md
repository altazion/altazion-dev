The Customer class represents a client with personal and professional information. It includes the following properties:

- Id: Unique identifier of the customer.
- Guid: Globally unique identifier (GUID) of the customer.
- Name: Full name of the customer.
- StreetAddress: Customer's address.
- PostalCode: Customer's postal code.
- CountryCode: Customer's country code.
- City: Customer's city.
- MainEmail: Customer's main email address.
- Importance: Importance level of the customer (short type).
- IsArchived: Indicates if the customer is archived (boolean).
- CreationDate: Date when the customer was created.
- CustomerType: Type of customer (e.g., individual or company, short type).
- Phone: Customer's phone number.
- Mobile: Customer's mobile phone number.
- AccountingAccount: Customer's accounting account.
- VatNumber: Customer's VAT number.
- LastName: Customer's last name only (without first name).
- FirstName: Customer's first name only (without last name).
- Title: Customer salutation (e.g., Mr., Mrs., Dr).

This class derives from DataObjectBase and provides methods to populate its data from a DataRow, compare data keys with other objects, and get its unique key (Id).