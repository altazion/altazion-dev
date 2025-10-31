## Supplier

La classe Supplier représente un fournisseur dans le système de gestion commerciale. Elle contient les propriétés suivantes :

- Guid : identifiant unique (GUID) du fournisseur.
- Id : identifiant numérique du fournisseur.
- Libelle : nom (libellé) du fournisseur.
- Adress : adresse complète du fournisseur.
- PostalCode : code postal du fournisseur.
- City : ville du fournisseur.
- PhoneNumber : numéro de téléphone du fournisseur.
- CompteCompta : compte comptable associé au fournisseur.
- DefaultExpenseIdType : identifiant du type de dépenses par défaut (optionnel).
- Type : type de fournisseur (code sur 1 caractère).
- Siret : numéro SIRET du fournisseur.
- UE_VAT : numéro de TVA intracommunautaire (UE).
- ClientNumber : numéro de client chez ce fournisseur.
- IsArchived : indique si le fournisseur est archivé.
- Code : code du fournisseur.

Chaque propriété a des contraintes de validation spécifiques concernant la présence obligatoire et la longueur maximale dans certains cas.

### D�claration TypeScript
```typescript
interface Supplier {
  Guid: string; // GUID as string
  Id: number;
  Libelle: string;
  Adress: string;
  PostalCode: string | null;
  City: string | null;
  PhoneNumber: string | null;
  CompteCompta: string | null;
  DefaultExpenseIdType: number | null;
  Type: string;
  Siret: string | null;
  UE_VAT: string | null;
  ClientNumber: string | null;
  IsArchived: boolean;
  Code: string | null;
}
```