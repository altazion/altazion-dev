The Country class represents a country with its key ISO codes and labels.

Public properties:
- Iso3LettersCode: string representing the 3-letter ISO code of the country. This serves as the unique key for the Country object.
- Iso2LettersCode: string representing the 2-letter ISO code of the country.
- Label: string representing the name/label of the country.
- IsoLabel: string representing the ISO standard label of the country.

Key overriden methods:
- GetKey(): returns the unique key which is the 3-letter ISO code.
- FromDataRow(DataRow dr): initializes the object properties from a data row by mapping "pay_pk" to Iso3LettersCode, "pay_iso_2" to Iso2LettersCode, "pay_libelle" to Label, and "pay_libelle_iso" to IsoLabel.