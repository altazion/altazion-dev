## FranceSpecific

The FranceSpecific class represents the country-specific information for a legal entity in France. It includes the following properties:

- Siret: the SIRET number of the legal entity.
- ApeCode: the APE (Primary Activity Code) of the legal entity.
- RCSNumber: the RCS (Trade and Companies Register) number of the legal entity.
- RCSCity: the city where the entity is registered in the RCS.
- IsMicroEnterprise: a boolean indicating whether the entity is a micro-enterprise.

Each property holds legal or administrative data specific to the French context for legal entities.

### TypeScript class
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