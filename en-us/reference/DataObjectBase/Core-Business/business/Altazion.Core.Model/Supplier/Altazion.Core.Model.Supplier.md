## Supplier

The Supplier class represents a supplier with multiple properties to identify and describe this supplier within the system.

Public properties:
- Guid: the supplier's globally unique identifier (GUID).
- Id: the supplier's decimal identifier.
- Libelle: the name or designation of the supplier.
- Adress: the supplier's postal address.
- PostalCode: the postal code associated with the address.
- City: the city where the supplier is located.
- PhoneNumber: phone number of the supplier.
- CompteCompta: accounting account number linked to the supplier.
- DefaultExpenseIdType: optional identifier of the default expense type.
- Type: supplier type (e.g. hardware supplier, service, etc.).
- Siret: SIRET number (French company identification) of the supplier.
- UE_VAT: intra-community VAT number.
- ClientNumber: client number assigned to the supplier.
- IsArchived: indicates if the supplier is archived (boolean).
- Code: specific or abbreviated code for the supplier.

### TypeScript class
```typescript
interface Supplier {
  Guid: string; // GUID
  Id: number; // decimal
  Libelle: string | null;
  Adress: string | null;
  PostalCode: string | null;
  City: string | null;
  PhoneNumber: string | null;
  CompteCompta: string | null;
  DefaultExpenseIdType?: number | null; // nullable short
  Type: string | null;
  Siret: string | null;
  UE_VAT: string | null;
  ClientNumber: string | null;
  IsArchived: boolean;
  Code: string | null;
}
```