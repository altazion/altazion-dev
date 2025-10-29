## PublicCategory

The PublicCategory class represents a public category (segmentation) of products visible to customers, used to organize the commercial catalog.

Public properties:
- Id: Unique identifier (primary key) of the public category.
- ParentCategoryId: Identifier of the parent category (self-reference for hierarchy), nullable.
- Label: The category label.
- InternetFlag: Flag indicating visibility on the Internet (true = visible, false = not visible).
- Type: Type of category (1-character code).
- BigImage: URL or path to the category's large image.
- Thumbnail: URL or path to the category's thumbnail image.
- Banner: URL or path to the category's banner.
- CustomUrl: Custom URL for the category (slug, permalink).
- SortLabel: Label used for alphabetical sorting.
- ExternalCode: External code of the category (for third-party integration).
- Code: Internal code of the category.
- CategoryType: Associated business category.
- Importance: Level of importance or priority of the category.
- PublicComment: Public comment visible by customers.
- Description: Description of the category.
- HtmlHeader: Custom HTML header for the category.
- ApplyHeaderToChildren: Indicates if the header should be applied to child categories.

Defined public constants:
- CategoryTypeProduct: Category type for standard products (value "P").
- CategoryTypeSecondary: Category type for secondary or complementary categories (value "C").
- CategoryTypeSpecialOffers: Category type for benefits and promotions (value "A").

### TypeScript class
```typescript
interface PublicCategory {
  Id: number;
  ParentCategoryId?: number | null;
  Label?: string | null;
  InternetFlag: boolean;
  Type?: string | null;
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

const CategoryTypeProduct = "P";
const CategoryTypeSecondary = "C";
const CategoryTypeSpecialOffers = "A";
```