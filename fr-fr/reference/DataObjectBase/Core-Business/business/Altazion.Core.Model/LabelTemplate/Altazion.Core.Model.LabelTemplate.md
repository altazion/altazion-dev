## LabelTemplate

La classe LabelTemplate représente un template d'étiquette destiné à une technologie d'impression, un format d'étiquette et un namespace de données spécifiques.

Propriétés publiques :
- TemplateGuid : Identifiant unique du template de type Guid.
- Code : Code métier du template de type string.
- Label : Libellé du template de type string.
- FormatGuid : Identifiant du format d'étiquette associé de type Guid.
- Technology : Technologie d'impression cible de type string.
- DataNamespace : Namespace de la donnée à imprimer de type string.
- Content : Contenu brut du template de type string.
- DesignerContent : Contenu du designer associé au template de type string, peut être null.
- IsArchived : Indique si le template est archivé de type bool.
- LastUpdate : Date de dernière mise à jour du template de type DateTimeOffset?, nullable.

Cette classe sert à stocker et manipuler les informations relatives aux templates d'étiquettes utilisés dans la solution Altazion, permettant de gérer les formats, technologies et données à imprimer associées.

### D�claration TypeScript
```typescript
interface LabelTemplate {
  TemplateGuid: string; // Unique identifier of the template (GUID)
  Code: string; // Business code of the template
  Label: string; // Label of the template
  FormatGuid: string; // Identifier of the label format associated (GUID)
  Technology: string; // Target printing technology
  DataNamespace: string; // Namespace of the data to print
  Content: string; // Raw content of the template
  DesignerContent: string | null; // Content of the designer associated with the template, nullable
  IsArchived: boolean; // Indicates if the template is archived
  LastUpdate?: string | null; // Date of last update, ISO string or null
}
```