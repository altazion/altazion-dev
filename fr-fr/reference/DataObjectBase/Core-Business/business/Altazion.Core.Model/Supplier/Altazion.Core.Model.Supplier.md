## Supplier

La classe Supplier représente un fournisseur avec plusieurs propriétés permettant d'identifier et de décrire ce fournisseur dans le système.

Propriétés publiques :
- Guid : identifiant unique global (GUID) du fournisseur.
- Id : identifiant décimal du fournisseur.
- Libelle : nom ou désignation du fournisseur.
- Adress : adresse postale du fournisseur.
- PostalCode : code postal associé à l'adresse.
- City : ville où se situe le fournisseur.
- PhoneNumber : numéro de téléphone du fournisseur.
- CompteCompta : numéro de compte comptable lié au fournisseur.
- DefaultExpenseIdType : identifiant optionnel du type de dépense par défaut.
- Type : type de fournisseur (ex : fournisseur matériel, service, etc.).
- Siret : numéro SIRET (identification en France) du fournisseur.
- UE_VAT : numéro de TVA intra-communautaire.
- ClientNumber : numéro client attribué au fournisseur.
- IsArchived : indique si le fournisseur est archivé (booléen).
- Code : code spécifique ou abrégé du fournisseur.

### D�claration TypeScript
```typescript
interface Supplier {
  Guid: string; // GUID
  Id: number; // decimal
  Libelle: string | null;
  Adress: string | null;
  PostalCode: string | null;
  City: string | null;
  PhoneNumber: string | null;
  CompteCompta: string | null;
  DefaultExpenseIdType?: number | null; // nullable short
  Type: string | null;
  Siret: string | null;
  UE_VAT: string | null;
  ClientNumber: string | null;
  IsArchived: boolean;
  Code: string | null;
}
```