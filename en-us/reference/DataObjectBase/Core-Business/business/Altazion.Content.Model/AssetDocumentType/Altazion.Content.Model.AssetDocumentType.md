## AssetDocumentType

This class defines an asset document type with its structure (groups, properties, organization).

Public properties:

- TenantId: Tenant identifier.
- Id: Unique identifier for the type.
- Code: Code for API and internal use.
- Name: Internal name of the type.
- Titles: Translated names in different languages as a dictionary (key = language, value = title).
- Description: Description of the type.
- Kind: Predefined or custom type (AssetDocumentKind enum).
- Icon: Icon for the interface (name or code).
- Color: Color for the interface (hex code).
- TargetCollection: Target collection namespace for entity resolution, linking this document type to a registered entity resolver.
- RenderStorageConfiguration: Render storage configuration object.
- CreatedAt: Creation date.
- UpdatedAt: Last modification date.
- CreatedBy: Creator user identifier.
- UpdatedBy: Last modifier user identifier.
- Groups: List of group definitions for organizing assets (list of AssetDocumentGroupDefinition).
- Properties: List of custom property definitions for this type (list of AssetDocumentPropertyDefinition).
- Folders: List of virtual folder definitions for organizing documents (filtered views) (list of AssetDocumentFolderDefinition).

The associated AssetDocumentKind enumeration defines predefined asset document types: Custom, Products, WebPageContent, TechnicalDocumentation, BlogArticle, CommercialOperation, DigitalSignage.

### TypeScript class
```typescript
interface AssetDocumentType {
  TenantId: number;
  Id: string;
  Code: string;
  Name: string;
  Titles: { [language: string]: string };
  Description: string;
  Kind: AssetDocumentKind;
  Icon: string;
  Color: string;
  TargetCollection: string;
  RenderStorageConfiguration: RenderStorageConfiguration;
  CreatedAt: string; // ISO 8601 string representation of DateTimeOffset
  UpdatedAt: string;
  CreatedBy: string;
  UpdatedBy: string;
  Groups: AssetDocumentGroupDefinition[];
  Properties: AssetDocumentPropertyDefinition[];
  Folders: AssetDocumentFolderDefinition[];
}

enum AssetDocumentKind {
  Custom = 0,
  Products = 1,
  WebPageContent = 2,
  TechnicalDocumentation = 3,
  BlogArticle = 4,
  CommercialOperation = 5,
  DigitalSignage = 6
}

interface RenderStorageConfiguration {
  Provider: string;
  BasePath: string;
  Settings: { [key: string]: string };
}

interface AssetDocumentGroupDefinition {
  Code: string;
  Name: string;
  Titles: { [language: string]: string };
  Description: string;
  Order: number;
  AllowedMimeTypes: string[];
  MaxAssets?: number | null;
  IsRequired: boolean;
}

interface AssetDocumentPropertyDefinition {
  Code: string;
  Name: string;
  Titles: { [language: string]: string };
  Description: string;
  IsRequired: boolean;
  PropertyType: AssetDocumentPropertyType;
  DefaultValue: string;
  MaxLength?: number | null;
  MinValue?: number | null;
  MaxValue?: number | null;
  ValidationRegex: string;
  EnumValues: { [key: string]: string };
}

enum AssetDocumentPropertyType {
  Text = 0,
  TextArea = 1,
  Number = 2,
  Date = 3,
  Boolean = 4,
  Enum = 5
}

interface AssetDocumentFolderDefinition {
  Code: string;
  Name: string;
  Titles: { [language: string]: string };
  Description: string;
  FilterContent: string;
  Order: number;
}
```