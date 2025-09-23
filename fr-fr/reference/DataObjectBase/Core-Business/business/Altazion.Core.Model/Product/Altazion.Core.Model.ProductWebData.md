## ProductWebData

La classe ProductWebData représente les données web associées à un produit dans la solution Altazion. Elle contient des propriétés décrivant la disponibilité, les prix (hors taxe et TTC), les promotions, des métadonnées web, ainsi que les URLs des images associées au produit.

Propriétés publiques :

- PriceGroupId : Identifiant du groupe de prix (GUID nullable).
- MetaDescription : Description méta pour le référencement web.
- Keywords : Mots-clés pour le référencement.
- ProductId : Identifiant unique du produit (long).
- SiteId : Identifiant du site lié au produit (int).
- IsAvailable : Indique si le produit est disponible (bool).
- IsWebEnabled : Indique si le produit est activé sur le web (bool).
- PriceWOTax : Prix hors taxe, prix personnalisé (decimal nullable).
- Price : Prix TTC, prix personnalisé (decimal nullable).
- IsPublished : Indique si le produit est publié sur le site web (bool).
- VisibilityThreshold : Seuil de visibilité (decimal nullable).
- AvailabilityThredshold : Seuil de disponibilité (decimal nullable).
- Label : Libellé du produit affiché.
- Description : Description HTML du produit.
- DiscountedPriceWOTax : Prix promotionnel hors taxe (decimal nullable).
- DiscountedPrice : Prix promotionnel TTC (decimal nullable).
- DiscountStartDate : Date de début de la promotion (DateTime nullable).
- DiscountEndDate : Date de fin de la promotion (DateTime nullable).
- ThumbnailUrl : URL de l'image miniature.
- IntermediateImageUrl : URL de l'image intermédiaire.
- SmallImageUrl : URL de la petite image.
- LargeImageUrl : URL de la grande image.
- MainImageUrl : URL de l'image principale.
- TinyImageUrl : URL de la toute petite image.
- IsVisibleInSearch : Indique si le produit est visible dans les résultats de recherche (bool).
- CustomUrlPart : Partie personnalisée de l'URL.
- SegmentationId : Identifiant de segmentation (decimal nullable).

La classe comprend également une validation des données pour s'assurer de la cohérence notamment entre les prix HT et TTC, et la gestion de promotions où toutes les informations doivent être saisies et cohérentes (dates, prix promotions).

La méthode FromDataRow permet de charger les données à partir d'une ligne d'une base de données.

La clé unique pour cette entité est la combinaison ProductId et SiteId.

### D�claration TypeScript
```typescript
export interface ProductWebData {
  PriceGroupId?: string; // GUID nullable
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