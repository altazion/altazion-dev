## TextType

The TextType class represents a complementary text type that can be associated with elements in the PIM system.

Public properties:
- Id: Unique identifier of the text type (Guid).
- CompanyId: Identifier of the associated legal entity (int).
- Code: Unique code of the text type, limited to 20 characters (string).
- Type: Type of element this text can be associated with, 3 characters (e.g., "ART" for Article) (string).
- IsEditableFromBackoffice: Indicates whether this text type is editable from the back office (bool).
- MaxLength: Maximum allowed length for this text type (int).
- IsUnique: Indicates whether this text type must be unique per element (bool).
- ProcessingClass: Name of the custom processing class (optional, max 500 characters) (string).
- ProcessingClassParameters: Parameters for the processing class in JSON or XML format (optional) (string).

### TypeScript class
```typescript
interface TextType {
  Id: string; // Guid
  CompanyId: number;
  Code: string | null;
  Type: string | null;
  IsEditableFromBackoffice: boolean;
  MaxLength: number;
  IsUnique: boolean;
  ProcessingClass: string | null;
  ProcessingClassParameters: string | null;
}
```