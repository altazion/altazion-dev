## Supplier

The Supplier class represents a supplier in the ERP system. It includes several properties describing the essential information of the supplier:

- Guid: global unique identifier (GUID) of the supplier.
- Id: internal numeric identifier of the supplier.
- Libelle: name or designation of the supplier.
- Adress: postal address of the supplier.
- PostalCode: postal code of the supplier.
- City: city of the supplier.
- PhoneNumber: phone number of the supplier.
- CompteCompta: accounting account linked to the supplier.
- DefaultExpenseIdType: optional identifier of the default expense type related to the supplier.
- Type: type or category of the supplier.
- Siret: SIRET number (business registration number).
- UE_VAT: intra-community VAT number.
- ClientNumber: client number if applicable.
- IsArchived: boolean flag indicating if the supplier is archived.
- Code: internal or external code of the supplier.

This class inherits from DataObjectBase and implements a method to populate its properties from a DataRow reflecting the SQL table "gestcom_fournisseurs" in the "ERP" database.

### TypeScript class
```typescript
interface Supplier {
  Guid: string; // GUID unique identifier
  Id: number; // Numeric identifier
  Libelle: string | null; // Supplier name
  Adress: string | null; // Postal address
  PostalCode: string | null; // Postal code
  City: string | null; // City
  PhoneNumber: string | null; // Phone number
  CompteCompta: string | null; // Accounting account
  DefaultExpenseIdType: number | null; // Default expense type ID (optional)
  Type: string | null; // Supplier type
  Siret: string | null; // SIRET number
  UE_VAT: string | null; // VAT number (EU)
  ClientNumber: string | null; // Client number
  IsArchived: boolean; // Archived flag
  Code: string | null; // Supplier code
}
```