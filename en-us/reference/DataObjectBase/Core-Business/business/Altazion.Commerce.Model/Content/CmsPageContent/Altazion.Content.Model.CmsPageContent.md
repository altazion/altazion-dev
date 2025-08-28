## CmsPageContent

The CmsPageContent class represents content associated with a page in an e-commerce CMS. It defines and manages various properties related to that content.

Public properties:
- Guid: Unique identifier of the page content (business key), of type Guid.
- PageGuid: Identifier of the page to which this content is attached, of type Guid.
- Order: Display order of the content within the page, of type int.
- ContentKind: Type of content (e.g., text, image), of type string.
- Content: Actual content value, such as HTML text or other data, of type string.
- CustomizationLevel: Level of content customization, of type int.

Key methods:
- GetKey(): Returns the unique Guid key of the content.
- FromDataRow(DataRow): Initializes properties from a data row.
- CopyFrom<T>(CmsPageContent): Allows copying a CmsPageContent object into a new typed instance derived from CmsPageContent.

### TypeScript class
```typescript
interface CmsPageContent {
  Guid: string; // Unique identifier (Guid)
  PageGuid: string; // Identifier of the associated page (Guid)
  Order: number; // Display order
  ContentKind: string | null; // Type of content
  Content: string | null; // Content value
  CustomizationLevel: number; // Customization level
}
```