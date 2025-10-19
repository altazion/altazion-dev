## CustomerAddress

The CustomerAddress class represents a customer address in the system (corresponding to the gestcom_clients_adresses table).

Public properties:

- AddressGuid: Unique identifier (GUID) for the address.
- CustomerGuid: GUID of the associated customer.
- IsActive: Indicates whether the address is active.
- Title: Formal title or salutation.
- Company: Company name.
- FullName: Full name of the person or entity.
- StreetAddress: The street address.
- PostalCode: Postal code.
- City: City name.
- CountryCode: Country code.
- Phone: Phone number.
- Email: Email address.
- IsBillingAddress: Indicates if this address is used for billing.
- SiteId: Identifier of the associated site.
- IsDefault: Indicates if this address is the default address.
- Region: Geographical region.
- IsTemporary: Indicates if the address is temporary.
- Mobile: Mobile phone number.

This class is designed to store and manage all the relevant information for a customer address with its various attributes and status.


### TypeScript class
```typescript
interface CustomerAddress {
  AddressGuid: string; // GUID
  CustomerGuid: string; // GUID
  IsActive: boolean;
  Title?: string | null;
  Company?: string | null;
  FullName?: string | null;
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