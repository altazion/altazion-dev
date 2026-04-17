## ArticleAttibut

Classe représentant un attribut d'article avec les propriétés suivantes :
- att_art_pk : identifiant de type long de l'article lié.
- att_atd_pk : identifiant de type Guid de la définition de l'attribut.
- att_valeur_num : valeur numérique optionnelle de type decimal.
- att_valeur_texte : valeur textuelle courte de type string.
- att_valeur_texte_long : valeur textuelle longue de type string.
- att_atv_valeur : valeur entière optionnelle (int) représentant une valeur énumérée ou indexée.
- att_valeur_bool : valeur booléenne optionnelle.
- att_valeur_dat : valeur de type date (DateTime) optionnelle.

Cette classe sert à décrire les différentes formes que peut prendre un attribut d'article (numérique, texte, booléen, date) avec un lien vers sa définition via att_atd_pk.

### D�claration TypeScript
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