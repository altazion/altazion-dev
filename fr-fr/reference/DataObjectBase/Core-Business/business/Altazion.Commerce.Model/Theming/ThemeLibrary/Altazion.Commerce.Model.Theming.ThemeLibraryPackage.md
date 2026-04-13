## ThemeLibraryPackage

La classe ThemeLibraryPackage représente un package publié dans la librairie de thèmes. Un package est un ensemble regroupé dans un zip contenant le thème, ses versions, ses variantes et les ressources associées destinées à la publication et à l'installation.

Propriétés publiques :
- Id : Identifiant unique du package (Guid).
- EntryId : Identifiant de l'entrée de catalogue à laquelle appartient le package.
- OwnerTenantId : Identifiant du tenant propriétaire du package, 0 pour le catalogue global.
- Visibility : Visibilité du package dans le catalogue (TenantPrivate ou Global).
- VariantId : Identifiant optionnel de la déclinaison couverte par le package.
- Version : Version lisible du package.
- SourceThemeId : Identifiant du thème source utilisé pour produire le package.
- SourceThemeRevision : Révision du thème source au moment de la publication.
- BlobPath : Chemin technique du fichier zip dans le stockage blob.
- BlobUrl : URL du zip publié si disponible.
- IsActive : Indique si le package est encore actif et proposé.
- ContainsMenus : Indique si le package contient des menus.
- AssetCount : Nombre d'assets embarqués dans le package.
- ManifestHash : Empreinte de contrôle du package publié.
- Notes : Notes éventuelles sur la publication.
- PublishedBy : Identité de l'auteur de la publication.
- PublishedAt : Date de publication du package.

Cette classe est dérivée de NoSqlDataObjectBase et correspond à un document stocké en base NoSQL.


### D�claration TypeScript
```typescript
interface ThemeLibraryPackage {
  id: string; // Unique identifier of the package (GUID)
  entryId: string; // Catalog entry this package belongs to (GUID)
  ownerTenantId: number; // Tenant owner ID, or 0 for global catalog
  visibility: 'TenantPrivate' | 'Global'; // Visibility of the package
  variantId?: string | null; // Optional variant ID covered by the package
  version: string; // Human-readable version string
  sourceThemeId: string; // Source theme ID used to create the package
  sourceThemeRevision: number; // Source theme revision number
  blobPath: string; // Blob storage path of the zip file
  blobUrl?: string | null; // Optional URL of the published zip
  isActive: boolean; // Indicates if the package is active
  containsMenus: boolean; // Whether the package contains menus
  assetCount: number; // Number of embedded assets
  manifestHash?: string | null; // Checksum of the package
  notes?: string | null; // Optional notes about the package
  publishedBy?: string | null; // Publisher identity
  publishedAt: string; // Publication date - ISO 8601 string
}
```