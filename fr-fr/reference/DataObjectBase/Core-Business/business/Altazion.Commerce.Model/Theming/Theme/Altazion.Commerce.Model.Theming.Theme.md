## Theme

Classe représentant un thème e-commerce qui constitue la racine logique des définitions, routes et ressources partagées.

Propriétés publiques :

- Id : Identifiant technique unique du thème (Guid).
- TenantId : Identifiant du tenant propriétaire du thème (int).
- Name : Nom lisible du thème (string).
- IsActive : Booléen indiquant si le thème est actif.
- Revision : Numéro de révision de la configuration du thème (int).
- LastUpdated : Date de la dernière mise à jour de la configuration (DateTimeOffset), initialisé à la date UTC actuelle.
- Metadata : Métadonnées libres liées au thème, de type ThemeMetadata (peut être null).
- Options : Dictionnaire de paires clé/valeur (string/string) pour stocker des options de configuration spécifiques au thème.
- Assets : Liste de liens d'assets globaux associés au thème (liste de ThemeAssetLink).

Constantes définies dans la classe :

- FrontEndRuntime, avec plusieurs valeurs possibles comme none, vanilla, htmx, vue, custom.
- FrontEndBootstrap, avec les valeurs auto et manual.
- FrontEndSdkVersion avec la constante Latest.
- FrontEndSdkCdn avec les valeurs unpkg et jsdelivr.

Ces constantes servent vraisemblablement à configurer certains aspects du runtime frontend, bootstrap et SDK associés au thème.

### D�claration TypeScript
```typescript
interface Theme {
  id: string; // GUID
  tenantId: number;
  name: string;
  isActive: boolean;
  revision: number;
  lastUpdated: string; // ISO 8601 date string
  metadata?: ThemeMetadata | null;
  options: { [key: string]: string };
  assets: ThemeAssetLink[];
}

// Constants related to FrontEndRuntime environment
const FrontEndRuntime = {
  UseNone: "none",
  UseVanilla: "vanilla",
  UseHtmx: "htmx",
  UseVue: "vue",
  UseCustom: "custom"
};

const FrontEndBootstrap = {
  Auto: "auto",
  Manual: "manual"
};

const FrontEndSdkVersion = {
  Latest: "latest"
};

const FrontEndSdkCdn = {
  Unpkg: "unpkg",
  JsDeliver: "jsdelivr"
};
```