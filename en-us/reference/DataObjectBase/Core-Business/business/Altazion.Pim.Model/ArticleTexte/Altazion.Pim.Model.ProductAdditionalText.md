## ProductAdditionalText

Represents a text associated with a product.

Public properties:
- Guid: Unique identifier of the text.
- ProductGuid: Unique identifier of the associated product.
- TextTypeGuid: Unique identifier of the text type.
- Text: Content of the text.
- Source: Source of the text.
- Date: Date associated with the text, nullable DateTimeOffset.

### TypeScript class
```typescript
interface ProductAdditionalText {
  Guid: string; // Unique identifier of the text (GUID)
  ProductGuid: string; // Unique identifier of the associated product (GUID)
  TextTypeGuid: string; // Unique identifier of the text type (GUID)
  Text?: string | null; // Content of the text
  Source?: string | null; // Source of the text
  Date?: string | null; // Date associated with the text in ISO 8601 format
}
```