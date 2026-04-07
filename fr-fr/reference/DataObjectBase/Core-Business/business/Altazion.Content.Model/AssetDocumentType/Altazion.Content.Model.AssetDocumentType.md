## AssetDocumentType

Cette classe définit un type de document d'asset avec sa structure (groupes, propriétés, organisation).

Propriétés publiques :

- TenantId : Identifiant du tenant (locataire).
- Id : Identifiant unique du type.
- Code : Code utilisé pour l'API et usage interne.
- Name : Nom interne du type.
- Titles : Noms traduits dans différentes langues sous forme de dictionnaire (clé = langue, valeur = titre).
- Description : Description du type.
- Kind : Type prédéfini ou personnalisé (énumération AssetDocumentKind).
- Icon : Icône pour l'interface (nom ou code).
- Color : Couleur de l'interface (code hexadécimal).
- TargetCollection : Namespace de la collection cible pour la résolution d'entité, liant ce type de document à un résolveur d'entité.
- RenderStorageConfiguration : Configuration de stockage pour le rendu (objet RenderStorageConfiguration).
- CreatedAt : Date de création.
- UpdatedAt : Date de dernière modification.
- CreatedBy : Identifiant de l'utilisateur créateur.
- UpdatedBy : Identifiant de l'utilisateur ayant modifié en dernier.
- Groups : Liste des définitions de groupes pour organiser les assets (liste d'AssetDocumentGroupDefinition).
- Properties : Liste des définitions de propriétés personnalisées pour ce type (liste d'AssetDocumentPropertyDefinition).
- Folders : Liste des définitions de dossiers virtuels pour organiser les documents (vues filtrées) (liste d'AssetDocumentFolderDefinition).

Énumération AssetDocumentKind associée décrit les types prédéfinis de documents d'assets : Custom, Products, WebPageContent, TechnicalDocumentation, BlogArticle, CommercialOperation, DigitalSignage.

### D�claration TypeScript
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