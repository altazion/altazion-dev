## Menu

La classe `Menu` représente un menu éditorial stocké dans MongoDB. Elle contient plusieurs propriétés publiques :

- `Id` (Guid) : Identifiant technique unique du menu.
- `TenantId` (int) : Identifiant du tenant propriétaire du menu.
- `ThemeId` (Guid) : Identifiant du thème associé au menu.
- `Code` (string) : Code fonctionnel optionnel du menu.
- `Name` (string) : Nom lisible du menu.
- `IsActive` (bool) : Indique si le menu est actif (par défaut true).
- `Revision` (int) : Révision du document de menu.
- `LastUpdated` (DateTimeOffset) : Date de dernière mise à jour du menu, initialisée à la date UTC actuelle.
- `Metadata` (Dictionary<string, string>) : Métadonnées libres associées au menu.
- `Nodes` (List<MenuNode>) : Liste des noeuds racines composant l'arborescence du menu.

La classe utilise l'attribut `MongoDbDataConcept` pour indiquer son enracinement dans la collection MongoDB "Menu" du module "Commerce", et ignore les éléments supplémentaires non définis en base grâce à `BsonIgnoreExtraElements`.

### D�claration TypeScript
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