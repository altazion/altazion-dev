## Country

La classe Country représente un pays avec différentes propriétés relatives à ses codes ISO et à son libellé.

Propriétés publiques :

- Iso3LettersCode : string - Code ISO à 3 lettres du pays. C'est également la clé unique de l'objet.
- Iso2LettersCode : string - Code ISO à 2 lettres du pays.
- Label : string - Libellé du pays.
- IsoLabel : string - Libellé ISO du pays.

Cette classe dispose d'une méthode GetKey qui retourne le code ISO à 3 lettres, unique pour l'identification de l'objet.

Elle est associée à un concept SQL via l'attribut SqlDataConcept en liaison avec une table "ReferenceData.Country" et la source "params_pays".

### D�claration TypeScript
```typescript
interface Country {
  Iso3LettersCode: string; // 3-letter ISO code of the country, unique key
  Iso2LettersCode: string; // 2-letter ISO code of the country
  Label: string; // Country name
  IsoLabel: string; // ISO label of the country
}
```