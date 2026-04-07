## ThemeRoute

Represents a routing rule belonging to a theme.

Public Properties:
- Id: Technical unique identifier of the route (Guid).
- ThemeId: Identifier of the owning theme (Guid).
- TenantId: Identifier of the owning tenant (int).
- IsActive: Indicates if the route is active (bool).
- Priority: Evaluation priority of the route (int).
- Match: Object of type ThemeRouteMatch defining the matching rule of the route.
- Target: Object of type ThemeRouteTarget defining the target of the route.
- Metadata: Additional metadata for the route (ThemeMetadata, optional).

The class inherits from NoSqlDataObjectBase.

### TypeScript class
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