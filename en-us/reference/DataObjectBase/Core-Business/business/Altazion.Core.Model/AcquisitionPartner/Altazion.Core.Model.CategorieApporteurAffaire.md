## CategorieApporteurAffaire

The CategorieApporteurAffaire class represents a category of business introducers in the commercial domain.

Public properties:
- Guid: Unique identifier for the acquisition category, of type Guid.
- Label: The label or name of the category, of type string.
- Kind: The kind or type of the acquisition category, of type string.

Main Methods:
- The class can initialize its properties from a DataRow.
- The unique key for the object is the Guid.
- The ToString method returns the Label of the category.

### TypeScript class
```typescript
interface CategorieApporteurAffaire {
  Guid: string; // Unique identifier
  Label: string | null; // Label of the category
  Kind: string; // Kind/type of the category
}
```