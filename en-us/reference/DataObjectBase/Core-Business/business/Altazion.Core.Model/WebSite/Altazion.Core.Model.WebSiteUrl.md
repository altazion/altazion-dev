## WebSiteUrl

The `WebSiteUrl` class represents a URL associated with a website within the Altazion context.

Public properties:
- `Pk`: Unique identifier of the URL.
- `SitePk`: Identifier of the website associated with this URL.
- `Url`: The URL string.
- `Role`: The role of the URL, for example, main or secondary URL.

This class inherits from `DataObjectBase` and can initialize its data from a DataRow.

### TypeScript class
```typescript
interface WebSiteUrl {
  Pk: number;
  SitePk: number;
  Url: string | null;
  Role: string | null;
}
```