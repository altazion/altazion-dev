## QuoteLineWithRef

The class QuoteLineWithRef extends the QuoteLine class and represents a quote line including an additional product reference.

Public properties:
- ProductReference: string, the product reference associated with the quote line.

This class also overrides the FromDataRow method to initialize the ProductReference property from the "art_ref" column in a DataRow.

### TypeScript class
```typescript
interface QuoteLineWithRef extends QuoteLine {
  ProductReference?: string;
}
```