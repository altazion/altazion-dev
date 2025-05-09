## Country

La classe Country représente un pays en incluant plusieurs identifiants et libellés standards :

- Iso3LettersCode : Code ISO du pays à 3 lettres, utilisé comme clé unique.
- Iso2LettersCode : Code ISO du pays à 2 lettres.
- Label : Libellé du pays.
- IsoLabel : Libellé ISO du pays.

Cette classe dérive de DataObjectBase et utilise l'attribut DataConcept pour indiquer qu'elle fait partie des données de référence nommées "Country". La clé unique de cette classe est le code ISO à 3 lettres (Iso3LettersCode).

Les propriétés permettent de stocker les informations essentielles à l'identification et la dénomination des pays dans différents contextes internationaux.

### D�claration TypeScript
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