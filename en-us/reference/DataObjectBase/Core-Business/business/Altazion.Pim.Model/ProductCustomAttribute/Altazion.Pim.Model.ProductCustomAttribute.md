## ProductCustomAttribute

The ProductCustomAttribute class represents a custom product attribute associated with a specific article.

- ArticleId: Unique identifier of the article linked to this attribute.
- AttributeGuid: Unique identifier of the attribute.
- DecimalValue: Numeric value of the attribute, nullable.
- BooleanValue: Boolean value of the attribute, nullable.
- TextValue: Textual value of the attribute.
- DateValue: Date value of the attribute, nullable.

### TypeScript class
```typescript
interface ProductCustomAttribute {
  ArticleId: number;
  AttributeGuid: string; // Guid as string
  DecimalValue?: number | null;
  BooleanValue?: boolean | null;
  TextValue?: string | null;
  DateValue?: string | null; // DateTimeOffset as ISO string
}
```