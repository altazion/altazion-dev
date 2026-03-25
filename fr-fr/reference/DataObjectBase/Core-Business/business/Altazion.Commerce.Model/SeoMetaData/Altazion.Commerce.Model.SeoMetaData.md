## SeoMetaData

La classe `SeoMetaData` représente les métadonnées SEO configurées pour une page du site e-commerce.

### Propriétés publiques :

- `PageTitle` : Obtient ou définit le titre HTML de la page.
- `Keywords` : Obtient ou définit les mots-clés SEO de la page sous forme de tableau de chaînes.
- `Description` : Obtient ou définit la méta description de la page.
- `PageH1` : Obtient ou définit le titre H1 associé à la page.
- `PageHeaderContent` : Obtient ou définit un contenu d'en-tête additionnel de la page.
- `JsonLd` : Obtient ou définit un contenu JSON-LD configuré pour la page, utilisé pour des données structurées.
- `SocialMetaJson` : Obtient ou définit la configuration JSON des balises sociales (OpenGraph, TwitterCard) au format JSON.
- `RobotNoIndex` : Indique si la page doit être exclue de l'indexation par les robots.
- `RobotNoFollow` : Indique si les robots ne doivent pas suivre les liens sur la page.
- `CanInheritInSubPages` : Indique si les sous-pages peuvent hériter de ces métadonnées SEO.
- `ContentKind` : Le type de contenu ciblé par ces métadonnées (exemple : type de page).
- `ContentId` : L'identifiant du contenu ciblé.
- `Guid` : Identifiant unique de la définition SEO.
- `SiteId` : Identifiant du site concerné.

La classe charge ses données à partir d'une ligne SQL et parse notamment des directives robots (noindex, nofollow). Elle effectue aussi des validations sur la cohérence et les formats de ses propriétés.


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
  CanInheritInSubPages: boolean;
  ContentKind?: string;
  ContentId?: string;
  Guid: string; // Guid as string
  SiteId: number;
}
```