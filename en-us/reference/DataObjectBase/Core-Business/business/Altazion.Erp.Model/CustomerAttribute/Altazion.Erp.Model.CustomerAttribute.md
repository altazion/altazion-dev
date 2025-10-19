## CustomerAttribute

This class represents a customer attribute value, corresponding to a record in the commercial_clients_attributes table.

Public properties:

- AttributeRecordGuid: Unique identifier (GUID) of the attribute record.
- AttributeDefinitionGuid: GUID identifying the definition of the attribute.
- CustomerGuid: GUID of the concerned customer (nullable, may be null if not applicable).
- NumberValue: Numeric value of the attribute (nullable).
- TextValue: Short text value of the attribute (nullable).
- LongTextValue: Long text value of the attribute (nullable).
- EnumValueId: Numeric ID referencing an enumerated value (nullable).
- BoolValue: Boolean value of the attribute (nullable).
- DateValue: Date value (nullable).
- ProspectGuid: GUID of an associated prospect (nullable).
- ListItemGuid: GUID of an associated list item (nullable).

Each property corresponds to specific database columns and allows storing various types of data for a customer attribute.

### TypeScript class
```typescript
interface CustomerAttribute {
  AttributeRecordGuid: string; // GUID of the attribute record
  AttributeDefinitionGuid: string; // GUID of the attribute definition
  CustomerGuid?: string | null; // GUID of the customer (optional)
  NumberValue?: number | null; // Numeric value (optional)
  TextValue?: string | null; // Short text value (optional)
  LongTextValue?: string | null; // Long text value (optional)
  EnumValueId?: number | null; // Enum value ID (optional)
  BoolValue?: boolean | null; // Boolean value (optional)
  DateValue?: string | null; // Date value (ISO string) (optional)
  ProspectGuid?: string | null; // GUID of an associated prospect (optional)
  ListItemGuid?: string | null; // GUID of an associated list item (optional)
}
```