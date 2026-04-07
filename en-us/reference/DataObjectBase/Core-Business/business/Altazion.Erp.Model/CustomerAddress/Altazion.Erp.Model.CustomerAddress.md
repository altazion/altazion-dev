## CustomerAddress

This class represents a customer address in the Altazion ERP system, corresponding to the database table gestcom_clients_adresses.

Public properties:
- AddressGuid: Unique identifier (GUID) for the address.
- CustomerGuid: GUID of the associated customer.
- IsActive: Indicates if the address is active.
- Title: Salutation or title.
- Company: Company name.
- FullName: Full name (read-only property).
- FirstName: First name.
- LastName: Last name.
- StreetAddress: Postal address.
- PostalCode: Postal code.
- City: City.
- CountryCode: Country code.
- Phone: Phone number.
- Email: Email address.
- IsBillingAddress: Indicates if this is the billing address.
- SiteId: Identifier of the associated site.
- IsDefault: Indicates if this is the default address.
- Region: Region.
- IsTemporary: Indicates if the address is temporary.
- Mobile: Mobile phone number.

### TypeScript class
```typescript
interface CustomerAddress {
  AddressGuid: string; // GUID
  CustomerGuid: string; // GUID
  IsActive: boolean;
  Title?: string | null;
  Company?: string | null;
  FullName?: string | null; // read-only
  FirstName?: string | null;
  LastName?: string | null;
  StreetAddress?: string | null;
  PostalCode?: string | null;
  City?: string | null;
  CountryCode?: string | null;
  Phone?: string | null;
  Email?: string | null;
  IsBillingAddress: boolean;
  SiteId: number;
  IsDefault: boolean;
  Region?: string | null;
  IsTemporary: boolean;
  Mobile?: string | null;
}
```