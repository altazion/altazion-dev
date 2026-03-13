## ProductWebData

This class represents the web-specific data of a product for an e-commerce site within the Altazion system.

Public properties:
- PriceGroupId: Identifier of the associated price group (optional).
- MetaDescription: Meta description used for SEO.
- Keywords: Keywords used for SEO.
- ProductId: Identifier of the associated product.
- SiteId: Identifier of the website.
- IsAvailable: Indicates if the product is available.
- IsWebEnabled: Indicates if the product is active on the web.
- PriceWOTax: Custom price excluding tax for this site (optional).
- Price: Custom price including tax for this site (optional).
- IsPublished: Indicates if the product is published on the site.
- VisibilityThreshold: Quantity threshold below which the product is no longer visible (optional).
- AvailabilityThredshold: Quantity threshold below which the product is no longer considered available (optional).
- Label: Customized label of the product for this site.
- Description: Customized HTML description of the product for this site.
- DiscountedPriceWOTax: Promotional price excluding tax for this site (optional).
- DiscountedPrice: Promotional price including tax for this site (optional).
- DiscountStartDate: Start date of the promotion on this site (optional).
- DiscountEndDate: End date of the promotion on this site (optional).
- ThumbnailUrl: URL of the thumbnail image.
- IntermediateImageUrl: URL of the intermediate size image.
- SmallImageUrl: URL of the small image.
- LargeImageUrl: URL of the large size image.
- MainImageUrl: URL of the main product image.
- TinyImageUrl: URL of the very small (tiny) image.
- IsVisibleInSearch: Indicates if the product is visible in search.
- CustomUrlPart: Custom part of the product URL for enhanced SEO.
- SegmentationId: Identifier of the main segmentation (optional).

The class includes detailed validation logic for prices and promotions to ensure data consistency related to custom prices and running promotions.

The GetKey method returns a unique key composed of the product ID and site ID.


### TypeScript class
```typescript
interface ProductWebData {
  PriceGroupId?: string; // GUID as string, optional
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
  DiscountStartDate?: string; // ISO date string
  DiscountEndDate?: string; // ISO date string
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