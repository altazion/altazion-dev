## CmsPage

La classe CmsPage représente une page du CMS e-commerce. Elle contient les propriétés suivantes :

- Guid : Identifiant unique de la page (clé métier).
- SiteId : Identifiant du site auquel la page appartient.
- IsInProduction : Indique si la page est en production.
- StartDate : Date de début d'affichage de la page (optionnelle).
- EndDate : Date de fin d'affichage de la page (optionnelle).
- Url : URL de la page.
- CreationDate : Date de création de la page.
- ParentPageGuid : Identifiant de la page parente, si applicable.
- Seo : Informations SEO associées à la page (objet SeoMetaData).
- RootCssClass : Classe CSS racine de la page.
- PageTypeGuid : Identifiant du type de page.

La classe propose également une méthode IsActive(DateTimeOffset dt) qui indique si la page est active à une date spécifiée, en tenant compte des dates de début et de fin d'affichage.

Chaque propriété publique correspond à une caractéristique essentielle gestionnaire de la page dans le CMS, notamment pour la publication, l'affichage, le référencement naturel et la structuration interne (pages parentes et types de page).

### D�claration TypeScript
```typescript
interface CmsPage {
  Guid: string; // Unique identifier (UUID)
  SiteId: number; // Site identifier
  IsInProduction: boolean; // Is the page in production
  StartDate?: string; // Nullable, display start date in ISO format
  EndDate?: string; // Nullable, display end date in ISO format
  Url?: string; // URL of the page
  CreationDate: string; // Creation date in ISO format
  ParentPageGuid?: string; // Nullable parent page GUID
  Seo: SeoMetaData; // SEO metadata object
  RootCssClass?: string; // Root CSS class
  PageTypeGuid: string; // Page type GUID
  IsActive(dt: string): boolean; // Method to check if active at given DateTime
}

interface SeoMetaData {
  PageTitle?: string;
  RobotNoFollow: boolean;
  RobotNoIndex: boolean;
  Description?: string;
}
```