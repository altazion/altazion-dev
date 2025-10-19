## ProductType

The ProductType class represents a product type with its associated information. It includes the following properties:

- ID: Unique identifier of the product type (short).
- Code: Code of the product type (string).
- TypeLabel: Label of the product type (string).
- AccountingAccount: Accounting account associated with the product type (string).
- VatAccountingAccount: VAT accounting account associated with the product type (string).
- VatOnCollection: Indicates if VAT is on collection for this product type (bool).
- AtaGuid: Globally unique identifier (GUID) associated with the product type (nullable Guid).
- ExternalCode: External code associated with the product type (string).
- CanBeCreated: Indicates if this product type can be created (bool).
- IsSimplified: Indicates if this product type is simplified (bool).
- CreationPage: Creation page associated with the product type (string).
- CreationPageAppGuid: GUID of the application associated with the creation page (nullable Guid).
- CreationPageOptions: Options associated with the creation page (string).
- DetailsPage: Details page associated with the product type (string).
- DetailsPageAppGuid: GUID of the application associated with the details page (nullable Guid).
- DetailsPageOptions: Options associated with the details page (string).
- EditionPage: Edition page associated with the product type (string).
- EditionPageAppGuid: GUID of the application associated with the edition page (nullable Guid).
- EditionPageOptions: Options associated with the edition page (string).
- Description: Description of the product type (string).
- GeneralType: General type associated with the product type (string).

### TypeScript class
```typescript
interface ProductType {
  ID: number;
  Code: string | null;
  TypeLabel: string | null;
  AccountingAccount: string | null;
  VatAccountingAccount: string | null;
  VatOnCollection: boolean;
  AtaGuid?: string | null;
  ExternalCode: string | null;
  CanBeCreated: boolean;
  IsSimplified: boolean;
  CreationPage: string | null;
  CreationPageAppGuid?: string | null;
  CreationPageOptions: string | null;
  DetailsPage: string | null;
  DetailsPageAppGuid?: string | null;
  DetailsPageOptions: string | null;
  EditionPage: string | null;
  EditionPageAppGuid?: string | null;
  EditionPageOptions: string | null;
  Description: string | null;
  GeneralType: string | null;
}
```