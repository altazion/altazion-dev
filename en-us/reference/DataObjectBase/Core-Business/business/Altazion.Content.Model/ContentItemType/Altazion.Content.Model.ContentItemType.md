## ContentItemType

The ContentItemType class describes a content item type.

Public properties:

- TenantId (int): Identifier of the tenant.
- Id (string): Identifier of the content type.
- IsExtern (bool): True if the items are populated by an external integration such as Altazion Commerce, a PIM solution, or data ingestion services.
- ExternAppCode (string): Id of the integration app if IsExtern is true.
- ExternAppNamespace (string): Namespace of the external app, default "local".
- IsSubType (int): True if this content is meant to be used as part of another content.
- ParentContentTypesId (Guid[]): If IsSubType=true, ids of the content types that use this one as an item.
- Name (string): Internal name of the content type.
- Titles (Dictionary<string, string>): Name of the content type in different languages (key = language, value = title).
- Columns (List<ContentItemTypeColumn>): Ordered list of all columns of the content type.
- TitleColumnCode (string): Code for the column to be used as the item's title.
- IsLocalized (bool): True if the content is localized, defaults to false.
- Versioning (VersioningStrategy): Versioning strategy, defaults to None.
- Groups (List<ContentItemTypeColumnGroup>): Ordered list of design type groups for organizing columns.

### TypeScript class
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