## WebSiteUrl

La classe `WebSiteUrl` représente une URL associée à un site web dans le contexte Altazion.

Propriétés publiques :
- `Pk` : Identifiant unique de l'URL.
- `SitePk` : Identifiant du site web auquel l'URL est associée.
- `Url` : La chaîne de caractères contenant l'URL.
- `Role` : Le rôle de l'URL, par exemple si c'est une URL principale ou secondaire.

Cette classe dérive de `DataObjectBase` et permet de charger ses données depuis une ligne de données (DataRow).

### D�claration TypeScript
```typescript
interface WebSiteUrl {
  Pk: number;
  SitePk: number;
  Url: string | null;
  Role: string | null;
}
```