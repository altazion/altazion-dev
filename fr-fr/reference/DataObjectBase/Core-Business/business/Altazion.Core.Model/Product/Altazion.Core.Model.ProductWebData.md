## ProductWebData

Représente les données web spécifiques d'un produit pour un site e-commerce dans le système Altazion.

Propriétés publiques :
- PriceGroupId : Identifiant du groupe de prix associé au produit (nullable).
- MetaDescription : Méta-description utilisée pour le référencement SEO.
- Keywords : Mots-clés pour le référencement SEO.
- ProductId : Identifiant du produit associé.
- SiteId : Identifiant du site web.
- IsAvailable : Indique si le produit est disponible.
- IsWebEnabled : Indique si le produit est actif sur le web.
- PriceWOTax : Prix hors taxes personnalisé pour ce site (nullable).
- Price : Prix toutes taxes comprises personnalisé pour ce site (nullable).
- IsPublished : Indique si le produit est publié sur le site.
- VisibilityThreshold : Seuil de quantité en dessous duquel le produit n'est plus visible (nullable).
- AvailabilityThredshold : Seuil de quantité en dessous duquel le produit n'est plus considéré comme disponible (nullable).
- Label : Libellé personnalisé du produit pour ce site.
- Description : Description HTML personnalisée du produit pour ce site.
- DiscountedPriceWOTax : Prix promotionnel hors taxes pour ce site (nullable).
- DiscountedPrice : Prix promotionnel toutes taxes comprises pour ce site (nullable).
- DiscountStartDate : Date de début de la promotion pour ce site (nullable).
- DiscountEndDate : Date de fin de la promotion pour ce site (nullable).
- ThumbnailUrl : URL de l'image miniature (thumbnail).
- IntermediateImageUrl : URL de l'image de taille intermédiaire.
- SmallImageUrl : URL de l'image principale (small).
- LargeImageUrl : URL de l'image en grande taille.
- MainImageUrl : URL de l'image principale du produit.
- TinyImageUrl : URL de l'image très petite taille (tiny).
- IsVisibleInSearch : Indique si le produit est visible dans les recherches.
- CustomUrlPart : Partie personnalisée de l'URL du produit pour un référencement amélioré.
- SegmentationId : Identifiant de segmentation principale (nullable).

La classe réalise aussi des validations de cohérence sur les prix et les promotions, notamment vérifiant la présence symétrique des prix HT et TTC, la cohérence des dates de promotion, et la comparaison des prix promotionnels avec les prix standards.

### D�claration TypeScript
```typescript
interface ProductWebData {
  PriceGroupId?: string; // Guid nullable
  MetaDescription: string | null;
  Keywords: string | null;
  ProductId: number;
  SiteId: number;
  IsAvailable: boolean;
  IsWebEnabled: boolean;
  PriceWOTax?: number | null;
  Price?: number | null;
  IsPublished: boolean;
  VisibilityThreshold?: number | null;
  AvailabilityThredshold?: number | null;
  Label: string | null;
  Description: string | null;
  DiscountedPriceWOTax?: number | null;
  DiscountedPrice?: number | null;
  DiscountStartDate?: Date | null;
  DiscountEndDate?: Date | null;
  ThumbnailUrl: string | null;
  IntermediateImageUrl: string | null;
  SmallImageUrl: string | null;
  LargeImageUrl: string | null;
  MainImageUrl: string | null;
  TinyImageUrl: string | null;
  IsVisibleInSearch: boolean;
  CustomUrlPart: string | null;
  SegmentationId?: number | null;
}
```