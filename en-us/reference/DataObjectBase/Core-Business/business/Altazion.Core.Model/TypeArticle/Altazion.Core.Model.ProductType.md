## ProductType

The `ProductType` class represents a product type along with its associated detailed information.

Public properties:

- `ID` (short): Unique identifier for the product type.
- `Code` (string): Code for the product type.
- `TypeLabel` (string): Label or name of the product type.
- `AccountingAccount` (string): Accounting account linked to the product type.
- `VatAccountingAccount` (string): VAT accounting account linked to the product type.
- `VatOnCollection` (bool): Indicates if VAT is on collection for this product type.
- `AtaGuid` (Guid?): Globally unique identifier (GUID) associated with the product type.
- `ExternalCode` (string): External code associated with the product type.
- `CanBeCreated` (bool): Indicates if this product type can be created.
- `IsSimplified` (bool): Indicates if this product type is simplified.
- `CreationPage` (string): Creation page linked to the product type.
- `CreationPageAppGuid` (Guid?): GUID of the application linked to the creation page.
- `CreationPageOptions` (string): Options related to the creation page.
- `DetailsPage` (string): Details page linked to the product type.
- `DetailsPageAppGuid` (Guid?): GUID of the application linked to the details page.
- `DetailsPageOptions` (string): Options related to the details page.
- `EditionPage` (string): Edition page linked to the product type.
- `EditionPageAppGuid` (Guid?): GUID of the application linked to the edition page.
- `EditionPageOptions` (string): Options related to the edition page.
- `Description` (string): Description of the product type.
- `GeneralType` (string): General type associated with the product type.

### TypeScript class
```typescript
interface ProductType {
  ID: number; // Unique identifier of the product type
  Code: string; // Code of the product type
  TypeLabel: string; // Label of the product type
  AccountingAccount?: string; // Accounting account associated with the product type
  VatAccountingAccount?: string; // VAT accounting account associated with the product type
  VatOnCollection: boolean; // Indicates if VAT is collected upon payment
  AtaGuid?: string | null; // GUID associated with the product type
  ExternalCode?: string; // External code associated with the product type
  CanBeCreated: boolean; // Indicates if the product type can be created
  IsSimplified: boolean; // Indicates if the product type is simplified
  CreationPage?: string; // Creation page for this product type
  CreationPageAppGuid?: string | null; // GUID of the app associated with the creation page
  CreationPageOptions?: string; // Options of the creation page
  DetailsPage?: string; // Details page for this product type
  DetailsPageAppGuid?: string | null; // GUID of the app associated with the details page
  DetailsPageOptions?: string; // Options of the details page
  EditionPage?: string; // Edition page for this product type
  EditionPageAppGuid?: string | null; // GUID of the app associated with the edition page
  EditionPageOptions?: string; // Options of the edition page
  Description?: string; // Description of the product type
  GeneralType?: string; // General type associated
}
```