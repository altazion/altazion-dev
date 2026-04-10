## Theme

Représente un thème e-commerce, racine logique des définitions, routes et ressources partagées.

Propriétés publiques :
- Id (Guid) : Identifiant technique du thème.
- TenantId (int) : Identifiant du tenant propriétaire du thème.
- Name (string) : Nom lisible du thème.
- IsActive (bool) : Indique si le thème est actif.
- Revision (int) : Révision de configuration du thème.
- LastUpdated (DateTimeOffset) : Date de dernière mise à jour de la configuration.
- Metadata (ThemeMetadata) : Métadonnées libres du thème.
- Options (Dictionary<string, string>) : Options de configuration spécifiques du thème, pour stocker des paramètres.
- LibraryReference (ThemeLibraryReference) : Référence éventuelle vers un package de la librairie standard dont ce thème est issu.
- Assets (List<ThemeAssetLink>) : Liens d'assets globaux associés au thème.
- SharedSections (List<ThemeSharedSection>) : Sections partagées réutilisables par les pages du thème.

Constantes définies dans la classe :
- FrontEndRuntime : clé pour indiquer le runtime frontend utilisé.
- FrontEndRuntimeUseNone, FrontEndRuntimeUseVanilla, FrontEndRuntimeUseHtmx, FrontEndRuntimeUseVue, FrontEndRuntimeUseCustom : valeurs possibles pour le runtime frontend.
- FrontEndBootstrap : clé pour la configuration bootstrap frontend.
- FrontEndBootstrapAuto, FrontEndBootstrapManual : valeurs possibles pour bootstrap.
- FrontEndSdkVersion : clé pour la version du SDK frontend.
- FrontEndSdkVersionLatest : valeur indiquant la dernière version.
- FrontEndSdkCdn : clé pour le CDN du SDK.
- FrontEndSdkCdnUnpkg, FrontEndSdkCdnJsDeliver : valeurs possibles des CDN.


### D�claration TypeScript
```typescript
interface Theme {
  id: string; // GUID - Technical identifier of the theme
  tenantId: number; // Identifier of the tenant owner
  name: string; // Readable name of the theme
  isActive: boolean; // Whether the theme is active
  revision: number; // Configuration revision number
  lastUpdated: string; // ISO string date for last update
  metadata?: ThemeMetadata; // Optional free metadata
  options: { [key: string]: string }; // Configuration options dictionary
  libraryReference?: ThemeLibraryReference; // Optional reference to standard library package
  assets: ThemeAssetLink[]; // List of global asset links
  sharedSections?: ThemeSharedSection[]; // Optional list of reusable shared sections
}

// Constants for runtime and bootstrap can be defined as enums or constants in TS as needed.
```