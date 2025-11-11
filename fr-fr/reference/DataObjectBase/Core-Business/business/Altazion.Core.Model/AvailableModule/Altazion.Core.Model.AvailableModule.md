## AvailableModule

La classe AvailableModule représente un module de fonctionnalité disponible dans le système Altazion. Un module disponible peut être installé ou non et contient les métadonnées nécessaires pour son installation et sa gestion.

Propriétés publiques :
- Guid : identifiant unique du module disponible.
- Url : URL associée au module (pour téléchargement ou accès).
- Label : libellé du module.
- Category : catégorie du module.
- Description : description du module.
- IsPublic : indique si le module est public (visible par tous les utilisateurs autorisés) ou non (usage spécifique ou interne).
- XmlData : données XML du module contenant ses métadonnées et configuration.
- Version : version du module.

### D�claration TypeScript
```typescript
interface AvailableModule {
  Guid: string; // Unique identifier (GUID) of the available module
  Url?: string; // URL for download or access
  Label?: string; // Label of the module
  Category?: string; // Category of the module
  Description?: string; // Description of the module
  IsPublic: boolean; // Indicates if the module is public
  XmlData?: string; // XML metadata and configuration data
  Version?: string; // Version of the module
}
```