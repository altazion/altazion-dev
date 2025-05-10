## ProductSelection

The ProductSelection class represents a product selection with its associated information.

Public properties:
- Guid: Unique identifier of the product selection.
- Code: Technical code of the product selection.
- Label: Descriptive name of the selection.
- SiteId: Optional identifier of the site associated with the selection (nullable).
- IsRuleBased: Indicates if the selection is based on automatic rules.
- IsActive: Indicates if the selection is active.
- Rules: String representing the automation rules of the selection.
- CustomUrlPart: Custom part of the URL associated with the selection.
- Group: Group to which the selection belongs.
- CreationDate: Creation date of the selection.

This class inherits from DataObjectBase and overrides internal methods to initialize its properties from a data row, as well as to get the unique key (the Guid) and return a string representation (the label).

### TypeScript class
```typescript
interface ProductSelection {
  Guid: string; // Unique identifier (UUID) of the product selection
  Code: string | null; // Code of the product selection
  Label: string | null; // Label of the product selection
  SiteId?: number | null; // Optional site identifier associated to the selection
  IsRuleBased: boolean; // Indicates whether the selection is rule based
  IsActive: boolean; // Indicates whether the selection is active
  Rules: string | null; // Automation rules associated with the selection
  CustomUrlPart: string | null; // Custom URL part associated with the selection
  Group: string | null; // Group to which the selection belongs
  CreationDate: string; // Creation date of the selection in ISO string format
}
```