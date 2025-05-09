The `Country` class represents a country with its ISO codes and descriptive labels.

Public properties:
- `Iso3LettersCode`: The country's 3-letter ISO code, used as the unique key of the object.
- `Iso2LettersCode`: The country's 2-letter ISO code.
- `Label`: The country's label.
- `IsoLabel`: The ISO label of the country.

This class inherits from DataObjectBase and is marked with the `DataConcept` attribute for the "ReferenceData" context with the name "Country".

Key methods (not detailed here):
- `GetKey()` returns the unique key, which is the `Iso3LettersCode`.
- `FromDataRow(DataRow)` initializes properties from a data row.