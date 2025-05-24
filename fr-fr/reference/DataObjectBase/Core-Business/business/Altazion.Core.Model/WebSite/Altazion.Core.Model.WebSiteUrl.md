## WebSiteUrl

La classe WebSiteUrl représente une URL associée à un site web.

Propriétés publiques:
- Pk : Entier, identifiant unique de l'URL.
- SitePk : Entier, identifiant du site web associé.
- Url : Chaîne de caractères, l'URL elle-même.
- Role : Chaîne de caractères, le rôle de l'URL (par exemple principale, secondaire, etc.).

### D�claration TypeScript
```typescript
interface WebSiteUrl {
  Pk: number;
  SitePk: number;
  Url: string | null;
  Role: string | null;
}
```