## ProductPrice

La classe ProductPrice représente une condition tarifaire pour un article dans une grille de tarifs. Elle permet de définir les prix normaux et promotionnels d'un article selon différentes grilles.

Propriétés publiques :

- Id (Guid) : Identifiant unique de la condition tarifaire.
- ProductGuid (Guid) : Identifiant unique de l'article associé.
- PricingGridGuid (Guid) : Identifiant unique de la grille de tarifs.
- VariantGuid (Guid?) : Identifiant unique de la variante de l'article (optionnel).
- PriceWOTax (decimal) : Prix unitaire hors taxes.
- Price (decimal) : Prix unitaire toutes taxes comprises.
- DiscountedPriceWOTax (decimal?) : Prix promotionnel hors taxes (optionnel).
- DiscountedPrice (decimal?) : Prix promotionnel toutes taxes comprises (optionnel).
- DiscountStartDate (DateTime?) : Date de début de la promotion (optionnel).
- DiscountEndDate (DateTime?) : Date de fin de la promotion (optionnel).

La classe inclut également des validations pour assurer que les identifiants ne sont pas vides, que les prix ne sont pas négatifs, et que la date de début de promotion n'est pas postérieure à la date de fin.

La méthode ToString retourne une description simplifiée de la condition tarifaire sous la forme "Article [ProductGuid] - [Price]".

### D�claration TypeScript
```typescript
interface ProductPrice {
  Id: string; // GUID
  ProductGuid: string; // GUID
  PricingGridGuid: string; // GUID
  VariantGuid?: string | null; // GUID optionnel
  PriceWOTax: number;
  Price: number;
  DiscountedPriceWOTax?: number | null;
  DiscountedPrice?: number | null;
  DiscountStartDate?: string | null; // ISO date string
  DiscountEndDate?: string | null; // ISO date string
}
```