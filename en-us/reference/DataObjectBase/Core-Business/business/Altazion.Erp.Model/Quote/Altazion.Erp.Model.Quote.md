## Quote

The Quote class represents an estimate (quote) including key information such as the unique identifier, quote number, origin, revision number, and client-related data including billing details and amounts. It also contains dates including creation, expiration, acceptance, estimated and actual start and end dates, as well as states related to the quote and its edition status. Global and total discounts before and after tax are included, along with client information (name, address, postal code, city, email).

Constants defining the possible quote states:
- EtatEnCours ("E"): Draft in progress
- EtatValide ("V"): Validated and sent to client
- EtatArchive ("A"): Archived (refused or expired)
- EtatFacture ("F"): Converted to invoice
- EtatPartiel ("P"): Partially invoiced

Public properties detailed:
- Id: unique identifier of the quote.
- Number: quote number.
- Origin: origin or source of the quote request.
- NumberRevision: revision number for managing different versions.
- CustomerId: numeric client identifier.
- AmountExcludingVat: total amount excluding VAT.
- AmountWithVAT: total amount including VAT.
- CreationDate: date when the quote was created.
- AssociatedIdDocument: linked document identifier.
- ExpirationDate: quote expiration or validity end date.
- EditionState: edition state (e.g., draft, finalized).
- GlobalDiscountExcludingVAT: global discount amount before tax.
- GlobalDiscountWithVAT: global discount amount including tax.
- GlobalDiscountLabel: label or description of the global discount.
- TotalDiscountExcludingVAT: total discounts amount before tax.
- TotalDiscountWithVAT: total discounts amount including tax.
- CustomerName: client's name.
- CustomerAddress: client's address.
- CustomerPostalCode: client's postal code.
- CustomerCity: client's city.
- CustomerEmail: client's email address.
- Status: current status of the quote.
- ValidationCode: validation code (e.g. online validation).
- Label: label or title of the quote.
- AcceptanceDate: date when the quote was accepted by the client (nullable).
- AcceptanceSource: source or person who accepted the quote.
- ProspectGuid: unique identifier of the associated prospect.
- EstimatedStartDate: estimated start date for realization (nullable).
- EstimatedEndDate: estimated end date for realization (nullable).
- ActualDateStart: actual start date (nullable).
- ActualDateEnd: actual end date (nullable).
- AcceptanceDocument: reference or number of acceptance document.
- ContractGuid: unique identifier of the associated contract.

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
  CreationDate: Date;
  AssociatedIdDocument: number;
  ExpirationDate: Date;
  EditionState: number; // byte represented as number
  GlobalDiscountExcludingVAT: number;
  GlobalDiscountWithVAT: number;
  GlobalDiscountLabel: string;
  TotalDiscountExcludingVAT: number;
  TotalDiscountWithVAT: number;
  CustomerName: string;
  CustomerAddress: string;
  CustomerPostalCode: string;
  CustomerCity: string;
  CustomerEmail: string;
  Status: string;
  ValidationCode: string;
  Label: string;
  AcceptanceDate?: Date | null;
  AcceptanceSource: string;
  ProspectGuid: string; // GUID
  EstimatedStartDate?: Date | null;
  EstimatedEndDate?: Date | null;
  ActualDateStart?: Date | null;
  ActualDateEnd?: Date | null;
  AcceptanceDocument: string;
  ContractGuid: string; // GUID
  // Constants for states
  static readonly EtatEnCours: "E";
  static readonly EtatValide: "V";
  static readonly EtatArchive: "A";
  static readonly EtatFacture: "F";
  static readonly EtatPartiel: "P";
}
```