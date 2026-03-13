## Product

Représente un produit dans le système Altazion avec ses nombreuses caractéristiques et états.

Propriétés publiques :
- StorageType : Type de gestion des stocks pour ce produit.
- IsDeleted : Indique si le produit est supprimé.
- IsShippable : Indique si le produit est livrable.
- Id : Identifiant unique du produit.
- Guid : Identifiant global unique du produit.
- PriceWOTax : Prix hors taxes du produit.
- Price : Prix toutes taxes comprises.
- VAT : Montant de la TVA (calculé comme Price - PriceWOTax).
- DiscountedPriceWOTax : Prix promotionnel hors taxes, nullable.
- DiscountedPrice : Prix promotionnel TTC, nullable.
- DiscountStartDate : Date de début de la promotion, nullable.
- DiscountEndDate : Date de fin de la promotion, nullable.
- CreationDate : Date de création du produit.
- Label : Libellé du produit.
- Sku : Référence SKU.
- FamilyId : Identifiant de la famille produit.
- Description : Description du produit.
- SubFamilyId : Identifiant facultatif de la sous-famille.
- BrandId : Identifiant de la marque.
- VatId : Identifiant du taux de TVA.
- ProductTypeId : Identifiant du type de produit.
- UsableOnDigitalTools : Indique si le produit est utilisable sur des outils digitaux.
- IsForInvoicableElements : Indique si le produit peut être pré-facturé.
- IsMultiVariations : Indique si le produit a plusieurs variations.
- IsMainVariation : Indique si le produit est la variation principale.
- IsAssembly : Indique si le produit est un assemblage.
- IsExternalVendorEnabled : Indique si la vente via un vendeur externe est activée.
- IsProductComplete : Indique si le produit est complet et valide.
- CurrentCreationStep : Étape actuelle de création du produit.
- RecommendedPriceWOTax : Prix conseillé hors taxes, nullable.
- RecommendedPrice : Prix conseillé TTC, nullable.
- MetaType : Type de méta-produit (enum ProductMetaType).
- RiskScore : Score de risque associé.
- ParentProductId : Identifiant du produit parent s'il existe.
- IsHighDemand : Indique si le produit est en forte demande.
- IsSubscription : Indique si le produit est un abonnement.
- IsPackage : Indique si le produit est un forfait.
- IsImported : Indique si le produit est importé.
- AllowsDecimalQuantity : Indique si les quantités décimales sont autorisées.
- ExternalCode : Code externe pour intégrations tierces.
- CompositionType : Type de composition du produit.
- IsSimplified : Indique si le mode de saisie simplifié est utilisé.
- LockedByUserId : Identifiant de l'utilisateur verrouillant le produit.
- UnitId : Identifiant de l'unité de mesure.
- QuantityPerUnit : Quantité contenue par unité, nullable.
- StockManagementMode : Mode de gestion du stock (enum StockManagementMode).
- PriceIndexId : Identifiant de l'indice de prix, nullable.
- PriceIndexMultiplier : Multiplicateur sur l'indice de prix, nullable.
- PriceIndexFeesRate : Taux de frais sur l'indice, nullable.
- ExternalDppUrl : URL du Passeport Numérique Produit externe.

Cette classe comprend aussi des méthodes statiques pour convertir les types de méta-produit entre chaîne et enum, et surcharge la méthode ToString() pour afficher le SKU et le libellé.

Enums définis dans le même namespace importants :
- ProductMetaType : Définit les types de méta-produits (Produits, Livraison, Remises, Services, etc.).
- StorageType : Définit les méthodes de gestion des stocks (Aucun stock, FIFO, Moyenne pondérée, etc.).
- StockManagementMode : Définit les modes de gestion du stock unitaire (non différencié, par lot, par identifiant).

### D�claration TypeScript
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