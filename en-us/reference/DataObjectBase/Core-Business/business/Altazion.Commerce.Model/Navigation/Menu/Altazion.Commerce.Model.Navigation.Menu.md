## Menu

The `Menu` class represents an editorial menu stored in MongoDB. It has the following public properties:

- `Id` (Guid): Technical unique identifier of the menu.
- `TenantId` (int): Identifier of the tenant who owns the menu.
- `ThemeId` (Guid): Identifier of the associated theme.
- `Code` (string): Optional functional code for the menu.
- `Name` (string): Readable name of the menu.
- `IsActive` (bool): Indicates if the menu is active (default true).
- `Revision` (int): Revision number of the menu document.
- `LastUpdated` (DateTimeOffset): Date of the last update of the menu, initialized to current UTC date.
- `Metadata` (Dictionary<string, string>): Free metadata associated with the menu.
- `Nodes` (List<MenuNode>): List of root nodes forming the menu tree.

The class uses the `MongoDbDataConcept` attribute to designate its MongoDB collection "Menu" in the "Commerce" module and uses `BsonIgnoreExtraElements` to ignore extra elements in the DB document.

### TypeScript class
```typescript
export interface Menu {
  id: string; // Guid
  tenantId: number;
  themeId: string; // Guid
  code?: string | null;
  name: string;
  isActive: boolean;
  revision: number;
  lastUpdated: string; // ISO Date string
  metadata: { [key: string]: string };
  nodes: MenuNode[];
}

export interface MenuNode {
  id: string; // Guid
  code?: string | null;
  label: string;
  description?: string | null;
  targetUrl?: string | null;
  imageUrl?: string | null;
  order: number;
  isActive: boolean;
  metadata: { [key: string]: string };
  children: MenuNode[];
}
```