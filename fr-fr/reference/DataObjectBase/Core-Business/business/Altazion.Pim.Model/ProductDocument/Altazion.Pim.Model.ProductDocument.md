## ProductDocument

Représente un document associé à un produit, incluant des informations supplémentaires.

Propriétés publiques :
- ProductGuid : Identifiant unique (GUID) du produit associé au document.
- MimeType : Type MIME du document, indiquant le format du fichier.
- SyncUrl : URL de synchronisation associée au document.
- ThumbnailUrl : URL de l'imagette associée au document (hérité de ProductDocumentBase).
- Url : URL du document (hérité de ProductDocumentBase).

### D�claration TypeScript
```typescript
interface ProductDocument {
  ProductGuid: string; // GUID as string
  MimeType: string | null;
  SyncUrl: string | null;
  ThumbnailUrl: string | null;
  Url: string | null;
}
```