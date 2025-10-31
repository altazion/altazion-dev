## PublicCategory

The PublicCategory class represents a public category (segmentation) of products visible to customers, used to organize the commercial catalog.

Defined constants:
- CategoryTypeProduct: category type for standard products (value "P").
- CategoryTypeSecondary: category type for secondary or complementary categories (value "C").
- CategoryTypeSpecialOffers: category type for benefits and promotions (value "A").

Public properties:
- Id: unique identifier (primary key) of the public category.
- ParentCategoryId: identifier of the parent category (self-reference for hierarchy).
- Label: category label.
- InternetFlag: flag indicating visibility on the Internet (boolean).
- Type: category type (1-character code).
- BigImage: URL or path to the large image of the category.
- Thumbnail: URL or path to the category thumbnail.
- Banner: URL or path to the category banner.
- CustomUrl: custom URL for the category (slug, permalink).
- SortLabel: label used for alphabetical sorting.
- ExternalCode: external code of the category (for third-party integrations).
- Code: internal code of the category.
- CategoryType: associated business category.
- Importance: level of importance or priority of the category.
- PublicComment: public comment visible to customers.
- Description: description of the category.
- HtmlHeader: custom HTML header for the category.
- ApplyHeaderToChildren: indicates whether the header should be applied to child categories (boolean).

### TypeScript class
```typescript
interface PublicCategory {
  Id: number;
  ParentCategoryId?: number | null;
  Label: string;
  InternetFlag: boolean;
  Type: string;
  BigImage?: string | null;
  Thumbnail?: string | null;
  Banner?: string | null;
  CustomUrl?: string | null;
  SortLabel?: string | null;
  ExternalCode?: string | null;
  Code?: string | null;
  CategoryType?: string | null;
  Importance: number;
  PublicComment?: string | null;
  Description?: string | null;
  HtmlHeader?: string | null;
  ApplyHeaderToChildren: boolean;
}
```