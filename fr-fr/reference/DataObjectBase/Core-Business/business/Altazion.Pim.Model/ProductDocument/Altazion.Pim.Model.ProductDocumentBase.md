## ProductDocumentBase

La classe `ProductDocumentBase` représente un document associé à un produit, incluant les informations de base. 

Propriétés publiques :
- `ThumbnailUrl` : URL de l'imagette associée au document.
- `Url` : URL du document.

Méthodes principales :
- `GetKey()` retourne la clé unique de l'objet, qui correspond à l'URL du document.
- `FromDataRow(DataRow dr)` initialise les propriétés de l'objet à partir d'une ligne de données, notamment en récupérant `ThumbnailUrl` et `Url` depuis les colonnes respectives de la source de données.

### D�claration TypeScript
```typescript
interface ProductDocumentBase {
  /** URL of the thumbnail image related to the document */
  ThumbnailUrl: string | null;

  /** URL of the document */
  Url: string | null;
}
```