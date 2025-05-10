## ProductAdditionalText

The ProductAdditionalText class represents a text associated with a product. It inherits from DataObjectBase.

Public properties:

- Guid: Unique identifier of the text.
- ProductGuid: Unique identifier of the associated product.
- TextTypeGuid: Unique identifier of the text type.
- Text: Content of the text.
- Source: Source of the text.
- Date: Date associated with the text, optional.

This class is used to store and manage additional textual information linked to a product in the system.

### TypeScript class
```typescript
interface ProductAdditionalText {
  Guid: string; // Unique identifier of the text (GUID)
  ProductGuid: string; // Unique identifier of the associated product (GUID)
  TextTypeGuid: string; // Unique identifier of the text type (GUID)
  Text: string | null; // Content of the text
  Source: string | null; // Source of the text
  Date: string | null; // Date associated with the text, ISO format or null
}
```