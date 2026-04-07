## PublicCategory

Represents a public product category (segmentation) visible to customers, used to organize the commercial catalog.

Public properties:

- Id: Unique identifier (primary key) of the public category.
- ParentCategoryId: Identifier of the parent category for hierarchical structure.
- Label: Label of the category.
- InternetFlag: Flag indicating visibility on the Internet.
- Type: Category type (1-character code).
- BigImage: URL or path of the category's large image.
- Thumbnail: URL or path of the category thumbnail.
- Banner: URL or path of the category banner.
- CustomUrl: Custom URL (slug/permalink) for the category.
- SortLabel: Label used for alphabetical sorting.
- ExternalCode: External code for third-party integrations.
- Code: Internal code of the category.
- CategoryGroup: Associated business category.
- Importance: Level of importance or priority.
- PublicComment: Public comment visible to customers.
- Description: Description of the category.
- HtmlHeader: Custom HTML header.
- ApplyHeaderToChildren: Indicates if header applies to child categories.

Constants:

- CategoryTypeProduct: Type for standard products ("P").
- CategoryTypeSecondary: Type for secondary or complementary categories ("C").
- CategoryTypeSpecialOffers: Type for offers and promotions ("A").

### TypeScript class
```typescript
interface PublicCategory {
  Id: number;
  ParentCategoryId?: number | null;
  Label: string | null;
  InternetFlag: boolean;
  Type: string | null;
  BigImage: string | null;
  Thumbnail: string | null;
  Banner: string | null;
  CustomUrl: string | null;
  SortLabel: string | null;
  ExternalCode: string | null;
  Code: string | null;
  CategoryGroup: string | null;
  Importance: number;
  PublicComment: string | null;
  Description: string | null;
  HtmlHeader: string | null;
  ApplyHeaderToChildren: boolean;
  // Constants as static readonly would be represented separately if needed
}
```