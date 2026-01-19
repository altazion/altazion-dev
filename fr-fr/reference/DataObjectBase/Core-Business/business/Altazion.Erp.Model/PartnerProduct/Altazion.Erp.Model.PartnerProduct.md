## PartnerProduct

Cette classe représente l'association d'un article avec un partenaire commercial (revendeur, marketplace, magasin). Elle contient les propriétés suivantes :

- ArticleGuid : identifiant unique de l'article.
- PartnerGuid : identifiant unique du partenaire.
- IsAvailable : indique si l'article est disponible chez ce partenaire.
- Url : URL de la page produit chez le partenaire (max 500 caractères).
- PartnerReference : référence produit utilisée par le partenaire (max 50 caractères).
- UnitPriceExcludingTax : prix unitaire hors taxes.
- UnitPriceIncludingTax : prix unitaire toutes taxes comprises.
- PromoUnitPriceExcludingTax : prix unitaire promotionnel hors taxes (optionnel).
- PromoUnitPriceIncludingTax : prix unitaire promotionnel toutes taxes comprises (optionnel).
- PromoStartDate : date de début de la promotion (optionnel).
- PromoEndDate : date de fin de la promotion (optionnel).
- AvailableQuantity : quantité disponible chez le partenaire (optionnel).
- ReservedQuantity : quantité réservée chez le partenaire (optionnel).
- SupplyQuantity : quantité en cours d'approvisionnement chez le partenaire (optionnel).
- IsArchived : indique si cette association est archivée.
- MaxDeliveryDelay : délai maximum de livraison en jours (optionnel).

Des méthodes permettent de vérifier si une promotion est active, d'obtenir le prix courant (TTC ou HT) et de calculer la quantité nette disponible chez le partenaire.

### D�claration TypeScript
```typescript
interface PartnerProduct {
  ArticleGuid: string; // GUID of the product
  PartnerGuid: string; // GUID of the partner
  IsAvailable: boolean;
  Url: string | null;
  PartnerReference: string | null;
  UnitPriceExcludingTax: number;
  UnitPriceIncludingTax: number;
  PromoUnitPriceExcludingTax?: number | null;
  PromoUnitPriceIncludingTax?: number | null;
  PromoStartDate?: string | null; // ISO string date
  PromoEndDate?: string | null; // ISO string date
  AvailableQuantity?: number | null;
  ReservedQuantity?: number | null;
  SupplyQuantity?: number | null;
  IsArchived: boolean;
  MaxDeliveryDelay?: number | null;
}
```