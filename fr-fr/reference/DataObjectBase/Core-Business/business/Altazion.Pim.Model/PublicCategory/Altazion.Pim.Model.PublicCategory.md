## PublicCategory

La classe PublicCategory représente une catégorie publique (segmentation) de produits visible par les clients, utilisée pour organiser le catalogue commercial.

Constantes définies :
- CategoryTypeProduct : type de catégorie pour les produits standards (valeur "P").
- CategoryTypeSecondary : type de catégorie pour les catégories secondaires ou complémentaires (valeur "C").
- CategoryTypeSpecialOffers : type de catégorie pour les avantages et promotions (valeur "A").

Propriétés publiques :
- Id : identifiant unique (clé primaire) de la catégorie publique.
- ParentCategoryId : identifiant de la catégorie parente (auto-référence pour hiérarchie).
- Label : libellé de la catégorie.
- InternetFlag : flag indiquant la visibilité sur Internet (booléen).
- Type : type de catégorie (code à 1 caractère).
- BigImage : URL ou chemin de la grande image de la catégorie.
- Thumbnail : URL ou chemin de la vignette de la catégorie.
- Banner : URL ou chemin du bandeau de la catégorie.
- CustomUrl : URL personnalisée pour la catégorie (slug, permalien).
- SortLabel : libellé utilisé pour le tri alphabétique.
- ExternalCode : code externe de la catégorie (pour intégrations tierces).
- Code : code interne de la catégorie.
- CategoryType : catégorie métier associée.
- Importance : niveau d'importance ou de priorité de la catégorie.
- PublicComment : commentaire public visible par les clients.
- Description : description de la catégorie.
- HtmlHeader : en-tête HTML personnalisé pour la catégorie.
- ApplyHeaderToChildren : indique si l'en-tête doit être appliqué aux catégories enfants (booléen).

### D�claration TypeScript
```typescript
interface PublicCategory {
  Id: number;
  ParentCategoryId?: number | null;
  Label: string;
  InternetFlag: boolean;
  Type: string;
  BigImage?: string | null;
  Thumbnail?: string | null;
  Banner?: string | null;
  CustomUrl?: string | null;
  SortLabel?: string | null;
  ExternalCode?: string | null;
  Code?: string | null;
  CategoryType?: string | null;
  Importance: number;
  PublicComment?: string | null;
  Description?: string | null;
  HtmlHeader?: string | null;
  ApplyHeaderToChildren: boolean;
}
```