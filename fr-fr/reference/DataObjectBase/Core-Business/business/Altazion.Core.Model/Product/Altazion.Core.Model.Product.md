## Product

La classe Product représente un produit dans le système Altazion. Elle contient les propriétés suivantes :

- StorageType : le type de gestion des stocks pour ce produit.
- IsDeleted : indique si le produit est supprimé.
- IsShippable : indique si le produit est livrable.
- Id : identifiant unique du produit.
- Guid : identifiant unique global (GUID) du produit.
- PriceWOTax : prix hors taxes du produit.
- Price : prix toutes taxes comprises.
- VAT : montant de la TVA calculé (prix TTC moins prix HT).
- DiscountedPriceWOTax : prix promotionnel hors taxes, s'il y a une promotion.
- DiscountedPrice : prix promotionnel TTC, s'il y a une promotion.
- DiscountStartDate : date de début de la promotion.
- DiscountEndDate : date de fin de la promotion.
- CreationDate : date de création du produit.
- Label : libellé du produit.
- Sku : référence SKU du produit.
- FamilyId : identifiant de la famille du produit.
- Description : description détaillée du produit.
- SubFamilyId : identifiant optionnel de la sous-famille du produit.
- BrandId : identifiant de la marque.
- VatId : identifiant du taux de TVA applicable.
- ProductTypeId : identifiant du type de produit.
- UsableOnDigitalTools : indique si le produit est utilisable sur les outils digitaux.
- IsForInvoicableElements : indique si le produit peut être pré-facturé.
- IsMultiVariations : indique si le produit possède plusieurs variations.
- IsMainVariation : indique si ce produit est la variation principale.
- IsAssembly : indique si le produit est un assemblage de plusieurs produits.
- IsExternalVendorEnabled : indique si la vente via un vendeur externe est activée.
- IsProductComplete : indique si le produit est complet et valide.
- CurrentCreationStep : étape actuelle de création du produit.
- RecommendedPriceWOTax : prix conseillé HT.
- RecommendedPrice : prix conseillé TTC.
- MetaType : type de méta-produit (enum ProductMetaType).
- RiskScore : score de risque associé au produit.
- ParentProductId : identifiant du produit parent si applicable.
- IsHighDemand : indique si le produit est en forte demande.
- IsSubscription : indique si le produit est un abonnement.
- IsPackage : indique si le produit est un forfait.
- IsImported : indique si le produit est importé.
- AllowsDecimalQuantity : indique si le produit autorise les quantités décimales.
- ExternalCode : code externe pour intégration tierce.
- CompositionType : type de composition (ex : "ASB" pour assemblage).
- IsSimplified : indique si mode saisie simplifié.
- LockedByUserId : GUID de l'utilisateur verrouillant le produit pour édition.
- UnitId : identifiant de l'unité utilisée pour les quantités.
- QuantityPerUnit : quantité contenue par unité.
- StockManagementMode : mode de gestion du stock (enum StockManagementMode).
- PriceIndexId : identifiant de l'indice de prix.
- PriceIndexMultiplier : multiplicateur appliqué à l'indice de prix.
- PriceIndexFeesRate : taux de frais appliqué sur l'indice.

Cette classe contient également des méthodes pour convertir le type de méta-produit en chaîne et inversement, et la surcharge ToString() retourne une chaîne composée du SKU et du label.

Enums associées :
- ProductMetaType : définition des types de méta-produits (Products, Shipping, Discounts, etc.).
- StorageType : méthodes de gestion des stocks (NoStorage, FIFO, WeightedAverage, etc.).
- StockManagementMode : modes de gestion du stock unitaire (Undifferentiated, ByBatchNumber, ByUnitIdentifier).

### D�claration TypeScript
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