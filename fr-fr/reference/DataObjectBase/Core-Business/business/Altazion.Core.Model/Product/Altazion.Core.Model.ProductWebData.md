## ProductWebData

La classe ProductWebData représente les données web associées à un produit dans le système Altazion. Elle contient diverses propriétés liées à la disponibilité, le prix personnalisé, les promotions, les images, et les métadonnées SEO pour un produit sur un site web spécifique.

Propriétés publiques :

- PriceGroupId : Identifiant du groupe de prix, optionnel (Guid?).
- MetaDescription : Description méta pour SEO (string).
- Keywords : Mots-clés pour SEO (string).
- ProductId : Identifiant unique du produit (long).
- SiteId : Identifiant du site web associé (int).
- IsAvailable : Indique si le produit est disponible (bool).
- IsWebEnabled : Indique si le produit est actif sur le web (bool).
- PriceWOTax : Prix hors taxe personnalisé, optionnel (decimal?).
- Price : Prix TTC personnalisé, optionnel (decimal?).
- IsPublished : Indique si le produit est publié (bool).
- VisibilityThreshold : Seuil de visibilité en quantité pour affichage (decimal?).
- AvailabilityThredshold : Seuil de disponibilité en quantité (decimal?).
- Label : Nom ou libellé du produit (string).
- Description : Description HTML du produit (string).
- DiscountedPriceWOTax : Prix promotionnel HT, optionnel (decimal?).
- DiscountedPrice : Prix promotionnel TTC, optionnel (decimal?).
- DiscountStartDate : Date début promotion (DateTime?).
- DiscountEndDate : Date fin promotion (DateTime?).
- ThumbnailUrl : URL vers une image miniature (string).
- IntermediateImageUrl : URL vers une image intermédiaire (string).
- SmallImageUrl : URL image petite (string).
- LargeImageUrl : URL image grande (string).
- MainImageUrl : URL image principale (string).
- TinyImageUrl : URL image très petite (string).
- IsVisibleInSearch : Indique si le produit est visible dans les résultats de recherche (bool).
- CustomUrlPart : Partie personnalisée de l'URL web du produit (string).
- SegmentationId : Identifiant de la segmentation applicable (decimal?).

La classe valide la cohérence des prix (HT et TTC), la cohérence des champs promotionnels (prix et dates) et la validité des dates de promotion (la date de fin doit être postérieure à la date de début). Elle signale aussi si le prix promotionnel est supérieur au prix normal.

La clé primaire composant l'identifiant unique est la concaténation de ProductId et SiteId.


### D�claration TypeScript
```typescript
interface ProductWebData {
  PriceGroupId?: string; // Guid?
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
  DiscountStartDate?: Date;
  DiscountEndDate?: Date;
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