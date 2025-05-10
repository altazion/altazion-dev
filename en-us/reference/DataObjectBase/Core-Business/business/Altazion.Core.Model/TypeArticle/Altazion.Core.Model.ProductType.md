## ProductType

The ProductType class represents a product type with its associated information within the system.

### Properties:
- `ID` (short): Unique identifier of the product type.
- `Code` (string): Code of the product type.
- `TypeLabel` (string): Label of the product type.
- `AccountingAccount` (string): Accounting account linked to the product type.
- `VatAccountingAccount` (string): VAT accounting account linked to the product type.
- `VatOnCollection` (bool): Indicates whether VAT is on collection for this product type.
- `AtaGuid` (Guid?): Global unique identifier (GUID) associated with the product type.
- `ExternalCode` (string): External code associated with the product type.
- `CanBeCreated` (bool): Indicates if this product type can be created.
- `IsSimplified` (bool): Indicates if this product type is simplified.
- `CreationPage` (string): Creation page linked to the product type.
- `CreationPageAppGuid` (Guid?): GUID of the app linked to the creation page.
- `CreationPageOptions` (string): Options associated with the creation page.
- `DetailsPage` (string): Detail page linked to the product type.
- `DetailsPageAppGuid` (Guid?): GUID of the app linked to the detail page.
- `DetailsPageOptions` (string): Options linked to the detail page.
- `EditionPage` (string): Edition page linked to the product type.
- `EditionPageAppGuid` (Guid?): GUID of the app linked to the edition page.
- `EditionPageOptions` (string): Options linked to the edition page.
- `Description` (string): Description of the product type.
- `GeneralType` (string): General type associated with the product type.

### TypeScript class
```typescript
interface ProductType {
  ID: number; // Identifiant unique du type de produit
  Code: string | null; // Code du type de produit
  TypeLabel: string | null; // Libellé du type de produit
  AccountingAccount: string | null; // Compte comptable associé
  VatAccountingAccount: string | null; // Compte comptable TVA associé
  VatOnCollection: boolean; // Indique si TVA à encaissement
  AtaGuid: string | null; // GUID associé
  ExternalCode: string | null; // Code externe
  CanBeCreated: boolean; // Indique si création possible
  IsSimplified: boolean; // Type simplifié
  CreationPage: string | null; // Page de création
  CreationPageAppGuid: string | null; // GUID App de création
  CreationPageOptions: string | null; // Options page création
  DetailsPage: string | null; // Page détails
  DetailsPageAppGuid: string | null; // GUID App détails
  DetailsPageOptions: string | null; // Options page détails
  EditionPage: string | null; // Page édition
  EditionPageAppGuid: string | null; // GUID App édition
  EditionPageOptions: string | null; // Options page édition
  Description: string | null; // Description
  GeneralType: string | null; // Type général
}
```