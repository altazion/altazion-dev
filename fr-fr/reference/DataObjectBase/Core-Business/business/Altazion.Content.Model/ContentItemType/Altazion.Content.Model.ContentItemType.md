## ContentItemType

La classe ContentItemType décrit un type d'élément de contenu.

Propriétés publiques :

- TenantId (int) : Identifiant du locataire.
- Id (string) : Identifiant du type de contenu.
- IsExtern (bool) : Indique si les éléments sont alimentés par une intégration externe telle que Altazion Commerce, une solution PIM, ou des services d'ingestion de données.
- ExternAppCode (string) : Code de l'application d'intégration externe si IsExtern est vrai.
- ExternAppNamespace (string) : Namespace de l'application externe, par défaut "local".
- IsSubType (int) : Indique si ce contenu est destiné à être utilisé comme partie d'un autre contenu.
- ParentContentTypesId (Guid[]) : Si IsSubType = true, les identifiants des types de contenu qui utilisent ce type comme élément.
- Name (string) : Nom interne du type de contenu.
- Titles (Dictionary<string, string>) : Noms du type de contenu dans différentes langues (clé = langue, valeur = titre).
- Columns (List<ContentItemTypeColumn>) : Liste ordonnée de toutes les colonnes du type de contenu.
- TitleColumnCode (string) : Code de la colonne utilisée comme titre de l'élément.
- IsLocalized (bool) : Indique si le contenu est localisé, par défaut faux.
- Versioning (VersioningStrategy) : Stratégie de versionnage utilisée, par défaut None.
- Groups (List<ContentItemTypeColumnGroup>) : Liste ordonnée des groupes de colonnes pour organiser les colonnes dans le design.

### D�claration TypeScript
```typescript
interface ContentItemType {
  TenantId: number;
  Id: string;
  IsExtern: boolean;
  ExternAppCode: string;
  ExternAppNamespace: string;
  IsSubType: number;
  ParentContentTypesId: string[]; // Guid as string array
  Name: string;
  Titles: { [language: string]: string };
  Columns: ContentItemTypeColumn[];
  TitleColumnCode: string;
  IsLocalized: boolean;
  Versioning: VersioningStrategy;
  Groups: ContentItemTypeColumnGroup[];
}

enum VersioningStrategy {
  None = 0,
  Draft = 1,
  Branches = 2
}

interface ContentItemTypeColumn {
  Code: string;
  RepeatableSourceKind?: RepeatableSourceKind | null;
  RepeatableCodeTemplate: string;
  Name: string;
  Titles: { [language: string]: string };
  HelpMessages: { [language: string]: string };
  DataType: DataColumnType;
  DataTypeDetails: string;
  IsMandatory: boolean;
  IsStandard: boolean;
  IsComputed: boolean;
  Expression: string;
  ValidationConstraint: string;
  IsLocalized: boolean;
  MinOccurs: number;
  MaxOccurs: number;
  MaxLength?: number | null;
  MaxValue?: number | null;
  MinValue?: number | null;
  IsUniqueConstrained: boolean;
  DefaultValue: string;
  AvailableOn?: string[] | null;
  ExternAppCode: string;
  ExternAppService: string;
  ExternAppReference: string;
}

enum RepeatableSourceKind {
  SalesChannel = 0
}

interface ContentItemTypeColumnGroup {
  Name: string;
  Titles: { [language: string]: string };
  HelpMessages: { [language: string]: string };
  Columns: string[];
}

// Note: DataColumnType should be defined elsewhere as enum or type.
```