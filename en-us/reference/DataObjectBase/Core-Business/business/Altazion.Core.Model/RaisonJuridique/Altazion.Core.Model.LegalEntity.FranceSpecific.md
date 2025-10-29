## FranceSpecific

The FranceSpecific class represents the France-specific information for a legal entity. It has the following properties:

- `Siret`: The SIRET number of the legal entity.
- `ApeCode`: The APE code of the legal entity.
- `RCSNumber`: The RCS number (Trade and Companies Register) of the legal entity.
- `RCSCity`: The city where the entity is registered in the RCS.
- `IsMicroEnterprise`: Indicates if the entity is a micro-enterprise (boolean).

This is a data class derived from DataObjectBase, with a protected `FromDataRow` method to initialize its properties from a data row.

The unique key for the object is the SIRET number.

### TypeScript class
```typescript
interface FranceSpecific {
  Siret: string | null;
  ApeCode: string | null;
  RCSNumber: string | null;
  RCSCity: string | null;
  IsMicroEnterprise: boolean;
}
```