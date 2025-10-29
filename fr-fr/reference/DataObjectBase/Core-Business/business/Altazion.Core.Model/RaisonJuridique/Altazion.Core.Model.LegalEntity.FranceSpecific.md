## FranceSpecific

La classe FranceSpecific représente les informations spécifiques à la France pour une entité juridique. Elle contient les propriétés suivantes :

- `Siret` : Numéro SIRET de l'entité juridique.
- `ApeCode` : Code APE de l'entité juridique.
- `RCSNumber` : Numéro RCS (Registre du Commerce et des Sociétés) de l'entité juridique.
- `RCSCity` : Ville où l'entité est enregistrée au RCS.
- `IsMicroEnterprise` : Indique si l'entité est une micro-entreprise (booléen).

Cette classe est une classe de données dérivant de DataObjectBase, avec une méthode protégée `FromDataRow` pour initialiser ses propriétés à partir d'une ligne de données.

La clé unique de l'objet est le numéro SIRET.

### D�claration TypeScript
```typescript
interface FranceSpecific {
  Siret: string | null;
  ApeCode: string | null;
  RCSNumber: string | null;
  RCSCity: string | null;
  IsMicroEnterprise: boolean;
}
```