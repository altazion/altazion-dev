## ProductType

La classe ProductType représente un type de produit avec ses informations associées dans le système.

### Propriétés :
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