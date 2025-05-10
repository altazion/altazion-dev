## ProductCustomAttributeWithDefinition

The ProductCustomAttributeWithDefinition class represents a product's custom attribute by extending ProductCustomAttributeBase, adding the attribute's definition.

Public properties:
- AttributeGuid: unique identifier of the attribute (inherited).
- DecimalValue: numeric value associated with the attribute (inherited).
- BooleanValue: boolean value associated with the attribute (inherited).
- TextValue: textual value associated with the attribute (inherited).
- DateValue: date value associated with the attribute (inherited).
- AttributeLabel: the label of the attribute, providing a human-readable description.
- IsPublic: a boolean indicating whether the attribute is public.

### TypeScript class
```typescript
interface ProductCustomAttributeWithDefinition {
  attributeGuid: string; // GUID string
  decimalValue?: number | null;
  booleanValue?: boolean | null;
  textValue?: string | null;
  dateValue?: string | null; // ISO date string or null
  attributeLabel?: string | null;
  isPublic: boolean;
}
```