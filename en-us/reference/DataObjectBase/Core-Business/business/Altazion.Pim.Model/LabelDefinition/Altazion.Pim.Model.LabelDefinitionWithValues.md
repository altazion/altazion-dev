## LabelDefinitionWithValues

The LabelDefinitionWithValues class represents a label (tag) definition used for e-commerce merchandising with its associated values.

It inherits from the LabelDefinition class which contains the basic properties of a label:
- Id: Unique identifier of the label (primary key).
- Guid: Global unique identifier of the label.
- SiteId: Identifier of the associated site.
- Code: Unique code of the label.
- Label: Label string.
- HtmlContent: Associated HTML content.
- Image: Binary image associated.
- DisplayOrder: Display order.
- IsMultiValue: Indicates if the label can have multiple values.
- IsForFacetNavigation: Indicates if the label is usable for facet navigation.
- DisplayType: Display type of the label.

LabelDefinitionWithValues adds the property:
- Values: a list (List<LabelValue>) of values associated with this label.

### TypeScript class
```typescript
interface LabelDefinitionWithValues {
  Id: number;
  Guid: string; // UUID string
  SiteId: number;
  Code: string;
  Label: string;
  HtmlContent: string | null;
  Image: Uint8Array | null;
  DisplayOrder?: number | null;
  IsMultiValue: boolean;
  IsForFacetNavigation: boolean;
  DisplayType: string | null;
  Values: LabelValue[];
}

interface LabelValue {
  // Properties of LabelValue must be defined elsewhere
}
```