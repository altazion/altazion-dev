## WebSiteUrl

The WebSiteUrl class represents a URL associated with a website.

Public properties:
- Pk: Integer, unique identifier of the URL.
- SitePk: Integer, identifier of the associated website.
- Url: String, the URL itself.
- Role: String, the role of the URL (e.g., primary, secondary, etc.).

### TypeScript class
```typescript
interface WebSiteUrl {
  Pk: number;
  SitePk: number;
  Url: string | null;
  Role: string | null;
}
```