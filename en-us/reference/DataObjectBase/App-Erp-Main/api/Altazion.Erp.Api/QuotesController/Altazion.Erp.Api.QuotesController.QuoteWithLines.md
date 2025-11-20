## QuoteWithLines

This class represents a quote along with its detailed lines. It inherits from the Quote class (not detailed here) and adds one public property:

- Lines: a list of QuoteLineWithRef objects, representing the quote lines with product references.

Each item in the Lines list corresponds to a detailed line of the quote, providing a complete set of details of the quote including its lines.

### TypeScript class
```typescript
interface QuoteWithLines {
  Lines: QuoteLineWithRef[]; // List of detailed quote lines with product references
}
```