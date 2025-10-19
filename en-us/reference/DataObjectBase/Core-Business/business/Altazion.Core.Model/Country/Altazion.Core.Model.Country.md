## Country

The Country class represents a country with various properties related to its ISO codes and label.

Public properties:

- Iso3LettersCode : string - The 3-letter ISO code of the country. This is also the unique key for the object.
- Iso2LettersCode : string - The 2-letter ISO code of the country.
- Label : string - The label (name) of the country.
- IsoLabel : string - The ISO label of the country.

This class includes a GetKey method which returns the 3-letter ISO code as the unique identifier of the object.

It is associated with a SQL data concept through the SqlDataConcept attribute linked to the table "ReferenceData.Country" and the data source "params_pays".

### TypeScript class
```typescript
interface Country {
  Iso3LettersCode: string; // 3-letter ISO code of the country, unique key
  Iso2LettersCode: string; // 2-letter ISO code of the country
  Label: string; // Country name
  IsoLabel: string; // ISO label of the country
}
```