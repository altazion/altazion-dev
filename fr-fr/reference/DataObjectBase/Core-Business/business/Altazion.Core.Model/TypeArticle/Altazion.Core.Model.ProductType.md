## ProductType

La classe ProductType représente un type de produit avec ses informations associées dans le système.

Propriétés publiques :
- ID (short) : Identifiant unique du type de produit.
- Code (string) : Code du type de produit.
- TypeLabel (string) : Libellé du type de produit.
- AccountingAccount (string) : Compte comptable associé au type de produit.
- VatAccountingAccount (string) : Compte comptable de TVA associé au type de produit.
- VatOnCollection (bool) : Indique si la TVA est à encaissement pour ce type de produit.
- AtaGuid (Guid?) : Identifiant global unique associé au type de produit.
- ExternalCode (string) : Code externe associé au type de produit.
- CanBeCreated (bool) : Indique si ce type de produit peut être créé.
- IsSimplified (bool) : Indique si ce type de produit est simplifié.
- CreationPage (string) : Page de création associée au type de produit.
- CreationPageAppGuid (Guid?) : GUID de l'application associée à la page de création.
- CreationPageOptions (string) : Options associées à la page de création.
- DetailsPage (string) : Page de détails associée au type de produit.
- DetailsPageAppGuid (Guid?) : GUID de l'application associée à la page de détails.
- DetailsPageOptions (string) : Options associées à la page de détails.
- EditionPage (string) : Page d'édition associée au type de produit.
- EditionPageAppGuid (Guid?) : GUID de l'application associée à la page d'édition.
- EditionPageOptions (string) : Options associées à la page d'édition.
- Description (string) : Description du type de produit.
- GeneralType (string) : Type général associé au type de produit.

### D�claration TypeScript
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