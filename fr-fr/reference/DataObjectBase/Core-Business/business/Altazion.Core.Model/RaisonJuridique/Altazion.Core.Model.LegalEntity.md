## LegalEntity

La classe LegalEntity représente une entité juridique avec ses informations légales et administratives.

Propriétés publiques :
- Id : Identifiant unique de l'entité juridique.
- LegalName : Nom légal de l'entité.
- Code : Code court ou abrégé de l'entité juridique.
- LegalForm : Forme juridique de l'entité (ex. SARL, SAS).
- Address : Adresse de l'entité juridique.
- VATNumber : Numéro de TVA intracommunautaire de l'entité.
- Capital : Capital social de l'entité, pouvant être nul.
- CountrySpecificData : Informations spécifiques au pays pour l'entité juridique.

Classes imbriquées :
- CountrySpecific : Contient les données spécifiques au pays, ici uniquement France.
- FranceSpecific : Détaille les informations spécifiques à la France, telles que Siret, code APE, numéro et lieu RCS, et l'indicateur de micro-entreprise.

### D�claration TypeScript
```typescript
interface LegalEntity {
  Id: number;
  LegalName: string | null;
  Code: string | null;
  LegalForm: string | null;
  Address: string | null;
  VATNumber: string | null;
  Capital: number | null;
  CountrySpecificData: {
    France: {
      Siret: string | null;
      ApeCode: string | null;
      RCSNumber: string | null;
      RCSCity: string | null;
      IsMicroEnterprise: boolean;
    } | null;
  } | null;
}

```