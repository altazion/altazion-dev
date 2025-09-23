## Product

The Product class represents a product within the Altazion system with various properties describing its features, pricing, and status.

- StorageType: stock management type (NoStorage, NotPhysicalObject, FIFO, WeightedAverage).
- IsDeleted: indicates if the product is deleted.
- IsShippable: indicates if the product is shippable.
- Id: unique product identifier.
- Guid: global unique identifier.
- PriceWOTax: price without tax.
- Price: price including tax.
- VAT: value-added tax automatically calculated as Price minus PriceWOTax.
- DiscountedPriceWOTax: discounted price excluding tax (optional).
- DiscountedPrice: discounted price including tax (optional).
- DiscountStartDate: discount start date (optional).
- DiscountEndDate: discount end date (optional).
- CreationDate: product creation date.
- Label: product label or name.
- Sku: product reference code.
- FamilyId: product family identifier.
- Description: detailed description of the product.
- SubFamilyId: optional sub-family identifier.
- BrandId: brand identifier.
- VatId: VAT identifier applied.
- ProductTypeId: product type identifier.
- UsableOnDigitalTools: indicates if the product is usable on digital tools.
- IsForInvoicableElements: indicates if product applies to invoicable elements.
- IsMultiVariations: indicates if the product has multiple variations.
- IsMainVariation: indicates if this is the main variation.
- IsAssembly: indicates if the product is an assembly.
- IsExternalVendorEnabled: indicates if an external vendor is enabled.
- IsProductComplete: indicates if the product is complete.
- CurrentCreationStep: current product creation step.
- RecommendedPriceWOTax: recommended price excluding tax (optional).
- RecommendedPrice: recommended price including tax (optional).
- MetaType: product meta type (enum ProductMetaType: Products, Shipping, Discounts, etc.).
- RiskScore: risk score associated.
- ParentProductId: parent product identifier (optional).
- IsHighDemand: indicates if the product is in high demand.

Constants / Enumerations defined alongside in the same namespace (Altazion.Core.Model):

- ProductMetaType: enum defining meta product categories: Products, Shipping, Discounts, Services, Rents, Bundles, Financial, Tax, Licence.
- StorageType: enum describing storage type: NoStorage, NotPhysicalObject, FIFO, WeightedAverage.

### TypeScript class
```typescript
interface Product {
  StorageType: "NoStorage" | "NotPhysicalObject" | "FIFO" | "WeightedAverage";
  IsDeleted: boolean;
  IsShippable: boolean;
  Id: number;
  Guid: string; // UUID format
  PriceWOTax: number;
  Price: number;
  VAT: number; // calculated as Price - PriceWOTax
  DiscountedPriceWOTax?: number | null;
  DiscountedPrice?: number | null;
  DiscountStartDate?: string | null; // ISO date string
  DiscountEndDate?: string | null;  // ISO date string
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
  MetaType: "Products" | "Shipping" | "Discounts" | "Services" | "Rents" | "Bundles" | "Financial" | "Tax" | "Licence";
  RiskScore: number;
  ParentProductId?: number | null;
  IsHighDemand: boolean;
}

type ProductMetaType = "Products" | "Shipping" | "Discounts" | "Services" | "Rents" | "Bundles" | "Financial" | "Tax" | "Licence";

type StorageType = "NoStorage" | "NotPhysicalObject" | "FIFO" | "WeightedAverage";
```