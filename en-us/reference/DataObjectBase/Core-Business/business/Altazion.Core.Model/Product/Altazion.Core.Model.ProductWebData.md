## ProductWebData

The ProductWebData class represents the product-specific web data for an e-commerce site within the Altazion system.

Public properties:
- PriceGroupId: Identifier of the associated price group (nullable Guid).
- MetaDescription: SEO meta description.
- Keywords: SEO keywords.
- ProductId: Identifier of the associated product (long).
- SiteId: Identifier of the website (int).
- IsAvailable: Indicates if the product is available (bool).
- IsWebEnabled: Indicates if the product is active on the web (bool).
- PriceWOTax: Custom tax-exclusive price for this site (nullable decimal).
- Price: Custom tax-inclusive price for this site (nullable decimal).
- IsPublished: Indicates if the product is published on the site (bool).
- VisibilityThreshold: Quantity threshold below which the product is no longer visible (nullable decimal).
- AvailabilityThredshold: Quantity threshold below which the product is considered unavailable (nullable decimal).
- Label: Custom product label for this site (string).
- Description: Custom HTML description for this site (string).
- DiscountedPriceWOTax: Custom promotional price excluding tax (nullable decimal).
- DiscountedPrice: Custom promotional price including tax (nullable decimal).
- DiscountStartDate: Start date of the promotion on this site (nullable DateTimeOffset).
- DiscountEndDate: End date of the promotion on this site (nullable DateTimeOffset).
- ThumbnailUrl: URL of the thumbnail image.
- IntermediateImageUrl: URL of the intermediate sized image.
- SmallImageUrl: URL of the small main image.
- LargeImageUrl: URL of the large image.
- MainImageUrl: URL of the main product image.
- TinyImageUrl: URL of the tiny image.
- IsVisibleInSearch: Indicates if the product is searchable (bool).
- CustomUrlPart: Custom part of the product URL for improved SEO.
- SegmentationId: Main segmentation identifier (nullable decimal).

The class includes validation of business rules especially around price coherence (taxed and untaxed), promotion fields and dates.

The unique key is a combination of ProductId and SiteId.

### TypeScript class
```typescript
interface ProductWebData {
  PriceGroupId?: string; // Guid nullable
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
  DiscountStartDate?: string; // DateTimeOffset nullable ISO 8601 string
  DiscountEndDate?: string;   // DateTimeOffset nullable ISO 8601 string
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