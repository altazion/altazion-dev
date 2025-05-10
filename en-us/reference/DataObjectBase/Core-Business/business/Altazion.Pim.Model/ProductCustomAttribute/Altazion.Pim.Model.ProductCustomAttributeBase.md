## ProductCustomAttributeBase

Represents a custom product attribute with its associated values.

Public Properties:
- AttributeGuid: Unique identifier (GUID) of the attribute.
- DecimalValue: Optional numeric (decimal) value of the attribute.
- BooleanValue: Optional boolean value of the attribute.
- TextValue: Textual (string) value of the attribute, which can come from two different columns (a shorter one and a longer one).
- DateValue: Optional date/time value (DateTimeOffset) of the attribute.

Key Methods:
- GetKey(): returns the unique key of the object via AttributeGuid.
- FromDataRow(DataRow dr): initializes properties from a data row by retrieving the corresponding values for each property.

### TypeScript class
```typescript
interface ProductCustomAttributeBase {
  AttributeGuid: string; // GUID as string
  DecimalValue?: number | null;
  BooleanValue?: boolean | null;
  TextValue?: string | null;
  DateValue?: string | null; // ISO date string or null
}
```