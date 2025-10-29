## Product

La classe Product représente un produit dans le système Altazion avec ses diverses caractéristiques.

Propriétés publiques :
- StorageType : Type de gestion du stockage du produit (par exemple FIFO, Moyenne pondérée).
- IsDeleted : Indique si le produit est supprimé.
- IsShippable : Indique si le produit peut être expédié.
- Id : Identifiant numérique unique du produit.
- Guid : Identifiant unique global (GUID) du produit.
- PriceWOTax : Prix unitaire hors taxes.
- Price : Prix unitaire toutes taxes comprises.
- VAT : Calcul de la TVA (dérivé de Price - PriceWOTax).
- DiscountedPriceWOTax : Prix promotionnel hors taxes (optionnel).
- DiscountedPrice : Prix promotionnel TTC (optionnel).
- DiscountStartDate : Date de début de la promotion (optionnelle).
- DiscountEndDate : Date de fin de la promotion (optionnelle).
- CreationDate : Date de création du produit.
- Label : Libellé ou nom du produit.
- Sku : Référence ou code produit.
- FamilyId : Identifiant de la famille du produit.
- SubFamilyId : Identifiant optionnel de la sous-famille du produit.
- BrandId : Identifiant de la marque associée.
- VatId : Identifiant du taux de TVA associé.
- ProductTypeId : Type de produit (identifiant numérique).
- UsableOnDigitalTools : Indique si le produit peut être utilisé sur des outils digitaux.
- IsForInvoicableElements : Indique si le produit est destiné aux éléments facturables.
- IsMultiVariations : Indique si le produit a plusieurs variations.
- IsMainVariation : Indique si le produit est la variation principale.
- IsAssembly : Indique si le produit est un assemblage.
- IsExternalVendorEnabled : Indique si le produit est disponible chez un fournisseur externe.
- IsProductComplete : Indique si le produit est complet.
- CurrentCreationStep : Étape actuelle de création du produit (numérique).
- RecommendedPriceWOTax : Prix conseillé hors taxes (optionnel).
- RecommendedPrice : Prix conseillé TTC (optionnel).
- MetaType : Type méta du produit (enum ProductMetaType), indiquant la catégorie fonctionnelle (produit, livraison, remise, service, etc.).
- RiskScore : Score de risque associé au produit.
- ParentProductId : Identifiant optionnel du produit parent (pour les variations).
- IsHighDemand : Indique si le produit est en forte demande.

Énumérations définies dans ce namespace utilisées par cette classe :
- ProductMetaType : définit les types fonctionnels des produits (Products, Shipping, Discounts, Services, Rents, Bundles, Financial, Tax, Licence).
- StorageType : définit la méthode de gestion de stockage (NoStorage, NotPhysicalObject, FIFO, WeightedAverage).


### D�claration TypeScript
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