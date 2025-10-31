## Supplier

The Supplier class represents a supplier in the commercial management system. It contains the following properties:

- Guid: unique identifier (GUID) of the supplier.
- Id: numerical identifier of the supplier.
- Libelle: name (label) of the supplier.
- Adress: full address of the supplier.
- PostalCode: postal code of the supplier.
- City: city of the supplier.
- PhoneNumber: phone number of the supplier.
- CompteCompta: accounting account associated with the supplier.
- DefaultExpenseIdType: identifier of the default expense type (optional).
- Type: supplier type (1-character code).
- Siret: SIRET number of the supplier.
- UE_VAT: intra-community VAT number (EU).
- ClientNumber: customer number with this supplier.
- IsArchived: indicates if the supplier is archived.
- Code: supplier code.

Each property has specific validation constraints regarding required fields and maximum lengths in some cases.

### TypeScript class
```typescript
interface Supplier {
  Guid: string; // GUID as string
  Id: number;
  Libelle: string;
  Adress: string;
  PostalCode: string | null;
  City: string | null;
  PhoneNumber: string | null;
  CompteCompta: string | null;
  DefaultExpenseIdType: number | null;
  Type: string;
  Siret: string | null;
  UE_VAT: string | null;
  ClientNumber: string | null;
  IsArchived: boolean;
  Code: string | null;
}
```