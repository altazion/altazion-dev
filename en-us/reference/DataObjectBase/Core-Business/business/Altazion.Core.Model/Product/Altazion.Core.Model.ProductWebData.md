## ProductWebData

The ProductWebData class represents the web-related data of a product in the Altazion system. It includes various properties related to product availability, customized pricing, promotions, images, and SEO metadata for a product on a specific website.

Public properties:

- PriceGroupId: Optional identifier for the price group (Guid?).
- MetaDescription: SEO meta description (string).
- Keywords: SEO keywords (string).
- ProductId: Unique identifier of the product (long).
- SiteId: Identifier of the website the product belongs to (int).
- IsAvailable: Indicates whether the product is available (bool).
- IsWebEnabled: Indicates if the product is enabled on the web (bool).
- PriceWOTax: Customized price excluding tax, optional (decimal?).
- Price: Customized price including tax, optional (decimal?).
- IsPublished: Indicates if the product is published (bool).
- VisibilityThreshold: Quantity threshold to control visibility (decimal?).
- AvailabilityThredshold: Quantity availability threshold (decimal?).
- Label: Product name or label (string).
- Description: HTML description of the product (string).
- DiscountedPriceWOTax: Promotional price excluding tax, optional (decimal?).
- DiscountedPrice: Promotional price including tax, optional (decimal?).
- DiscountStartDate: Promotion start date (DateTime?).
- DiscountEndDate: Promotion end date (DateTime?).
- ThumbnailUrl: URL for thumbnail image (string).
- IntermediateImageUrl: URL for intermediate image (string).
- SmallImageUrl: URL to a small image (string).
- LargeImageUrl: URL to a large image (string).
- MainImageUrl: URL of the main image (string).
- TinyImageUrl: URL of a tiny image (string).
- IsVisibleInSearch: Indicates if the product is visible in search results (bool).
- CustomUrlPart: Customized part of the product's URL (string).
- SegmentationId: Applicable segmentation identifier (decimal?).

The class validates the consistency of price fields (tax excluded and included), promotion fields (prices and dates), and ensures the promotion end date is after the start date. It also checks that promotional prices are not higher than normal prices.

The unique key for the object is the combination of ProductId and SiteId.

### TypeScript class
```typescript
interface ProductWebData {
  PriceGroupId?: string; // Guid?
  MetaDescription?: string;
  Keywords?: string;
  ProductId: number;
  SiteId: number;
  IsAvailable: boolean;
  IsWebEnabled: boolean;
  PriceWOTax?: number;
  Price?: number;
  IsPublished: boolean;
  VisibilityThreshold?: number;
  AvailabilityThredshold?: number;
  Label?: string;
  Description?: string;
  DiscountedPriceWOTax?: number;
  DiscountedPrice?: number;
  DiscountStartDate?: Date;
  DiscountEndDate?: Date;
  ThumbnailUrl?: string;
  IntermediateImageUrl?: string;
  SmallImageUrl?: string;
  LargeImageUrl?: string;
  MainImageUrl?: string;
  TinyImageUrl?: string;
  IsVisibleInSearch: boolean;
  CustomUrlPart?: string;
  SegmentationId?: number;
}
```