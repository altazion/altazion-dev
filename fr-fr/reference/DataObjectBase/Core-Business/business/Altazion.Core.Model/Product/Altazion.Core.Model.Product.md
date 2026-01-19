## Product

La classe Product représente un produit dans le système Altazion. Elle contient les propriétés suivantes :

- StorageType : le type de gestion des stocks pour ce produit.
- IsDeleted : indique si le produit est supprimé.
- IsShippable : indique si le produit est livrable.
- Id : l'identifiant unique du produit.
- Guid : le GUID unique du produit.
- PriceWOTax : le prix hors taxes du produit.
- Price : le prix toutes taxes comprises du produit.
- VAT : le montant de la TVA (calculé comme la différence entre Price et PriceWOTax).
- DiscountedPriceWOTax : prix promotionnel hors taxes, si applicable.
- DiscountedPrice : prix promotionnel toutes taxes comprises, si applicable.
- DiscountStartDate : date de début de la promotion.
- DiscountEndDate : date de fin de la promotion.
- CreationDate : date de création du produit.
- Label : libellé du produit.
- Sku : référence SKU du produit.
- FamilyId : identifiant de la famille du produit.
- Description : description du produit.
- SubFamilyId : identifiant de la sous-famille du produit (optionnel).
- BrandId : identifiant de la marque du produit.
- VatId : identifiant du taux de TVA applicable.
- ProductTypeId : identifiant du type de produit.
- UsableOnDigitalTools : indique si le produit est utilisable sur les outils digitaux.
- IsForInvoicableElements : indique si le produit peut être pré-facturé.
- IsMultiVariations : indique si le produit possède plusieurs variations.
- IsMainVariation : indique si ce produit est la variation principale.
- IsAssembly : indique si le produit est un assemblage.
- IsExternalVendorEnabled : indique si la vente via un vendeur externe est activée.
- IsProductComplete : indique si le produit est complet et valide.
- CurrentCreationStep : étape actuelle de création du produit.
- RecommendedPriceWOTax : prix conseillé hors taxes.
- RecommendedPrice : prix conseillé toutes taxes comprises.
- MetaType : type de méta-produit (enum ProductMetaType).
- RiskScore : score de risque associé au produit.
- ParentProductId : identifiant du produit parent, si applicable.
- IsHighDemand : indique si le produit est en forte demande.
- IsSubscription : indique si le produit est un abonnement.
- IsPackage : indique si le produit est un forfait.
- IsImported : indique si le produit est importé.
- AllowsDecimalQuantity : indique si le produit autorise les quantités décimales.
- ExternalCode : code externe pour intégrations tierces.
- CompositionType : type de composition du produit (ex: "ASB" pour assemblage).
- IsSimplified : indique si le produit utilise un mode de saisie simplifié.
- LockedByUserId : identifiant de l'utilisateur ayant verrouillé le produit pour édition.

Cette classe comporte également deux enums associées décrivant des constantes :

- ProductMetaType : définit les différents types de méta-produits, tels que Products (produits physiques), Shipping (frais de livraison), Discounts (remises), Services, Rents, Bundles, Financial, Tax, Licence.
- StorageType : définit les méthodes de gestion des stocks : NoStorage, NotPhysicalObject, FIFO, WeightedAverage.

### D�claration TypeScript
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