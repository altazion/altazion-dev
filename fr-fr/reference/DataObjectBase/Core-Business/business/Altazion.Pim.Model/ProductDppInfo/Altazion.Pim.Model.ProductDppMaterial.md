## ProductDppMaterial

Classe représentant une matière composant un produit, dans le cadre d'un snapshot DPP (Passeport Numérique Produit).

Propriétés publiques :
- Name : Nom de la matière (par exemple "Coton", "Polyester recyclé").
- Percentage : Pourcentage massique de cette matière dans le produit.
- IsRecycled : Indique si la matière est issue du recyclage.
- CasNumber : Numéro CAS de la substance chimique, requis pour la réglementation REACH si la matière est à risque.
- OriginCountryCode : Code pays ISO 3166-1 alpha-2 indiquant le pays d'origine de la matière (exemple "FR" pour France, "IN" pour Inde).
- CertificationCode : Code de certification associée à la matière (ex : "GOTS", "FSC", "OEKO-TEX").
- RecycledContentPct : Taux de contenu recyclé dans cette matière, exprimé en pourcentage massique (optionnel).

### D�claration TypeScript
```typescript
interface ProductDppMaterial {
  /** Name of the material (e.g. "Cotton", "Recycled polyester") */
  Name: string;

  /** Mass percentage of this material in the product */
  Percentage: number;

  /** Indicates if the material is recycled */
  IsRecycled: boolean;

  /** CAS number of the chemical substance, required for REACH if risky */
  CasNumber: string;

  /** ISO 3166-1 alpha-2 code of the origin country (e.g. "FR", "IN") */
  OriginCountryCode: string;

  /** Certification code for the material (e.g. "GOTS", "FSC", "OEKO-TEX") */
  CertificationCode: string;

  /** Percentage of recycled content in the material, mass-based (optional) */
  RecycledContentPct?: number;
}
```