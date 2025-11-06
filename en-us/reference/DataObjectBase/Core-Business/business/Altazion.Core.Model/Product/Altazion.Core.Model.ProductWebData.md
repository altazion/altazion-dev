## ProductWebData

Represents web-specific data of a product for an e-commerce website in the Altazion system.

Public properties:
- PriceGroupId: Identifier of the associated price group (nullable).
- MetaDescription: Meta description used for SEO purposes.
- Keywords: Keywords for SEO.
- ProductId: Identifier of the associated product.
- SiteId: Identifier of the website.
- IsAvailable: Indicates if the product is available.
- IsWebEnabled: Indicates if the product is active on the web.
- PriceWOTax: Custom price excluding tax for this site, if different from the standard price (nullable).
- Price: Custom price including tax for this site, if different from the standard price (nullable).
- IsPublished: Indicates if the product is published on the website.
- VisibilityThreshold: Quantity threshold below which the product is no longer visible (nullable).
- AvailabilityThredshold: Quantity threshold below which the product is no longer considered available (nullable).
- Label: Custom label for the product on this site.
- Description: Custom HTML description of the product for this site.
- DiscountedPriceWOTax: Promotional price excluding tax for this site (nullable).
- DiscountedPrice: Promotional price including tax for this site (nullable).
- DiscountStartDate: Promotion start date on this site (nullable).
- DiscountEndDate: Promotion end date on this site (nullable).
- ThumbnailUrl: URL of the thumbnail image.
- IntermediateImageUrl: URL of the intermediate size image.
- SmallImageUrl: URL of the small main image.
- LargeImageUrl: URL of the large image.
- MainImageUrl: URL of the main product image.
- TinyImageUrl: URL of the tiny size image.
- IsVisibleInSearch: Indicates if the product is visible in search results.
- CustomUrlPart: Custom part of the product URL for enhanced SEO.
- SegmentationId: Identifier of the main segmentation (nullable).

The class also performs validations on price consistency and promotion dates, ensuring HT/TTc pairs are both provided, start date is before end date in promotions, and promotional prices are lower than standard prices.

### TypeScript class
```typescript
interface ProductWebData {
  PriceGroupId?: string; // Guid nullable
  MetaDescription: string | null;
  Keywords: string | null;
  ProductId: number;
  SiteId: number;
  IsAvailable: boolean;
  IsWebEnabled: boolean;
  PriceWOTax?: number | null;
  Price?: number | null;
  IsPublished: boolean;
  VisibilityThreshold?: number | null;
  AvailabilityThredshold?: number | null;
  Label: string | null;
  Description: string | null;
  DiscountedPriceWOTax?: number | null;
  DiscountedPrice?: number | null;
  DiscountStartDate?: Date | null;
  DiscountEndDate?: Date | null;
  ThumbnailUrl: string | null;
  IntermediateImageUrl: string | null;
  SmallImageUrl: string | null;
  LargeImageUrl: string | null;
  MainImageUrl: string | null;
  TinyImageUrl: string | null;
  IsVisibleInSearch: boolean;
  CustomUrlPart: string | null;
  SegmentationId?: number | null;
}
```