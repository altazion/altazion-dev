## PublicCategory

La classe PublicCategory représente une catégorie publique (segmentation) de produits visible par les clients, utilisée pour organiser le catalogue commercial.

Propriétés publiques:
- Id: Identifiant unique (clé primaire) de la catégorie publique.
- ParentCategoryId: Identifiant de la catégorie parente (auto-référence pour hiérarchie), nullable.
- Label: Libellé de la catégorie.
- InternetFlag: Indique la visibilité sur Internet (true = visible, false = non visible).
- Type: Type de catégorie (code à 1 caractère).
- BigImage: URL ou chemin de la grande image de la catégorie.
- Thumbnail: URL ou chemin de la vignette de la catégorie.
- Banner: URL ou chemin du bandeau de la catégorie.
- CustomUrl: URL personnalisée pour la catégorie (slug, permalien).
- SortLabel: Libellé utilisé pour le tri alphabétique.
- ExternalCode: Code externe de la catégorie (pour intégrations tierces).
- Code: Code interne de la catégorie.
- CategoryType: Catégorie métier associée.
- Importance: Niveau d'importance ou de priorité de la catégorie.
- PublicComment: Commentaire public visible par les clients.
- Description: Description de la catégorie.
- HtmlHeader: En-tête HTML personnalisé pour la catégorie.
- ApplyHeaderToChildren: Indique si l'en-tête doit être appliqué aux catégories enfants.

Constantes publiques définies:
- CategoryTypeProduct: Type de catégorie pour les produits standards (valeur "P").
- CategoryTypeSecondary: Type de catégorie pour les catégories secondaires ou complémentaires (valeur "C").
- CategoryTypeSpecialOffers: Type de catégorie pour les avantages et promotions (valeur "A").

### D�claration TypeScript
```typescript
interface PublicCategory {
  Id: number;
  ParentCategoryId?: number | null;
  Label?: string | null;
  InternetFlag: boolean;
  Type?: string | null;
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

const CategoryTypeProduct = "P";
const CategoryTypeSecondary = "C";
const CategoryTypeSpecialOffers = "A";
```