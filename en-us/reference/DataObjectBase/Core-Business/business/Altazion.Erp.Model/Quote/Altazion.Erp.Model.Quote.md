## Quote

The `Quote` class represents a quotation in the Altazion ERP system. It includes the following key public properties:

- `Id`: Unique identifier of the quote (decimal).
- `Number`: Quote number (string).
- `Origin`: Origin of the quote (string).
- `NumberRevision`: Revision number of the quote (int).
- `CustomerId`: Numeric ID of the client associated with the quote (int).
- `AmountExcludingVat`: Quote amount excluding VAT (decimal).
- `AmountWithVAT`: Quote amount including VAT (decimal).
- `CreationDate`: Date when the quote was created (DateTime).
- `AssociatedIdDocument`: ID of an associated document (Int64).
- `ExpirationDate`: Expiry date of the quote (DateTime).
- `EditionState`: Edition status of the quote (byte).
- `GlobalDiscountExcludingVAT`: Global discount excluding VAT applied to the quote (decimal).
- `GlobalDiscountWithVAT`: Global discount including VAT (decimal).
- `GlobalDiscountLabel`: Label describing the global discount (string).
- `TotalDiscountExcludingVAT`: Total discount excluding VAT (decimal).
- `TotalDiscountWithVAT`: Total discount including VAT (decimal).
- `ClientName`: Name of the client (string).
- `ClientAddress`: Address of the client (string).
- `ClientCP`: Client postal code (string).
- `ClientCity`: Client city (string).
- `ClientEmail`: Client's email address (string).
- `State`: Current quotation status (string).
- `ValidationCode`: Validation code of the quote (string).
- `Label`: Label or title of the quote (string).
- `AcceptanceDate`: Date the quote was accepted, nullable (DateTime?).
- `AcceptanceSource`: Person or source who accepted the quote (string).
- `ProspectGuid`: Unique identifier (GUID) for the prospect (Guid).
- `EstimatedStartDate`: Estimated start date (DateTime?).
- `EstimatedEndDate`: Estimated end date (DateTime?).
- `ActualDateStart`: Actual start date (DateTime?).
- `ActualDateEnd`: Actual end date (DateTime?).
- `AcceptanceDocument`: Document reference for acceptance (string).
- `ContractGuid`: Unique identifier (GUID) of associated contract (Guid).

Constants defining possible states of the quote:
- `EtatEnCours` = "E" (In progress)
- `EtatValide` = "V" (Validated)
- `EtatArchive` = "A" (Archived)
- `EtatFacture` = "F" (Invoiced)
- `EtatPartiel` = "P" (Partial)

This class manages all quotation-related data within the ERP, including amounts, important dates, client details, and discounts.

### TypeScript class
```typescript
interface Quote {
  Id: number;
  Number: string;
  Origin: string;
  NumberRevision: number;
  CustomerId: number;
  AmountExcludingVat: number;
  AmountWithVAT: number;
  CreationDate: string; // ISO date string
  AssociatedIdDocument: number;
  ExpirationDate: string; // ISO date string
  EditionState: number;
  GlobalDiscountExcludingVAT: number;
  GlobalDiscountWithVAT: number;
  GlobalDiscountLabel: string;
  TotalDiscountExcludingVAT: number;
  TotalDiscountWithVAT: number;
  ClientName: string;
  ClientAddress: string;
  ClientCP: string;
  ClientCity: string;
  ClientEmail: string;
  State: string;
  ValidationCode: string;
  Label: string;
  AcceptanceDate?: string; // ISO date string or null
  AcceptanceSource: string;
  ProspectGuid: string;
  EstimatedStartDate?: string; // ISO date string or null
  EstimatedEndDate?: string; // ISO date string or null
  ActualDateStart?: string; // ISO date string or null
  ActualDateEnd?: string; // ISO date string or null
  AcceptanceDocument: string;
  ContractGuid: string;
}

// Constants for quote states
const EtatEnCours = "E";
const EtatValide = "V";
const EtatArchive = "A";
const EtatFacture = "F";
const EtatPartiel = "P";
```