## LabelDefinition

The LabelDefinition class represents the definition of a label/tag used for e-commerce merchandising.

Public properties:
- Id: Unique identifier of the label (primary key).
- Guid: Globally unique identifier of the label.
- SiteId: Identifier of the site associated with the label.
- Code: Unique code of the label.
- Label: Label text.
- HtmlContent: HTML content associated with the label.
- Image: Binary image associated with the label.
- DisplayOrder: Display order of the label, optional.
- IsMultiValue: Indicates if the label can have multiple values.
- IsForFacetNavigation: Indicates if the label is usable for facet navigation.
- DisplayType: Display type of the label (1 character code).

Internal validation ensures presence and correctness of Guid, SiteId, Code, Label, and DisplayType fields.


### TypeScript class
```typescript
interface LabelDefinition {
  Id: number; // Unique identifier of the label (primary key)
  Guid: string; // Globally unique identifier of the label
  SiteId: number; // Identifier of the site associated to the label
  Code: string; // Unique code of the label
  Label: string; // Label name
  HtmlContent?: string | null; // HTML content associated with the label
  Image?: Uint8Array | null; // Binary image associated with the label
  DisplayOrder?: number | null; // Display order of the label
  IsMultiValue: boolean; // Whether the label can have multiple values
  IsForFacetNavigation: boolean; // Whether the label is for facet navigation
  DisplayType?: string | null; // Display type (1 character)
}

```