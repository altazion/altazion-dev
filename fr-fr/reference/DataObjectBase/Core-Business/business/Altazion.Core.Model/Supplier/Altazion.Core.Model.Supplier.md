## Supplier

La classe Supplier représente un fournisseur dans le système ERP. Elle contient plusieurs propriétés décrivant les informations fondamentales du fournisseur :

- Guid : identifiant unique global (GUID) du fournisseur.
- Id : identifiant numérique interne du fournisseur.
- Libelle : nom ou dénomination du fournisseur.
- Adress : adresse postale du fournisseur.
- PostalCode : code postal du fournisseur.
- City : ville du fournisseur.
- PhoneNumber : numéro de téléphone du fournisseur.
- CompteCompta : compte comptable associé au fournisseur.
- DefaultExpenseIdType : identifiant optionnel du type de dépense par défaut associé au fournisseur.
- Type : type ou catégorie du fournisseur.
- Siret : numéro SIRET (numéro d'identification de l'entreprise).
- UE_VAT : numéro de TVA intracommunautaire.
- ClientNumber : numéro client s'il est utilisé.
- IsArchived : indicateur booléen indiquant si le fournisseur est archivé.
- Code : code interne ou externe du fournisseur.

Cette classe dérive de DataObjectBase et permet la conversion depuis une DataRow pour récupération des données de la base SQL liée à "gestcom_fournisseurs" dans la base "ERP".

### D�claration TypeScript
```typescript
interface Supplier {
  Guid: string; // GUID unique identifier
  Id: number; // Numeric identifier
  Libelle: string | null; // Supplier name
  Adress: string | null; // Postal address
  PostalCode: string | null; // Postal code
  City: string | null; // City
  PhoneNumber: string | null; // Phone number
  CompteCompta: string | null; // Accounting account
  DefaultExpenseIdType: number | null; // Default expense type ID (optional)
  Type: string | null; // Supplier type
  Siret: string | null; // SIRET number
  UE_VAT: string | null; // VAT number (EU)
  ClientNumber: string | null; // Client number
  IsArchived: boolean; // Archived flag
  Code: string | null; // Supplier code
}
```