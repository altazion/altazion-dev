## Product

La classe Product représente un produit dans le système Altazion avec diverses propriétés décrivant ses caractéristiques, son prix, et son statut.

- StorageType : type de gestion de stock (NoStorage, NotPhysicalObject, FIFO, WeightedAverage).
- IsDeleted : indique si le produit est supprimé.
- IsShippable : indique si le produit est livrable.
- Id : identifiant unique du produit.
- Guid : identifiant global unique.
- PriceWOTax : prix hors taxe.
- Price : prix TTC.
- VAT : taxe sur la valeur ajoutée calculée automatiquement comme Price - PriceWOTax.
- DiscountedPriceWOTax : prix hors taxe avec remise (optionnel).
- DiscountedPrice : prix TTC avec remise (optionnel).
- DiscountStartDate : date de début de la remise (optionnel).
- DiscountEndDate : date de fin de la remise (optionnel).
- CreationDate : date de création du produit.
- Label : libellé ou nom du produit.
- Sku : référence produit.
- FamilyId : identifiant de la famille du produit.
- Description : description détaillée du produit.
- SubFamilyId : identifiant optionnel de la sous-famille.
- BrandId : identifiant de la marque.
- VatId : identifiant de la TVA appliquée.
- ProductTypeId : type de produit.
- UsableOnDigitalTools : indique si le produit est utilisable sur des outils digitaux.
- IsForInvoicableElements : indique si le produit peut être utilisé pour des éléments facturables.
- IsMultiVariations : indique si le produit a plusieurs variations.
- IsMainVariation : indique si c'est la variation principale.
- IsAssembly : indique si le produit est un assemblage.
- IsExternalVendorEnabled : indique si un vendeur externe est activé.
- IsProductComplete : indique si le produit est complet.
- CurrentCreationStep : étape actuelle de création du produit.
- RecommendedPriceWOTax : prix recommandé hors taxe (optionnel).
- RecommendedPrice : prix recommandé TTC (optionnel).
- MetaType : type méta du produit (enum ProductMetaType: Products, Shipping, Discounts, etc.).
- RiskScore : score de risque associé.
- ParentProductId : identifiant du produit parent (optionnel).
- IsHighDemand : indique si le produit est à forte demande.

Constantes / Enumérations définies dans la même classe (namespace Altazion.Core.Model) :

- ProductMetaType : enum définissant les catégories méta du produit : Products, Shipping, Discounts, Services, Rents, Bundles, Financial, Tax, Licence.
- StorageType : enum décrivant le type de stockage : NoStorage, NotPhysicalObject, FIFO, WeightedAverage.

### D�claration TypeScript
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