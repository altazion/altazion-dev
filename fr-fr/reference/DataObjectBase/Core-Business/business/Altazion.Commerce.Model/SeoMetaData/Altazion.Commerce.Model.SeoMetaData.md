## SeoMetaData

La classe `SeoMetaData` représente les métadonnées SEO configurées pour une page du site e-commerce.

### Propriétés publiques :
- `PageTitle` : Le titre HTML de la page.
- `Keywords` : Un tableau de mots-clés SEO de la page.
- `Description` : La méta description de la page.
- `PageH1` : Le titre H1 associé à la page.
- `PageHeaderContent` : Le contenu d'en-tête additionnel HTML de la page.
- `JsonLd` : Contenu JSON-LD configuré pour la page, utilisé pour enrichir le référencement.
- `SocialMetaJson` : Configuration JSON des balises sociales (OpenGraph, TwitterCard), stockée comme chaîne JSON.
- `RobotNoIndex` : Indique si la page doit être exclue de l'indexation (robots noindex).
- `RobotNoFollow` : Indique si les robots ne doivent pas suivre les liens (nofollow).
- `RobotNoArchive` : Indique si les robots ne doivent pas mettre la page en cache (noarchive).
- `RobotNoSnippet` : Indique si les robots ne doivent pas afficher d'extrait (nosnippet).
- `RobotNoImageIndex` : Indique si les robots ne doivent pas indexer les images (noimageindex).
- `CanInheritInSubPages` : Indique si les sous-pages peuvent hériter de ces métadonnées.
- `ContentKind` : Type de contenu ciblé par les métadonnées SEO.
- `ContentId` : Identifiant du contenu ciblé.
- `Guid` : Identifiant unique de la définition SEO.
- `SiteId` : Identifiant du site concerné.

### Méthodes notables:
- `ToRobotString()` : Retourne la directive robots compilée selon les booléens définis (exemple "noindex, nofollow"), ou null si aucune restriction.

Cette classe permet ainsi de gérer de manière fine les paramètres SEO d'une page, incluant les directives pour les robots d'indexation, les métadonnées classiques, et les enrichissements spécifiques tels que JSON-LD ou balises sociales.


### D�claration TypeScript
```typescript
interface SeoMetaData {
  PageTitle?: string;
  Keywords?: string[];
  Description?: string;
  PageH1?: string;
  PageHeaderContent?: string;
  JsonLd?: string;
  SocialMetaJson?: string;
  RobotNoIndex: boolean;
  RobotNoFollow: boolean;
  RobotNoArchive: boolean;
  RobotNoSnippet: boolean;
  RobotNoImageIndex: boolean;
  CanInheritInSubPages: boolean;
  ContentKind?: string;
  ContentId?: string;
  Guid: string;  // UUID string
  SiteId: number;
}
```