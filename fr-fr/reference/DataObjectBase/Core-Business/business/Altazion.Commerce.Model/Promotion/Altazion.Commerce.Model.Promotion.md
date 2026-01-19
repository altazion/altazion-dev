## Promotion

La classe Promotion représente une promotion commerciale dans le système.

Propriétés publiques :
- Guid : Identifiant unique (GUID) de la promotion.
- Libelle : Libellé ou nom de la promotion.
- CampagneGuid : Identifiant unique (GUID) de la campagne à laquelle la promotion est associée.
- DateDebut : Date et heure de début de validité de la promotion.
- DateFin : Date et heure de fin de validité de la promotion.
- SiteId : Identifiant optionnel du site (magasin) concerné par la promotion.
- ArticleGuidAvantage : Identifiant unique (GUID) de l'article lié à l'avantage promotionnel.
- TypePromotion : Type ou catégorie de la promotion sous forme de chaîne de caractères.
- EstArchive : Indique si la promotion est archivée (booléen).

Cette classe dérive de DataObjectBase, et surcharge la méthode ToString() pour afficher une représentation textuelle simple. Elle fournit aussi la méthode GetKey() qui retourne la clé primaire de l'objet, ici le Guid.

Le chargement des données depuis une ligne de données (DataRow) se fait via la méthode protégée FromDataRow.

### D�claration TypeScript
```typescript
interface Promotion {
  Guid: string; // GUID unique identifier of the promotion
  Libelle: string; // Label or name of the promotion
  CampagneGuid: string; // GUID of the associated campaign
  DateDebut: string; // Start date with timezone (ISO 8601 string)
  DateFin: string; // End date with timezone (ISO 8601 string)
  SiteId?: number | null; // Optional site (store) identifier
  ArticleGuidAvantage: string; // GUID of the promotional article
  TypePromotion: string; // Type/category of promotion
  EstArchive: boolean; // Whether the promotion is archived
}
```