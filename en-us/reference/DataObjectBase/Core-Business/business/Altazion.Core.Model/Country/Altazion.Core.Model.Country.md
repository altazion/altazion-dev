## Country

The Country class represents a country including several standard identifiers and labels:

- Iso3LettersCode: The country's ISO 3-letter code, used as unique key.
- Iso2LettersCode: The country's ISO 2-letter code.
- Label: The country's name.
- IsoLabel: The country's ISO label.

This class inherits from DataObjectBase and uses the DataConcept attribute indicating it belongs to reference data named "Country". The unique key for instances of this class is the ISO 3-letter code (Iso3LettersCode).

The properties store essential information for identifying and naming countries in various international contexts.

### TypeScript class
```json
interface Country {
  /** ISO 3-letter country code, unique key */
  Iso3LettersCode: string;
  /** ISO 2-letter country code */
  Iso2LettersCode: string;
  /** Country name label */
  Label: string;
  /** ISO label of the country */
  IsoLabel: string;
}
```