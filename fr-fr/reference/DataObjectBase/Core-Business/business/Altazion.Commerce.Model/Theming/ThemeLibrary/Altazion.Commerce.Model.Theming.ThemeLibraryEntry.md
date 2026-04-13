## ThemeLibraryEntry

Représente une entrée de catalogue dans la librairie de thèmes.

Propriétés :
- Id : Identifiant unique de l'entrée de la librairie.
- OwnerTenantId : Identifiant du tenant propriétaire de l'entrée, ou 0 si c'est une entrée globale.
- Visibility : Niveau de visibilité de l'entrée dans le catalogue (TenantPrivate ou Global).
- Code : Code fonctionnel stable de l'entrée, peut être nul.
- Name : Libellé principal de l'entrée.
- Description : Description textuelle optionnelle de l'entrée.
- IsActive : Indique si l'entrée est active dans le catalogue (par défaut true).
- DefaultVariantId : Identifiant optionnel de la déclinaison par défaut à proposer lors d'une installation.
- Variants : Liste des déclinaisons disponibles pour cette entrée.
- Screenshots : Liste des captures ou visuels de présentation de l'entrée.
- Metadata : Métadonnées éditoriales complémentaires, optionnelles.
- CreatedAt : Date et heure de création de l'entrée.
- UpdatedAt : Date et heure de la dernière mise à jour de l'entrée.

### D�claration TypeScript
```typescript
interface ThemeLibraryEntry {
  id: string; // Guid
  ownerTenantId: number;
  visibility: ThemeLibraryVisibility;
  code?: string | null;
  name: string;
  description?: string | null;
  isActive: boolean;
  defaultVariantId?: string | null; // Guid
  variants: ThemeLibraryVariant[];
  screenshots: ThemeLibraryScreenshot[];
  metadata?: ThemeMetadata | null;
  createdAt: string; // DateTimeOffset as ISO string
  updatedAt: string; // DateTimeOffset as ISO string
}

enum ThemeLibraryVisibility {
  TenantPrivate = 0,
  Global = 1
}

interface ThemeLibraryVariant {
  id: string; // Guid
  code?: string | null;
  name: string;
  description?: string | null;
  parentVariantId?: string | null; // Guid
  publishedPackageId?: string | null; // Guid
}

interface ThemeLibraryScreenshot {
  id: string; // Guid
  label?: string | null;
  url: string;
  mimeType?: string | null;
}

interface ThemeMetadata {
  // Defined elsewhere
}

```