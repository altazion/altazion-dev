## ProductType

La classe `ProductType` représente un type de produit avec ses informations détaillées associées.

Propriétés publiques :

- `ID` (short) : Identifiant unique du type de produit.
- `Code` (string) : Code du type de produit.
- `TypeLabel` (string) : Libellé du type de produit.
- `AccountingAccount` (string) : Compte comptable associé au type de produit.
- `VatAccountingAccount` (string) : Compte comptable de TVA associé au type de produit.
- `VatOnCollection` (bool) : Indique si la TVA est à encaissement pour ce type de produit.
- `AtaGuid` (Guid?) : Identifiant global unique (GUID) associé au type de produit.
- `ExternalCode` (string) : Code externe associé au type de produit.
- `CanBeCreated` (bool) : Indique si ce type de produit peut être créé.
- `IsSimplified` (bool) : Indique si ce type de produit est simplifié.
- `CreationPage` (string) : Page de création associée au type de produit.
- `CreationPageAppGuid` (Guid?) : GUID de l'application associée à la page de création.
- `CreationPageOptions` (string) : Options associées à la page de création.
- `DetailsPage` (string) : Page de détails associée au type de produit.
- `DetailsPageAppGuid` (Guid?) : GUID de l'application associée à la page de détails.
- `DetailsPageOptions` (string) : Options associées à la page de détails.
- `EditionPage` (string) : Page d'édition associée au type de produit.
- `EditionPageAppGuid` (Guid?) : GUID de l'application associée à la page d'édition.
- `EditionPageOptions` (string) : Options associées à la page d'édition.
- `Description` (string) : Description du type de produit.
- `GeneralType` (string) : Type général associé au type de produit.

### D�claration TypeScript
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