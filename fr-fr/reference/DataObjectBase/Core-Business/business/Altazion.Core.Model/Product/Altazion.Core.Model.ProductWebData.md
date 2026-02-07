## ProductWebData

La classe ProductWebData représente les données spécifiques liées à un produit pour un site e-commerce dans le système Altazion.

Propriétés publiques :
- PriceGroupId : identifiant du groupe de prix associé (Guid nullable).
- MetaDescription : méta-description SEO.
- Keywords : mots-clés SEO.
- ProductId : identifiant du produit associé (long).
- SiteId : identifiant du site web (int).
- IsAvailable : indique si le produit est disponible (bool).
- IsWebEnabled : indique si le produit est actif sur le web (bool).
- PriceWOTax : prix hors taxes personnalisé pour ce site (decimal nullable).
- Price : prix TTC personnalisé pour ce site (decimal nullable).
- IsPublished : indique si le produit est publié sur le site (bool).
- VisibilityThreshold : seuil de quantité sous lequel le produit n'est plus visible (decimal nullable).
- AvailabilityThredshold : seuil de quantité sous lequel le produit n'est plus considéré comme disponible (decimal nullable).
- Label : libellé personnalisé du produit pour ce site (string).
- Description : description HTML personnalisée (string).
- DiscountedPriceWOTax : prix promotionnel HT personnalisé (decimal nullable).
- DiscountedPrice : prix promotionnel TTC personnalisé (decimal nullable).
- DiscountStartDate : date de début de la promotion sur ce site (DateTimeOffset nullable).
- DiscountEndDate : date de fin de la promotion sur ce site (DateTimeOffset nullable).
- ThumbnailUrl : URL de l'image miniature.
- IntermediateImageUrl : URL de l'image taille intermédiaire.
- SmallImageUrl : URL de l'image principale petite taille.
- LargeImageUrl : URL de l'image grande taille.
- MainImageUrl : URL de l'image principale.
- TinyImageUrl : URL de l'image très petite taille.
- IsVisibleInSearch : indique si le produit est visible dans les recherches (bool).
- CustomUrlPart : partie personnalisée de l'URL pour un meilleur référencement.
- SegmentationId : identifiant de segmentation principale (decimal nullable).

La classe comprend une méthode de validation des règles métiers notamment la cohérence entre prix HT et TTC, des champs de promotion et leurs dates.

La clé unique est composée de ProductId et SiteId.

### D�claration TypeScript
```typescript
interface ProductWebData {
  PriceGroupId?: string; // Guid nullable
  MetaDescription?: string;
  Keywords?: string;
  ProductId: number;
  SiteId: number;
  IsAvailable: boolean;
  IsWebEnabled: boolean;
  PriceWOTax?: number;
  Price?: number;
  IsPublished: boolean;
  VisibilityThreshold?: number;
  AvailabilityThredshold?: number;
  Label?: string;
  Description?: string;
  DiscountedPriceWOTax?: number;
  DiscountedPrice?: number;
  DiscountStartDate?: string; // DateTimeOffset nullable ISO 8601 string
  DiscountEndDate?: string;   // DateTimeOffset nullable ISO 8601 string
  ThumbnailUrl?: string;
  IntermediateImageUrl?: string;
  SmallImageUrl?: string;
  LargeImageUrl?: string;
  MainImageUrl?: string;
  TinyImageUrl?: string;
  IsVisibleInSearch: boolean;
  CustomUrlPart?: string;
  SegmentationId?: number;
}
```