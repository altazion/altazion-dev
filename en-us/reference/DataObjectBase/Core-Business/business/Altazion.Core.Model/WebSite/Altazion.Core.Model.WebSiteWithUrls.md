## WebSiteWithUrls

The `WebSiteWithUrls` class represents a website inheriting from the `WebSite` class and adds a list of secondary URLs associated with this website.

Public properties:
- `SecondaryUrls`: a list (List<WebSiteUrl>) of `WebSiteUrl` objects representing the secondary URLs associated with the website.

### TypeScript class
```typescript
interface WebSiteWithUrls extends WebSite {
  SecondaryUrls: WebSiteUrl[];
}

// WebSiteUrl is assumed to be defined similarly as a separate interface.
```