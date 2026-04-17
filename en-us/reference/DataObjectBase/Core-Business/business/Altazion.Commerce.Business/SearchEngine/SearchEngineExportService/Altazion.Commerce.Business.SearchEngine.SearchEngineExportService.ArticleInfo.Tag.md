## Tag

Class representing an article tag in the context of the search engine export.

Public properties:
- tgv_html: string representing the HTML content of the tag.
- tag_ordre: nullable integer indicating the order of the tag, possibly used to sort or prioritize tags.

### TypeScript class
```typescript
interface Tag {
  tgv_html: string;
  tag_ordre?: number | null;
}
```