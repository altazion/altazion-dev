## ProductWebData

Cette classe représente les données web spécifiques d'un produit pour un site e-commerce dans le système Altazion.

Propriétés publiques :
- PriceGroupId : Identifiant du groupe de prix associé (optionnel).
- MetaDescription : Méta-description utilisée pour le référencement SEO.
- Keywords : Mots-clés pour le référencement SEO.
- ProductId : Identifiant du produit associé.
- SiteId : Identifiant du site web.
- IsAvailable : Indique si le produit est disponible.
- IsWebEnabled : Indique si le produit est actif sur le web.
- PriceWOTax : Prix hors taxes personnalisé pour ce site (optionnel).
- Price : Prix toutes taxes comprises personnalisé pour ce site (optionnel).
- IsPublished : Indique si le produit est publié sur le site.
- VisibilityThreshold : Seuil de quantité en dessous duquel le produit n'est plus visible (optionnel).
- AvailabilityThredshold : Seuil de quantité en dessous duquel le produit n'est plus considéré comme disponible (optionnel).
- Label : Libellé personnalisé du produit pour ce site.
- Description : Description HTML personnalisée du produit pour ce site.
- DiscountedPriceWOTax : Prix promotionnel hors taxes pour ce site (optionnel).
- DiscountedPrice : Prix promotionnel toutes taxes comprises pour ce site (optionnel).
- DiscountStartDate : Date de début de la promotion sur ce site (optionnel).
- DiscountEndDate : Date de fin de la promotion sur ce site (optionnel).
- ThumbnailUrl : URL de l'image miniature (thumbnail).
- IntermediateImageUrl : URL de l'image de taille intermédiaire.
- SmallImageUrl : URL de l'image principale (small).
- LargeImageUrl : URL de l'image en grande taille.
- MainImageUrl : URL de l'image principale du produit.
- TinyImageUrl : URL de l'image très petite taille (tiny).
- IsVisibleInSearch : Indique si le produit est visible dans les recherches.
- CustomUrlPart : Partie personnalisée de l'URL du produit pour un référencement amélioré.
- SegmentationId : Identifiant de segmentation principale (optionnel).

La classe comprend une validation détaillée des prix et promotions pour garantir la cohérence des données relatives aux prix personnalisés et promotions.

La méthode GetKey retourne une clé unique composée de l'identifiant du produit et du site.


### D�claration TypeScript
```typescript
interface ProductWebData {
  PriceGroupId?: string; // GUID as string, optional
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
  DiscountStartDate?: string; // ISO date string
  DiscountEndDate?: string; // ISO date string
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