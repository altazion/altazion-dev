## WebSiteUrl

The WebSiteUrl class represents a URL associated with a website. It inherits from DataObjectBase, making it a data object class.

Public properties:
- Pk: unique identifier of the URL.
- SitePk: identifier of the associated website.
- Url: the URL itself.
- Role: the role of the URL, e.g., main, secondary, etc.

Important methods:
- GetKey(): returns the unique key of the object (Pk).
- FromDataRow(DataRow dr): initializes the object's properties from a data row (DataRow).

This class allows linking specific, potentially multiple, URLs to a given website with a defined role for each URL.

### TypeScript class
```typescript
interface WebSiteUrl {
  Pk: number;
  SitePk: number;
  Url: string | null;
  Role: string | null;
}
```