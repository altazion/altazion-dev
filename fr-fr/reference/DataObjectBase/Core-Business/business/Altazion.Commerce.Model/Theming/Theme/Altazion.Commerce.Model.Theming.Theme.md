## Theme

Classe représentant un thème e-commerce, qui est la racine logique des définitions, des routes et des ressources partagées au sein du thème.

Propriétés publiques :
- Id : Identifiant technique unique du thème de type Guid.
- TenantId : Identifiant du tenant propriétaire du thème, de type int.
- Name : Nom lisible du thème, de type string.
- IsActive : Indique si le thème est actif, booléen.
- Revision : Révision de la configuration du thème, de type int.
- LastUpdated : Date de dernière mise à jour de la configuration, de type DateTimeOffset, initialisée à la date UTC actuelle.
- Metadata : Métadonnées libres associées au thème, de type ThemeMetadata.
- Assets : Liste des liens d'assets globaux associés au thème, de type List<ThemeAssetLink>.

### D�claration TypeScript
```typescript
interface Theme {
  id: string; // Guid
  tenantId: number;
  name: string;
  isActive: boolean;
  revision: number;
  lastUpdated: string; // ISO 8601 date string
  metadata?: ThemeMetadata;
  assets: ThemeAssetLink[];
}

interface ThemeMetadata {
  // Define properties depending on ThemeMetadata class structure if available
}

interface ThemeAssetLink {
  id: string; // Guid
  usage: string;
  provider?: string;
  assetKey: string;
  url?: string;
  metadata?: { [key: string]: string };
}
```