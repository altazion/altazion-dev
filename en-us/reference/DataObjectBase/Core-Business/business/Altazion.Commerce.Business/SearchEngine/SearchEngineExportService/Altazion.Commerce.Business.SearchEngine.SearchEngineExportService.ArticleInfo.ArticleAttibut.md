## ArticleAttibut

Class representing an article attribute with the following properties:
- att_art_pk: long identifier of the linked article.
- att_atd_pk: Guid identifier of the attribute definition.
- att_valeur_num: optional numeric value of type decimal.
- att_valeur_texte: short textual value of type string.
- att_valeur_texte_long: long textual value of type string.
- att_atv_valeur: optional integer value representing an enumerated or indexed value.
- att_valeur_bool: optional boolean value.
- att_valeur_dat: optional date (DateTime) value.

This class is used to describe the various forms an article attribute can take (numeric, text, boolean, date) with a link to its definition via att_atd_pk.

### TypeScript class
```typescript
interface ArticleAttibut {
  att_art_pk: number;
  att_atd_pk: string; // GUID
  att_valeur_num?: number | null;
  att_valeur_texte: string | null;
  att_valeur_texte_long: string | null;
  att_atv_valeur?: number | null;
  att_valeur_bool?: boolean | null;
  att_valeur_dat?: string | null; // ISO date string
}
```