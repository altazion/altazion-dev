## LegalEntity

Classe représentant une entité juridique avec ses informations légales et administratives.

Propriétés publiques :
- Id : Identifiant unique de l'entité juridique.
- LegalName : Nom légal de l'entité.
- Code : Code court ou abrégé de l'entité juridique.
- LegalForm : Forme juridique de l'entité (ex : SARL, SAS).
- Address : Adresse de l'entité juridique.
- VATNumber : Numéro de TVA intracommunautaire.
- Capital : Capital social, valeur décimale nullable.
- CountrySpecificData : Informations spécifiques au pays, instance de la classe imbriquée CountrySpecific.

Classes imbriquées :
- CountrySpecific : contient les données pays spécifiques, notamment une propriété pour la France.
- FranceSpecific : données spécifiques à la France telles que Siret, code APE, numéro et ville RCS, et indicateur micro-entreprise.

La classe FranceSpecific dérive également de DataObjectBase et contient les propriétés :
- Siret : numéro SIRET.
- ApeCode : code APE.
- RCSNumber : numéro RCS.
- RCSCity : ville du RCS.
- IsMicroEnterprise : booléen indiquant si c'est une micro-entreprise.

### D�claration TypeScript
```typescript
interface FranceSpecific {
  Siret: string | null;
  ApeCode: string | null;
  RCSNumber: string | null;
  RCSCity: string | null;
  IsMicroEnterprise: boolean;
}

interface CountrySpecific {
  France: FranceSpecific | null;
}

interface LegalEntity {
  Id: number;
  LegalName: string | null;
  Code: string | null;
  LegalForm: string | null;
  Address: string | null;
  VATNumber: string | null;
  Capital: number | null;
  CountrySpecificData: CountrySpecific | null;
}
```