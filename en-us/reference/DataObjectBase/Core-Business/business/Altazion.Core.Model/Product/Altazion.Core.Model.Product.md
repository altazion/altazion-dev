## Product

The Product class represents a product in the Altazion system. It includes the following public properties:

- StorageType: stock management type for the product.
- IsDeleted: indicates whether the product is deleted.
- IsShippable: indicates if the product can be shipped.
- Id: unique product identifier.
- Guid: globally unique identifier (GUID) for the product.
- PriceWOTax: product price without taxes.
- Price: product price including taxes.
- VAT: tax amount calculated as Price minus PriceWOTax.
- DiscountedPriceWOTax: promotional price without tax, if applicable.
- DiscountedPrice: promotional price including tax, if applicable.
- DiscountStartDate: promotion start date.
- DiscountEndDate: promotion end date.
- CreationDate: date the product was created.
- Label: product label.
- Sku: product SKU reference.
- FamilyId: identifier for product family.
- Description: detailed product description.
- SubFamilyId: optional sub-family identifier.
- BrandId: product brand identifier.
- VatId: applicable VAT rate identifier.
- ProductTypeId: product type identifier.
- UsableOnDigitalTools: indicates usability on digital tools.
- IsForInvoicableElements: indicates if pre-invoicing is possible.
- IsMultiVariations: indicates if the product has multiple variations.
- IsMainVariation: indicates if this product is the main variation.
- IsAssembly: indicates if the product is an assembly of multiple products.
- IsExternalVendorEnabled: indicates if external vendor sales are enabled.
- IsProductComplete: indicates if the product is complete and valid.
- CurrentCreationStep: current step in product creation.
- RecommendedPriceWOTax: recommended price without tax.
- RecommendedPrice: recommended price including tax.
- MetaType: meta-product type enumeration.
- RiskScore: risk score associated with the product.
- ParentProductId: identifier of parent product if this is an instance.
- IsHighDemand: indicates if the product is in high demand.
- IsSubscription: indicates if the product is a subscription.
- IsPackage: indicates if the product is a package of services.
- IsImported: indicates if the product is imported.
- AllowsDecimalQuantity: indicates if decimal quantities are allowed.
- ExternalCode: external product code for third-party integration.
- CompositionType: composition type (e.g., "ASB" for assembly).
- IsSimplified: indicates if simplified input mode is used.
- LockedByUserId: GUID of user locking the product for editing.
- UnitId: identifier for the unit of quantity measurement.
- QuantityPerUnit: quantity per unit when packaged.
- StockManagementMode: stock management mode enumeration.
- PriceIndexId: price index identifier.
- PriceIndexMultiplier: multiplier applied to the price index.
- PriceIndexFeesRate: fees rate applied on the index for margin calculation.

The class also provides methods to convert meta-product types to and from string representations. The ToString() method returns a string combining SKU and label.

Associated enums:
- ProductMetaType: defines meta-product types (Products, Shipping, Discounts, etc.).
- StorageType: stock management methods (NoStorage, FIFO, WeightedAverage, etc.).
- StockManagementMode: unit stock management modes (Undifferentiated, ByBatchNumber, ByUnitIdentifier).

### TypeScript class
```typescript
export interface Product {
  StorageType: StorageType;
  IsDeleted: boolean;
  IsShippable: boolean;
  Id: number;
  Guid: string;
  PriceWOTax: number;
  Price: number;
  readonly VAT: number;
  DiscountedPriceWOTax?: number | null;
  DiscountedPrice?: number | null;
  DiscountStartDate?: string | null;
  DiscountEndDate?: string | null;
  CreationDate: string;
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
  MetaType: ProductMetaType;
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
  LockedByUserId?: string | null;
  UnitId?: number | null;
  QuantityPerUnit?: number | null;
  StockManagementMode: StockManagementMode;
  PriceIndexId?: string | null;
  PriceIndexMultiplier?: number | null;
  PriceIndexFeesRate?: number | null;
}

export enum ProductMetaType {
  Products,
  Shipping,
  Discounts,
  Services,
  Rents,
  Bundles,
  Financial,
  Tax,
  Licence
}

export enum StorageType {
  NoStorage,
  NotPhysicalObject,
  FIFO,
  WeightedAverage
}

export enum StockManagementMode {
  Undifferentiated = 0,
  ByBatchNumber = 1,
  ByUnitIdentifier = 2
}
```