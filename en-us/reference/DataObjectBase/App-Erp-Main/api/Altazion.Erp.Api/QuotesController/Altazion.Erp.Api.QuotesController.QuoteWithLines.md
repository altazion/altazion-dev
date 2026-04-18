## QuoteWithLines

The QuoteWithLines class inherits from Quote and represents a quote enriched with its associated lines.

Properties:
- Lines: A list of QuoteLineWithRef representing the lines of the quote. Each line includes details about the products associated with the quote, including a product reference.

### TypeScript class
```typescript
interface QuoteWithLines extends Quote {
    Lines: QuoteLineWithRef[];
}
```