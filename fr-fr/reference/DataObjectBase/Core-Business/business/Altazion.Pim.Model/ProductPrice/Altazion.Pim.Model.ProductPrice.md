## ProductPrice

La classe ProductPrice représente une condition tarifaire pour un article dans une grille de tarifs. Elle permet de définir les prix normaux et promotionnels d'un article selon différentes grilles. 

Propriétés publiques :
- Id : Identifiant unique de la condition tarifaire (Guid).
- ProductGuid : Identifiant unique de l'article (Guid).
- PricingGridGuid : Identifiant unique de la grille de tarifs (Guid).
- VariantGuid : Identifiant unique facultatif de la variante (Guid?).
- PriceWOTax : Prix unitaire hors taxes (decimal).
- Price : Prix unitaire toutes taxes comprises (decimal).
- DiscountedPriceWOTax : Prix promotionnel hors taxes optionnel (decimal?).
- DiscountedPrice : Prix promotionnel toutes taxes comprises optionnel (decimal?).
- DiscountStartDate : Date de début de la promotion optionnelle (DateTimeOffset?).
- DiscountEndDate : Date de fin de la promotion optionnelle (DateTimeOffset?).

La classe inclut aussi des méthodes pour initialiser ses propriétés à partir d'une ligne de données, valider les données (avec contraintes telles que non-nullité des identifiants et non-négativité des prix) et retournant une représentation textuelle de la condition tarifaire.

### D�claration TypeScript
```typescript
interface ProductPrice {
  Id: string; // GUID representing unique identifier of the pricing condition
  ProductGuid: string; // GUID representing unique identifier of the product
  PricingGridGuid: string; // GUID for pricing grid
  VariantGuid?: string | null; // Optional GUID for variant
  PriceWOTax: number; // price without tax
  Price: number; // price including tax
  DiscountedPriceWOTax?: number | null; // optional discounted price without tax
  DiscountedPrice?: number | null; // optional discounted price including tax
  DiscountStartDate?: string | null; // optional ISO date string for promo start
  DiscountEndDate?: string | null; // optional ISO date string for promo end
}
```