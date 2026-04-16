## LabelTemplate

The LabelTemplate class represents a label template for a specified printing technology, label format, and data namespace.

Public properties:
- TemplateGuid: Unique identifier of the template of type Guid.
- Code: Business code of the template of type string.
- Label: Label name of the template of type string.
- FormatGuid: Identifier of the associated label format of type Guid.
- Technology: Target printing technology of type string.
- DataNamespace: Namespace of the data to print of type string.
- Content: Raw content of the template of type string.
- DesignerContent: Content from the designer associated with the template of type string, nullable.
- IsArchived: Indicates if the template is archived of type bool.
- LastUpdate: Date of the last update of the template of type DateTimeOffset?, nullable.

This class is used to store and manage label template information within the Altazion solution, enabling management of formats, technologies, and data to be printed.

### TypeScript class
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