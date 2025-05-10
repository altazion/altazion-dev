## ProductDocument

Represents a document associated with a product, including additional information.

Public properties:
- ProductGuid: Unique identifier (GUID) of the product associated with the document.
- MimeType: MIME type of the document, indicating the file format.
- SyncUrl: Synchronization URL associated with the document.
- ThumbnailUrl: URL of the thumbnail image associated with the document (inherited from ProductDocumentBase).
- Url: URL of the document (inherited from ProductDocumentBase).

### TypeScript class
```typescript
interface ProductDocument {
  ProductGuid: string; // GUID as string
  MimeType: string | null;
  SyncUrl: string | null;
  ThumbnailUrl: string | null;
  Url: string | null;
}
```