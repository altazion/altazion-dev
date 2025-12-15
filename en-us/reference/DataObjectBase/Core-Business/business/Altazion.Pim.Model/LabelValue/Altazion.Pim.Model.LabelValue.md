## LabelValue

This class represents a possible value for an e-commerce label/tag.

Public properties:
- Guid: Unique global identifier for the value (type Guid).
- LabelDefinitionId: Identifier of the parent label (foreign key to LabelDefinition) (type long).
- Label: Label text of the value (type string).
- HtmlContent: Short HTML content associated with the value (type string).
- HtmlContentLong: Long HTML content associated with the value (type string).
- ImageUrl: URL of the image associated with the value (type string).

The class inherits from DataObjectBase and implements validation rules for key properties (Guid, LabelDefinitionId, Label).


### TypeScript class
```typescript
interface LabelValue {
  Guid: string; // Unique global identifier in GUID format
  LabelDefinitionId: number; // Identifier of the parent label
  Label: string; // Label text
  HtmlContent?: string | null; // Short HTML content
  HtmlContentLong?: string | null; // Long HTML content
  ImageUrl?: string | null; // URL of the associated image
}
```