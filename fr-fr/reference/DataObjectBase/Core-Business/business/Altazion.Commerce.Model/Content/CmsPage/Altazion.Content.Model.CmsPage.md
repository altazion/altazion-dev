## CmsPage

La classe CmsPage représente une page du CMS e-commerce.

Propriétés publiques :
- Guid : Identifiant unique de la page (Guid).
- SiteId : Identifiant du site auquel la page appartient (int).
- IsInProduction : Indique si la page est en production (bool).
- StartDate : Date de début d'affichage de la page (DateTimeOffset?).
- EndDate : Date de fin d'affichage de la page (DateTimeOffset?).
- Url : URL de la page (string).
- CreationDate : Date de création de la page (DateTimeOffset).
- ParentPageGuid : Identifiant de la page parente, si applicable (Guid?).
- Seo : Informations SEO associées à la page (SeoContentBase).
- RootCssClass : Classe CSS racine de la page (string).
- PageTypeGuid : Identifiant du type de page (Guid).

Méthode publique :
- IsActive(DateTimeOffset dt) : Indique si la page est active à la date spécifiée. Renvoie true si la date est dans la plage d'affichage, sinon false.

### D�claration TypeScript
```typescript
interface CmsPage {
  Guid: string; // Unique identifier of the page
  SiteId: number; // Identifier of the site
  IsInProduction: boolean; // Production status
  StartDate?: string | null; // Nullable start display date (ISO string)
  EndDate?: string | null; // Nullable end display date (ISO string)
  Url?: string | null; // Page URL
  CreationDate: string; // Creation date (ISO string)
  ParentPageGuid?: string | null; // Nullable parent page identifier
  Seo: SeoContentBase; // SEO metadata
  RootCssClass?: string | null; // CSS root class
  PageTypeGuid: string; // Identifier of page type
  IsActive(dt: string): boolean; // Method to check if page is active at given date (ISO string)
}

interface SeoContentBase {
  PageTitle?: string | null;
  RobotNoFollow: boolean;
  RobotNoIndex: boolean;
  Description?: string | null;
}
```