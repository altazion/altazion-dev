## PostalCode

Cette classe représente un code postal avec ses informations associées.

Propriétés publiques :

- Guid : Identifiant global unique (GUID) du code postal.
- CountryIso3LetterCode : Code ISO à 3 lettres du pays associé au code postal.
- Code : Le code postal.
- City : La ville associée au code postal.
- PostOffice : Le bureau distributeur associé au code postal.
- PostOfficeData : Données complémentaires pour le bureau distributeur.
- Latitude : Latitude géographique du code postal (optionnelle).
- Longitude : Longitude géographique du code postal (optionnelle).
- FrenchInseeCode : Code INSEE français associé au code postal.

### D�claration TypeScript
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