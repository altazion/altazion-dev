## Product

The Product class represents a product in the Altazion system. It includes the following properties:

- StorageType: the stock management type for the product.
- IsDeleted: indicates if the product is deleted.
- IsShippable: indicates if the product is shippable.
- Id: unique identifier of the product.
- Guid: unique GUID of the product.
- PriceWOTax: price excluding tax.
- Price: price including tax.
- VAT: VAT amount calculated as Price minus PriceWOTax.
- DiscountedPriceWOTax: discounted price excluding tax, if applicable.
- DiscountedPrice: discounted price including tax, if applicable.
- DiscountStartDate: promotion start date.
- DiscountEndDate: promotion end date.
- CreationDate: creation date of the product.
- Label: product label/name.
- Sku: SKU reference code.
- FamilyId: product family identifier.
- Description: description of the product.
- SubFamilyId: sub-family identifier (optional).
- BrandId: brand identifier.
- VatId: VAT rate identifier.
- ProductTypeId: product type identifier.
- UsableOnDigitalTools: indicates if usable on digital tools.
- IsForInvoicableElements: indicates if the product can be pre-invoiced.
- IsMultiVariations: indicates if the product has multiple variations.
- IsMainVariation: indicates if this product is the main variation.
- IsAssembly: indicates if the product is an assembly.
- IsExternalVendorEnabled: indicates if external vendor sales are enabled.
- IsProductComplete: indicates if the product is complete and valid.
- CurrentCreationStep: current creation step.
- RecommendedPriceWOTax: recommended price excluding tax.
- RecommendedPrice: recommended price including tax.
- MetaType: meta product type (enum ProductMetaType).
- RiskScore: risk score attributed to the product.
- ParentProductId: parent product Id, if this product is derived from another.
- IsHighDemand: indicates if product is in high demand.
- IsSubscription: indicates if product is subscription based.
- IsPackage: indicates if product is a package.
- IsImported: indicates if product is imported.
- AllowsDecimalQuantity: indicates if decimal quantities are allowed.
- ExternalCode: external code for third-party integrations.
- CompositionType: composition type (e.g., "ASB" for assembly).
- IsSimplified: indicates if simplified data entry mode is used.
- LockedByUserId: Id of user who locked the product for editing.

This class also defines associated enums:

- ProductMetaType: different meta product types such as Products, Shipping, Discounts, Services, Rents, Bundles, Financial, Tax, Licence.
- StorageType: stock management methods including NoStorage, NotPhysicalObject, FIFO, WeightedAverage.

### TypeScript class
```typescript
interface Product {
  storageType: StorageType;
  isDeleted: boolean;
  isShippable: boolean;
  id: number;
  guid: string;
  priceWOTax: number;
  price: number;
  readonly vat: number;
  discountedPriceWOTax?: number | null;
  discountedPrice?: number | null;
  discountStartDate?: string | null;
  discountEndDate?: string | null;
  creationDate: string;
  label: string;
  sku: string;
  familyId: number;
  description: string;
  subFamilyId?: number | null;
  brandId: number;
  vatId: number;
  productTypeId: number;
  usableOnDigitalTools: boolean;
  isForInvoicableElements: boolean;
  isMultiVariations: boolean;
  isMainVariation: boolean;
  isAssembly: boolean;
  isExternalVendorEnabled: boolean;
  isProductComplete: boolean;
  currentCreationStep: number;
  recommendedPriceWOTax?: number | null;
  recommendedPrice?: number | null;
  metaType: ProductMetaType;
  riskScore: number;
  parentProductId?: number | null;
  isHighDemand: boolean;
  isSubscription: boolean;
  isPackage: boolean;
  isImported: boolean;
  allowsDecimalQuantity: boolean;
  externalCode: string;
  compositionType: string;
  isSimplified: boolean;
  lockedByUserId?: string | null;
}

enum ProductMetaType {
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

enum StorageType {
  NoStorage,
  NotPhysicalObject,
  FIFO,
  WeightedAverage
}
```