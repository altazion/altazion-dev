## WebSiteStaticFile

La classe WebSiteStaticFile représente un fichier statique configuré pour un site e-commerce. Ce fichier peut contenir un contenu saisi directement ou mis en cache lorsqu'il est généré automatiquement.

Propriétés publiques :
- Id : Identifiant technique unique du document (type Guid).
- TenantId : Identifiant du tenant propriétaire du document (int).
- SiteId : Identifiant du site concerné (int).
- Type : Type fonctionnel du fichier statique (string), exemples : sitemap, robots.txt, llms.txt, googleverification.
- Url : URL virtuelle du fichier dans le site (string), attendue relative au site et débutant par "~/".
- HostName : Nom d'hôte ou domaine auquel ce fichier est restreint (string, nullable). Si null, le fichier est applicable à tous les domaines.
- LanguageCode : Code langue ou culture auquel ce fichier est restreint (string, nullable). Si null, le fichier s'applique à toutes les langues.
- IsActive : Indique si ce fichier est actif (bool), par défaut true.
- IsGenerated : Indique si le contenu est produit automatiquement par un générateur (bool).
- Content : Contenu courant du fichier (string, nullable). Pour un fichier généré, il s'agit du cache du dernier rendu.
- ContentType : Type MIME du fichier publié (string, nullable).
- ContentEncoding : Nom de l'encodage du contenu publié (string, nullable).
- GeneratorClassName : Nom complet de la classe qui génère le contenu (string, nullable). La classe doit hériter de WebSiteStaticFileGeneratorBase.
- GeneratorProperties : Dictionnaire des paramètres libres transmis au générateur (Dictionary<string, string>), initialisé vide.
- Revision : Révision du document (int).
- CreatedAt : Date de création du document (DateTimeOffset), initialisé à la date UTC actuelle.
- CreatedBy : Identifiant ou nom du créateur (string, nullable).
- LastUpdated : Date de dernière mise à jour (DateTimeOffset), initialisé à la date UTC actuelle.
- LastUpdatedBy : Identifiant ou nom du dernier intervenant (string, nullable).
- LastGenerated : Date de la dernière génération effective du contenu mis en cache (DateTimeOffset?, nullable).
- LastGenerationStatus : Statut de la dernière tentative de génération (string, nullable).
- LastGenerationError : Message d'erreur de la dernière tentative de génération (string, nullable).
- LastGenerationDurationMs : Durée en millisecondes de la dernière tentative de génération (long?, nullable).

### D�claration TypeScript
```typescript
interface WebSiteStaticFile {
  id: string; // Guid
  tenantId: number;
  siteId: number;
  type: string;
  url: string;
  hostName?: string | null;
  languageCode?: string | null;
  isActive: boolean;
  isGenerated: boolean;
  content?: string | null;
  contentType?: string | null;
  contentEncoding?: string | null;
  generatorClassName?: string | null;
  generatorProperties: { [key: string]: string };
  revision: number;
  createdAt: string; // DateTimeOffset as ISO string
  createdBy?: string | null;
  lastUpdated: string; // DateTimeOffset as ISO string
  lastUpdatedBy?: string | null;
  lastGenerated?: string | null; // DateTimeOffset as ISO string or null
  lastGenerationStatus?: string | null;
  lastGenerationError?: string | null;
  lastGenerationDurationMs?: number | null;
}
```