## CustomerAttribute

The CustomerAttribute class represents a client attribute value in the commercial_clients_attributs table.

Public properties:
- AttributeRecordGuid (Guid): Unique identifier (GUID) of the attribute record.
- AttributeDefinitionGuid (Guid): GUID of the attribute definition.
- CustomerGuid (Guid?): GUID of the concerned customer. Nullable if the attribute is not linked to a specific customer.
- NumberValue (decimal?): Numeric value associated with the attribute, nullable.
- TextValue (string): Short text value of the attribute, nullable.
- LongTextValue (string): Long text value of the attribute, nullable.
- EnumValueId (int?): Referenced value as an enum identifier, nullable.
- BoolValue (bool?): Boolean value of the attribute, nullable.
- DateValue (DateTimeOffset?): Date value of the attribute, nullable.
- ProspectGuid (Guid?): GUID of the associated prospect, nullable.
- ListItemGuid (Guid?): GUID of the associated list item, nullable.

This class is used to store various types of values (numeric, text, boolean, date, references) related to customers or prospects for a given attribute.

### TypeScript class
```typescript
interface CustomerAttribute {
  AttributeRecordGuid: string; // GUID
  AttributeDefinitionGuid: string; // GUID
  CustomerGuid?: string | null; // GUID nullable
  NumberValue?: number | null;
  TextValue?: string | null;
  LongTextValue?: string | null;
  EnumValueId?: number | null;
  BoolValue?: boolean | null;
  DateValue?: string | null; // ISO date string nullable
  ProspectGuid?: string | null; // GUID nullable
  ListItemGuid?: string | null; // GUID nullable
}
```