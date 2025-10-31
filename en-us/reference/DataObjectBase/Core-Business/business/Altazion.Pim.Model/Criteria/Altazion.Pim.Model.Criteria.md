## Criteria

The Criteria class represents a criterion used for product classification or filtering.

Public properties:
- Guid: Unique identifier of the criterion.
- Kind: Type or category of the criterion. Required, limited to 1 character.
- AssociatedAttributeGuid: Identifier of an attribute associated with this criterion (optional).
- Name: Name or title of the criterion. Required, limited to 250 characters.
- ComplementAttributeGuid: Identifier of a complementary attribute linked to this criterion (optional).

The class validates the Kind and Name properties according to these constraints. Other properties are optional or serve as primary keys.

Key protected or public methods include OnValidate for data validation and FromDataRow to initialize the object's properties from a data row.

### TypeScript class
```typescript
interface Criteria {
  Guid: string; // Unique identifier of the criterion (GUID string)
  Kind: string; // Type or category of the criterion, required, max 1 character
  AssociatedAttributeGuid?: string | null; // Optional GUID of associated attribute
  Name: string; // Name or title of the criterion, required, max 250 characters
  ComplementAttributeGuid?: string | null; // Optional GUID of complementary attribute
}
```