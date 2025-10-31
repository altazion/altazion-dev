## ProductCustomAttributeWithDefinition

The class ProductCustomAttributeWithDefinition represents a product custom attribute along with its definition.

Public properties:

- AttributeGuid: unique identifier of the attribute (inherited from ProductCustomAttributeBase).
- DecimalValue: optional numeric value of the attribute (inherited).
- BooleanValue: optional boolean value of the attribute (inherited).
- TextValue: optional textual value of the attribute (inherited).
- DateValue: optional date value of the attribute (inherited).
- AttributeLabel: the label (descriptive name) of the attribute.
- IsPublic: boolean indicating whether the attribute is public or not.

### TypeScript class
```typescript
interface ProductCustomAttributeWithDefinition {
  AttributeGuid: string; // Guid as string
  DecimalValue?: number | null;
  BooleanValue?: boolean | null;
  TextValue?: string | null;
  DateValue?: string | null; // ISO 8601 string for DateTimeOffset
  AttributeLabel?: string | null;
  IsPublic: boolean;
}
```