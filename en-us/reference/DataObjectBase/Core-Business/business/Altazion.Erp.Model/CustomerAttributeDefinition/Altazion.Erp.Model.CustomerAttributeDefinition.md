## CustomerAttributeDefinition

This class represents the definition of a commercial attribute, corresponding to the `commercial_attributsdefinitions` table.

Public properties:
- `AttributeGuid` (Guid): Unique identifier (GUID) for the attribute definition.
- `Label` (string): The label or name of the attribute.
- `TypeCode` (string): Code representing the type of the attribute.
- `HasEnumeratedValues` (bool): Indicates whether the attribute has an enumerated list of possible values.
- `MinItems` (int?): Minimum number of selectable items for this attribute.
- `MaxItems` (int?): Maximum number of selectable items for this attribute.
- `ForCustomer` (bool): Indicates if the attribute is intended for customers.
- `ForProspect` (bool): Indicates if the attribute is intended for prospects.
- `ForList` (bool): Indicates if the attribute is intended for lists.

Key method:
- `GetKey()` returns the `AttributeGuid` as the unique key for the attribute definition.

### TypeScript class
```typescript
interface CustomerAttributeDefinition {
  AttributeGuid: string; // GUID string
  Label: string | null;
  TypeCode: string | null;
  HasEnumeratedValues: boolean;
  MinItems?: number | null;
  MaxItems?: number | null;
  ForCustomer: boolean;
  ForProspect: boolean;
  ForList: boolean;
}
```