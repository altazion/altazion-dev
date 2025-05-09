## PostalCode

This class represents a postal code with its associated information.

Public properties:

- Guid: Global unique identifier (GUID) of the postal code.
- CountryIso3LetterCode: 3-letter ISO country code associated with the postal code.
- Code: The postal code.
- City: The city associated with the postal code.
- PostOffice: The distribution post office associated with the postal code.
- PostOfficeData: Additional data for the distribution post office.
- Latitude: Geographic latitude of the postal code (optional).
- Longitude: Geographic longitude of the postal code (optional).
- FrenchInseeCode: French INSEE code associated with the postal code.

### TypeScript class
```json
interface PostalCode {
  Guid: string; // GUID represented as a string
  CountryIso3LetterCode: string;
  Code: string;
  City: string;
  PostOffice?: string | null;
  PostOfficeData?: string | null;
  Latitude?: number | null;
  Longitude?: number | null;
  FrenchInseeCode?: string | null;
}
```