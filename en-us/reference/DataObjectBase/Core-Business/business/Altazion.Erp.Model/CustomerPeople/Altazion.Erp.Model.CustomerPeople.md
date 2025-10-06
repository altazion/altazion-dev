## CustomerPeople

The CustomerPeople class represents a contact person associated with a client in the ERP system.

Public properties include:
- Guid: unique identifier of the contact person.
- CustomerGuid: unique identifier of the associated client.
- Name: name of the contact person.
- StreetAddress: full postal address.
- PostalCode: postal code of the address.
- City: city of the address.
- CountryIso3Letters: 3-letter ISO country code.
- Phone: landline phone number.
- MobilePhone: mobile phone number.
- Email: email address.
- Roles: list of roles assigned to this person, for example "Billing" if they are a billing contact.

This class inherits from DataObjectBase and overrides FromDataRow method to populate its data from a DataRow source.

### TypeScript class
```typescript
interface CustomerPeople {
  Guid: string; // UUID
  CustomerGuid: string; // UUID
  Name: string | null;
  StreetAddress: string | null;
  PostalCode: string | null;
  City: string | null;
  CountryIso3Letters: string | null;
  Phone: string | null;
  MobilePhone: string | null;
  Email: string | null;
  Roles: string[];
}
```