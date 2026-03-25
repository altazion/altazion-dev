## SeoMetaData

La classe SeoMetaData représente les métadonnées SEO configurées pour une page du site dans le contexte du module Commerce. Ses propriétés publiques permettent de définir les informations SEO classiques et avancées pour une page, incluant le titre HTML, la description, les mots-clés, et des paramètres liés aux robots d'indexation.

Propriétés publiques :

- Guid : Identifiant unique de la définition SEO.
- SiteId : Identifiant du site concerné.
- ContentId : Identifiant du contenu ciblé par les métadonnées.
- ContentKind : Type de contenu ciblé par les métadonnées.
- CanInheritInSubPages : Indique si les sous-pages peuvent hériter de ces métadonnées.
- PageTitle : Titre HTML de la page.
- Keywords : Liste des mots-clés SEO.
- Description : Meta description de la page.
- PageH1 : Titre H1 associé à la page.
- PageHeaderContent : Contenu d'en-tête additionnel.
- JsonLd : Contenu JSON-LD configuré pour la page.
- RobotNoIndex : Indique si la page doit être exclue de l'indexation par les robots.
- RobotNoFollow : Indique si les robots ne doivent pas suivre les liens présents sur la page.

Cette classe inclut également une méthode de validation pour vérifier la cohérence minimale des données SEO, notamment la taille maximale des champs et la validité du JSON-LD.

### D�claration TypeScript
```typescript
interface SeoMetaData {
  Guid: string; // Unique identifier as GUID
  SiteId: number; // Site identifier
  ContentId: string | null; // Targeted content identifier
  ContentKind: string | null; // Targeted content type
  CanInheritInSubPages: boolean; // Whether subpages inherit metadata
  PageTitle: string | null; // HTML page title
  Keywords?: string[]; // SEO keywords array
  Description: string | null; // Meta description
  PageH1: string | null; // H1 title of the page
  PageHeaderContent?: string | null; // Additional header content
  JsonLd: string | null; // JSON-LD content
  RobotNoIndex: boolean; // Exclude page from indexing
  RobotNoFollow: boolean; // Prevent robots from following links
}
```