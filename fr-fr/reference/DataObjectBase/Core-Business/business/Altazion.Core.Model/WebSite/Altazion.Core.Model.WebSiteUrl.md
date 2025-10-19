## WebSiteUrl

La classe WebSiteUrl représente une URL associée à un site web. Elle dérive de DataObjectBase, ce qui en fait une classe de données.

Propriétés publiques :
- Pk : identifiant unique de l'URL.
- SitePk : identifiant du site web associé.
- Url : l'URL elle-même.
- Role : le rôle de l'URL, par exemple principale, secondaire, etc.

Méthodes importantes :
- GetKey() : retourne la clé unique de l'objet (Pk).
- FromDataRow(DataRow dr) : initialise les propriétés de l'objet à partir d'une ligne de données (DataRow).

Cette classe permet de lier des URLs spécifiques, potentiellement multiples, à un site web donné avec un rôle défini pour chaque URL.

### D�claration TypeScript
```typescript
interface WebSiteUrl {
  Pk: number;
  SitePk: number;
  Url: string | null;
  Role: string | null;
}
```