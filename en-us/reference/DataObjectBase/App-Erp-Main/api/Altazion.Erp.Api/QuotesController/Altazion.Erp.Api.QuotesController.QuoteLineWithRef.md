## QuoteLineWithRef

The QuoteLineWithRef class represents a quote line with a product reference. It inherits from the QuoteLine class.

Public Properties:
- ProductReference: a string that holds the product reference associated with the quote line.

This property is populated from a data row, particularly from the 'art_ref' column.

### TypeScript class
```typescript
interface QuoteLineWithRef {
  ProductReference: string | null;
}
```