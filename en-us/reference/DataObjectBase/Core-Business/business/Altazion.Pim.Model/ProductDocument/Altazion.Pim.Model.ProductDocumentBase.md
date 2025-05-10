## ProductDocumentBase

The `ProductDocumentBase` class represents a document associated with a product, including the basic information.

Public properties:
- `ThumbnailUrl`: URL of the thumbnail associated with the document.
- `Url`: URL of the document.

Main methods:
- `GetKey()` returns the unique key of the object, which corresponds to the document URL.
- `FromDataRow(DataRow dr)` initializes the object's properties from a data row, particularly retrieving the `ThumbnailUrl` and `Url` from the source data columns.

### TypeScript class
```typescript
interface ProductDocumentBase {
  /** URL of the thumbnail image related to the document */
  ThumbnailUrl: string | null;

  /** URL of the document */
  Url: string | null;
}
```