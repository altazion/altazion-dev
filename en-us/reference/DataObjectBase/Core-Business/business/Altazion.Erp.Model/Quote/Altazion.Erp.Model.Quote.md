## Quote

The `Quote` class represents a detailed commercial quote including all essential information about the client, amounts, dates, and validation status.

Constants defining possible quote states:
- `EtatEnCours` (InProgress): The quote is being drafted.
- `EtatValide` (Validated): The quote has been validated and sent to the client.
- `EtatArchive` (Archived): The quote is archived (refused or expired).
- `EtatFacture` (Invoiced): The quote has been converted into an invoice.
- `EtatPartiel` (Partial): The quote has been partially invoiced.

Public properties:
- `Id` (decimal): Unique identifier of the quote.
- `Number` (string): Quote number.
- `Origin` (string): Origin or source of the quote request.
- `NumberRevision` (int): Revision number for managing successive versions.
- `CustomerId` (int): Numeric identifier of the client.
- `AmountExcludingVat` (decimal): Total amount excluding VAT.
- `AmountWithVAT` (decimal): Total amount including taxes (TTC).
- `CreationDate` (DateTimeOffset): Date the quote was created.
- `AssociatedIdDocument` (Int64): Identifier of the document associated with the quote.
- `ExpirationDate` (DateTimeOffset): Expiration or validity end date.
- `EditionState` (byte): Editing state (draft, finalized, etc.).
- `GlobalDiscountExcludingVAT` (decimal): Global discount applied excluding VAT.
- `GlobalDiscountWithVAT` (decimal): Global discount applied including VAT.
- `GlobalDiscountLabel` (string): Label or description of the global discount.
- `TotalDiscountExcludingVAT` (decimal): Total discount amount excluding VAT (both lines and global).
- `TotalDiscountWithVAT` (decimal): Total discount amount including VAT (both lines and global).
- `CustomerName` (string): Client's name.
- `CustomerAddress` (string): Client's address (street and number).
- `CustomerPostalCode` (string): Client's postal code.
- `CustomerCity` (string): Client's city.
- `CustomerEmail` (string): Client's email address.
- `Status` (string): Current quote status (in progress, validated, archived, invoiced, partial invoice).
- `ValidationCode` (string): Validation code (for example, for online validation).
- `Label` (string): Title or label of the quote.
- `AcceptanceDate` (DateTimeOffset?): Date when client accepted the quote (nullable).
- `AcceptanceSource` (string): Source or person who accepted the quote.
- `ProspectGuid` (Guid): Unique identifier of the associated prospect.
- `EstimatedStartDate` (DateTimeOffset?): Estimated start date for execution.
- `EstimatedEndDate` (DateTimeOffset?): Estimated end date for execution.
- `ActualDateStart` (DateTimeOffset?): Actual start date of execution.
- `ActualDateEnd` (DateTimeOffset?): Actual end date of execution.
- `AcceptanceDocument` (string): Number or reference of acceptance document (e.g., client order form).
- `ContractGuid` (Guid): Unique identifier of the contract linked to the quote.

### TypeScript class
```typescript
interface Quote {
  // Constants for quote states
  EtatEnCours: string;  // "E" - In progress
  EtatValide: string;   // "V" - Validated
  EtatArchive: string;  // "A" - Archived
  EtatFacture: string;  // "F" - Invoiced
  EtatPartiel: string;  // "P" - Partially invoiced

  Id: number;  // Unique identifier of the quote
  Number: string;  // Quote number
  Origin: string;  // Origin/source of the quote
  NumberRevision: number;  // Revision number
  CustomerId: number;  // Numeric client ID
  AmountExcludingVat: number;  // Amount excluding VAT
  AmountWithVAT: number;  // Amount including VAT
  CreationDate: string;  // Creation date (ISO 8601 string)
  AssociatedIdDocument: number;  // Associated document ID
  ExpirationDate: string;  // Expiration/validity end date
  EditionState: number;  // Edition state
  GlobalDiscountExcludingVAT: number;  // Global discount excl. VAT
  GlobalDiscountWithVAT: number;  // Global discount incl. VAT
  GlobalDiscountLabel: string;  // Discount label
  TotalDiscountExcludingVAT: number;  // Total discount excl. VAT
  TotalDiscountWithVAT: number;  // Total discount incl. VAT
  CustomerName: string;  // Client name
  CustomerAddress: string;  // Client address
  CustomerPostalCode: string;  // Client postal code
  CustomerCity: string;  // Client city
  CustomerEmail: string;  // Client email
  Status: string;  // Quote status
  ValidationCode: string;  // Validation code
  Label: string;  // Quote label/title
  AcceptanceDate?: string;  // Acceptance date (nullable)
  AcceptanceSource: string;  // Source/person accepting
  ProspectGuid: string;  // Prospect unique ID (GUID)
  EstimatedStartDate?: string;  // Estimated start date
  EstimatedEndDate?: string;  // Estimated end date
  ActualDateStart?: string;  // Actual start date
  ActualDateEnd?: string;  // Actual end date
  AcceptanceDocument: string;  // Acceptance document ref
  ContractGuid: string;  // Contract unique ID (GUID)
}

// Constants values (can be set on the interface or externally)
const EtatEnCours = "E";
const EtatValide = "V";
const EtatArchive = "A";
const EtatFacture = "F";
const EtatPartiel = "P";
```