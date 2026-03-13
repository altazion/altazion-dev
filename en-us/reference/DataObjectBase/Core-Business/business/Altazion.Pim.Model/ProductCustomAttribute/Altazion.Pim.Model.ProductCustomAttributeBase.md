## ProductCustomAttributeBase

Represents a product custom attribute with its various possible value types (numeric, boolean, textual, date, or enumerated).

Public properties:
- EnumeratedValue (int?) : Value from an enumeration. It can be null if not set.
- AttributeGuid (Guid) : Unique identifier of the attribute. This is the unique key identifying this attribute.
- DecimalValue (decimal?) : Numeric value associated with the attribute. Optional.
- BooleanValue (bool?) : Boolean value associated with the attribute. Optional.
- TextValue (string) : Textual value associated with the attribute. Optional.
- DateValue (DateTimeOffset?) : Date value associated with the attribute. Optional.

This class supports initializing its properties from a data row (DataRow) and uses AttributeGuid as the unique key of the object.

### TypeScript class
```typescript
interface ProductCustomAttributeBase {
  /** Value from an enumeration. Nullable if not set */
  EnumeratedValue?: number | null;
  /** Unique identifier of the attribute */
  AttributeGuid: string;
  /** Numeric value associated with the attribute, optional */
  DecimalValue?: number | null;
  /** Boolean value associated with the attribute, optional */
  BooleanValue?: boolean | null;
  /** Textual value associated with the attribute, optional */
  TextValue?: string | null;
  /** Date value associated with the attribute, optional */
  DateValue?: string | null; // ISO 8601 string format
}
```