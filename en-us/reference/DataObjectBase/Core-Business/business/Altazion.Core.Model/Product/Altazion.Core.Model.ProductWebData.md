## ProductWebData

The ProductWebData class represents the web-related data of a product within the Altazion solution. It contains properties describing availability, pricing (excl. tax and incl. tax), promotional discounts, web metadata, and URLs for various product images.

Public properties include:

- PriceGroupId: Identifier of the price group (nullable GUID).
- MetaDescription: Meta description used for SEO.
- Keywords: SEO keywords.
- ProductId: Unique product identifier (long).
- SiteId: Identifier of the related site (int).
- IsAvailable: Indicates if the product is available (bool).
- IsWebEnabled: Indicates if the product is enabled on the web (bool).
- PriceWOTax: Custom price excluding tax (nullable decimal).
- Price: Custom price including tax (nullable decimal).
- IsPublished: Indicates if the product is published on the website (bool).
- VisibilityThreshold: Visibility threshold (nullable decimal).
- AvailabilityThredshold: Availability threshold (nullable decimal).
- Label: Display label of the product.
- Description: HTML description of the product.
- DiscountedPriceWOTax: Promotional price excluding tax (nullable decimal).
- DiscountedPrice: Promotional price including tax (nullable decimal).
- DiscountStartDate: Promotion start date (nullable DateTime).
- DiscountEndDate: Promotion end date (nullable DateTime).
- ThumbnailUrl: URL to the product's thumbnail image.
- IntermediateImageUrl: URL to an intermediate-sized image.
- SmallImageUrl: URL to a small-sized image.
- LargeImageUrl: URL to a large-sized image.
- MainImageUrl: URL to the main image.
- TinyImageUrl: URL to the tiny-sized image.
- IsVisibleInSearch: Indicates if the product appears in search results (bool).
- CustomUrlPart: Custom part of the product URL.
- SegmentationId: Segmentation identifier (nullable decimal).

The class implements validation to ensure consistency, particularly between price without tax and price including tax, and for promotional data where all promotion-related fields must be populated and dates must be logical.

The FromDataRow method populates the instance from a database DataRow.

The unique key for this entity is the composite key of ProductId and SiteId.

### TypeScript class
```typescript
export interface ProductWebData {
  PriceGroupId?: string; // GUID nullable
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