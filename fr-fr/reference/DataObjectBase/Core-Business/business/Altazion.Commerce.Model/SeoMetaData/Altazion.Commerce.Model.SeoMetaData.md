## SeoMetaData

La classe SeoMetaData représente les métadonnées SEO configurées pour une page du site web au sein du système Altazion. Elle permet de stocker et gérer diverses propriétés SEO telles que le titre de la page, la description, les mots-clés, ainsi que des paramètres spécifiques pour les robots d'indexation et les réseaux sociaux.

Propriétés publiques :
- Guid : Identifiant unique de la définition SEO.
- SiteId : Identifiant du site concerné.
- ContentId : Identifiant du contenu ciblé.
- ContentKind : Type de contenu ciblé par les métadonnées.
- CanInheritInSubPages : Indique si les métadonnées peuvent être héritées par les sous-pages.
- PageTitle : Titre HTML de la page.
- Keywords : Tableau des mots-clés SEO.
- Description : Meta description de la page.
- PageH1 : Titre H1 associé à la page.
- PageHeaderContent : Contenu d'en-tête additionnel HTML pour la page.
- JsonLd : Contenu JSON-LD structuré configuré pour la page.
- SocialMetaJson : Configuration JSON pour les balises sociales telles qu'OpenGraph et TwitterCard.
- RobotNoIndex : Indique si la page doit être exclue de l'indexation.
- RobotNoFollow : Indique si les robots ne doivent pas suivre les liens.
- RobotNoArchive : Indique si les robots ne doivent pas mettre la page en cache.
- RobotNoSnippet : Indique si les robots ne doivent pas afficher d'extrait.
- RobotNoImageIndex : Indique si les robots ne doivent pas indexer les images.

Méthode importante :
- ToRobotString() : Retourne une chaîne correspondant à la directive robots basée sur les différentes propriétés booléennes.

Cette classe dérive de DataObjectBase et est utilisée pour manipuler et valider les métadonnées SEO dans le contexte du commerce chez Altazion.

### D�claration TypeScript
```typescript
interface SeoMetaData {
  Guid: string; // Unique identifier (GUID) of the SEO definition
  SiteId: number; // Identifier of the site
  ContentId: string | null; // Identifier of the targeted content
  ContentKind: string | null; // Type of the content
  CanInheritInSubPages: boolean; // Indicates if metadata can be inherited by subpages
  PageTitle: string | null; // HTML title of the page
  Keywords?: string[]; // SEO keywords array
  Description: string | null; // Meta description
  PageH1: string | null; // H1 title of the page
  PageHeaderContent: string | null; // Additional HTML header content
  JsonLd: string | null; // JSON-LD structured content
  SocialMetaJson: string | null; // JSON configuration for social meta tags
  RobotNoIndex: boolean; // Robots noindex directive
  RobotNoFollow: boolean; // Robots nofollow directive
  RobotNoArchive: boolean; // Robots noarchive directive
  RobotNoSnippet: boolean; // Robots nosnippet directive
  RobotNoImageIndex: boolean; // Robots noimageindex directive
}
```