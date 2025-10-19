## CustomerCategoryDefinition

This class represents a commercial category definition, corresponding to the commercial_categories table. It has the following properties :

- CategoryGuid: Unique identifier (GUID) of the category.
- CategoryTypeGuid: GUID of the category type.
- Label: Label or name of the commercial category.

### TypeScript class
```typescript
interface CustomerCategoryDefinition {
  CategoryGuid: string; // GUID string
  CategoryTypeGuid: string; // GUID string
  Label: string | null;
}
```