## ProductType

La classe ProductType représente un type de produit avec ses informations associées. Elle contient les propriétés suivantes :

- ID : Identifiant unique du type de produit (short).
- Code : Code du type de produit (string).
- TypeLabel : Libellé du type de produit (string).
- AccountingAccount : Compte comptable associé au type de produit (string).
- VatAccountingAccount : Compte comptable de TVA associé au type de produit (string).
- VatOnCollection : Indique si la TVA est à encaissement pour ce type de produit (bool).
- AtaGuid : Identifiant global unique (GUID) associé au type de produit (nullable Guid).
- ExternalCode : Code externe associé au type de produit (string).
- CanBeCreated : Indique si ce type de produit peut être créé (bool).
- IsSimplified : Indique si ce type de produit est simplifié (bool).
- CreationPage : Page de création associée au type de produit (string).
- CreationPageAppGuid : Identifiant global unique (GUID) de l'application associée à la page de création (nullable Guid).
- CreationPageOptions : Options associées à la page de création (string).
- DetailsPage : Page de détails associée au type de produit (string).
- DetailsPageAppGuid : Identifiant global unique (GUID) de l'application associée à la page de détails (nullable Guid).
- DetailsPageOptions : Options associées à la page de détails (string).
- EditionPage : Page d'édition associée au type de produit (string).
- EditionPageAppGuid : Identifiant global unique (GUID) de l'application associée à la page d'édition (nullable Guid).
- EditionPageOptions : Options associées à la page d'édition (string).
- Description : Description du type de produit (string).
- GeneralType : Type général associé au type de produit (string).

### D�claration TypeScript
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