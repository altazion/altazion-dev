## ThemeRoute

Représente une règle de routage appartenant à un thème.

Propriétés publiques :
- Id : Identifiant technique unique de la route (Guid).
- ThemeId : Identifiant du thème propriétaire (Guid).
- TenantId : Identifiant du tenant propriétaire (int).
- IsActive : Indique si la route est active (bool).
- Priority : Priorité d'évaluation de la route (int).
- Match : Objet de type ThemeRouteMatch définissant la règle de matching de la route.
- Target : Objet de type ThemeRouteTarget définissant la cible de la route.
- Metadata : Métadonnées complémentaires de la route (ThemeMetadata, optionnel).

La classe dérive de NoSqlDataObjectBase.

### D�claration TypeScript
```typescript
interface ThemeRoute {
  id: string; // Guid - Technical unique identifier of the route
  themeId: string; // Guid - Identifier of the owning theme
  tenantId: number; // int - Identifier of the owning tenant
  isActive: boolean; // Indicates if the route is active
  priority: number; // int - Evaluation priority of the route
  match: ThemeRouteMatch; // Matching rule
  target: ThemeRouteTarget; // Target of the route
  metadata?: ThemeMetadata; // Optional additional metadata
}

interface ThemeRouteMatch {
  path: string;
  matchMode: ThemeRouteMatchMode;
}

interface ThemeRouteTarget {
  definitionId: string; // Guid
}

enum ThemeRouteMatchMode {
  Exact = 0,
  Template = 1,
  Regex = 2,
  Prefix = 3
}
```