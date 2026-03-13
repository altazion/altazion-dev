## Product

Represents a product in the Altazion system with numerous characteristics and states.

Public properties:
- StorageType: Stock management type for this product.
- IsDeleted: Indicates if the product is deleted.
- IsShippable: Indicates if the product is shippable.
- Id: Unique product identifier.
- Guid: Globally unique identifier for the product.
- PriceWOTax: Price without tax.
- Price: Price including all taxes.
- VAT: VAT amount (calculated as Price - PriceWOTax).
- DiscountedPriceWOTax: Promotional price without tax, nullable.
- DiscountedPrice: Promotional price including tax, nullable.
- DiscountStartDate: Start date of the promotion, nullable.
- DiscountEndDate: End date of the promotion, nullable.
- CreationDate: Product creation date.
- Label: Product label.
- Sku: SKU reference.
- FamilyId: Product family identifier.
- Description: Product description.
- SubFamilyId: Optional sub-family identifier.
- BrandId: Brand identifier.
- VatId: VAT rate identifier.
- ProductTypeId: Product type identifier.
- UsableOnDigitalTools: Indicates if the product is usable on digital tools.
- IsForInvoicableElements: Indicates if product can be pre-invoiced.
- IsMultiVariations: Indicates if product has multiple variations.
- IsMainVariation: Indicates if this product is the main variation.
- IsAssembly: Indicates if the product is an assembly.
- IsExternalVendorEnabled: Indicates if external vendor sales are enabled.
- IsProductComplete: Indicates if the product is complete and valid.
- CurrentCreationStep: Current creation step of the product.
- RecommendedPriceWOTax: Recommended price excluding tax, nullable.
- RecommendedPrice: Recommended price including tax, nullable.
- MetaType: Meta product type (enum ProductMetaType).
- RiskScore: Risk score associated with the product.
- ParentProductId: Parent product ID if this product is an instance.
- IsHighDemand: Indicates if the product is in high demand.
- IsSubscription: Indicates if the product is a subscription.
- IsPackage: Indicates if the product is a package.
- IsImported: Indicates if the product is imported.
- AllowsDecimalQuantity: Indicates if decimal quantities are allowed.
- ExternalCode: External product code for third-party integrations.
- CompositionType: Type of product composition (e.g., assembly or bundle).
- IsSimplified: Indicates if simplified entry mode is used.
- LockedByUserId: ID of the user who locked the product for editing.
- UnitId: Unit of measurement ID.
- QuantityPerUnit: Quantity per unit if packaged.
- StockManagementMode: Stock management mode (enum StockManagementMode).
- PriceIndexId: Price index ID, nullable.
- PriceIndexMultiplier: Multiplier applied to price index, nullable.
- PriceIndexFeesRate: Fees rate applied on the index, nullable.
- ExternalDppUrl: URL of the external Product Digital Passport (DPP).

This class includes static methods to convert meta product types between string and enum and overrides ToString() to display SKU and label.

Relevant enums defined in the same namespace:
- ProductMetaType: Defines meta product types like Products, Shipping, Discounts, Services, etc.
- StorageType: Defines stock management methods (No stock, FIFO, Weighted average, etc.).
- StockManagementMode: Defines unit-level stock management modes (undifferentiated, by batch, by unit identifier).

### TypeScript class
```typescript
interface Product {
  StorageType: 'NoStorage' | 'NotPhysicalObject' | 'FIFO' | 'WeightedAverage';
  IsDeleted: boolean;
  IsShippable: boolean;
  Id: number;
  Guid: string; // UUID string
  PriceWOTax: number;
  Price: number;
  readonly VAT: number; // computed
  DiscountedPriceWOTax?: number | null;
  DiscountedPrice?: number | null;
  DiscountStartDate?: string | null; // ISO date string
  DiscountEndDate?: string | null; // ISO date string
  CreationDate: string; // ISO date string
  Label: string;
  Sku: string;
  FamilyId: number;
  Description: string;
  SubFamilyId?: number | null;
  BrandId: number;
  VatId: number;
  ProductTypeId: number;
  UsableOnDigitalTools: boolean;
  IsForInvoicableElements: boolean;
  IsMultiVariations: boolean;
  IsMainVariation: boolean;
  IsAssembly: boolean;
  IsExternalVendorEnabled: boolean;
  IsProductComplete: boolean;
  CurrentCreationStep: number;
  RecommendedPriceWOTax?: number | null;
  RecommendedPrice?: number | null;
  MetaType: 'Products' | 'Shipping' | 'Discounts' | 'Services' | 'Rents' | 'Bundles' | 'Financial' | 'Tax' | 'Licence';
  RiskScore: number;
  ParentProductId?: number | null;
  IsHighDemand: boolean;
  IsSubscription: boolean;
  IsPackage: boolean;
  IsImported: boolean;
  AllowsDecimalQuantity: boolean;
  ExternalCode: string;
  CompositionType: string;
  IsSimplified: boolean;
  LockedByUserId?: string | null; // UUID string
  UnitId?: number | null;
  QuantityPerUnit?: number | null;
  StockManagementMode: 0 | 1 | 2; // byte enum
  PriceIndexId?: string | null; // UUID string
  PriceIndexMultiplier?: number | null;
  PriceIndexFeesRate?: number | null;
  ExternalDppUrl: string;
}
```