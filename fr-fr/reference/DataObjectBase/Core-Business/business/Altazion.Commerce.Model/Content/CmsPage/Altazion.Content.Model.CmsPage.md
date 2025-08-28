## CmsPage

La classe CmsPage représente une page du CMS e-commerce.

Propriétés publiques :
- Guid : Identifiant unique de la page (clé métier).
- SiteId : Identifiant du site auquel la page appartient.
- IsInProduction : Indique si la page est en production.
- StartDate : Date de début d'affichage de la page (nullable).
- EndDate : Date de fin d'affichage de la page (nullable).
- Url : URL de la page.
- CreationDate : Date de création de la page.
- ParentPageGuid : Identifiant de la page parente, si applicable (nullable).
- Seo : Informations SEO associées à la page, de type SeoContentBase (titre, nofollow, noindex, description).
- RootCssClass : Classe CSS racine de la page.
- PageTypeGuid : Identifiant du type de page.

Méthodes :
- GetKey() : Retourne la clé unique (Guid) de la page.
- IsActive(DateTime dt) : Indique si la page est active à la date spécifiée, en fonction des dates de début et fin d'affichage.

Cette classe dérive de DataObjectBase et est annotée comme concept SQL lié à la table ecommerce_pages dans la base Ecommerce.

### D�claration TypeScript
```typescript
interface CmsPage {
  Guid: string; // Unique identifier of the page
  SiteId: number; // Site identifier
  IsInProduction: boolean; // Indicates if the page is in production
  StartDate?: string; // Nullable start display date (ISO string format)
  EndDate?: string; // Nullable end display date (ISO string format)
  Url?: string; // Page URL
  CreationDate: string; // Creation date (ISO string format)
  ParentPageGuid?: string; // Nullable parent page identifier
  Seo: {
    PageTitle?: string;
    RobotNoFollow: boolean;
    RobotNoIndex: boolean;
    Description?: string;
  };
  RootCssClass?: string; // Root CSS class
  PageTypeGuid: string; // Page type identifier
  IsActive(dt: string): boolean;
}
```