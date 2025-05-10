## LegalEntity

The LegalEntity class represents a legal entity with its legal and administrative information.

Public properties:
- Id: Unique identifier of the legal entity.
- LegalName: Legal name of the entity.
- Code: Short or abbreviated code of the legal entity.
- LegalForm: Legal form of the entity (e.g., SARL, SAS).
- Address: Address of the legal entity.
- VATNumber: Intra-community VAT number of the entity.
- Capital: Share capital of the entity, nullable.
- CountrySpecificData: Country-specific information for the legal entity.

Nested classes:
- CountrySpecific: Contains country-specific data, here only France.
- FranceSpecific: Provides French-specific details such as SIRET number, APE code, RCS number and city, and an indicator if it is a micro-enterprise.

### TypeScript class
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