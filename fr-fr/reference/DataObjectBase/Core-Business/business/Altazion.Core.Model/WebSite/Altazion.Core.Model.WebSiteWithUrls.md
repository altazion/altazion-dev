## WebSiteWithUrls

La classe `WebSiteWithUrls` représente un site web hérité de la classe `WebSite` et ajoute une liste d'URLs secondaires associées à ce site. 

Propriétés publiques :
- `SecondaryUrls` : une liste (List<WebSiteUrl>) d'objets `WebSiteUrl` représentant les URLs secondaires associées au site web.

### D�claration TypeScript
```typescript
interface WebSiteWithUrls extends WebSite {
  SecondaryUrls: WebSiteUrl[];
}

// WebSiteUrl is assumed to be defined similarly as a separate interface.
```