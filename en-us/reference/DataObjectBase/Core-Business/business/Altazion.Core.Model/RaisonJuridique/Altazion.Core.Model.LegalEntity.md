## LegalEntity

Class representing a legal entity with its legal and administrative information.

Public properties:
- Id: Unique identifier of the legal entity.
- LegalName: Legal name of the entity.
- Code: Short or abbreviated code of the legal entity.
- LegalForm: Legal form of the entity (e.g., SARL, SAS).
- Address: Address of the legal entity.
- VATNumber: Intra-community VAT number.
- Capital: Share capital, nullable decimal value.
- CountrySpecificData: Country-specific information, instance of the nested CountrySpecific class.

Nested classes:
- CountrySpecific: contains country-specific data, notably a property for France.
- FranceSpecific: French-specific data such as Siret, APE code, RCS number and city, and micro-enterprise indicator.

The FranceSpecific class also derives from DataObjectBase and includes properties:
- Siret: SIRET number.
- ApeCode: APE code.
- RCSNumber: RCS number (Trade and Companies Register).
- RCSCity: City of the RCS registration.
- IsMicroEnterprise: Boolean indicating if it is a micro-enterprise.

### TypeScript class
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