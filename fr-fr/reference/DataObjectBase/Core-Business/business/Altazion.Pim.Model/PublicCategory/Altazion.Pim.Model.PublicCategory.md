## PublicCategory

Représente une catégorie publique (segmentation) de produits visible par les clients, utilisée pour organiser le catalogue commercial.

Propriétés publiques:

- Id : Identifiant unique (clé primaire) de la catégorie publique.
- ParentCategoryId : Identifiant de la catégorie parente pour la hiérarchie des catégories.
- Label : Libellé de la catégorie.
- InternetFlag : Indique si la catégorie est visible sur Internet.
- Type : Type de catégorie (code à 1 caractère).
- BigImage : URL ou chemin de la grande image de la catégorie.
- Thumbnail : URL ou chemin de la vignette de la catégorie.
- Banner : URL ou chemin du bandeau de la catégorie.
- CustomUrl : URL personnalisée pour la catégorie.
- SortLabel : Libellé utilisé pour le tri alphabétique.
- ExternalCode : Code externe de la catégorie pour intégrations.
- Code : Code interne de la catégorie.
- CategoryGroup : Catégorie métier associée.
- Importance : Niveau d'importance ou de priorité.
- PublicComment : Commentaire public visible par les clients.
- Description : Description de la catégorie.
- HtmlHeader : En-tête HTML personnalisé.
- ApplyHeaderToChildren : Indique si l'en-tête doit être appliqué aux catégories enfants.

Constantes:

- CategoryTypeProduct : Type pour produits standards ("P").
- CategoryTypeSecondary : Type pour catégories secondaires ou complémentaires ("C").
- CategoryTypeSpecialOffers : Type pour avantages et promotions ("A").

### D�claration TypeScript
```typescript
interface PublicCategory {
  Id: number;
  ParentCategoryId?: number | null;
  Label: string | null;
  InternetFlag: boolean;
  Type: string | null;
  BigImage: string | null;
  Thumbnail: string | null;
  Banner: string | null;
  CustomUrl: string | null;
  SortLabel: string | null;
  ExternalCode: string | null;
  Code: string | null;
  CategoryGroup: string | null;
  Importance: number;
  PublicComment: string | null;
  Description: string | null;
  HtmlHeader: string | null;
  ApplyHeaderToChildren: boolean;
  // Constants as static readonly would be represented separately if needed
}
```