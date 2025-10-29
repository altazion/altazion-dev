## Product

The Product class represents a product within the Altazion system with its various attributes.

Public properties:
- StorageType: Type of stock management for the product (e.g., FIFO, Weighted Average).
- IsDeleted: Indicates if the product is deleted.
- IsShippable: Indicates if the product can be shipped.
- Id: Unique numeric identifier of the product.
- Guid: Global unique identifier (GUID) of the product.
- PriceWOTax: Unit price without tax.
- Price: Unit price including all taxes.
- VAT: VAT amount calculated as Price minus PriceWOTax.
- DiscountedPriceWOTax: Discounted price without tax (optional).
- DiscountedPrice: Discounted price including tax (optional).
- DiscountStartDate: Optional start date for the discount.
- DiscountEndDate: Optional end date for the discount.
- CreationDate: Date the product was created.
- Label: Product label or name.
- Sku: Product reference or code.
- FamilyId: Identifier of the product family.
- SubFamilyId: Optional identifier of the product sub-family.
- BrandId: Identifier of the brand associated.
- VatId: Identifier of the VAT rate associated.
- ProductTypeId: Numeric type identifier of the product.
- UsableOnDigitalTools: Indicates if the product can be used on digital tools.
- IsForInvoicableElements: Indicates if the product is for invoicable elements.
- IsMultiVariations: Indicates if the product has multiple variations.
- IsMainVariation: Indicates if the product is the main variation.
- IsAssembly: Indicates if the product is an assembly.
- IsExternalVendorEnabled: Indicates if the product is available through an external vendor.
- IsProductComplete: Indicates if the product is complete.
- CurrentCreationStep: Current creation step (numeric).
- RecommendedPriceWOTax: Recommended price without tax (optional).
- RecommendedPrice: Recommended price including tax (optional).
- MetaType: Meta type of the product (ProductMetaType enum), denoting functional category (Products, Shipping, Discounts, Services, etc.).
- RiskScore: Risk score associated with the product.
- ParentProductId: Optional identifier of the parent product (for variations).
- IsHighDemand: Indicates if the product is in high demand.

Enumerations defined in the same namespace used by this class:
- ProductMetaType: Defines functional product types (Products, Shipping, Discounts, Services, Rents, Bundles, Financial, Tax, Licence).
- StorageType: Defines stock management method (NoStorage, NotPhysicalObject, FIFO, WeightedAverage).


### TypeScript class
```typescript
interface Product {
  StorageType: StorageType;
  IsDeleted: boolean;
  IsShippable: boolean;
  Id: number;
  Guid: string;
  PriceWOTax: number;
  Price: number;
  VAT: number; // Price - PriceWOTax
  DiscountedPriceWOTax?: number | null;
  DiscountedPrice?: number | null;
  DiscountStartDate?: Date | null;
  DiscountEndDate?: Date | null;
  CreationDate: Date;
  Label: string;
  Sku: string;
  FamilyId: number;
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