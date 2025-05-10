## FranceSpecific

La classe FranceSpecific représente les informations spécifiques à la France pour une entité juridique. Elle contient les propriétés suivantes :

- Siret : numéro SIRET de l'entité juridique.
- ApeCode : code APE (Activité Principale Exercée) de l'entité juridique.
- RCSNumber : numéro RCS (Registre du Commerce et des Sociétés) de l'entité juridique.
- RCSCity : ville où l'entité est enregistrée au RCS.
- IsMicroEnterprise : booléen indiquant si l'entité est une micro-entreprise.

Chaque propriété représente une information légale ou administrative propre au contexte français des entités juridiques.

### D�claration TypeScript
```typescript
interface FranceSpecific {
  /** Numéro SIRET de l'entité juridique */
  Siret: string | null;
  /** Code APE de l'entité juridique */
  ApeCode: string | null;
  /** Numéro RCS (Registre du Commerce et des Sociétés) de l'entité juridique */
  RCSNumber: string | null;
  /** Ville où l'entité est enregistrée au RCS */
  RCSCity: string | null;
  /** Indique si l'entité est une micro-entreprise */
  IsMicroEnterprise: boolean;
}
```