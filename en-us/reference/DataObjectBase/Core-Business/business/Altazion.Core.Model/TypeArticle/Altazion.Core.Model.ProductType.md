## ProductType

The ProductType class represents a product type with its associated information in the system.

Public properties:
- ID (short): Unique identifier of the product type.
- Code (string): Code of the product type.
- TypeLabel (string): Label of the product type.
- AccountingAccount (string): Accounting account associated with the product type.
- VatAccountingAccount (string): VAT accounting account linked to the product type.
- VatOnCollection (bool): Indicates if VAT is on collection for this product type.
- AtaGuid (Guid?): Unique global identifier associated with the product type.
- ExternalCode (string): External code linked to the product type.
- CanBeCreated (bool): Indicates if this product type can be created.
- IsSimplified (bool): Indicates if this product type is simplified.
- CreationPage (string): Creation page associated with the product type.
- CreationPageAppGuid (Guid?): GUID of the application linked to the creation page.
- CreationPageOptions (string): Options related to the creation page.
- DetailsPage (string): Details page associated with the product type.
- DetailsPageAppGuid (Guid?): GUID of the application linked to the details page.
- DetailsPageOptions (string): Options related to the details page.
- EditionPage (string): Edition page associated with the product type.
- EditionPageAppGuid (Guid?): GUID of the application linked to the edition page.
- EditionPageOptions (string): Options related to the edition page.
- Description (string): Description of the product type.
- GeneralType (string): General type associated with the product type.

### TypeScript class
```typescript
interface ProductType {
  ID: number; // Unique identifier of the product type
  Code: string | null; // Code of the product type
  TypeLabel: string | null; // Label of the product type
  AccountingAccount: string | null; // Accounting account associated
  VatAccountingAccount: string | null; // VAT accounting account
  VatOnCollection: boolean; // VAT on collection indicator
  AtaGuid: string | null; // GUID (nullable) as string
  ExternalCode: string | null; // External code
  CanBeCreated: boolean; // Whether the product type can be created
  IsSimplified: boolean; // Whether the product type is simplified
  CreationPage: string | null; // Creation page URL or identifier
  CreationPageAppGuid: string | null; // GUID of creation page application
  CreationPageOptions: string | null; // Options for creation page
  DetailsPage: string | null; // Details page
  DetailsPageAppGuid: string | null; // GUID of details page application
  DetailsPageOptions: string | null; // Options for details page
  EditionPage: string | null; // Edition page
  EditionPageAppGuid: string | null; // GUID of edition page application
  EditionPageOptions: string | null; // Options for edition page
  Description: string | null; // Description
  GeneralType: string | null; // General type classification
}
```